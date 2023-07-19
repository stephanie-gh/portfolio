import{Q as j,a as C,b as z}from"./QCard.6e8b3023.js";import{$ as me,a0 as ve,W as M,q as pe,a1 as fe,a2 as G,a3 as K,a4 as ne,s as H,a5 as X,r as J,c as h,w as $,g as Z,h as y,a6 as ge,a7 as he,k as ee,v as ye,a8 as be,m as le,a9 as _e,aa as we,o as re,p as ce,ab as ie,ac as xe,ad as Pe,ae as Y,j as Ce,_ as Ie,I as Se,J as ke,K as p,L as e,d as r,O as qe,b as Te,S as Ae,U as Be,af as d}from"./index.88490bcf.js";import{a as Ve,u as $e}from"./use-dark.5f4cb9fe.js";import{Q as Fe}from"./QPage.763e8197.js";import{G as Ne}from"./global.95f73a64.js";const te={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},De=Object.keys(te);te.all=!0;function ae(t){const i={};for(const l of De)t[l]===!0&&(i[l]=!0);return Object.keys(i).length===0?te:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const Ee=["INPUT","TEXTAREA"];function oe(t,i){return i.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof i.handler=="function"&&Ee.includes(t.target.nodeName.toUpperCase())===!1&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(i.uid)===-1)}function je(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),me.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function ze(t){const i=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((l,m)=>{const s=parseFloat(l);s&&(i[m]=s)}),i}var Me=ve({name:"touch-swipe",beforeMount(t,{value:i,arg:l,modifiers:m}){if(m.mouse!==!0&&M.has.touch!==!0)return;const s=m.mouseCapture===!0?"Capture":"",n={handler:i,sensitivity:ze(l),direction:ae(m),noop:pe,mouseStart(o){oe(o,n)&&fe(o)&&(G(n,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(o,!0))},touchStart(o){if(oe(o,n)){const c=o.target;G(n,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),n.start(o)}},start(o,c){M.is.firefox===!0&&K(t,!0);const _=ne(o);n.event={x:_.left,y:_.top,time:Date.now(),mouse:c===!0,dir:!1}},move(o){if(n.event===void 0)return;if(n.event.dir!==!1){H(o);return}const c=Date.now()-n.event.time;if(c===0)return;const _=ne(o),w=_.left-n.event.x,u=Math.abs(w),b=_.top-n.event.y,f=Math.abs(b);if(n.event.mouse!==!0){if(u<n.sensitivity[1]&&f<n.sensitivity[1]){n.end(o);return}}else if(window.getSelection().toString()!==""){n.end(o);return}else if(u<n.sensitivity[2]&&f<n.sensitivity[2])return;const x=u/c,I=f/c;n.direction.vertical===!0&&u<f&&u<100&&I>n.sensitivity[0]&&(n.event.dir=b<0?"up":"down"),n.direction.horizontal===!0&&u>f&&f<100&&x>n.sensitivity[0]&&(n.event.dir=w<0?"left":"right"),n.direction.up===!0&&u<f&&b<0&&u<100&&I>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&u<f&&b>0&&u<100&&I>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&u>f&&w<0&&f<100&&x>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&u>f&&w>0&&f<100&&x>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(H(o),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),je(),n.styleCleanup=B=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const S=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(S,50):S()}),n.handler({evt:o,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:c,distance:{x:u,y:f}})):n.end(o)},end(o){n.event!==void 0&&(X(n,"temp"),M.is.firefox===!0&&K(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),o!==void 0&&n.event.dir!==!1&&H(o),n.event=void 0)}};if(t.__qtouchswipe=n,m.mouse===!0){const o=m.mouseCapture===!0||m.mousecapture===!0?"Capture":"";G(n,"main",[[t,"mousedown","mouseStart",`passive${o}`]])}M.has.touch===!0&&G(n,"main",[[t,"touchstart","touchStart",`passive${m.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,i){const l=t.__qtouchswipe;l!==void 0&&(i.oldValue!==i.value&&(typeof i.value!="function"&&l.end(),l.handler=i.value),l.direction=ae(i.modifiers))},beforeUnmount(t){const i=t.__qtouchswipe;i!==void 0&&(X(i,"main"),X(i,"temp"),M.is.firefox===!0&&K(t,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete t.__qtouchswipe)}});function Oe(){const t=new Map;return{getCache:function(i,l){return t[i]===void 0?t[i]=l:t[i]},getCacheWithFn:function(i,l){return t[i]===void 0?t[i]=l():t[i]}}}const Re={name:{required:!0},disable:Boolean},se={setup(t,{slots:i}){return()=>y("div",{class:"q-panel scroll",role:"tabpanel"},ee(i.default))}},Ue={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Le=["update:modelValue","beforeTransition","transition"];function Qe(){const{props:t,emit:i,proxy:l}=Z(),{getCacheWithFn:m}=Oe();let s,n;const o=J(null),c=J(null);function _(a){const v=t.vertical===!0?"up":"left";k((l.$q.lang.rtl===!0?-1:1)*(a.direction===v?1:-1))}const w=h(()=>[[Me,_,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),u=h(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),b=h(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),f=h(()=>`--q-transition-duration: ${t.transitionDuration}ms`),x=h(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),I=h(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),B=h(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);$(()=>t.modelValue,(a,v)=>{const P=q(a)===!0?N(a):-1;n!==!0&&V(P===-1?0:P<N(v)?-1:1),o.value!==P&&(o.value=P,i("beforeTransition",a,v),ye(()=>{i("transition",a,v)}))});function S(){k(1)}function L(){k(-1)}function F(a){i("update:modelValue",a)}function q(a){return a!=null&&a!==""}function N(a){return s.findIndex(v=>v.props.name===a&&v.props.disable!==""&&v.props.disable!==!0)}function Q(){return s.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function V(a){const v=a!==0&&t.animated===!0&&o.value!==-1?"q-transition--"+(a===-1?u.value:b.value):null;c.value!==v&&(c.value=v)}function k(a,v=o.value){let P=v+a;for(;P>-1&&P<s.length;){const A=s[P];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){V(a),n=!0,i("update:modelValue",A.props.name),setTimeout(()=>{n=!1});return}P+=a}t.infinite===!0&&s.length!==0&&v!==-1&&v!==s.length&&k(a,a===-1?s.length:-1)}function D(){const a=N(t.modelValue);return o.value!==a&&(o.value=a),!0}function W(){const a=q(t.modelValue)===!0&&D()&&s[o.value];return t.keepAlive===!0?[y(be,I.value,[y(B.value===!0?m(x.value,()=>({...se,name:x.value})):se,{key:x.value,style:f.value},()=>a)])]:[y("div",{class:"q-panel scroll",style:f.value,key:x.value,role:"tabpanel"},[a])]}function g(){if(s.length!==0)return t.animated===!0?[y(ge,{name:c.value},W)]:W()}function T(a){return s=he(ee(a.default,[])).filter(v=>v.props!==null&&v.props.slot===void 0&&q(v.props.name)===!0),s.length}function E(){return s}return Object.assign(l,{next:S,previous:L,goTo:F}),{panelIndex:o,panelDirectives:w,updatePanelsList:T,updatePanelIndex:D,getPanelContent:g,getEnabledPanels:Q,getPanels:E,isValidPanelName:q,keepAliveProps:I,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:k,goToPanel:F,nextPanel:S,previousPanel:L}}var O=le({name:"QCarouselSlide",props:{...Re,imgSrc:String},setup(t,{slots:i}){const l=h(()=>t.imgSrc?{backgroundImage:`url("${t.imgSrc}")`}:{});return()=>y("div",{class:"q-carousel__slide",style:l.value},ee(i.default))}});let R=0;const We={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ge=["update:fullscreen","fullscreen"];function Ke(){const t=Z(),{props:i,emit:l,proxy:m}=t;let s,n,o;const c=J(!1);_e(t)===!0&&$(()=>m.$route.fullPath,()=>{i.noRouteFullscreenExit!==!0&&u()}),$(()=>i.fullscreen,b=>{c.value!==b&&_()}),$(c,b=>{l("update:fullscreen",b),l("fullscreen",b)});function _(){c.value===!0?u():w()}function w(){c.value!==!0&&(c.value=!0,o=m.$el.parentNode,o.replaceChild(n,m.$el),document.body.appendChild(m.$el),R++,R===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:u},ie.add(s))}function u(){c.value===!0&&(s!==void 0&&(ie.remove(s),s=void 0),o.replaceChild(m.$el,n),c.value=!1,R=Math.max(0,R-1),R===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),m.$el.scrollIntoView!==void 0&&setTimeout(()=>{m.$el.scrollIntoView()})))}return we(()=>{n=document.createElement("span")}),re(()=>{i.fullscreen===!0&&w()}),ce(u),Object.assign(m,{toggleFullscreen:_,setFullscreen:w,exitFullscreen:u}),{inFullscreen:c,toggleFullscreen:_}}const He=["top","right","bottom","left"],Xe=["regular","flat","outline","push","unelevated"];var Ye=le({name:"QCarousel",props:{...Ve,...Ue,...We,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:t=>Xe.includes(t),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:t=>He.includes(t)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ge,...Le],setup(t,{slots:i}){const{proxy:{$q:l}}=Z(),m=$e(t,l);let s=null,n;const{updatePanelsList:o,getPanelContent:c,panelDirectives:_,goToPanel:w,previousPanel:u,nextPanel:b,getEnabledPanels:f,panelIndex:x}=Qe(),{inFullscreen:I}=Ke(),B=h(()=>I.value!==!0&&t.height!==void 0?{height:t.height}:{}),S=h(()=>t.vertical===!0?"vertical":"horizontal"),L=h(()=>`q-carousel q-panel-parent q-carousel--with${t.padding===!0?"":"out"}-padding`+(I.value===!0?" fullscreen":"")+(m.value===!0?" q-carousel--dark q-dark":"")+(t.arrows===!0?` q-carousel--arrows-${S.value}`:"")+(t.navigation===!0?` q-carousel--navigation-${Q.value}`:"")),F=h(()=>{const g=[t.prevIcon||l.iconSet.carousel[t.vertical===!0?"up":"left"],t.nextIcon||l.iconSet.carousel[t.vertical===!0?"down":"right"]];return t.vertical===!1&&l.lang.rtl===!0?g.reverse():g}),q=h(()=>t.navigationIcon||l.iconSet.carousel.navigationIcon),N=h(()=>t.navigationActiveIcon||q.value),Q=h(()=>t.navigationPosition||(t.vertical===!0?"right":"bottom")),V=h(()=>({color:t.controlColor,textColor:t.controlTextColor,round:!0,[t.controlType]:!0,dense:!0}));$(()=>t.modelValue,()=>{t.autoplay&&k()}),$(()=>t.autoplay,g=>{g?k():s!==null&&(clearTimeout(s),s=null)});function k(){const g=Pe(t.autoplay)===!0?Math.abs(t.autoplay):5e3;s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,g>=0?b():u()},g)}re(()=>{t.autoplay&&k()}),ce(()=>{s!==null&&clearTimeout(s)});function D(g,T){return y("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${Q.value}`+(t.controlColor!==void 0?` text-${t.controlColor}`:"")},[y("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(T))])}function W(){const g=[];if(t.navigation===!0){const T=i["navigation-icon"]!==void 0?i["navigation-icon"]:a=>y(Y,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),E=n-1;g.push(D("buttons",(a,v)=>{const P=a.props.name,A=x.value===v;return T({index:v,maxIndex:E,name:P,active:A,btnProps:{icon:A===!0?N.value:q.value,size:"sm",...V.value},onClick:()=>{w(P)}})}))}else if(t.thumbnails===!0){const T=t.controlColor!==void 0?` text-${t.controlColor}`:"";g.push(D("thumbnails",E=>{const a=E.props;return y("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===t.modelValue?"":"in"}active`+T,src:a.imgSrc||a["img-src"],onClick:()=>{w(a.name)}})}))}return t.arrows===!0&&x.value>=0&&((t.infinite===!0||x.value>0)&&g.push(y("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${S.value} absolute flex flex-center`},[y(Y,{icon:F.value[0],...V.value,onClick:u})])),(t.infinite===!0||x.value<n-1)&&g.push(y("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${S.value} absolute flex flex-center`},[y(Y,{icon:F.value[1],...V.value,onClick:b})]))),Ce(i.control,g)}return()=>(n=o(i),y("div",{class:L.value,style:B.value},[xe("div",{class:"q-carousel__slides-container"},c(),"sl-cont",t.swipeable,()=>_.value)].concat(W())))}}),ue="/assets/google-play-badge.f72611e2.png",de="/assets/apple-store-badge.1d899ab4.png",Je="/assets/sekolah-ananda.c9e68a77.png",Ze="/assets/dgm-wallet.5a4eaea1.png",et="/assets/daikin.3ef97f88.png",tt="/assets/axl-parfume.c7db00b7.png",nt="/assets/kio-property.cbbf12be.png";const U=t=>(Ae("data-v-6299e6dc"),t=t(),Be(),t),it={class:"q-pa-md"},at={class:"q-gutter-md"},ot=U(()=>e("div",{name:"sekolah-ananda",class:"content"},[e("div",{class:"content-title"},"Sekolah Ananda"),e("div",{class:"content-description"},[d(" Developing a website for administrators and teachers started to be easier for me. But, again I faced"),e("br"),d(" new challenges in my front-end developer career as I have to developing mobile apps for both"),e("br"),d(" parent and Student in 1 app. First time building a .aab file format for iOS and figuring out the "),e("br"),d(" javascript router and validation is a great experience for my future project. I did a little"),e("br"),d(" research about Selenium for automated testing and gain a basic knowledge of it. "),e("br"),e("br"),e("div",{class:"flex"},[e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"What I did:"),e("div",{class:"content-list-item"},"Implemented Figma design to code"),e("div",{class:"content-list-item"},"Created functions"),e("div",{class:"content-list-item"},"Implemented APIs"),e("div",{class:"content-list-item"},"Testing & bug fixing"),e("div",{class:"content-list-item"},"Build app for development & production")]),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"Key features:"),e("div",{class:"content-list-item"},"View Student Grades"),e("div",{class:"content-list-item"},"Download Student Report Cards"),e("div",{class:"content-list-item"},"View Tuition Fee Bills"),e("div",{class:"content-list-item"},"Upload Tuition Fee Payment")])])]),e("div",{class:"flex items-center"},[e("div",{class:"col-md-2",style:{"margin-right":"25px"}},[e("img",{src:ue,alt:"Google Play",class:"download-google",onclick:"window.open('https://play.google.com/store/apps/details?id=com.sekolahananda.app')"})]),e("div",{class:"col-md-2"},[e("img",{src:de,alt:"Apple Store",class:"download-apple",onclick:"window.open('https://apps.apple.com/id/app/sekolah-ananda-bagan-batu/id6444584583')"})])])],-1)),st=U(()=>e("div",{name:"sekolah-ananda",class:"content"},[e("div",{class:"content-title"},"DGM Wallet"),e("div",{class:"content-description"},[d(" We all know how to use the e-wallet app (e.g. OVO, Gopay), right? But, have you ever imagined"),e("br"),d(" how it works behind the beautiful UI? Yep, developing an e-wallet web app for the administrators"),e("br"),d(" and users is a new experience for me. I learned about the flow of payment, how to use a device camera"),e("br"),d(" to take a payment receipt photo and how to access the gallery, and implementing the digital e-wallet"),e("br"),d(" design is fun for me as well. "),e("br"),e("br"),e("div",{class:"flex"},[e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"What I did:"),e("div",{class:"content-list-item"},"Design (admin only)"),e("div",{class:"content-list-item"},"Implemented Figma design to code"),e("div",{class:"content-list-item"},"Created functions & implemented APIs"),e("div",{class:"content-list-item"},"Implemented Payment Gateway & camera Access"),e("div",{class:"content-list-item"},"Testing & bug fixing"),e("div",{class:"content-list-item"},"Build app for development & production")]),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"Key features:"),e("div",{class:"content-list-item"},"Top Up Wallet with ATM Transfer & payment Gateway"),e("div",{class:"content-list-item"},"View Top Up History"),e("div",{class:"content-list-item"},"View Transaction History"),e("div",{class:"content-list-item"},"Upload Top Up Payment")])])]),e("div",{class:"flex items-center"},[d(" Comming soon on "),e("div",{class:"col-md-2",style:{"margin-right":"25px"}},[e("img",{src:ue,alt:"Google Play",class:"download-google"})]),e("div",{class:"col-md-2"},[e("img",{src:de,alt:"Apple Store",class:"download-apple"})])])],-1)),lt=U(()=>e("div",{name:"daikin-contact",class:"content"},[e("div",{class:"content-title"},"Daikin Contact Message"),e("div",{class:"content-description"},[d(" A mini project to develop a contact message website for the administrators. FYI, to make this kind of website only"),e("br"),d(" took approximately 2-3 hours. So, if you urgently need this kind of website feel free to hit me up! xoxo. "),e("br"),e("br"),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"What I did:"),e("div",{class:"content-list-item"},"Design & Implemented to code"),e("div",{class:"content-list-item"},"Created functions & Implemented APIs"),e("div",{class:"content-list-item"},"Testing & bug fixing"),e("div",{class:"content-list-item"},"Build app for development & production")]),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"Key features:"),e("div",{class:"content-list-item"},"Receiving message from users"),e("div",{class:"content-list-item"},"View message details"),e("div",{class:"content-list-item"},"Export to csv")])])],-1)),rt=U(()=>e("div",{name:"axl-parfume",class:"content"},[e("div",{class:"content-title"},"AXL Parfume"),e("div",{class:"content-description"},[d(" This is my very first project and I worked on this since my internship period. I build it with"),e("br"),d(" Quasar Framework for all super admin, administrators, and users. I learned so many things from this"),e("br"),d(" project from building reusable functions and components, javascript functionality, to designing responsive"),e("br"),d(" UI using scss. Due to some reason, I did a remake for the users website using NuxtJs and implement new features"),e("br"),d(" such asSSR and SEO implementation. This is my most time-consuming project I've done & the proudest"),e("br"),d(" achivement so far. "),e("br"),e("br"),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"What I did:"),e("div",{class:"content-list-item"},"Implemented Figma design to code"),e("div",{class:"content-list-item"},"Created functions & implemented APIs"),e("div",{class:"content-list-item"},"Implemented Payment Gateway & affiliate system"),e("div",{class:"content-list-item"},"Implemented SSR for better SEO"),e("div",{class:"content-list-item"},"Testing & bug fixing"),e("div",{class:"content-list-item"},"Build app for development & production")]),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"Key features:"),e("div",{class:"content-list-item"},"View & checkout products"),e("div",{class:"content-list-item"},"View affiliate & withdraw commission"),e("div",{class:"content-list-item"},"View order histoy & deposit"),e("div",{class:"content-list-item"},"Upload order payment using bank transfer"),e("div",{class:"content-list-item"},"Pay with Payment Gateway")])])],-1)),ct=U(()=>e("div",{name:"kio-property",class:"content"},[e("div",{class:"content-title"},"KIO Homes"),e("div",{class:"content-description"},[d(" Developed a responsive website for administrators and users using Quasar Framework,"),e("br"),d(" I faced challenging things, especially in implementing the design and flow to the code."),e("br"),d(" Because it's a new design style for me at that moment so I have to do some research and"),e("br"),d(" try out about the design flow and transfer it into code."),e("br"),d(" I successfully created the expected website from the client. "),e("br"),e("br"),e("div",{class:"flex"},[e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"What I did:"),e("div",{class:"content-list-item"},"Implemented Figma design to code"),e("div",{class:"content-list-item"},"Created functions & implemented APIs"),e("div",{class:"content-list-item"},"Testing & bug fixing"),e("div",{class:"content-list-item"},"Build app for development & production")]),e("div",{class:"content-list"},[e("div",{class:"content-list-title"},"Key features:"),e("div",{class:"content-list-item"},"Submit application"),e("div",{class:"content-list-item"},"Submit prequestion"),e("div",{class:"content-list-item"},"View & submit documents"),e("div",{class:"content-list-item"},"View & calculate illustration")])])])],-1)),ut={__name:"ProjectsPage",setup(t){const{ref:i}=Ne(),l=i("sekolah-ananda");return(m,s)=>(Se(),ke(Fe,null,{default:p(()=>[e("div",it,[e("div",at,[r(Ye,{modelValue:qe(l),"onUpdate:modelValue":s[0]||(s[0]=n=>Te(l)?l.value=n:null),"transition-prev":"jump-right","transition-next":"jump-left",swipeable:"",infinite:"",animated:"","control-color":"grey","prev-icon":"arrow_left","next-icon":"arrow_right",arrows:""},{default:p(()=>[r(O,{name:"sekolah-ananda",class:"column no-wrap flex-center"},{default:p(()=>[r(j,{class:"my-card"},{default:p(()=>[r(C,{horizontal:""},{default:p(()=>[r(C,null,{default:p(()=>[ot]),_:1}),r(z,{class:"my-card-img",src:Je})]),_:1})]),_:1})]),_:1}),r(O,{name:"dgm-wallet",class:"column no-wrap flex-center"},{default:p(()=>[r(j,{class:"my-card"},{default:p(()=>[r(C,{horizontal:""},{default:p(()=>[r(C,null,{default:p(()=>[st]),_:1}),r(z,{class:"my-card-img",src:Ze})]),_:1})]),_:1})]),_:1}),r(O,{name:"daikin-contact-message",class:"column no-wrap flex-center"},{default:p(()=>[r(j,{class:"my-card"},{default:p(()=>[r(C,{horizontal:""},{default:p(()=>[r(C,null,{default:p(()=>[lt]),_:1}),r(z,{class:"my-card-img-horizontal",src:et})]),_:1})]),_:1})]),_:1}),r(O,{name:"axl-parfume",class:"column no-wrap flex-center"},{default:p(()=>[r(j,{class:"my-card"},{default:p(()=>[r(C,{horizontal:""},{default:p(()=>[r(C,null,{default:p(()=>[rt]),_:1}),r(z,{class:"my-card-img-horizontal",src:tt})]),_:1})]),_:1})]),_:1}),r(O,{name:"kio-property",class:"column no-wrap flex-center"},{default:p(()=>[r(j,{class:"my-card"},{default:p(()=>[r(C,{horizontal:""},{default:p(()=>[r(C,null,{default:p(()=>[ct]),_:1}),r(z,{class:"my-card-img-horizontal",src:nt})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])])]),_:1}))}};var gt=Ie(ut,[["__scopeId","data-v-6299e6dc"]]);export{gt as default};
