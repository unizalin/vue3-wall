(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d27366f8"],{5464:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"e",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return n}));const s=e=>e.length>=2,c=e=>/.+@.+\..+/.test(e),r=e=>/^((?=\S*?[A-Za-z])(?=\S*?[0-9]).{7,})\S$/.test(e),o=(e,t)=>(console.log(e==t),e==t),n=e=>/\.(jpg|png|JPG|PNG|jpeg)$/.test(e)},"685c":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s=a("b775");function c(e){console.log("uploadImage",e);const t=new FormData;return t.append("file",e),Object(s["a"])({url:"/files/uploadImage",method:"POST",data:t})}},c66d:function(e,t,a){"use strict";a.r(t);var s=a("7a23");const c=Object(s["h"])("div",{class:"block-title"}," 修改個人資料 ",-1),r={class:"tabs",style:{"margin-top":"32px","margin-left":"16px"}};function o(e,t,a,o,n,i){const l=Object(s["E"])("EditUserInfo"),u=Object(s["E"])("ResetPassword");return Object(s["x"])(),Object(s["g"])("div",null,[c,Object(s["h"])("ul",r,[Object(s["h"])("li",{class:Object(s["q"])(["tab",{active:"userInfo"===e.tagKey}]),onClick:t[0]||(t[0]=t=>e.clickTag("userInfo"))},"暱稱修改",2),Object(s["h"])("li",{class:Object(s["q"])(["tab",{active:"password"===e.tagKey}]),onClick:t[1]||(t[1]=t=>e.clickTag("password"))},"重設密碼",2)]),Object(s["k"])(s["b"],{name:"fall"},{default:Object(s["N"])(()=>["userInfo"===e.tagKey?(Object(s["x"])(),Object(s["e"])(l,{key:0})):Object(s["f"])("",!0)]),_:1}),Object(s["k"])(s["b"],{name:"fall"},{default:Object(s["N"])(()=>["password"===e.tagKey?(Object(s["x"])(),Object(s["e"])(u,{key:0})):Object(s["f"])("",!0)]),_:1})])}const n={class:"card round-radius"},i={class:"center-container"},l={class:"avatar-upload"},u={class:"avatar"},d=["src"],b=["src"],p={style:{"margin-top":"16px"}},O=Object(s["h"])("label",{for:"upload",class:"text-btn black"},"上傳大頭照",-1),j={class:"user-info"},m=Object(s["h"])("p",{class:"user-info__label"},"暱稱",-1),g={class:"form-input",style:{"margin-top":"4px"}},h={class:"user-info"},f=Object(s["h"])("p",{class:"user-info__label"},"性別",-1),v={class:"form-radio",style:{"margin-top":"8px"}},w={class:"radio"},_=Object(s["h"])("i",{class:"material-icons un-checked radio__input-icon"},"radio_button_unchecked",-1),y=Object(s["h"])("i",{class:"material-icons checked radio__input-icon"},"radio_button_checked",-1),P=Object(s["h"])("p",{class:"radio__input-text"},"男性",-1),k={class:"radio",style:{"margin-left":"32px"}},x=Object(s["h"])("i",{class:"material-icons un-checked radio__input-icon"},"radio_button_unchecked",-1),U=Object(s["h"])("i",{class:"material-icons checked radio__input-icon"},"radio_button_checked",-1),C=Object(s["h"])("p",{class:"radio__input-text"},"女性",-1),I={key:0,class:"user-info__error-message text-align-center",style:{"margin-top":"32px"}},V={key:1,class:"error-message"};function S(e,t,a,c,r,o){return Object(s["x"])(),Object(s["g"])("div",n,[Object(s["h"])("div",i,[Object(s["h"])("div",l,[Object(s["h"])("div",u,[e.preViewImage?(Object(s["x"])(),Object(s["g"])("img",{key:0,class:"avatar__img",src:e.preViewImage},null,8,d)):(Object(s["x"])(),Object(s["g"])("img",{key:1,class:"avatar__img",src:e.storeUserProfile.photo},null,8,b))]),Object(s["h"])("div",p,[O,Object(s["h"])("input",{id:"upload",style:{visibility:"hidden"},type:"file",accept:"image/png, image/gif, image/jpeg",onChange:t[0]||(t[0]=(...t)=>e.showFile&&e.showFile(...t))},null,32)])]),Object(s["h"])("div",j,[m,Object(s["h"])("div",g,[Object(s["O"])(Object(s["h"])("input",{type:"text",name:"nickname",placeholder:"名稱","onUpdate:modelValue":t[1]||(t[1]=t=>e.storeUserProfile.name=t)},null,512),[[s["K"],e.storeUserProfile.name]])])]),Object(s["h"])("div",h,[f,Object(s["h"])("div",v,[Object(s["h"])("label",w,[Object(s["O"])(Object(s["h"])("input",{type:"radio",name:"gender",class:"radio__input","onUpdate:modelValue":t[2]||(t[2]=t=>e.storeUserProfile.sex=t),value:"male",checked:""},null,512),[[s["J"],e.storeUserProfile.sex]]),_,y,P]),Object(s["h"])("label",k,[Object(s["O"])(Object(s["h"])("input",{type:"radio",name:"gender","onUpdate:modelValue":t[3]||(t[3]=t=>e.storeUserProfile.sex=t),value:"female",class:"radio__input"},null,512),[[s["J"],e.storeUserProfile.sex]]),x,U,C])])]),e.errorNameMessageVised?Object(s["f"])("",!0):(Object(s["x"])(),Object(s["g"])("p",I,"名字不能為空 ")),e.errorImageMessageVised?(Object(s["x"])(),Object(s["g"])("p",V,Object(s["H"])(e.errorImageMessage),1)):Object(s["f"])("",!0),Object(s["h"])("button",{class:"btn secondary",onClick:t[4]||(t[4]=(...t)=>e.updateProfile&&e.updateProfile(...t)),style:{"margin-top":"32px"}}," 送出更新 ")])])}var E=a("5502"),K=a("685c"),N=a("5464"),z=Object(s["l"])({name:"EditUserInfo",setup(){const e=Object(E["b"])(),t=Object(s["C"])(""),a=Object(s["C"])(""),c=Object(s["C"])(""),r={noContent:"沒有圖片，請選擇圖片上傳",imageSizeError:"解析度寬度至少 300像素以上，請重新輸入",imageTypeError:"圖片格式錯誤，僅限 JPG、PNG 圖片"},o=Object(s["c"])(()=>e.getters["user/storeUserProfile"]);let n,i=Object(s["C"])(""),l=Object(s["C"])(null),u=Object(s["C"])(!0),d=Object(s["C"])(""),b=Object(s["C"])(!0),p=Object(s["C"])(""),O=Object(s["B"])({}),j=Object(s["B"])({name:"",thumbnail:null,size:null,unit:"KB"});const m=async e=>{O=e.target.files[0],j.name=O.name,j.thumbnail=window.URL.createObjectURL(O),j.size=~~(.001*O.size),i.value=j.name,l.value=URL.createObjectURL(O),j.size>1e3?(u.value=!0,d.value=r.imageSizeError):Object(N["c"])(j.name)?u.value=!1:(u.value=!0,d.value=r.imageTypeError),n=await Object(K["a"])(O)};let g=async()=>{try{if(""===o.value.name)return console.log("sss"),b.value=!1,!1;const t={name:o.value.name,sex:o.value.sex,photo:n?n.data.imageUrl:o.value.photo},a=await e.dispatch("user/updateUserProfile",t);"success"===a.status&&(await e.dispatch("user/getUserProfile"),await e.dispatch("user/getStoreUserProfile"))}catch(t){return t}};return Object(s["u"])(async()=>{await e.dispatch("user/getStoreUserProfile")}),{userName:t,photo:a,gender:c,storeUserProfile:o,showFile:m,preViewImage:l,errorImageMessageVised:u,errorImageMessage:d,errorNameMessageVised:b,errorNameMessage:p,updateProfile:g}}}),M=a("6b0d"),R=a.n(M);const J=R()(z,[["render",S]]);var T=J;const W={class:"card round-radius"},F={class:"center-container"},G={class:"user-password"},L=Object(s["h"])("p",{class:"user-password__label"},"輸入新密碼",-1),q={class:"form-input",style:{"margin-top":"4px"}},B={class:"user-password"},$=Object(s["h"])("p",{class:"user-password__label"},"再次輸入",-1),A={class:"form-input",style:{"margin-top":"4px"}};function D(e,t,a,c,r,o){return Object(s["x"])(),Object(s["g"])("div",W,[Object(s["h"])("div",F,[Object(s["h"])("div",G,[L,Object(s["h"])("div",q,[Object(s["O"])(Object(s["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.password=t),type:"password",name:"password",placeholder:"請輸入新密碼"},null,512),[[s["K"],e.password,void 0,{trim:!0}]])])]),Object(s["h"])("div",B,[$,Object(s["h"])("div",A,[Object(s["O"])(Object(s["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.confirmPassword=t),type:"password",name:"password-confirmation",placeholder:"再次輸入新密碼"},null,512),[[s["K"],e.confirmPassword,void 0,{trim:!0}]])])]),Object(s["h"])("button",{class:Object(s["q"])(["btn",{disabled:!e.checkPassWordSame}]),onClick:t[2]||(t[2]=(...t)=>e.updatePassWord&&e.updatePassWord(...t)),style:{"margin-top":"32px"}},"重設密碼",2)])])}var H=Object(s["l"])({name:"ResetPassword",components:{},setup(){const e=Object(E["b"])(),t=Object(s["C"])(""),a=Object(s["C"])(""),c=Object(s["c"])(()=>t.value===a.value&&Object(N["e"])(t.value)),r=async()=>{c||alert("密碼需至少 8 碼以上，並英文、數字混合");const s=await e.dispatch("user/updatePassword",{password:t.value,confirmPassword:a.value});"success"===s.status&&(alert("成功修改個人資料"),await e.dispatch("user/getUserProfile"))};return{password:t,confirmPassword:a,checkPassWordSame:c,updatePassWord:r}}});const Z=R()(H,[["render",D]]);var Q=Z,X=Object(s["l"])({components:{EditUserInfo:T,ResetPassword:Q},setup(){const e=Object(s["C"])("userInfo");function t(t){e.value=t}return{tagKey:e,clickTag:t}}});const Y=R()(X,[["render",o]]);t["default"]=Y}}]);
//# sourceMappingURL=chunk-d27366f8.a3398cd7.js.map