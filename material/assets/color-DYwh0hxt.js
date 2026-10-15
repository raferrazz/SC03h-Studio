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
 */function V(e){return e<0?-1:e===0?0:1}function at(e,t,r){return(1-r)*e+r*t}function St(e,t,r){return r<e?e:r>t?t:r}function ft(e,t,r){return r<e?e:r>t?t:r}function Tt(e){return e=e%360,e<0&&(e=e+360),e}function ot(e){return e=e%360,e<0&&(e=e+360),e}function Gt(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function At(e,t){const r=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],n=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[r,n,a]}/**
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
 */const Bt=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],_t=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],xt=[95.047,100,108.883];function gt(e,t,r){return(255<<24|(e&255)<<16|(t&255)<<8|r&255)>>>0}function Rt(e){const t=tt(e[0]),r=tt(e[1]),n=tt(e[2]);return gt(t,r,n)}function Vt(e){return e>>24&255}function mt(e){return e>>16&255}function dt(e){return e>>8&255}function pt(e){return e&255}function Et(e,t,r){const n=_t,a=n[0][0]*e+n[0][1]*t+n[0][2]*r,o=n[1][0]*e+n[1][1]*t+n[1][2]*r,i=n[2][0]*e+n[2][1]*t+n[2][2]*r,c=tt(a),l=tt(o),f=tt(i);return gt(c,l,f)}function qt(e){const t=j(mt(e)),r=j(dt(e)),n=j(pt(e));return At([t,r,n],Bt)}function Ht(e,t,r){const n=xt,a=(e+16)/116,o=t/500+a,i=a-r/200,c=ut(o),l=ut(a),f=ut(i),h=c*n[0],g=l*n[1],y=f*n[2];return Et(h,g,y)}function Ut(e){const t=j(mt(e)),r=j(dt(e)),n=j(pt(e)),a=Bt,o=a[0][0]*t+a[0][1]*r+a[0][2]*n,i=a[1][0]*t+a[1][1]*r+a[1][2]*n,c=a[2][0]*t+a[2][1]*r+a[2][2]*n,l=xt,f=o/l[0],h=i/l[1],g=c/l[2],y=st(f),u=st(h),P=st(g),d=116*u-16,A=500*(y-u),D=200*(u-P);return[d,A,D]}function vt(e){const t=X(e),r=tt(t);return gt(r,r,r)}function Ft(e){const t=qt(e)[1];return 116*st(t/100)-16}function X(e){return 100*ut((e+16)/116)}function kt(e){return st(e/100)*116-16}function j(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function tt(e){const t=e/100;let r=0;return t<=.0031308?r=t*12.92:r=1.055*Math.pow(t,1/2.4)-.055,St(0,255,Math.round(r*255))}function Yt(){return xt}function st(e){const t=.008856451679035631,r=24389/27;return e>t?Math.pow(e,1/3):(r*e+16)/116}function ut(e){const t=.008856451679035631,r=24389/27,n=e*e*e;return n>t?n:(116*e-16)/r}/**
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
 */class Y{static make(t=Yt(),r=200/Math.PI*X(50)/100,n=50,a=2,o=!1){const i=t,c=i[0]*.401288+i[1]*.650173+i[2]*-.051461,l=i[0]*-.250268+i[1]*1.204414+i[2]*.045854,f=i[0]*-.002079+i[1]*.048952+i[2]*.953127,h=.8+a/10,g=h>=.9?at(.59,.69,(h-.9)*10):at(.525,.59,(h-.8)*10);let y=o?1:h*(1-1/3.6*Math.exp((-r-42)/92));y=y>1?1:y<0?0:y;const u=h,P=[y*(100/c)+1-y,y*(100/l)+1-y,y*(100/f)+1-y],d=1/(5*r+1),A=d*d*d*d,D=1-A,m=A*r+.1*D*D*Math.cbrt(5*r),b=X(n)/t[1],w=1.48+Math.sqrt(b),C=.725/Math.pow(b,.2),F=C,M=[Math.pow(m*P[0]*c/100,.42),Math.pow(m*P[1]*l/100,.42),Math.pow(m*P[2]*f/100,.42)],x=[400*M[0]/(M[0]+27.13),400*M[1]/(M[1]+27.13),400*M[2]/(M[2]+27.13)],R=(2*x[0]+x[1]+.05*x[2])*C;return new Y(b,R,C,F,g,u,P,m,Math.pow(m,.25),w)}constructor(t,r,n,a,o,i,c,l,f,h){this.n=t,this.aw=r,this.nbb=n,this.ncb=a,this.c=o,this.nc=i,this.rgbD=c,this.fl=l,this.fLRoot=f,this.z=h}}Y.DEFAULT=Y.make();/**
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
 */class H{constructor(t,r,n,a,o,i,c,l,f){this.hue=t,this.chroma=r,this.j=n,this.q=a,this.m=o,this.s=i,this.jstar=c,this.astar=l,this.bstar=f}distance(t){const r=this.jstar-t.jstar,n=this.astar-t.astar,a=this.bstar-t.bstar,o=Math.sqrt(r*r+n*n+a*a);return 1.41*Math.pow(o,.63)}static fromInt(t){return H.fromIntInViewingConditions(t,Y.DEFAULT)}static fromIntInViewingConditions(t,r){const n=(t&16711680)>>16,a=(t&65280)>>8,o=t&255,i=j(n),c=j(a),l=j(o),f=.41233895*i+.35762064*c+.18051042*l,h=.2126*i+.7152*c+.0722*l,g=.01932141*i+.11916382*c+.95034478*l,y=.401288*f+.650173*h-.051461*g,u=-.250268*f+1.204414*h+.045854*g,P=-.002079*f+.048952*h+.953127*g,d=r.rgbD[0]*y,A=r.rgbD[1]*u,D=r.rgbD[2]*P,m=Math.pow(r.fl*Math.abs(d)/100,.42),b=Math.pow(r.fl*Math.abs(A)/100,.42),w=Math.pow(r.fl*Math.abs(D)/100,.42),C=V(d)*400*m/(m+27.13),F=V(A)*400*b/(b+27.13),M=V(D)*400*w/(w+27.13),x=(11*C+-12*F+M)/11,R=(C+F-2*M)/9,T=(20*C+20*F+21*M)/20,z=(40*C+20*F+M)/20,_=Math.atan2(R,x)*180/Math.PI,O=_<0?_+360:_>=360?_-360:_,Z=O*Math.PI/180,it=z*r.nbb,K=100*Math.pow(it/r.aw,r.c*r.z),ct=4/r.c*Math.sqrt(K/100)*(r.aw+4)*r.fLRoot,yt=O<20.14?O+360:O,Pt=.25*(Math.cos(yt*Math.PI/180+2)+3.8),Mt=5e4/13*Pt*r.nc*r.ncb*Math.sqrt(x*x+R*R)/(T+.305),ht=Math.pow(Mt,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),Ct=ht*Math.sqrt(K/100),Dt=Ct*r.fLRoot,Ot=50*Math.sqrt(ht*r.c/(r.aw+4)),Lt=(1+100*.007)*K/(1+.007*K),wt=1/.0228*Math.log(1+.0228*Dt),zt=wt*Math.cos(Z),Nt=wt*Math.sin(Z);return new H(O,Ct,K,ct,Dt,Ot,Lt,zt,Nt)}static fromJch(t,r,n){return H.fromJchInViewingConditions(t,r,n,Y.DEFAULT)}static fromJchInViewingConditions(t,r,n,a){const o=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,i=r*a.fLRoot,c=r/Math.sqrt(t/100),l=50*Math.sqrt(c*a.c/(a.aw+4)),f=n*Math.PI/180,h=(1+100*.007)*t/(1+.007*t),g=1/.0228*Math.log(1+.0228*i),y=g*Math.cos(f),u=g*Math.sin(f);return new H(n,r,t,o,i,l,h,y,u)}static fromUcs(t,r,n){return H.fromUcsInViewingConditions(t,r,n,Y.DEFAULT)}static fromUcsInViewingConditions(t,r,n,a){const o=r,i=n,c=Math.sqrt(o*o+i*i),f=(Math.exp(c*.0228)-1)/.0228/a.fLRoot;let h=Math.atan2(i,o)*(180/Math.PI);h<0&&(h+=360);const g=t/(1-(t-100)*.007);return H.fromJchInViewingConditions(g,f,h,a)}toInt(){return this.viewed(Y.DEFAULT)}viewed(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=o*(5e4/13)*t.nc*t.ncb,l=i/t.nbb,f=Math.sin(a),h=Math.cos(a),g=23*(l+.305)*n/(23*c+11*n*h+108*n*f),y=g*h,u=g*f,P=(460*l+451*y+288*u)/1403,d=(460*l-891*y-261*u)/1403,A=(460*l-220*y-6300*u)/1403,D=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),m=V(P)*(100/t.fl)*Math.pow(D,1/.42),b=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),w=V(d)*(100/t.fl)*Math.pow(b,1/.42),C=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),F=V(A)*(100/t.fl)*Math.pow(C,1/.42),M=m/t.rgbD[0],x=w/t.rgbD[1],R=F/t.rgbD[2],T=1.86206786*M-1.01125463*x+.14918677*R,z=.38752654*M+.62144744*x-.00897398*R,U=-.0158415*M-.03412294*x+1.04996444*R;return Et(T,z,U)}static fromXyzInViewingConditions(t,r,n,a){const o=.401288*t+.650173*r-.051461*n,i=-.250268*t+1.204414*r+.045854*n,c=-.002079*t+.048952*r+.953127*n,l=a.rgbD[0]*o,f=a.rgbD[1]*i,h=a.rgbD[2]*c,g=Math.pow(a.fl*Math.abs(l)/100,.42),y=Math.pow(a.fl*Math.abs(f)/100,.42),u=Math.pow(a.fl*Math.abs(h)/100,.42),P=V(l)*400*g/(g+27.13),d=V(f)*400*y/(y+27.13),A=V(h)*400*u/(u+27.13),D=(11*P+-12*d+A)/11,m=(P+d-2*A)/9,b=(20*P+20*d+21*A)/20,w=(40*P+20*d+A)/20,F=Math.atan2(m,D)*180/Math.PI,M=F<0?F+360:F>=360?F-360:F,x=M*Math.PI/180,R=w*a.nbb,T=100*Math.pow(R/a.aw,a.c*a.z),z=4/a.c*Math.sqrt(T/100)*(a.aw+4)*a.fLRoot,U=M<20.14?M+360:M,_=1/4*(Math.cos(U*Math.PI/180+2)+3.8),Z=5e4/13*_*a.nc*a.ncb*Math.sqrt(D*D+m*m)/(b+.305),it=Math.pow(Z,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),K=it*Math.sqrt(T/100),ct=K*a.fLRoot,yt=50*Math.sqrt(it*a.c/(a.aw+4)),Pt=(1+100*.007)*T/(1+.007*T),bt=Math.log(1+.0228*ct)/.0228,Mt=bt*Math.cos(x),ht=bt*Math.sin(x);return new H(M,K,T,z,ct,yt,Pt,Mt,ht)}xyzInViewingConditions(t){const r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),i=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=o*(5e4/13)*t.nc*t.ncb,l=i/t.nbb,f=Math.sin(a),h=Math.cos(a),g=23*(l+.305)*n/(23*c+11*n*h+108*n*f),y=g*h,u=g*f,P=(460*l+451*y+288*u)/1403,d=(460*l-891*y-261*u)/1403,A=(460*l-220*y-6300*u)/1403,D=Math.max(0,27.13*Math.abs(P)/(400-Math.abs(P))),m=V(P)*(100/t.fl)*Math.pow(D,1/.42),b=Math.max(0,27.13*Math.abs(d)/(400-Math.abs(d))),w=V(d)*(100/t.fl)*Math.pow(b,1/.42),C=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),F=V(A)*(100/t.fl)*Math.pow(C,1/.42),M=m/t.rgbD[0],x=w/t.rgbD[1],R=F/t.rgbD[2],T=1.86206786*M-1.01125463*x+.14918677*R,z=.38752654*M+.62144744*x-.00897398*R,U=-.0158415*M-.03412294*x+1.04996444*R;return[T,z,U]}}/**
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
 */class k{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const r=t/100;let n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(t){const r=Math.pow(Math.abs(t),.42);return V(t)*400*r/(r+27.13)}static hueOf(t){const r=At(t,k.SCALED_DISCOUNT_FROM_LINRGB),n=k.chromaticAdaptation(r[0]),a=k.chromaticAdaptation(r[1]),o=k.chromaticAdaptation(r[2]),i=(11*n+-12*a+o)/11,c=(n+a-2*o)/9;return Math.atan2(c,i)}static areInCyclicOrder(t,r,n){const a=k.sanitizeRadians(r-t),o=k.sanitizeRadians(n-t);return a<o}static intercept(t,r,n){return(r-t)/(n-t)}static lerpPoint(t,r,n){return[t[0]+(n[0]-t[0])*r,t[1]+(n[1]-t[1])*r,t[2]+(n[2]-t[2])*r]}static setCoordinate(t,r,n,a){const o=k.intercept(t[a],r,n[a]);return k.lerpPoint(t,o,n)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,r){const n=k.Y_FROM_LINRGB[0],a=k.Y_FROM_LINRGB[1],o=k.Y_FROM_LINRGB[2],i=r%4<=1?0:100,c=r%2===0?0:100;if(r<4){const l=i,f=c,h=(t-l*a-f*o)/n;return k.isBounded(h)?[h,l,f]:[-1,-1,-1]}else if(r<8){const l=i,f=c,h=(t-f*n-l*o)/a;return k.isBounded(h)?[f,h,l]:[-1,-1,-1]}else{const l=i,f=c,h=(t-l*n-f*a)/o;return k.isBounded(h)?[l,f,h]:[-1,-1,-1]}}static bisectToSegment(t,r){let n=[-1,-1,-1],a=n,o=0,i=0,c=!1,l=!0;for(let f=0;f<12;f++){const h=k.nthVertex(t,f);if(h[0]<0)continue;const g=k.hueOf(h);if(!c){n=h,a=h,o=g,i=g,c=!0;continue}(l||k.areInCyclicOrder(o,g,i))&&(l=!1,k.areInCyclicOrder(o,r,g)?(a=h,i=g):(n=h,o=g))}return[n,a]}static midpoint(t,r){return[(t[0]+r[0])/2,(t[1]+r[1])/2,(t[2]+r[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,r){const n=k.bisectToSegment(t,r);let a=n[0],o=k.hueOf(a),i=n[1];for(let c=0;c<3;c++)if(a[c]!==i[c]){let l=-1,f=255;a[c]<i[c]?(l=k.criticalPlaneBelow(k.trueDelinearized(a[c])),f=k.criticalPlaneAbove(k.trueDelinearized(i[c]))):(l=k.criticalPlaneAbove(k.trueDelinearized(a[c])),f=k.criticalPlaneBelow(k.trueDelinearized(i[c])));for(let h=0;h<8&&!(Math.abs(f-l)<=1);h++){const g=Math.floor((l+f)/2),y=k.CRITICAL_PLANES[g],u=k.setCoordinate(a,y,i,c),P=k.hueOf(u);k.areInCyclicOrder(o,r,P)?(i=u,f=g):(a=u,o=P,l=g)}}return k.midpoint(a,i)}static inverseChromaticAdaptation(t){const r=Math.abs(t),n=Math.max(0,27.13*r/(400-r));return V(t)*Math.pow(n,1/.42)}static findResultByJ(t,r,n){let a=Math.sqrt(n)*11;const o=Y.DEFAULT,i=1/Math.pow(1.64-Math.pow(.29,o.n),.73),l=.25*(Math.cos(t+2)+3.8)*(5e4/13)*o.nc*o.ncb,f=Math.sin(t),h=Math.cos(t);for(let g=0;g<5;g++){const y=a/100,u=r===0||a===0?0:r/Math.sqrt(y),P=Math.pow(u*i,1/.9),A=o.aw*Math.pow(y,1/o.c/o.z)/o.nbb,D=23*(A+.305)*P/(23*l+11*P*h+108*P*f),m=D*h,b=D*f,w=(460*A+451*m+288*b)/1403,C=(460*A-891*m-261*b)/1403,F=(460*A-220*m-6300*b)/1403,M=k.inverseChromaticAdaptation(w),x=k.inverseChromaticAdaptation(C),R=k.inverseChromaticAdaptation(F),T=At([M,x,R],k.LINRGB_FROM_SCALED_DISCOUNT);if(T[0]<0||T[1]<0||T[2]<0)return 0;const z=k.Y_FROM_LINRGB[0],U=k.Y_FROM_LINRGB[1],_=k.Y_FROM_LINRGB[2],O=z*T[0]+U*T[1]+_*T[2];if(O<=0)return 0;if(g===4||Math.abs(O-n)<.002)return T[0]>100.01||T[1]>100.01||T[2]>100.01?0:Rt(T);a=a-(O-n)*a/(2*O)}return 0}static solveToInt(t,r,n){if(r<1e-4||n<1e-4||n>99.9999)return vt(n);t=ot(t);const a=t/180*Math.PI,o=X(n),i=k.findResultByJ(a,r,o);if(i!==0)return i;const c=k.bisectToLimit(o,a);return Rt(c)}static solveToCam(t,r,n){return H.fromInt(k.solveToInt(t,r,n))}}k.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];k.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];k.Y_FROM_LINRGB=[.2126,.7152,.0722];k.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
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
 */class G{static from(t,r,n){return new G(k.solveToInt(t,r,n))}static fromInt(t){return new G(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(k.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(k.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(k.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const r=H.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Ft(t),this.argb=t}setInternalState(t){const r=H.fromInt(t);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=Ft(t),this.argb=t}inViewingConditions(t){const n=H.fromInt(this.toInt()).xyzInViewingConditions(t),a=H.fromXyzInViewingConditions(n[0],n[1],n[2],Y.make());return G.from(a.hue,a.chroma,kt(n[1]))}}/**
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
 */class L{static ratioOfTones(t,r){return t=ft(0,100,t),r=ft(0,100,r),L.ratioOfYs(X(t),X(r))}static ratioOfYs(t,r){const n=t>r?t:r,a=n===r?t:r;return(n+5)/(a+5)}static lighter(t,r){if(t<0||t>100)return-1;const n=X(t),a=r*(n+5)-5,o=L.ratioOfYs(a,n),i=Math.abs(o-r);if(o<r&&i>.04)return-1;const c=kt(a)+.4;return c<0||c>100?-1:c}static darker(t,r){if(t<0||t>100)return-1;const n=X(t),a=(n+5)/r-5,o=L.ratioOfYs(n,a),i=Math.abs(o-r);if(o<r&&i>.04)return-1;const c=kt(a)-.4;return c<0||c>100?-1:c}static lighterUnsafe(t,r){const n=L.lighter(t,r);return n<0?100:n}static darkerUnsafe(t,r){const n=L.darker(t,r);return n<0?0:n}}/**
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
 */class It{static isDisliked(t){const r=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,n=Math.round(t.chroma)>16,a=Math.round(t.tone)<65;return r&&n&&a}static fixIfDisliked(t){return It.isDisliked(t)?G.from(t.hue,t.chroma,70):t}}/**
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
 */class p{static fromPalette(t){return new p(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,r,n,a,o,i,c,l){if(this.name=t,this.palette=r,this.tone=n,this.isBackground=a,this.background=o,this.secondBackground=i,this.contrastCurve=c,this.toneDeltaPair=l,this.hctCache=new Map,!o&&i)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!o&&c)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(o&&!c)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const r=this.hctCache.get(t);if(r!=null)return r;const n=this.getTone(t),a=this.palette(t).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,a),a}getTone(t){const r=t.contrastLevel<0;if(this.toneDeltaPair){const n=this.toneDeltaPair(t),a=n.roleA,o=n.roleB,i=n.delta,c=n.polarity,l=n.stayTogether,h=this.background(t).getTone(t),g=c==="nearer"||c==="lighter"&&!t.isDark||c==="darker"&&t.isDark,y=g?a:o,u=g?o:a,P=this.name===y.name,d=t.isDark?1:-1,A=y.contrastCurve.get(t.contrastLevel),D=u.contrastCurve.get(t.contrastLevel),m=y.tone(t);let b=L.ratioOfTones(h,m)>=A?m:p.foregroundTone(h,A);const w=u.tone(t);let C=L.ratioOfTones(h,w)>=D?w:p.foregroundTone(h,D);return r&&(b=p.foregroundTone(h,A),C=p.foregroundTone(h,D)),(C-b)*d>=i||(C=ft(0,100,b+i*d),(C-b)*d>=i||(b=ft(0,100,C-i*d))),50<=b&&b<60?d>0?(b=60,C=Math.max(C,b+i*d)):(b=49,C=Math.min(C,b+i*d)):50<=C&&C<60&&(l?d>0?(b=60,C=Math.max(C,b+i*d)):(b=49,C=Math.min(C,b+i*d)):d>0?C=60:C=49),P?b:C}else{let n=this.tone(t);if(this.background==null)return n;const a=this.background(t).getTone(t),o=this.contrastCurve.get(t.contrastLevel);if(L.ratioOfTones(a,n)>=o||(n=p.foregroundTone(a,o)),r&&(n=p.foregroundTone(a,o)),this.isBackground&&50<=n&&n<60&&(L.ratioOfTones(49,a)>=o?n=49:n=60),this.secondBackground){const[i,c]=[this.background,this.secondBackground],[l,f]=[i(t).getTone(t),c(t).getTone(t)],[h,g]=[Math.max(l,f),Math.min(l,f)];if(L.ratioOfTones(h,n)>=o&&L.ratioOfTones(g,n)>=o)return n;const y=L.lighter(h,o),u=L.darker(g,o),P=[];return y!==-1&&P.push(y),u!==-1&&P.push(u),p.tonePrefersLightForeground(l)||p.tonePrefersLightForeground(f)?y<0?100:y:P.length===1?P[0]:u<0?0:u}return n}}static foregroundTone(t,r){const n=L.lighterUnsafe(t,r),a=L.darkerUnsafe(t,r),o=L.ratioOfTones(n,t),i=L.ratioOfTones(a,t);if(p.tonePrefersLightForeground(t)){const l=Math.abs(o-i)<.1&&o<r&&i<r;return o>=r||o>=i||l?n:a}else return i>=r||i>=o?a:n}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return p.tonePrefersLightForeground(t)&&!p.toneAllowsLightForeground(t)?49:t}}/**
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
 */class E{static fromInt(t){const r=G.fromInt(t);return E.fromHct(r)}static fromHct(t){return new E(t.hue,t.chroma,t)}static fromHueAndChroma(t,r){const n=new Wt(t,r).create();return new E(t,r,n)}constructor(t,r,n){this.hue=t,this.chroma=r,this.keyColor=n,this.cache=new Map}tone(t){let r=this.cache.get(t);return r===void 0&&(r=G.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,r)),r}getHct(t){return G.fromInt(this.tone(t))}}class Wt{constructor(t,r){this.hue=t,this.requestedChroma=r,this.chromaCache=new Map,this.maxChromaValue=200}create(){let a=0,o=100;for(;a<o;){const i=Math.floor((a+o)/2),c=this.maxChroma(i)<this.maxChroma(i+1);if(this.maxChroma(i)>=this.requestedChroma-.01)if(Math.abs(a-50)<Math.abs(o-50))o=i;else{if(a===i)return G.from(this.hue,this.requestedChroma,a);a=i}else c?a=i+1:o=i}return G.from(this.hue,this.requestedChroma,a)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);const r=G.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,r),r}}/**
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
 */class I{constructor(t,r,n,a){this.low=t,this.normal=r,this.medium=n,this.high=a}get(t){return t<=-1?this.low:t<0?at(this.low,this.normal,(t- -1)/1):t<.5?at(this.normal,this.medium,(t-0)/.5):t<1?at(this.medium,this.high,(t-.5)/.5):this.high}}/**
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
 */class q{constructor(t,r,n,a,o){this.roleA=t,this.roleB=r,this.delta=n,this.polarity=a,this.stayTogether=o}}/**
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
 */var Q;(function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"})(Q||(Q={}));/**
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
 */function rt(e){return e.variant===Q.FIDELITY||e.variant===Q.CONTENT}function B(e){return e.variant===Q.MONOCHROME}function jt(e,t,r,n){let a=r,o=G.from(e,t,r);if(o.chroma<t){let i=o.chroma;for(;o.chroma<t;){a+=n?-1:1;const c=G.from(e,t,a);if(i>c.chroma||Math.abs(c.chroma-t)<.4)break;const l=Math.abs(c.chroma-t),f=Math.abs(o.chroma-t);l<f&&(o=c),i=Math.max(i,c.chroma)}}return a}class s{static highestSurface(t){return t.isDark?s.surfaceBright:s.surfaceDim}}s.contentAccentToneDelta=15;s.primaryPaletteKeyColor=p.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone});s.secondaryPaletteKeyColor=p.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone});s.tertiaryPaletteKeyColor=p.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone});s.neutralPaletteKeyColor=p.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone});s.neutralVariantPaletteKeyColor=p.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone});s.background=p.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});s.onBackground=p.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>s.background,contrastCurve:new I(3,3,4.5,7)});s.surface=p.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0});s.surfaceDim=p.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:new I(87,87,80,75).get(e.contrastLevel),isBackground:!0});s.surfaceBright=p.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(24,24,29,34).get(e.contrastLevel):98,isBackground:!0});s.surfaceContainerLowest=p.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(4,4,2,0).get(e.contrastLevel):100,isBackground:!0});s.surfaceContainerLow=p.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(10,10,11,12).get(e.contrastLevel):new I(96,96,96,95).get(e.contrastLevel),isBackground:!0});s.surfaceContainer=p.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(12,12,16,20).get(e.contrastLevel):new I(94,94,92,90).get(e.contrastLevel),isBackground:!0});s.surfaceContainerHigh=p.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(17,17,21,25).get(e.contrastLevel):new I(92,92,88,85).get(e.contrastLevel),isBackground:!0});s.surfaceContainerHighest=p.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?new I(22,22,26,30).get(e.contrastLevel):new I(90,90,84,80).get(e.contrastLevel),isBackground:!0});s.onSurface=p.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>s.highestSurface(e),contrastCurve:new I(4.5,7,11,21)});s.surfaceVariant=p.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0});s.onSurfaceVariant=p.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>s.highestSurface(e),contrastCurve:new I(3,4.5,7,11)});s.inverseSurface=p.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20});s.inverseOnSurface=p.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>s.inverseSurface,contrastCurve:new I(4.5,7,11,21)});s.outline=p.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>s.highestSurface(e),contrastCurve:new I(1.5,3,4.5,7)});s.outlineVariant=p.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5)});s.shadow=p.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0});s.scrim=p.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0});s.surfaceTint=p.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0});s.primary=p.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>B(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new q(s.primaryContainer,s.primary,10,"nearer",!1)});s.onPrimary=p.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>B(e)?e.isDark?10:90:e.isDark?20:100,background:e=>s.primary,contrastCurve:new I(4.5,7,11,21)});s.primaryContainer=p.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>rt(e)?e.sourceColorHct.tone:B(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.primaryContainer,s.primary,10,"nearer",!1)});s.onPrimaryContainer=p.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>rt(e)?p.foregroundTone(s.primaryContainer.tone(e),4.5):B(e)?e.isDark?0:100:e.isDark?90:30,background:e=>s.primaryContainer,contrastCurve:new I(3,4.5,7,11)});s.inversePrimary=p.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>s.inverseSurface,contrastCurve:new I(3,4.5,7,7)});s.secondary=p.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new q(s.secondaryContainer,s.secondary,10,"nearer",!1)});s.onSecondary=p.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>B(e)?e.isDark?10:100:e.isDark?20:100,background:e=>s.secondary,contrastCurve:new I(4.5,7,11,21)});s.secondaryContainer=p.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;return B(e)?e.isDark?30:85:rt(e)?jt(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark):t},isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.secondaryContainer,s.secondary,10,"nearer",!1)});s.onSecondaryContainer=p.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>B(e)?e.isDark?90:10:rt(e)?p.foregroundTone(s.secondaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>s.secondaryContainer,contrastCurve:new I(3,4.5,7,11)});s.tertiary=p.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>B(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new q(s.tertiaryContainer,s.tertiary,10,"nearer",!1)});s.onTertiary=p.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>B(e)?e.isDark?10:90:e.isDark?20:100,background:e=>s.tertiary,contrastCurve:new I(4.5,7,11,21)});s.tertiaryContainer=p.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(B(e))return e.isDark?60:49;if(!rt(e))return e.isDark?30:90;const t=e.tertiaryPalette.getHct(e.sourceColorHct.tone);return It.fixIfDisliked(t).tone},isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.tertiaryContainer,s.tertiary,10,"nearer",!1)});s.onTertiaryContainer=p.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>B(e)?e.isDark?0:100:rt(e)?p.foregroundTone(s.tertiaryContainer.tone(e),4.5):e.isDark?90:30,background:e=>s.tertiaryContainer,contrastCurve:new I(3,4.5,7,11)});s.error=p.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(3,4.5,7,7),toneDeltaPair:e=>new q(s.errorContainer,s.error,10,"nearer",!1)});s.onError=p.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>s.error,contrastCurve:new I(4.5,7,11,21)});s.errorContainer=p.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.errorContainer,s.error,10,"nearer",!1)});s.onErrorContainer=p.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>B(e)?e.isDark?90:10:e.isDark?90:30,background:e=>s.errorContainer,contrastCurve:new I(3,4.5,7,11)});s.primaryFixed=p.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>B(e)?40:90,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.primaryFixed,s.primaryFixedDim,10,"lighter",!0)});s.primaryFixedDim=p.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>B(e)?30:80,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.primaryFixed,s.primaryFixedDim,10,"lighter",!0)});s.onPrimaryFixed=p.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>B(e)?100:10,background:e=>s.primaryFixedDim,secondBackground:e=>s.primaryFixed,contrastCurve:new I(4.5,7,11,21)});s.onPrimaryFixedVariant=p.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>B(e)?90:30,background:e=>s.primaryFixedDim,secondBackground:e=>s.primaryFixed,contrastCurve:new I(3,4.5,7,11)});s.secondaryFixed=p.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>B(e)?80:90,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.secondaryFixed,s.secondaryFixedDim,10,"lighter",!0)});s.secondaryFixedDim=p.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>B(e)?70:80,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.secondaryFixed,s.secondaryFixedDim,10,"lighter",!0)});s.onSecondaryFixed=p.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>s.secondaryFixedDim,secondBackground:e=>s.secondaryFixed,contrastCurve:new I(4.5,7,11,21)});s.onSecondaryFixedVariant=p.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>B(e)?25:30,background:e=>s.secondaryFixedDim,secondBackground:e=>s.secondaryFixed,contrastCurve:new I(3,4.5,7,11)});s.tertiaryFixed=p.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>B(e)?40:90,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.tertiaryFixed,s.tertiaryFixedDim,10,"lighter",!0)});s.tertiaryFixedDim=p.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>B(e)?30:80,isBackground:!0,background:e=>s.highestSurface(e),contrastCurve:new I(1,1,3,4.5),toneDeltaPair:e=>new q(s.tertiaryFixed,s.tertiaryFixedDim,10,"lighter",!0)});s.onTertiaryFixed=p.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>B(e)?100:10,background:e=>s.tertiaryFixedDim,secondBackground:e=>s.tertiaryFixed,contrastCurve:new I(4.5,7,11,21)});s.onTertiaryFixedVariant=p.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>B(e)?90:30,background:e=>s.tertiaryFixedDim,secondBackground:e=>s.tertiaryFixed,contrastCurve:new I(3,4.5,7,11)});/**
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
 */class et{constructor(t){this.sourceColorArgb=t.sourceColorArgb,this.variant=t.variant,this.contrastLevel=t.contrastLevel,this.isDark=t.isDark,this.sourceColorHct=G.fromInt(t.sourceColorArgb),this.primaryPalette=t.primaryPalette,this.secondaryPalette=t.secondaryPalette,this.tertiaryPalette=t.tertiaryPalette,this.neutralPalette=t.neutralPalette,this.neutralVariantPalette=t.neutralVariantPalette,this.errorPalette=E.fromHueAndChroma(25,84)}static getRotatedHue(t,r,n){const a=t.hue;if(r.length!==n.length)throw new Error(`mismatch between hue length ${r.length} & rotations ${n.length}`);if(n.length===1)return ot(t.hue+n[0]);const o=r.length;for(let i=0;i<=o-2;i++){const c=r[i],l=r[i+1];if(c<a&&a<l)return ot(a+n[i])}return a}getArgb(t){return t.getArgb(this)}getHct(t){return t.getHct(this)}get primaryPaletteKeyColor(){return this.getArgb(s.primaryPaletteKeyColor)}get secondaryPaletteKeyColor(){return this.getArgb(s.secondaryPaletteKeyColor)}get tertiaryPaletteKeyColor(){return this.getArgb(s.tertiaryPaletteKeyColor)}get neutralPaletteKeyColor(){return this.getArgb(s.neutralPaletteKeyColor)}get neutralVariantPaletteKeyColor(){return this.getArgb(s.neutralVariantPaletteKeyColor)}get background(){return this.getArgb(s.background)}get onBackground(){return this.getArgb(s.onBackground)}get surface(){return this.getArgb(s.surface)}get surfaceDim(){return this.getArgb(s.surfaceDim)}get surfaceBright(){return this.getArgb(s.surfaceBright)}get surfaceContainerLowest(){return this.getArgb(s.surfaceContainerLowest)}get surfaceContainerLow(){return this.getArgb(s.surfaceContainerLow)}get surfaceContainer(){return this.getArgb(s.surfaceContainer)}get surfaceContainerHigh(){return this.getArgb(s.surfaceContainerHigh)}get surfaceContainerHighest(){return this.getArgb(s.surfaceContainerHighest)}get onSurface(){return this.getArgb(s.onSurface)}get surfaceVariant(){return this.getArgb(s.surfaceVariant)}get onSurfaceVariant(){return this.getArgb(s.onSurfaceVariant)}get inverseSurface(){return this.getArgb(s.inverseSurface)}get inverseOnSurface(){return this.getArgb(s.inverseOnSurface)}get outline(){return this.getArgb(s.outline)}get outlineVariant(){return this.getArgb(s.outlineVariant)}get shadow(){return this.getArgb(s.shadow)}get scrim(){return this.getArgb(s.scrim)}get surfaceTint(){return this.getArgb(s.surfaceTint)}get primary(){return this.getArgb(s.primary)}get onPrimary(){return this.getArgb(s.onPrimary)}get primaryContainer(){return this.getArgb(s.primaryContainer)}get onPrimaryContainer(){return this.getArgb(s.onPrimaryContainer)}get inversePrimary(){return this.getArgb(s.inversePrimary)}get secondary(){return this.getArgb(s.secondary)}get onSecondary(){return this.getArgb(s.onSecondary)}get secondaryContainer(){return this.getArgb(s.secondaryContainer)}get onSecondaryContainer(){return this.getArgb(s.onSecondaryContainer)}get tertiary(){return this.getArgb(s.tertiary)}get onTertiary(){return this.getArgb(s.onTertiary)}get tertiaryContainer(){return this.getArgb(s.tertiaryContainer)}get onTertiaryContainer(){return this.getArgb(s.onTertiaryContainer)}get error(){return this.getArgb(s.error)}get onError(){return this.getArgb(s.onError)}get errorContainer(){return this.getArgb(s.errorContainer)}get onErrorContainer(){return this.getArgb(s.onErrorContainer)}get primaryFixed(){return this.getArgb(s.primaryFixed)}get primaryFixedDim(){return this.getArgb(s.primaryFixedDim)}get onPrimaryFixed(){return this.getArgb(s.onPrimaryFixed)}get onPrimaryFixedVariant(){return this.getArgb(s.onPrimaryFixedVariant)}get secondaryFixed(){return this.getArgb(s.secondaryFixed)}get secondaryFixedDim(){return this.getArgb(s.secondaryFixedDim)}get onSecondaryFixed(){return this.getArgb(s.onSecondaryFixed)}get onSecondaryFixedVariant(){return this.getArgb(s.onSecondaryFixedVariant)}get tertiaryFixed(){return this.getArgb(s.tertiaryFixed)}get tertiaryFixedDim(){return this.getArgb(s.tertiaryFixedDim)}get onTertiaryFixed(){return this.getArgb(s.onTertiaryFixed)}get onTertiaryFixedVariant(){return this.getArgb(s.onTertiaryFixedVariant)}}/**
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
 */class Kt{fromInt(t){return Ut(t)}toInt(t){return Ht(t[0],t[1],t[2])}distance(t,r){const n=t[0]-r[0],a=t[1]-r[1],o=t[2]-r[2];return n*n+a*a+o*o}}/**
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
 */const Xt=10,$t=3;class Jt{static quantize(t,r,n){const a=new Map,o=new Array,i=new Array,c=new Kt;let l=0;for(let m=0;m<t.length;m++){const b=t[m],w=a.get(b);w===void 0?(l++,o.push(c.fromInt(b)),i.push(b),a.set(b,1)):a.set(b,w+1)}const f=new Array;for(let m=0;m<l;m++){const b=i[m],w=a.get(b);w!==void 0&&(f[m]=w)}let h=Math.min(n,l);r.length>0&&(h=Math.min(h,r.length));const g=new Array;for(let m=0;m<r.length;m++)g.push(c.fromInt(r[m]));const y=h-g.length;if(r.length===0&&y>0)for(let m=0;m<y;m++){const b=Math.random()*100,w=Math.random()*201+-100,C=Math.random()*201+-100;g.push(new Array(b,w,C))}const u=new Array;for(let m=0;m<l;m++)u.push(Math.floor(Math.random()*h));const P=new Array;for(let m=0;m<h;m++){P.push(new Array);for(let b=0;b<h;b++)P[m].push(0)}const d=new Array;for(let m=0;m<h;m++){d.push(new Array);for(let b=0;b<h;b++)d[m].push(new Qt)}const A=new Array;for(let m=0;m<h;m++)A.push(0);for(let m=0;m<Xt;m++){for(let M=0;M<h;M++){for(let x=M+1;x<h;x++){const R=c.distance(g[M],g[x]);d[x][M].distance=R,d[x][M].index=M,d[M][x].distance=R,d[M][x].index=x}d[M].sort();for(let x=0;x<h;x++)P[M][x]=d[M][x].index}let b=0;for(let M=0;M<l;M++){const x=o[M],R=u[M],T=g[R],z=c.distance(x,T);let U=z,_=-1;for(let O=0;O<h;O++){if(d[R][O].distance>=4*z)continue;const Z=c.distance(x,g[O]);Z<U&&(U=Z,_=O)}_!==-1&&Math.abs(Math.sqrt(U)-Math.sqrt(z))>$t&&(b++,u[M]=_)}if(b===0&&m!==0)break;const w=new Array(h).fill(0),C=new Array(h).fill(0),F=new Array(h).fill(0);for(let M=0;M<h;M++)A[M]=0;for(let M=0;M<l;M++){const x=u[M],R=o[M],T=f[M];A[x]+=T,w[x]+=R[0]*T,C[x]+=R[1]*T,F[x]+=R[2]*T}for(let M=0;M<h;M++){const x=A[M];if(x===0){g[M]=[0,0,0];continue}const R=w[M]/x,T=C[M]/x,z=F[M]/x;g[M]=[R,T,z]}}const D=new Map;for(let m=0;m<h;m++){const b=A[m];if(b===0)continue;const w=c.toInt(g[m]);D.has(w)||D.set(w,b)}return D}}class Qt{constructor(){this.distance=-1,this.index=-1}}/**
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
 */class Zt{static quantize(t){const r=new Map;for(let n=0;n<t.length;n++){const a=t[n];Vt(a)<255||r.set(a,(r.get(a)??0)+1)}return r}}/**
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
 */const lt=5,v=33,nt=35937,N={RED:"red",GREEN:"green",BLUE:"blue"};class te{constructor(t=[],r=[],n=[],a=[],o=[],i=[]){this.weights=t,this.momentsR=r,this.momentsG=n,this.momentsB=a,this.moments=o,this.cubes=i}quantize(t,r){this.constructHistogram(t),this.computeMoments();const n=this.createBoxes(r);return this.createResult(n.resultCount)}constructHistogram(t){this.weights=Array.from({length:nt}).fill(0),this.momentsR=Array.from({length:nt}).fill(0),this.momentsG=Array.from({length:nt}).fill(0),this.momentsB=Array.from({length:nt}).fill(0),this.moments=Array.from({length:nt}).fill(0);const r=Zt.quantize(t);for(const[n,a]of r.entries()){const o=mt(n),i=dt(n),c=pt(n),l=8-lt,f=(o>>l)+1,h=(i>>l)+1,g=(c>>l)+1,y=this.getIndex(f,h,g);this.weights[y]=(this.weights[y]??0)+a,this.momentsR[y]+=a*o,this.momentsG[y]+=a*i,this.momentsB[y]+=a*c,this.moments[y]+=a*(o*o+i*i+c*c)}}computeMoments(){for(let t=1;t<v;t++){const r=Array.from({length:v}).fill(0),n=Array.from({length:v}).fill(0),a=Array.from({length:v}).fill(0),o=Array.from({length:v}).fill(0),i=Array.from({length:v}).fill(0);for(let c=1;c<v;c++){let l=0,f=0,h=0,g=0,y=0;for(let u=1;u<v;u++){const P=this.getIndex(t,c,u);l+=this.weights[P],f+=this.momentsR[P],h+=this.momentsG[P],g+=this.momentsB[P],y+=this.moments[P],r[u]+=l,n[u]+=f,a[u]+=h,o[u]+=g,i[u]+=y;const d=this.getIndex(t-1,c,u);this.weights[P]=this.weights[d]+r[u],this.momentsR[P]=this.momentsR[d]+n[u],this.momentsG[P]=this.momentsG[d]+a[u],this.momentsB[P]=this.momentsB[d]+o[u],this.moments[P]=this.moments[d]+i[u]}}}}createBoxes(t){this.cubes=Array.from({length:t}).fill(0).map(()=>new ee);const r=Array.from({length:t}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=v-1,this.cubes[0].g1=v-1,this.cubes[0].b1=v-1;let n=t,a=0;for(let o=1;o<t;o++){this.cut(this.cubes[a],this.cubes[o])?(r[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,r[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0):(r[a]=0,o--),a=0;let i=r[0];for(let c=1;c<=o;c++)r[c]>i&&(i=r[c],a=c);if(i<=0){n=o+1;break}}return new re(t,n)}createResult(t){const r=[];for(let n=0;n<t;++n){const a=this.cubes[n],o=this.volume(a,this.weights);if(o>0){const i=Math.round(this.volume(a,this.momentsR)/o),c=Math.round(this.volume(a,this.momentsG)/o),l=Math.round(this.volume(a,this.momentsB)/o),f=255<<24|(i&255)<<16|(c&255)<<8|l&255;r.push(f)}}return r}variance(t){const r=this.volume(t,this.momentsR),n=this.volume(t,this.momentsG),a=this.volume(t,this.momentsB),o=this.moments[this.getIndex(t.r1,t.g1,t.b1)]-this.moments[this.getIndex(t.r1,t.g1,t.b0)]-this.moments[this.getIndex(t.r1,t.g0,t.b1)]+this.moments[this.getIndex(t.r1,t.g0,t.b0)]-this.moments[this.getIndex(t.r0,t.g1,t.b1)]+this.moments[this.getIndex(t.r0,t.g1,t.b0)]+this.moments[this.getIndex(t.r0,t.g0,t.b1)]-this.moments[this.getIndex(t.r0,t.g0,t.b0)],i=r*r+n*n+a*a,c=this.volume(t,this.weights);return o-i/c}cut(t,r){const n=this.volume(t,this.momentsR),a=this.volume(t,this.momentsG),o=this.volume(t,this.momentsB),i=this.volume(t,this.weights),c=this.maximize(t,N.RED,t.r0+1,t.r1,n,a,o,i),l=this.maximize(t,N.GREEN,t.g0+1,t.g1,n,a,o,i),f=this.maximize(t,N.BLUE,t.b0+1,t.b1,n,a,o,i);let h;const g=c.maximum,y=l.maximum,u=f.maximum;if(g>=y&&g>=u){if(c.cutLocation<0)return!1;h=N.RED}else y>=g&&y>=u?h=N.GREEN:h=N.BLUE;switch(r.r1=t.r1,r.g1=t.g1,r.b1=t.b1,h){case N.RED:t.r1=c.cutLocation,r.r0=t.r1,r.g0=t.g0,r.b0=t.b0;break;case N.GREEN:t.g1=l.cutLocation,r.r0=t.r0,r.g0=t.g1,r.b0=t.b0;break;case N.BLUE:t.b1=f.cutLocation,r.r0=t.r0,r.g0=t.g0,r.b0=t.b1;break;default:throw new Error("unexpected direction "+h)}return t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),r.vol=(r.r1-r.r0)*(r.g1-r.g0)*(r.b1-r.b0),!0}maximize(t,r,n,a,o,i,c,l){const f=this.bottom(t,r,this.momentsR),h=this.bottom(t,r,this.momentsG),g=this.bottom(t,r,this.momentsB),y=this.bottom(t,r,this.weights);let u=0,P=-1,d=0,A=0,D=0,m=0;for(let b=n;b<a;b++){if(d=f+this.top(t,r,b,this.momentsR),A=h+this.top(t,r,b,this.momentsG),D=g+this.top(t,r,b,this.momentsB),m=y+this.top(t,r,b,this.weights),m===0)continue;let w=(d*d+A*A+D*D)*1,C=m*1,F=w/C;d=o-d,A=i-A,D=c-D,m=l-m,m!==0&&(w=(d*d+A*A+D*D)*1,C=m*1,F+=w/C,F>u&&(u=F,P=b))}return new ne(P,u)}volume(t,r){return r[this.getIndex(t.r1,t.g1,t.b1)]-r[this.getIndex(t.r1,t.g1,t.b0)]-r[this.getIndex(t.r1,t.g0,t.b1)]+r[this.getIndex(t.r1,t.g0,t.b0)]-r[this.getIndex(t.r0,t.g1,t.b1)]+r[this.getIndex(t.r0,t.g1,t.b0)]+r[this.getIndex(t.r0,t.g0,t.b1)]-r[this.getIndex(t.r0,t.g0,t.b0)]}bottom(t,r,n){switch(r){case N.RED:return-n[this.getIndex(t.r0,t.g1,t.b1)]+n[this.getIndex(t.r0,t.g1,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case N.GREEN:return-n[this.getIndex(t.r1,t.g0,t.b1)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g0,t.b1)]-n[this.getIndex(t.r0,t.g0,t.b0)];case N.BLUE:return-n[this.getIndex(t.r1,t.g1,t.b0)]+n[this.getIndex(t.r1,t.g0,t.b0)]+n[this.getIndex(t.r0,t.g1,t.b0)]-n[this.getIndex(t.r0,t.g0,t.b0)];default:throw new Error("unexpected direction $direction")}}top(t,r,n,a){switch(r){case N.RED:return a[this.getIndex(n,t.g1,t.b1)]-a[this.getIndex(n,t.g1,t.b0)]-a[this.getIndex(n,t.g0,t.b1)]+a[this.getIndex(n,t.g0,t.b0)];case N.GREEN:return a[this.getIndex(t.r1,n,t.b1)]-a[this.getIndex(t.r1,n,t.b0)]-a[this.getIndex(t.r0,n,t.b1)]+a[this.getIndex(t.r0,n,t.b0)];case N.BLUE:return a[this.getIndex(t.r1,t.g1,n)]-a[this.getIndex(t.r1,t.g0,n)]-a[this.getIndex(t.r0,t.g1,n)]+a[this.getIndex(t.r0,t.g0,n)];default:throw new Error("unexpected direction $direction")}}getIndex(t,r,n){return(t<<lt*2)+(t<<lt+1)+t+(r<<lt)+r+n}}class ee{constructor(t=0,r=0,n=0,a=0,o=0,i=0,c=0){this.r0=t,this.r1=r,this.g0=n,this.g1=a,this.b0=o,this.b1=i,this.vol=c}}class re{constructor(t,r){this.requestedCount=t,this.resultCount=r}}class ne{constructor(t,r){this.cutLocation=t,this.maximum=r}}/**
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
 */class ae{static quantize(t,r){const a=new te().quantize(t,r);return Jt.quantize(t,a,r)}}/**
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
 */class $ extends et{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:Q.EXPRESSIVE,contrastLevel:n,isDark:r,primaryPalette:E.fromHueAndChroma(ot(t.hue+240),40),secondaryPalette:E.fromHueAndChroma(et.getRotatedHue(t,$.hues,$.secondaryRotations),24),tertiaryPalette:E.fromHueAndChroma(et.getRotatedHue(t,$.hues,$.tertiaryRotations),32),neutralPalette:E.fromHueAndChroma(t.hue+15,8),neutralVariantPalette:E.fromHueAndChroma(t.hue+15,12)})}}$.hues=[0,21,51,121,151,191,271,321,360];$.secondaryRotations=[45,95,45,20,45,90,45,45,45];$.tertiaryRotations=[120,120,20,45,20,15,20,120,120];/**
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
 */class ie extends et{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:Q.TONAL_SPOT,contrastLevel:n,isDark:r,primaryPalette:E.fromHueAndChroma(t.hue,36),secondaryPalette:E.fromHueAndChroma(t.hue,16),tertiaryPalette:E.fromHueAndChroma(ot(t.hue+60),24),neutralPalette:E.fromHueAndChroma(t.hue,6),neutralVariantPalette:E.fromHueAndChroma(t.hue,8)})}}/**
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
 */class J extends et{constructor(t,r,n){super({sourceColorArgb:t.toInt(),variant:Q.VIBRANT,contrastLevel:n,isDark:r,primaryPalette:E.fromHueAndChroma(t.hue,200),secondaryPalette:E.fromHueAndChroma(et.getRotatedHue(t,J.hues,J.secondaryRotations),24),tertiaryPalette:E.fromHueAndChroma(et.getRotatedHue(t,J.hues,J.tertiaryRotations),32),neutralPalette:E.fromHueAndChroma(t.hue,10),neutralVariantPalette:E.fromHueAndChroma(t.hue,12)})}}J.hues=[0,41,61,101,131,181,251,301,360];J.secondaryRotations=[18,15,10,12,15,18,15,12,12];J.tertiaryRotations=[35,30,20,25,30,35,30,25,25];/**
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
 */const se={desired:4,fallbackColorARGB:4282549748,filter:!0};function oe(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class S{constructor(){}static score(t,r){const{desired:n,fallbackColorARGB:a,filter:o}={...se,...r},i=[],c=new Array(360).fill(0);let l=0;for(const[u,P]of t.entries()){const d=G.fromInt(u);i.push(d);const A=Math.floor(d.hue);c[A]+=P,l+=P}const f=new Array(360).fill(0);for(let u=0;u<360;u++){const P=c[u]/l;for(let d=u-14;d<u+16;d++){const A=Tt(d);f[A]+=P}}const h=new Array;for(const u of i){const P=Tt(Math.round(u.hue)),d=f[P];if(o&&(u.chroma<S.CUTOFF_CHROMA||d<=S.CUTOFF_EXCITED_PROPORTION))continue;const A=d*100*S.WEIGHT_PROPORTION,D=u.chroma<S.TARGET_CHROMA?S.WEIGHT_CHROMA_BELOW:S.WEIGHT_CHROMA_ABOVE,m=(u.chroma-S.TARGET_CHROMA)*D,b=A+m;h.push({hct:u,score:b})}h.sort(oe);const g=[];for(let u=90;u>=15;u--){g.length=0;for(const{hct:P}of h)if(g.find(A=>Gt(P.hue,A.hue)<u)||g.push(P),g.length>=n)break;if(g.length>=n)break}const y=[];g.length===0&&y.push(a);for(const u of g)y.push(u.toInt());return y}}S.TARGET_CHROMA=48;S.WEIGHT_PROPORTION=.7;S.WEIGHT_CHROMA_ABOVE=.3;S.WEIGHT_CHROMA_BELOW=.1;S.CUTOFF_CHROMA=5;S.CUTOFF_EXCITED_PROPORTION=.01;/**
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
 */function ce(e){const t=mt(e),r=dt(e),n=pt(e),a=[t.toString(16),r.toString(16),n.toString(16)];for(const[o,i]of a.entries())i.length===1&&(a[o]="0"+i);return"#"+a.join("")}function he(e){e=e.replace("#","");const t=e.length===3,r=e.length===6,n=e.length===8;if(!t&&!r&&!n)throw new Error("unexpected hex "+e);let a=0,o=0,i=0;return t?(a=W(e.slice(0,1).repeat(2)),o=W(e.slice(1,2).repeat(2)),i=W(e.slice(2,3).repeat(2))):r?(a=W(e.slice(0,2)),o=W(e.slice(2,4)),i=W(e.slice(4,6))):n&&(a=W(e.slice(2,4)),o=W(e.slice(4,6)),i=W(e.slice(6,8))),(255<<24|(a&255)<<16|(o&255)<<8|i&255)>>>0}function W(e){return parseInt(e,16)}/**
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
 */async function le(e){const t=await new Promise((i,c)=>{const l=document.createElement("canvas"),f=l.getContext("2d");if(!f){c(new Error("Could not get canvas context"));return}const h=()=>{l.width=e.width,l.height=e.height,f.drawImage(e,0,0);let y=[0,0,e.width,e.height];const u=e.dataset.area;u&&/^\d+(\s*,\s*\d+){3}$/.test(u)&&(y=u.split(/\s*,\s*/).map(m=>parseInt(m,10)));const[P,d,A,D]=y;i(f.getImageData(P,d,A,D).data)},g=()=>{c(new Error("Image load failed"))};e.complete?h():(e.onload=h,e.onerror=g)}),r=[];for(let i=0;i<t.length;i+=4){const c=t[i],l=t[i+1],f=t[i+2];if(t[i+3]<255)continue;const g=gt(c,l,f);r.push(g)}const n=ae.quantize(r,128);return S.score(n)[0]}export{G as H,s as M,ie as S,he as a,ce as h,le as s};
