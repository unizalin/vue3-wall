(function(e){function t(t){for(var n,o,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==c[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},c={app:0},a=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2edc8680":"d4a8c159","chunk-3119b0b4":"2f723b9f","chunk-4ba838a4":"741d11a1","chunk-5429affb":"3917acbd","chunk-6c017b15":"8129f9a9","chunk-80d5d704":"6d2f5a19","chunk-cdf129d6":"0ce70a5f","chunk-d27366f8":"0ea098c7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-2edc8680":1,"chunk-3119b0b4":1,"chunk-5429affb":1,"chunk-80d5d704":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-2edc8680":"69b2c504","chunk-3119b0b4":"d9e59e7f","chunk-4ba838a4":"31d6cfe0","chunk-5429affb":"1be2aeb3","chunk-6c017b15":"31d6cfe0","chunk-80d5d704":"6dcb94e9","chunk-cdf129d6":"31d6cfe0","chunk-d27366f8":"31d6cfe0"}[e]+".css",c=i.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],b.parentNode.removeChild(b),r(a)},b.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){o[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}c[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0365":function(e,t,r){},2992:function(e,t,r){"use strict";r("f21a")},3334:function(e,t,r){},3475:function(e,t,r){},4360:function(e,t,r){"use strict";var n=r("5502"),o=r("5f87"),c=r("b775");function a(e){return Object(c["a"])({url:"/users/signIn",method:"post",data:e})}function s(e){return Object(c["a"])({url:"/users/signUp",method:"post",data:e})}function i(e){return Object(c["a"])({url:"/users/updatePassword",method:"post",data:e})}function u(){return Object(c["a"])({url:"/users/profile/",method:"get"})}function l(e){return Object(c["a"])({url:"/users/getUserInfo/"+e,method:"post"})}function d(e){return Object(c["a"])({url:"/users/updateProfile",method:"patch",data:e})}function b(e){return Object(c["a"])({url:"/users/getLikeList",method:"get",data:e})}function f(e){return Object(c["a"])({url:"/users/allFollowers",method:"get",data:e})}function p(e){return Object(c["a"])({url:"/users/getFollowing",method:"get",data:e})}function m(e){return Object(c["a"])({url:`/users/${e}/follow`,method:"post"})}function h(e){return Object(c["a"])({url:`/users/${e}/unfollow`,method:"delete"})}const O={token:Object(o["b"])(),userName:"",id:Object(o["a"])(),avatar:"",roles:[],usertInfo:{},otherUserProfile:{},likelist:[],followerList:[],followingList:[],userProfile:{},storeUserProfile:{},verifyResponse:{status:""}},j={async login({commit:e},t){try{const{email:r,password:n}=t,c=await a({email:r.trim(),password:n});e("SET_TOKEN",c.user.token),e("SET_NAME",c.user.name),e("SET_AVATAR",c.user.avatar),e("SET_ID",c.user.id),e("SET_VERIFY_RESPONSE",c),Object(o["e"])(c.user.token),Object(o["d"])(c.user.id)}catch(r){return console.log(r),e("SET_VERIFY_RESPONSE",r.response.data),e("SET_TOKEN",""),e("SET_ROLES",[]),Object(o["c"])(),r}},async register({commit:e},t){try{const e=await s(t);return e}catch(r){return r.response.data}},async logout({commit:e}){try{e("SET_TOKEN",""),e("SET_ROLES",[]),Object(o["c"])()}catch(t){return t}},resetLocalStorageToken({commit:e}){return new Promise(t=>{e("SET_TOKEN",""),e("SET_ROLES",[]),Object(o["c"])(),t()})},setDefaultResponse({commit:e}){e("SET_DEFAULT_RESPONSE",{status:""})},async updatePassword({commit:e},t){try{const e=await i({password:t.password,confirmPassword:t.confirmPassword});return e}catch(r){return r}},async getUserProfile({commit:e}){try{const{data:t}=await u();return e("USERPROFILE",t),t}catch(t){return t}},async getStoreUserProfile({commit:e}){try{const{data:t}=await u();e("STOREUSERPROFILE",t)}catch(t){return t}},async updateUserProfile({commit:e},t){const r=await d(t);return r},async getOtherUser({commit:e,state:t,dispatch:r},n){try{const{data:t}=await l(n.id);e("OTHERUSERPROFILE",{name:t.name,followers:t.followers,following:t.following,followersNum:t.followers.length})}catch(o){return o}},async getLikeList({commit:e,state:t}){try{const{data:t}=await b();e("LIKELIST",t)}catch(r){return r}},async getFollowers({commit:e,state:t}){try{const{data:t}=await f();e("FOLLOWERLIST",t[0].followers)}catch(r){return r}},async getFollowing({commit:e,state:t}){try{const{data:t}=await p();e("FOLLOWINGLIST",t.following)}catch(r){return r}},async addFolower({commit:e},t){try{const e=await m(t);return e}catch(r){return r}},async delFolower({commit:e},t){try{const e=await h(t);return e}catch(r){return r}}},_={SET_TOKEN:(e,t)=>{e.token=t},SET_NAME:(e,t)=>{e.userName=t},SET_ID:(e,t)=>{e.id=t},SET_AVATAR:(e,t)=>{e.avatar=t},SET_ROLES:(e,t)=>{e.roles=t},SET_VERIFY_RESPONSE:(e,t)=>{e.verifyResponse.status=t.status},SET_DEFAULT_RESPONSE:e=>{e.verifyResponse.status=""},USERPROFILE:(e,t)=>{e.userProfile=t},STOREUSERPROFILE:(e,t)=>{e.storeUserProfile=t},OTHERUSERPROFILE:(e,t)=>{e.otherUserProfile=t},LIKELIST:(e,t)=>{e.likelist=t},FOLLOWERLIST:(e,t)=>{e.followerList=t},FOLLOWINGLIST:(e,t)=>{e.followingList=t}},g={isLogin:e=>""!==e.token&&null!==e.token,userInfo:e=>{const{userName:t,id:r,avatar:n,roles:o}=e;return{userName:t,id:r,avatar:n,roles:o}},verifyResponse:e=>{const{verifyResponse:t}=e;return t},userProfile:e=>e.userProfile,storeUserProfile:e=>e.storeUserProfile,otherUserProfile:e=>e.otherUserProfile,likeList:e=>e.likelist,followerList:e=>e.followerList,followingList:e=>e.followingList};var w={state:O,actions:j,mutations:_,getters:g,namespaced:!0},P=r("f01d"),y=r.n(P);function v({timeSort:e,keyword:t},r){return e||(e="desc"),t||(t=""),Object(c["a"])({url:`/posts/getAllPosts?timeSort=${e}&keyword=${t}`,method:"GET",data:r})}function S({userId:e,timeSort:t,keyword:r},n){return t||(t="desc"),r||(r=""),Object(c["a"])({url:`/posts/getAllPosts/${e}?timeSort=${t}&keyword=${r}`,method:"GET",params:n})}function E(e){return Object(c["a"])({url:"/posts/getOnePost/"+e,method:"GET"})}function k(e){return Object(c["a"])({url:"/posts/addPost",method:"POST",data:e})}function L(e,t){return Object(c["a"])({url:`/posts/${e}/comment`,method:"POST",data:t})}function T(e,t){return Object(c["a"])({url:`/posts/${e}/likes`,method:"POST",data:t})}function R(e,t){return Object(c["a"])({url:`/posts/${e}/likes`,method:"DELETE",data:t})}const I={publicPosts:[],userPosts:[]},U={async initUserPosts({commit:e}){e("USERPOSTS",[])},async publichPosts({commit:e,state:t,dispatch:r},n={}){const o=await v(n);e("PUBLICPOSTS",o.data)},async getUserPosts({commit:e,state:t,dispatch:r},n={}){const o=await S(n);e("USERPOSTS",o.data)},async addPost({commit:e,dispatch:t},r={}){try{const e=await k(r);return e}catch(n){return n}},async getOnePost({commit:e,state:t,dispatch:r},{postId:n}){try{const e=await E(n);return e}catch(o){return o}},async updateLikes({commit:e},t){try{const e=await T(t);return e}catch(r){return r}},async delLikes({commit:e},t){try{const e=await R(t);return e}catch(r){return r}},async addComment({commit:e},{postId:t,commentData:r}){try{const e=await L(t,{comment:r});return e}catch(n){return n}}},x={PUBLICPOSTS:(e,t)=>{e.publicPosts=t},USERPOSTS:(e,t)=>{e.userPosts=t}},A={publicPosts:e=>e.publicPosts,userPosts:e=>e.userPosts};var N={state:I,actions:U,mutations:x,getters:A,namespaced:!0};t["a"]=Object(n["a"])({modules:{user:w,ui:y.a,post:N}})},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,c,a){const s=Object(n["D"])("router-view");return e.isRouterAlive?(Object(n["w"])(),Object(n["e"])(s,{key:0})):Object(n["f"])("",!0)}var c=r("6605"),a=r("5502"),s=Object(n["l"])({name:"App",setup(){const e=Object(c["f"])(),t=Object(a["b"])();Object(n["s"])(()=>{t.getters["user/isLogin"]||e.push({path:"/login"})}),Object(c["d"])(async(r,n)=>{t.getters["user/isLogin"]||e.push({path:"/login"})});const r=Object(n["B"])(!0),o=()=>{r.value=!1,Object(n["p"])(()=>{r.value=!0})};return Object(n["y"])("reload",o),{isRouterAlive:r}}}),i=(r("7dd5"),r("6b0d")),u=r.n(i);const l=u()(s,[["render",o]]);var d=l,b=r("a18c"),f=r("4360");r("c228");Object(n["d"])(d).use(f["a"]).use(b["a"]).mount("#app")},"5f87":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"d",(function(){return i}));r("852e");const n="Token";function o(){return localStorage.getItem(n)}function c(e){return localStorage.setItem(n,e)}function a(){return localStorage.clear()}function s(){return localStorage.getItem("PID")}function i(e){return localStorage.setItem("PID",e)}},"7dd5":function(e,t,r){"use strict";r("3475")},a18c:function(e,t,r){"use strict";var n=r("6605"),o=r("7a23");const c={class:"app-wrapper"},a={class:"main container"};function s(e,t,r,n,s,i){const u=Object(o["D"])("Header"),l=Object(o["D"])("AppMain"),d=Object(o["D"])("Sidebar");return Object(o["w"])(),Object(o["g"])("div",c,[Object(o["k"])(u),Object(o["h"])("div",a,[Object(o["k"])(l),Object(o["k"])(d)])])}const i={class:"fixed-menu-layout__content container"};function u(e,t,r,n,c,a){const s=Object(o["D"])("router-view");return Object(o["w"])(),Object(o["g"])("section",i,[Object(o["k"])(s,null,{default:Object(o["M"])(({Component:e})=>[Object(o["k"])(o["b"],{name:"scale-slide"},{default:Object(o["M"])(()=>[(Object(o["w"])(),Object(o["e"])(Object(o["E"])(e)))]),_:2},1024)]),_:1})])}var l=Object(o["l"])({name:"AppMain",components:{},setup(){const e=Object(n["f"])(),t=Object(o["c"])(()=>e.path);return{key:t}}}),d=(r("b145"),r("6b0d")),b=r.n(d);const f=b()(l,[["render",u],["__scopeId","data-v-52d22327"]]);var p=f;const m={class:"header pos-sticky"},h={class:"header__container container"},O=Object(o["h"])("div",{class:"logo"},"MetaWall ",-1),j={class:"header__avatar__dropdown"},_={class:"header__avatar__dropdown__content"},g={class:"header__avatar"},w=["src"],P={key:0,class:"header__avatar__dropdown__text",style:{margin__left:"8px"}},y={class:"header__avatar__dropdown__items"},v={class:"header__avatar__dropdown__item"},S=Object(o["j"])("我的貼文牆"),E={class:"header__avatar__dropdown__item"},k=Object(o["j"])("修改個人資料"),L={class:"header__avatar__dropdown__item"},T=Object(o["j"])("註冊"),R={class:"header__avatar__dropdown__item"};function I(e,t,r,n,c,a){const s=Object(o["D"])("router-link");return Object(o["w"])(),Object(o["g"])("div",m,[Object(o["h"])("div",h,[Object(o["k"])(s,{to:"/"},{default:Object(o["M"])(()=>[O]),_:1}),Object(o["h"])("div",j,[Object(o["h"])("div",_,[Object(o["h"])("div",g,[e.userProfile?(Object(o["w"])(),Object(o["g"])("img",{key:0,class:"header__avatar__img",src:e.userProfile.photo?e.userProfile.photo:"../../assets/user_default.png",alt:"avatar"},null,8,w)):Object(o["f"])("",!0)]),e.userProfile?(Object(o["w"])(),Object(o["g"])("p",P,Object(o["G"])(e.userProfile.name),1)):Object(o["f"])("",!0)]),Object(o["h"])("ul",y,[Object(o["h"])("li",v,[e.userProfile?(Object(o["w"])(),Object(o["e"])(s,{key:0,to:"/personal/"+e.userProfile._id},{default:Object(o["M"])(()=>[S]),_:1},8,["to"])):Object(o["f"])("",!0)]),Object(o["h"])("li",E,[Object(o["k"])(s,{to:"/profile/index"},{default:Object(o["M"])(()=>[k]),_:1})]),Object(o["h"])("li",L,[Object(o["k"])(s,{to:"/signup"},{default:Object(o["M"])(()=>[T]),_:1})]),Object(o["h"])("li",R,[Object(o["h"])("a",{onClick:t[0]||(t[0]=(...t)=>e.logout&&e.logout(...t))},"登出")])])])])])}var U=r("5502"),x=Object(o["l"])({name:"Header",components:{},setup(){const e=Object(U["b"])(),t=Object(n["f"])(),r=Object(o["B"])(!1),c=async()=>{await e.dispatch("user/logout"),t.push({path:"/login"})},a=Object(o["c"])(()=>e.getters["user/userInfo"]),s=Object(o["c"])(()=>e.getters["user/userProfile"]);return Object(o["L"])(()=>s.value,e=>{r.value=!0}),Object(o["u"])(async()=>{await e.dispatch("user/getUserProfile")}),{show:r,userInfo:a,userProfile:s,logout:c}}});const A=b()(x,[["render",I]]);var N=A;const F=e=>(Object(o["z"])("data-v-565e2c62"),e=e(),Object(o["x"])(),e),M={class:"fixed-menu-layout__menu end"},D={class:"card"},C=Object(o["j"])("張貼動態"),$={style:{"margin-top":"24px"}},B={class:"avatar"},H=["src"],K={class:"icon-btn__text"},G={style:{"margin-top":"24px"}},V=F(()=>Object(o["h"])("i",{class:"material-icons-outlined icon-btn__icon"},"notifications",-1)),W=F(()=>Object(o["h"])("p",{class:"icon-btn__text"},"追蹤名單",-1)),q={style:{"margin-top":"24px"}},Y=F(()=>Object(o["h"])("i",{class:"material-icons-outlined icon-btn__icon"},"thumb_up",-1)),z=F(()=>Object(o["h"])("p",{class:"icon-btn__text"},"我按讚的文章",-1));function J(e,t,r,n,c,a){const s=Object(o["D"])("router-link");return Object(o["w"])(),Object(o["g"])("div",M,[Object(o["h"])("div",D,[Object(o["k"])(s,{class:"btn",to:"/publishPost/index"},{default:Object(o["M"])(()=>[C]),_:1}),Object(o["h"])("ul",$,[Object(o["h"])("li",null,[Object(o["k"])(s,{to:"/personal/"+e.userProfile._id,class:"icon-btn"},{default:Object(o["M"])(()=>[Object(o["h"])("div",B,[Object(o["h"])("img",{class:"header__avatar__img",src:e.userProfile.photo,alt:"avatar"},null,8,H)]),Object(o["h"])("p",K,Object(o["G"])(e.userProfile.name),1)]),_:1},8,["to"])]),Object(o["h"])("li",G,[Object(o["k"])(s,{to:"/follower/index",class:"icon-btn"},{default:Object(o["M"])(()=>[V,W]),_:1})]),Object(o["h"])("li",q,[Object(o["k"])(s,{to:"/likePosts/index",class:"icon-btn"},{default:Object(o["M"])(()=>[Y,z]),_:1})])])])])}var Q=Object(o["l"])({name:"Sidebar",components:{},setup(){const e=Object(U["b"])(),t=Object(o["c"])(()=>e.getters["user/userProfile"]);return{userProfile:t}}});r("2992");const X=b()(Q,[["render",J],["__scopeId","data-v-565e2c62"]]);var Z=X,ee=Object(o["l"])({name:"Layout",components:{AppMain:p,Header:N,Sidebar:Z}});r("cbc1");const te=b()(ee,[["render",s],["__scopeId","data-v-937d86be"]]);var re=te;const ne=[{path:"/signup",name:"Signup",meta:{title:"註冊"},component:()=>r.e("chunk-5429affb").then(r.bind(null,"1c4f"))},{path:"/login",name:"Login",meta:{title:"登入"},component:()=>r.e("chunk-80d5d704").then(r.bind(null,"a55b"))},{path:"/",name:"Home",component:re,redirect:"/home",children:[{path:"home",component:()=>r.e("chunk-2edc8680").then(r.bind(null,"bb51")),name:"Home",meta:{title:"首頁"}}]},{path:"/profile",component:re,children:[{path:"index",component:()=>r.e("chunk-d27366f8").then(r.bind(null,"c66d")),name:"Profile",meta:{title:"修改個人資料"}}]},{path:"/follower",component:re,children:[{path:"index",component:()=>r.e("chunk-6c017b15").then(r.bind(null,"390f")),name:"Follower",meta:{title:"追蹤名單"}}]},{path:"/likePosts",component:re,children:[{path:"index",component:()=>r.e("chunk-4ba838a4").then(r.bind(null,"098d")),name:"LikePosts",meta:{title:"我按讚的貼文"}}]},{path:"/publishPost",component:re,children:[{path:"index",component:()=>r.e("chunk-cdf129d6").then(r.bind(null,"1bab")),name:"PublishPost",meta:{title:"張貼動態"}}]},{path:"/personal",component:re,children:[{path:":id",component:()=>r.e("chunk-3119b0b4").then(r.bind(null,"90ab")),name:"Personal",meta:{title:"貼文牆"}}]}],oe=Object(n["a"])({history:Object(n["b"])(),routes:ne});t["a"]=oe},b145:function(e,t,r){"use strict";r("0365")},b775:function(e,t,r){"use strict";r("d9e2");var n=r("bc3a"),o=r.n(n),c=r("4360"),a=r("5f87");const s=o.a.create({baseURL:"https://mysterious-bayou-95411.herokuapp.com/",timeout:5e3});s.interceptors.request.use(e=>(c["a"].getters["user/isLogin"]&&(e.headers["Authorization"]="Bearer "+Object(a["b"])()),e),e=>(console.log(e),Promise.reject(e))),s.interceptors.response.use(e=>{const t=e.data,r=e.status;return 200!==r&&201!==r?Promise.reject(new Error(t.message||"Error")):t},e=>(console.log("err"+e),Promise.reject(e))),t["a"]=s},c228:function(e,t,r){},cbc1:function(e,t,r){"use strict";r("3334")},f01d:function(e,t){},f21a:function(e,t,r){}});
//# sourceMappingURL=app.c5efe44f.js.map