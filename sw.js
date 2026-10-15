/* SC03 Studio — legacy service-worker kill switch.
 *
 * Earlier single-edition deploys of SC03 Studio registered a service worker
 * at the site root (…/sw.js). The unified dual-edition site keeps its
 * workers inside ./material/ and ./ios/, so a stale root-scoped worker from
 * an old deploy would keep answering navigations with the previous cached
 * build forever — the classic "stuck on the old version" trap.
 *
 * Nothing on the new site registers this file. It exists purely for
 * browsers that already hold a registration at this URL: on their next
 * visit they re-fetch sw.js, find these different bytes, and swap it in as
 * an update. On activation it deletes exactly the caches that belonged to
 * the old root-scoped worker (Workbox suffixes cache names with the
 * registration scope, so "ends with my scope" matches only the legacy
 * caches — never the ./ios/ or ./material/ workers), unregisters itself,
 * and then navigates every open window back to the gateway.
 *
 * v1.4.3 ordering fix (Chromium 1248+): a Client.navigate() issued by a
 * worker that STILL CONTROLS the client never commits — the navigation
 * stalls and the old document context freezes on screen. Unregistering
 * FIRST releases the clients, after which the navigation commits cleanly
 * (verified against chromium-1248 headless: claim+navigate+unregister =
 * frozen page; unregister+navigate = correct reload, zero registrations). */

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    var scope = self.registration.scope;
    // 1. Wipe exactly the legacy root-scoped caches.
    try {
      var names = await caches.keys();
      await Promise.all(
        names
          .filter(function (name) { return name.endsWith(scope); })
          .map(function (name) { return caches.delete(name); })
      );
    } catch (err) { /* best effort */ }
    // 2. Release the registration BEFORE navigating the clients — see the
    //    header note: navigating while still controlling them stalls the
    //    navigation forever on current Chromium.
    try {
      await self.registration.unregister();
    } catch (err) { /* best effort */ }
    // 3. Send every open window back to the gateway, which routes each
    //    visitor to the right edition; the scoped workers take over from a
    //    clean slate.
    try {
      var windows = await self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true,
      });
      await Promise.all(windows.map(async function (w) {
        try {
          if (w.navigate) await w.navigate(scope);
        } catch (err) { /* client not navigable — fine */ }
      }));
    } catch (err) { /* best effort */ }
  })());
});
