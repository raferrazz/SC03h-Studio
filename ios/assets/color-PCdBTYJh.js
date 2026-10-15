/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){return e<0?-1:e===0?0:1}function Z(e,t,r){return(1-r)*e+r*t}function Et(e,t,r){return r<e?e:r>t?t:r}function it(e,t,r){return r<e?e:r>t?t:r}function xt(e){return e=e%360,e<0&&(e=e+360),e}function Ot(e){return e=e%360,e<0&&(e=e+360),e}function Lt(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function pt(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Nt=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],Pt=[95.047,100,108.883];function ct(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function Dt(e){const t=$(e[0]),r=$(e[1]),n=$(e[2]);return ct(t,r,n)}function zt(e){return e>>24&255}function lt(e){return e>>16&255}function ht(e){return e>>8&255}function ut(e){return e&255}function Tt(e,t,r){const n=Nt,a=n[0][0]*e+n[0][1]*t+n[0][2]*r,s=n[1][0]*e+n[1][1]*t+n[1][2]*r,o=n[2][0]*e+n[2][1]*t+n[2][2]*r,c=$(a),h=$(s),f=$(o);return ct(c,h,f)}function _t(e){const t=j(lt(e)),r=j(ht(e)),n=j(ut(e));return pt([t,r,n],At)}function Gt(e,t,r){const n=Pt,a=(e+16)/116,s=t/500+a,o=a-r/200,c=ot(s),h=ot(a),f=ot(o),l=c*n[0],d=h*n[1],M=f*n[2];return Tt(l,d,M)}function St(e){const t=j(lt(e)),r=j(ht(e)),n=j(ut(e)),a=At,s=a[0][0]*t+a[0][1]*r+a[0][2]*n,o=a[1][0]*t+a[1][1]*r+a[1][2]*n,c=a[2][0]*t+a[2][1]*r+a[2][2]*n,h=Pt,f=s/h[0],l=o/h[1],d=c/h[2],M=tt(f),u=tt(l),P=tt(d),g=116*u-16,b=500*(M-u),A=200*(u-P);return[g,b,A]}function qt(e){const t=H(e),r=$(t);return ct(r,r,r)}function wt(e){const t=_t(e)[1];return 116*tt(t/100)-16}function H(e){return 100*ot((e+16)/116)}function Mt(e){return tt(e/100)*116-16}function j(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function $(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,Et(0,255,Math.round(r*255))}function Ut(){return Pt}function tt(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function ot(e){const t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static make(t=Ut(),r=200/Math.PI*H(50)/100,n=50,a=2,s=!1){const o=t,c=o[0]*.401288+o[1]*.650173+o[2]*-.051461,h=o[0]*-.250268+o[1]*1.204414+o[2]*.045854,f=o[0]*-.002079+o[1]*.048952+o[2]*.953127,l=.8+a/10,d=l>=.9?Z(.59,.69,(l-.9)*10):Z(.525,.59,(l-.8)*10);let M=s?1:l*(1-1/3.6*Math.exp((-r-42)/92));M=M>1?1:M<0?0:M;const u=l,P=[M*(100/c)+1-M,M*(100/h)+1-M,M*(100/f)+1-M],g=1/(5*r+1),b=g*g*g*g,A=1-b,m=b*r+.1*A*A*Math.cbrt(5*r),y=H(n)/t[1],T=1.48+Math.sqrt(y),w=.725/Math.pow(y,.2),C=w,k=[Math.pow(m*P[0]*c/100,.42),Math.pow(m*P[1]*h/100,.42),Math.pow(m*P[2]*f/100,.42)],x=[400*k[0]/(k[0]+27.13),400*k[1]/(k[1]+27.13),400*k[2]/(k[2]+27.13)],B=(2*x[0]+x[1]+.05*x[2])*w;return new Y(y,B,w,C,d,u,P,m,Math.pow(m,.25),T)}constructor(t,r,n,a,s,o,c,h,f,l){this.n=t,this.aw=r,this.nbb=n,this.ncb=a,this.c=s,this.nc=o,this.rgbD=c,this.fl=h,this.fLRoot=f,this.z=l}}Y.DEFAULT=Y.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,r,n,a,s,o,c,h,f){this.hue=t,this.chroma=r,this.j=n,this.q=a,this.m=s,this.s=o,this.jstar=c,this.astar=h,this.bstar=f}distance(t){const r=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,s=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(s,.63)}static fromInt(t){return q.fromIntInViewingConditions(t,Y.DEFAULT)}static fromIntInViewingConditions(t,r){const n=(t&16711680)>>16,a=(t&65280)>>8,s=t&255,o=j(n),c=j(a),h=j(s),f=.41233895*o+.35762064*c+.18051042*h,l=.2126*o+.7152*c+.0722*h,d=.01932141*o+.11916382*c+.95034478*h,M=.401288*f+.650173*l-.051461*d,u=-.250268*f+1.204414*l+.045854*d,P=-.002079*f+.048952*l+.953127*d,g=r.rgbD[0]*M,b=r.rgbD[1]*u,A=r.rgbD[2]*P,m=Math.pow(r.fl*Math.abs(g)/100,.42),y=Math.pow(r.fl*Math.abs(b)/100,.42),T=Math.pow(r.fl*Math.abs(A)/100,.42),w=G(g)*400*m/(m+27.13),C=G(b)*400*y/(y+27.13),k=G(A)*400*T/(T+27.13),x=(11*w+-12*C+k)/11,B=(w+C-2*k)/9,R=(20*w+20*C+21*k)/20,L=(40*w+20*C+k)/20,_=Math.atan2(B,x)*180/Math.PI,E=_<0?_+360:_>=360?_-360:_,J=E*Math.PI/180,rt=L*r.nbb,v=100*Math.pow(rt/r.aw,r.c*r.z),nt=4/r.c*Math.sqrt(v/100)*(r.aw+4)*r.fLRoot,ft=E<20.14?E+360:E,dt=.25*(Math.cos(ft*Math.PI/180+2)+3.8),gt=5e4/13*dt*r.nc*r.ncb*Math.sqrt(x*x+B*B)/(R+.305),at=Math.pow(gt,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),kt=at*Math.sqrt(v/100),bt=kt*r.fLRoot,Rt=50*Math.sqrt(at*r.c/(r.aw+4)),Bt=(1+100*.007)*v/(1+.007*v),It=1/.0228*Math.log(1+.0228*bt),Ct=It*Math.cos(J),Ft=It*Math.sin(J);return new q(E,kt,v,nt,bt,Rt,Bt,Ct,Ft)}static fromJch(t,r,n){return q.fromJchInViewingConditions(t,r,n,Y.DEFAULT)}static fromJchInViewingConditions(t,r,n,a){const s=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,o=r*a.fLRoot,c=r/Math.sqrt(t/100),h=50*Math.sqrt(c*a.c/(a.aw+4)),f=n*Math.PI/180,l=(1+100*.007)*t/(1+.007*t),d=1/.0228*Math.log(1+.0228*o),M=d*Math.cos(f),u=d*Math.sin(f);return new q(n,r,t,s,o,h,l,M,u)}static fromUcs(t,r,n){return q.fromUcsInViewingConditions(t,r,n,Y.DEFAULT)}static fromUcsInViewingConditions(t,r,n,a){const s=r,o=n,c=Math.sqrt(s*s+o*o),f=(Math.exp(c*.0228)-1)/.0228/a.fLRoot;let l=Math.atan2(o,s)*(180/Math.PI);l<0&&(l+=360);const d=t/(1-(t-100)*.007);return q.fromJchInViewingConditions(d,f,l,a)}toInt(){return this.viewed(Y.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=s*(5e4/13)*t.nc*t.ncb,h=o/t.nbb,f=Math.sin(a),l=Math.cos(a),d=23*(h+.305)*n/(23*c+11*n*l+108*n*f),M=d*l,u=d*f,P=(460*h+451*M+288*u)/1403,g=(460*h-891*M-261*u)/1403,b=(460*h-220*M-6300*u)/1403,A=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),m=G(P)*(100/t.fl)*Math.pow(A,1/.42),y=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),T=G(g)*(100/t.fl)*Math.pow(y,1/.42),w=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),C=G(b)*(100/t.fl)*Math.pow(w,1/.42),k=m/t.rgbD[0],x=T/t.rgbD[1],B=C/t.rgbD[2],R=1.86206786*k-1.01125463*x+.14918677*B,L=.38752654*k+.62144744*x-.00897398*B,U=-.0158415*k-.03412294*x+1.04996444*B;return Tt(R,L,U)}static fromXyzInViewingConditions(t,r,n,a){const s=.401288*t+.650173*r-.051461*n,o=-.250268*t+1.204414*r+.045854*n,c=-.002079*t+.048952*r+.953127*n,h=a.rgbD[0]*s,f=a.rgbD[1]*o,l=a.rgbD[2]*c,d=Math.pow(a.fl*Math.abs(h)/100,.42),M=Math.pow(a.fl*Math.abs(f)/100,.42),u=Math.pow(a.fl*Math.abs(l)/100,.42),P=G(h)*400*d/(d+27.13),g=G(f)*400*M/(M+27.13),b=G(l)*400*u/(u+27.13),A=(11*P+-12*g+b)/11,m=(P+g-2*b)/9,y=(20*P+20*g+21*b)/20,T=(40*P+20*g+b)/20,C=Math.atan2(m,A)*180/Math.PI,k=C<0?C+360:C>=360?C-360:C,x=k*Math.PI/180,B=T*a.nbb,R=100*Math.pow(B/a.aw,a.c*a.z),L=4/a.c*Math.sqrt(R/100)*(a.aw+4)*a.fLRoot,U=k<20.14?k+360:k,_=1/4*(Math.cos(U*Math.PI/180+2)+3.8),J=5e4/13*_*a.nc*a.ncb*Math.sqrt(A*A+m*m)/(y+.305),rt=Math.pow(J,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),v=rt*Math.sqrt(R/100),nt=v*a.fLRoot,ft=50*Math.sqrt(rt*a.c/(a.aw+4)),dt=(1+100*.007)*R/(1+.007*R),mt=Math.log(1+.0228*nt)/.0228,gt=mt*Math.cos(x),at=mt*Math.sin(x);return new q(k,v,R,L,nt,ft,dt,gt,at)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=s*(5e4/13)*t.nc*t.ncb,h=o/t.nbb,f=Math.sin(a),l=Math.cos(a),d=23*(h+.305)*n/(23*c+11*n*l+108*n*f),M=d*l,u=d*f,P=(460*h+451*M+288*u)/1403,g=(460*h-891*M-261*u)/1403,b=(460*h-220*M-6300*u)/1403,A=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),m=G(P)*(100/t.fl)*Math.pow(A,1/.42),y=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),T=G(g)*(100/t.fl)*Math.pow(y,1/.42),w=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),C=G(b)*(100/t.fl)*Math.pow(w,1/.42),k=m/t.rgbD[0],x=T/t.rgbD[1],B=C/t.rgbD[2],R=1.86206786*k-1.01125463*x+.14918677*B,L=.38752654*k+.62144744*x-.00897398*B,U=-.0158415*k-.03412294*x+1.04996444*B;return[R,L,U]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return G(t)*400*r/(r+27.13)}static hueOf(t){const r=pt(t,I.SCALED_DISCOUNT_FROM_LINRGB),n=I.chromaticAdaptation(r[0]),a=I.chromaticAdaptation(r[1]),s=I.chromaticAdaptation(r[2]),o=(11*n+-12*a+s)/11,c=(n+a-2*s)/9;return Math.atan2(c,o)}static areInCyclicOrder(t,r,n){const a=I.sanitizeRadians(r-t),s=I.sanitizeRadians(n-t);return a<s}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,a){const s=I.intercept(t[a],r,n[a]);return I.lerpPoint(t,s,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const n=I.Y_FROM_LINRGB[0],a=I.Y_FROM_LINRGB[1],s=I.Y_FROM_LINRGB[2],o=r%4<=1?0:100,c=r%2===0?0:100;if(r<4){const h=o,f=c,l=(t-h*a-f*s)/n;return I.isBounded(l)?[l,h,f]:[-1,-1,-1]}else if(r<8){const h=o,f=c,l=(t-f*n-h*s)/a;return I.isBounded(l)?[f,l,h]:[-1,-1,-1]}else{const h=o,f=c,l=(t-h*n-f*a)/s;return I.isBounded(l)?[h,f,l]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],a=n,s=0,o=0,c=!1,h=!0;for(let f=0;f<12;f++){const l=I.nthVertex(t,f);if(l[0]<0)continue;const d=I.hueOf(l);if(!c){n=l,a=l,s=d,o=d,c=!0;continue}(h||I.areInCyclicOrder(s,d,o))&&(h=!1,I.areInCyclicOrder(s,r,d)?(a=l,o=d):(n=l,s=d))}return[n,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const n=I.bisectToSegment(t,r);let a=n[0],s=I.hueOf(a),o=n[1];for(let c=0;c<3;c++)if(a[c]!==o[c]){let h=-1,f=255;a[c]<o[c]?(h=I.criticalPlaneBelow(I.trueDelinearized(a[c])),f=I.criticalPlaneAbove(I.trueDelinearized(o[c]))):(h=I.criticalPlaneAbove(I.trueDelinearized(a[c])),f=I.criticalPlaneBelow(I.trueDelinearized(o[c])));for(let l=0;l<8&&!(Math.abs(f-h)<=1);l++){const d=Math.floor((h+f)/2),M=I.CRITICAL_PLANES[d],u=I.setCoordinate(a,M,o,c),P=I.hueOf(u);I.areInCyclicOrder(s,r,P)?(o=u,f=d):(a=u,s=P,h=d)}}return I.midpoint(a,o)}static inverseChromaticAdaptation(t){const r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return G(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let a=Math.sqrt(n)*11;const s=Y.DEFAULT,o=1/Math.pow(1.64-Math.pow(.29,s.n),.73),h=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,f=Math.sin(t),l=Math.cos(t);for(let d=0;d<5;d++){const M=a/100,u=r===0||a===0?0:r/Math.sqrt(M),P=Math.pow(u*o,1/.9),b=s.aw*Math.pow(M,1/s.c/s.z)/s.nbb,A=23*(b+.305)*P/(23*h+11*P*l+108*P*f),m=A*l,y=A*f,T=(460*b+451*m+288*y)/1403,w=(460*b-891*m-261*y)/1403,C=(460*b-220*m-6300*y)/1403,k=I.inverseChromaticAdaptation(T),x=I.inverseChromaticAdaptation(w),B=I.inverseChromaticAdaptation(C),R=pt([k,x,B],I.LINRGB_FROM_SCALED_DISCOUNT);if(R[0]<0||R[1]<0||R[2]<0)return 0;const L=I.Y_FROM_LINRGB[0],U=I.Y_FROM_LINRGB[1],_=I.Y_FROM_LINRGB[2],E=L*R[0]+U*R[1]+_*R[2];if(E<=0)return 0;if(d===4||Math.abs(E-n)<.002)return R[0]>100.01||R[1]>100.01||R[2]>100.01?0:Dt(R);a=a-(E-n)*a/(2*E)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return qt(n);t=Ot(t);const a=t/180*Math.PI,s=H(n),o=I.findResultByJ(a,r,s);if(o!==0)return o;const c=I.bisectToLimit(s,a);return Dt(c)}static solveToCam(t,r,n){return q.fromInt(I.solveToInt(t,r,n))}}I.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];I.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];I.Y_FROM_LINRGB=[.2126,.7152,.0722];I.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static from(t,r,n){return new X(I.solveToInt(t,r,n))}static fromInt(t){return new X(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(I.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(I.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(I.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=q.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=wt(t),this.argb=t}setInternalState(t){const r=q.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=wt(t),this.argb=t}inViewingConditions(t){const n=q.fromInt(this.toInt()).xyzInViewingConditions(t),a=q.fromXyzInViewingConditions(n[0],n[1],n[2],Y.make());return X.from(a.hue,a.chroma,Mt(n[1]))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static ratioOfTones(t,r){return t=it(0,100,t),r=it(0,100,r),O.ratioOfYs(H(t),H(r))}static ratioOfYs(t,r){const n=t>r?t:r,a=n===r?t:r;return(n+5)/(a+5)}static lighter(t,r){if(t<0||t>100)return-1;const n=H(t),a=r*(n+5)-5,s=O.ratioOfYs(a,n),o=Math.abs(s-r);if(s<r&&o>.04)return-1;const c=Mt(a)+.4;return c<0||c>100?-1:c}static darker(t,r){if(t<0||t>100)return-1;const n=H(t),a=(n+5)/r-5,s=O.ratioOfYs(n,a),o=Math.abs(s-r);if(s<r&&o>.04)return-1;const c=Mt(a)-.4;return c<0||c>100?-1:c}static lighterUnsafe(t,r){const n=O.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){const n=O.darker(t,r);return n<0?0:n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return r&&n&&a}static fixIfDisliked(t){return yt.isDisliked(t)?X.from(t.hue,t.chroma,70):t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{static fromPalette(t){return new p(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,a,s,o,c,h){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=a,this.background=s,this.secondBackground=o,this.contrastCurve=c,this.toneDeltaPair=h,this.hctCache=new Map,!s&&o)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!s&&c)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(s&&!c)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const n=this.getTone(t),a=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(t),a=n.roleA,s=n.roleB,o=n.delta,c=n.polarity,h=n.stayTogether,l=this.background(t).getTone(t),d=c==="nearer"||c==="lighter"&&!t.isDark||c==="darker"&&t.isDark,M=d?a:s,u=d?s:a,P=this.name===M.name,g=t.isDark?1:-1,b=M.contrastCurve.get(t.contrastLevel),A=u.contrastCurve.get(t.contrastLevel),m=M.tone(t);let y=O.ratioOfTones(l,m)>=b?m:p.foregroundTone(l,b);const T=u.tone(t);let w=O.ratioOfTones(l,T)>=A?T:p.foregroundTone(l,A);return r&&(y=p.foregroundTone(l,b),w=p.foregroundTone(l,A)),(w-y)*g>=o||(w=it(0,100,y+o*g),(w-y)*g>=o||(y=it(0,100,w-o*g))),50<=y&&y<60?g>0?(y=60,w=Math.max(w,y+o*g)):(y=49,w=Math.min(w,y+o*g)):50<=w&&w<60&&(h?g>0?(y=60,w=Math.max(w,y+o*g)):(y=49,w=Math.min(w,y+o*g)):g>0?w=60:w=49),P?y:w}else{let n=this.tone(t);if(this.background==null)return n;const a=this.background(t).getTone(t),s=this.contrastCurve.get(t.contrastLevel);if(O.ratioOfTones(a,n)>=s||(n=p.foregroundTone(a,s)),r&&(n=p.foregroundTone(a,s)),this.isBackground&&50<=n&&n<60&&(O.ratioOfTones(49,a)>=s?n=49:n=60),this.secondBackground){const[o,c]=[this.background,this.secondBackground],[h,f]=[o(t).getTone(t),c(t).getTone(t)],[l,d]=[Math.max(h,f),Math.min(h,f)];if(O.ratioOfTones(l,n)>=s&&O.ratioOfTones(d,n)>=s)return n;const M=O.lighter(l,s),u=O.darker(d,s),P=[];return M!==-1&&P.push(M),u!==-1&&P.push(u),p.tonePrefersLightForeground(h)||p.tonePrefersLightForeground(f)?M<0?100:M:P.length===1?P[0]:u<0?0:u}return n}}static foregroundTone(t,r){const n=O.lighterUnsafe(t,r),a=O.darkerUnsafe(t,r),s=O.ratioOfTones(n,t),o=O.ratioOfTones(a,t);if(p.tonePrefersLightForeground(t)){const h=Math.abs(s-o)<.1&&s<r&&o<r;return s>=r||s>=o||h?n:a}else return o>=r||o>=s?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return p.tonePrefersLightForeground(t)&&!p.toneAllowsLightForeground(t)?49:t}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t,r,n,a){this.low=t,this.normal=r,this.medium=n,this.high=a}get(t){return t<=-1?this.low:t<0?Z(this.low,this.normal,(t- -1)/1):t<.5?Z(this.normal,this.medium,(t-0)/.5):t<1?Z(this.medium,this.high,(t-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,r,n,a,s){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=s}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(et||(et={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){return e.variant===et.FIDELITY||e.variant===et.CONTENT}function F(e){return e.variant===et.MONOCHROME}function Vt(e,t,r,n){let a=r,s=X.from(e,t,r);if(s.chroma<t){let o=s.chroma;for(;s.chroma<t;){a+=n?-1:1;const c=X.from(e,t,a);if(o>c.chroma||Math.abs(c.chroma-t)<.4)break;const h=Math.abs(c.chroma-t),f=Math.abs(s.chroma-t);h<f&&(s=c),o=Math.max(o,c.chroma)}}return a}class i{static highestSurface(t){return t.isDark?i.surfaceBright:i.surfaceDim}}i.contentAccentToneDelta=15;i.primaryPaletteKeyColor=p.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});i.secondaryPaletteKeyColor=p.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});i.tertiaryPaletteKeyColor=p.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});i.neutralPaletteKeyColor=p.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});i.neutralVariantPaletteKeyColor=p.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});i.background=p.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});i.onBackground=p.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>i.background,contrastCurve:new D(3,3,4.5,7)});i.surface=p.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});i.surfaceDim=p.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new D(87,87,80,75).get(e.contrastLevel),isBackground:!0});i.surfaceBright=p.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new D(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});i.surfaceContainerLowest=p.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new D(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});i.surfaceContainerLow=p.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new D(10,10,11,12).get(e.contrastLevel):new D(96,96,96,95).get(e.contrastLevel),isBackground:!0});i.surfaceContainer=p.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new D(12,12,16,20).get(e.contrastLevel):new D(94,94,92,90).get(e.contrastLevel),isBackground:!0});i.surfaceContainerHigh=p.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new D(17,17,21,25).get(e.contrastLevel):new D(92,92,88,85).get(e.contrastLevel),isBackground:!0});i.surfaceContainerHighest=p.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new D(22,22,26,30).get(e.contrastLevel):new D(90,90,84,80).get(e.contrastLevel),isBackground:!0});i.onSurface=p.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>i.highestSurface(e),contrastCurve:new D(4.5,7,11,21)});i.surfaceVariant=p.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});i.onSurfaceVariant=p.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,11)});i.inverseSurface=p.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});i.inverseOnSurface=p.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>i.inverseSurface,contrastCurve:new D(4.5,7,11,21)});i.outline=p.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>i.highestSurface(e),contrastCurve:new D(1.5,3,4.5,7)});i.outlineVariant=p.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5)});i.shadow=p.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});i.scrim=p.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});i.surfaceTint=p.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});i.primary=p.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>F(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,7),toneDeltaPair:e=>new S(i.primaryContainer,i.primary,10,"nearer",!1)});i.onPrimary=p.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>F(e)?e.isDark?10:90:e.isDark?20:100,background:e=>i.primary,contrastCurve:new D(4.5,7,11,21)});i.primaryContainer=p.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>K(e)?e.sourceColorHct.tone:F(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.primaryContainer,i.primary,10,"nearer",!1)});i.onPrimaryContainer=p.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>K(e)?p.foregroundTone(i.primaryContainer.tone(e),4.5):F(e)?e.isDark?0:100:e.isDark?90:30,background:e=>i.primaryContainer,contrastCurve:new D(3,4.5,7,11)});i.inversePrimary=p.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>i.inverseSurface,contrastCurve:new D(3,4.5,7,7)});i.secondary=p.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,7),toneDeltaPair:e=>new S(i.secondaryContainer,i.secondary,10,"nearer",!1)});i.onSecondary=p.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>F(e)?e.isDark?10:100:e.isDark?20:100,background:e=>i.secondary,contrastCurve:new D(4.5,7,11,21)});i.secondaryContainer=p.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;return F(e)?e.isDark?30:85:K(e)?Vt(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.secondaryContainer,i.secondary,10,"nearer",!1)});i.onSecondaryContainer=p.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>F(e)?e.isDark?90:10:K(e)?p.foregroundTone(i.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>i.secondaryContainer,contrastCurve:new D(3,4.5,7,11)});i.tertiary=p.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,7),toneDeltaPair:e=>new S(i.tertiaryContainer,i.tertiary,10,"nearer",!1)});i.onTertiary=p.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?10:90:e.isDark?20:100,background:e=>i.tertiary,contrastCurve:new D(4.5,7,11,21)});i.tertiaryContainer=p.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(F(e))return e.isDark?60:49;if(!K(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return yt.fixIfDisliked(t).tone},isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.tertiaryContainer,i.tertiary,10,"nearer",!1)});i.onTertiaryContainer=p.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>F(e)?e.isDark?0:100:K(e)?p.foregroundTone(i.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>i.tertiaryContainer,contrastCurve:new D(3,4.5,7,11)});i.error=p.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(3,4.5,7,7),toneDeltaPair:e=>new S(i.errorContainer,i.error,10,"nearer",!1)});i.onError=p.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>i.error,contrastCurve:new D(4.5,7,11,21)});i.errorContainer=p.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.errorContainer,i.error,10,"nearer",!1)});i.onErrorContainer=p.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>F(e)?e.isDark?90:10:e.isDark?90:30,background:e=>i.errorContainer,contrastCurve:new D(3,4.5,7,11)});i.primaryFixed=p.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>F(e)?40:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.primaryFixed,i.primaryFixedDim,10,"lighter",!0)});i.primaryFixedDim=p.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>F(e)?30:80,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.primaryFixed,i.primaryFixedDim,10,"lighter",!0)});i.onPrimaryFixed=p.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>F(e)?100:10,background:e=>i.primaryFixedDim,secondBackground:e=>i.primaryFixed,contrastCurve:new D(4.5,7,11,21)});i.onPrimaryFixedVariant=p.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>F(e)?90:30,background:e=>i.primaryFixedDim,secondBackground:e=>i.primaryFixed,contrastCurve:new D(3,4.5,7,11)});i.secondaryFixed=p.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>F(e)?80:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.secondaryFixed,i.secondaryFixedDim,10,"lighter",!0)});i.secondaryFixedDim=p.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>F(e)?70:80,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.secondaryFixed,i.secondaryFixedDim,10,"lighter",!0)});i.onSecondaryFixed=p.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>i.secondaryFixedDim,secondBackground:e=>i.secondaryFixed,contrastCurve:new D(4.5,7,11,21)});i.onSecondaryFixedVariant=p.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>F(e)?25:30,background:e=>i.secondaryFixedDim,secondBackground:e=>i.secondaryFixed,contrastCurve:new D(3,4.5,7,11)});i.tertiaryFixed=p.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>F(e)?40:90,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.tertiaryFixed,i.tertiaryFixedDim,10,"lighter",!0)});i.tertiaryFixedDim=p.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>F(e)?30:80,isBackground:!0,background:e=>i.highestSurface(e),contrastCurve:new D(1,1,3,4.5),toneDeltaPair:e=>new S(i.tertiaryFixed,i.tertiaryFixedDim,10,"lighter",!0)});i.onTertiaryFixed=p.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>F(e)?100:10,background:e=>i.tertiaryFixedDim,secondBackground:e=>i.tertiaryFixed,contrastCurve:new D(4.5,7,11,21)});i.onTertiaryFixedVariant=p.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>F(e)?90:30,background:e=>i.tertiaryFixedDim,secondBackground:e=>i.tertiaryFixed,contrastCurve:new D(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{fromInt(t){return St(t)}toInt(t){return Gt(t[0],t[1],t[2])}distance(t,r){const n=t[0]-r[0],a=t[1]-r[1],s=t[2]-r[2];return n*n+a*a+s*s}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=10,jt=3;class vt{static quantize(t,r,n){const a=new Map,s=new Array,o=new Array,c=new Yt;let h=0;for(let m=0;m<t.length;m++){const y=t[m],T=a.get(y);T===void 0?(h++,s.push(c.fromInt(y)),o.push(y),a.set(y,1)):a.set(y,T+1)}const f=new Array;for(let m=0;m<h;m++){const y=o[m],T=a.get(y);T!==void 0&&(f[m]=T)}let l=Math.min(n,h);r.length>0&&(l=Math.min(l,r.length));const d=new Array;for(let m=0;m<r.length;m++)d.push(c.fromInt(r[m]));const M=l-d.length;if(r.length===0&&M>0)for(let m=0;m<M;m++){const y=Math.random()*100,T=Math.random()*201+-100,w=Math.random()*201+-100;d.push(new Array(y,T,w))}const u=new Array;for(let m=0;m<h;m++)u.push(Math.floor(Math.random()*l));const P=new Array;for(let m=0;m<l;m++){P.push(new Array);for(let y=0;y<l;y++)P[m].push(0)}const g=new Array;for(let m=0;m<l;m++){g.push(new Array);for(let y=0;y<l;y++)g[m].push(new Ht)}const b=new Array;for(let m=0;m<l;m++)b.push(0);for(let m=0;m<Wt;m++){for(let k=0;k<l;k++){for(let x=k+1;x<l;x++){const B=c.distance(d[k],d[x]);g[x][k].distance=B,g[x][k].index=k,g[k][x].distance=B,g[k][x].index=x}g[k].sort();for(let x=0;x<l;x++)P[k][x]=g[k][x].index}let y=0;for(let k=0;k<h;k++){const x=s[k],B=u[k],R=d[B],L=c.distance(x,R);let U=L,_=-1;for(let E=0;E<l;E++){if(g[B][E].distance>=4*L)continue;const J=c.distance(x,d[E]);J<U&&(U=J,_=E)}_!==-1&&Math.abs(Math.sqrt(U)-Math.sqrt(L))>jt&&(y++,u[k]=_)}if(y===0&&m!==0)break;const T=new Array(l).fill(0),w=new Array(l).fill(0),C=new Array(l).fill(0);for(let k=0;k<l;k++)b[k]=0;for(let k=0;k<h;k++){const x=u[k],B=s[k],R=f[k];b[x]+=R,T[x]+=B[0]*R,w[x]+=B[1]*R,C[x]+=B[2]*R}for(let k=0;k<l;k++){const x=b[k];if(x===0){d[k]=[0,0,0];continue}const B=T[k]/x,R=w[k]/x,L=C[k]/x;d[k]=[B,R,L]}}const A=new Map;for(let m=0;m<l;m++){const y=b[m];if(y===0)continue;const T=c.toInt(d[m]);A.has(T)||A.set(T,y)}return A}}class Ht{constructor(){this.distance=-1,this.index=-1}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{static quantize(t){const r=new Map;for(let n=0;n<t.length;n++){const a=t[n];zt(a)<255||r.set(a,(r.get(a)??0)+1)}return r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=5,V=33,Q=35937,N={RED:"red",GREEN:"green",BLUE:"blue"};class Jt{constructor(t=[],r=[],n=[],a=[],s=[],o=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=a,this.moments=s,this.cubes=o}quantize(t,r){this.constructHistogram(t),this.computeMoments();const n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:Q}).fill(0),this.momentsR=Array.from({length:Q}).fill(0),this.momentsG=Array.from({length:Q}).fill(0),this.momentsB=Array.from({length:Q}).fill(0),this.moments=Array.from({length:Q}).fill(0);const r=Xt.quantize(t);for(const[n,a]of r.entries()){const s=lt(n),o=ht(n),c=ut(n),h=8-st,f=(s>>h)+1,l=(o>>h)+1,d=(c>>h)+1,M=this.getIndex(f,l,d);this.weights[M]=(this.weights[M]??0)+a,this.momentsR[M]+=a*s,this.momentsG[M]+=a*o,this.momentsB[M]+=a*c,this.moments[M]+=a*(s*s+o*o+c*c)}}computeMoments(){for(let t=1;t<V;t++){const r=Array.from({length:V}).fill(0),n=Array.from({length:V}).fill(0),a=Array.from({length:V}).fill(0),s=Array.from({length:V}).fill(0),o=Array.from({length:V}).fill(0);for(let c=1;c<V;c++){let h=0,f=0,l=0,d=0,M=0;for(let u=1;u<V;u++){const P=this.getIndex(t,c,u);h+=this.weights[P],f+=this.momentsR[P],l+=this.momentsG[P],d+=this.momentsB[P],M+=this.moments[P],r[u]+=h,n[u]+=f,a[u]+=l,s[u]+=d,o[u]+=M;const g=this.getIndex(t-1,c,u);this.weights[P]=this.weights[g]+r[u],this.momentsR[P]=this.momentsR[g]+n[u],this.momentsG[P]=this.momentsG[g]+a[u],this.momentsB[P]=this.momentsB[g]+s[u],this.moments[P]=this.moments[g]+o[u]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new $t);const r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=V-1,this.cubes[0].g1=V-1,this.cubes[0].b1=V-1;let n=t,a=0;for(let s=1;s<t;s++){this.cut(this.cubes[a],this.cubes[s])?(r[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,r[s]=this.cubes[s].vol>1?this.variance(this.cubes[s]):0):(r[a]=0,s--),a=0;let o=r[0];for(let c=1;c<=s;c++)r[c]>o&&(o=r[c],a=c);if(o<=0){n=s+1;break}}return new Kt(t,n)}createResult(t){const r=[];for(let n=0;n<t;++n){const a=this.cubes[n],s=this.volume(a,this.weights);if(s>0){const o=Math.round(this.volume(a,this.momentsR)/s),c=Math.round(this.volume(a,this.momentsG)/s),h=Math.round(this.volume(a,this.momentsB)/s),f=255<<24|(o&255)<<16|(c&255)<<8|h&255;r.push(f)}}return r}variance(t){const r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),s=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],o=r*r+n*n+a*a,c=this.volume(t,this.weights);return s-o/c}cut(t,r){const n=this.volume(t,this.momentsR),a=this.volume(t,this.momentsG),s=this.volume(t,this.momentsB),o=this.volume(t,this.weights),c=this.maximize(t,N.RED,t.r0+1,t.r1,n,a,s,o),h=this.maximize(t,N.GREEN,t.g0+1,t.g1,n,a,s,o),f=this.maximize(t,N.BLUE,t.b0+1,t.b1,n,a,s,o);let l;const d=c.maximum,M=h.maximum,u=f.maximum;if(d>=M&&d>=u){if(c.cutLocation<0)return!1;l=N.RED}else M>=d&&M>=u?l=N.GREEN:l=N.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,l){case N.RED:t.r1=c.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case N.GREEN:t.g1=h.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case N.BLUE:t.b1=f.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+l)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,a,s,o,c,h){const f=this.bottom(t,r,this.momentsR),l=this.bottom(t,r,this.momentsG),d=this.bottom(t,r,this.momentsB),M=this.bottom(t,r,this.weights);let u=0,P=-1,g=0,b=0,A=0,m=0;for(let y=n;y<a;y++){if(g=f+this.top(t,r,y,this.momentsR),b=l+this.top(t,r,y,this.momentsG),A=d+this.top(t,r,y,this.momentsB),m=M+this.top(t,r,y,this.weights),m===0)continue;let T=(g*g+b*b+A*A)*1,w=m*1,C=T/w;g=s-g,b=o-b,A=c-A,m=h-m,m!==0&&(T=(g*g+b*b+A*A)*1,w=m*1,C+=T/w,C>u&&(u=C,P=y))}return new Qt(P,u)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case N.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case N.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case N.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,a){switch(r){case N.RED:return a[this.getIndex(n,t.g1,t.b1)]-a[this.getIndex(n,t.g1,t.b0)]-a[this.getIndex(n,t.g0,t.b1)]+a[this.getIndex(n,t.g0,t.b0)];case N.GREEN:return a[this.getIndex(t.r1,n,t.b1)]-a[this.getIndex(t.r1,n,t.b0)]-a[this.getIndex(t.r0,n,t.b1)]+a[this.getIndex(t.r0,n,t.b0)];case N.BLUE:return a[this.getIndex(t.r1,t.g1,n)]-a[this.getIndex(t.r1,t.g0,n)]-a[this.getIndex(t.r0,t.g1,n)]+a[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<st*2)+(t<<st+1)+t+(r<<st)+r+n}}class $t{constructor(t=0,r=0,n=0,a=0,s=0,o=0,c=0){this.r0=t,this.r1=r,this.g0=n,this.g1=a,this.b0=s,this.b1=o,this.vol=c}}class Kt{constructor(t,r){this.requestedCount=t,this.resultCount=r}}class Qt{constructor(t,r){this.cutLocation=t,this.maximum=r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{static quantize(t,r){const a=new Jt().quantize(t,r);return vt.quantize(t,a,r)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={desired:4,fallbackColorARGB:4282549748,filter:!0};function ee(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class z{constructor(){}static score(t,r){const{desired:n,fallbackColorARGB:a,filter:s}={...te,...r},o=[],c=new Array(360).fill(0);let h=0;for(const[u,P]of t.entries()){const g=X.fromInt(u);o.push(g);const b=Math.floor(g.hue);c[b]+=P,h+=P}const f=new Array(360).fill(0);for(let u=0;u<360;u++){const P=c[u]/h;for(let g=u-14;g<u+16;g++){const b=xt(g);f[b]+=P}}const l=new Array;for(const u of o){const P=xt(Math.round(u.hue)),g=f[P];if(s&&(u.chroma<z.CUTOFF_CHROMA||g<=z.CUTOFF_EXCITED_PROPORTION))continue;const b=g*100*z.WEIGHT_PROPORTION,A=u.chroma<z.TARGET_CHROMA?z.WEIGHT_CHROMA_BELOW:z.WEIGHT_CHROMA_ABOVE,m=(u.chroma-z.TARGET_CHROMA)*A,y=b+m;l.push({hct:u,score:y})}l.sort(ee);const d=[];for(let u=90;u>=15;u--){d.length=0;for(const{hct:P}of l)if(d.find(b=>Lt(P.hue,b.hue)<u)||d.push(P),d.length>=n)break;if(d.length>=n)break}const M=[];d.length===0&&M.push(a);for(const u of d)M.push(u.toInt());return M}}z.TARGET_CHROMA=48;z.WEIGHT_PROPORTION=.7;z.WEIGHT_CHROMA_ABOVE=.3;z.WEIGHT_CHROMA_BELOW=.1;z.CUTOFF_CHROMA=5;z.CUTOFF_EXCITED_PROPORTION=.01;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){const t=lt(e),r=ht(e),n=ut(e),a=[t.toString(16),r.toString(16),n.toString(16)];for(const[s,o]of a.entries())o.length===1&&(a[s]="0"+o);return"#"+a.join("")}function ne(e){e=e.replace("#","");const t=e.length===3,r=e.length===6,n=e.length===8;if(!t&&!r&&!n)throw new Error("unexpected hex "+e);let a=0,s=0,o=0;return t?(a=W(e.slice(0,1).repeat(2)),s=W(e.slice(1,2).repeat(2)),o=W(e.slice(2,3).repeat(2))):r?(a=W(e.slice(0,2)),s=W(e.slice(2,4)),o=W(e.slice(4,6))):n&&(a=W(e.slice(2,4)),s=W(e.slice(4,6)),o=W(e.slice(6,8))),(255<<24|(a&255)<<16|(s&255)<<8|o&255)>>>0}function W(e){return parseInt(e,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e){const t=await new Promise((o,c)=>{const h=document.createElement("canvas"),f=h.getContext("2d");if(!f){c(new Error("Could not get canvas context"));return}const l=()=>{h.width=e.width,h.height=e.height,f.drawImage(e,0,0);let M=[0,0,e.width,e.height];const u=e.dataset.area;u&&/^\d+(\s*,\s*\d+){3}$/.test(u)&&(M=u.split(/\s*,\s*/).map(m=>parseInt(m,10)));const[P,g,b,A]=M;o(f.getImageData(P,g,b,A).data)},d=()=>{c(new Error("Image load failed"))};e.complete?l():(e.onload=l,e.onerror=d)}),r=[];for(let o=0;o<t.length;o+=4){const c=t[o],h=t[o+1],f=t[o+2];if(t[o+3]<255)continue;const d=ct(c,h,f);r.push(d)}const n=Zt.quantize(r,128);return z.score(n)[0]}export{X as H,ne as a,re as h,ae as s};
