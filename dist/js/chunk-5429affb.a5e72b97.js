(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5429affb"],{"1c4f":function(e,t,s){"use strict";s.r(t);var a=s("7a23"),c=s("b71a"),i=s.n(c),r=s("de60"),n=s.n(r);const l=e=>(Object(a["A"])("data-v-572e74a5"),e=e(),Object(a["y"])(),e),o={class:"container"},d={class:"row"},b=l(()=>Object(a["h"])("div",{class:"col"},[Object(a["h"])("img",{src:i.a,alt:""})],-1)),u={class:"col"},p={class:"login-block"},O=l(()=>Object(a["h"])("div",{class:"login-title"},[Object(a["h"])("img",{src:n.a,alt:""}),Object(a["h"])("p",{class:"text"},"註冊")],-1)),m={class:"login-input"},j={class:"nickname-msg"},h={class:"email-msg"},g={class:"email-msg"},f={class:"password-msg"},v={class:"password-msg"},w={class:"user-info"},_=l(()=>Object(a["h"])("p",{class:"user-info__label"},"性別",-1)),k={class:"form-radio",style:{"margin-top":"8px"}},P={class:"radio"},x=l(()=>Object(a["h"])("i",{class:"material-icons un-checked radio__input-icon"},"radio_button_unchecked",-1)),V=l(()=>Object(a["h"])("i",{class:"material-icons checked radio__input-icon"},"radio_button_checked",-1)),F=l(()=>Object(a["h"])("p",{class:"radio__input-text"},"男性",-1)),y={class:"radio",style:{"margin-left":"32px"}},C=l(()=>Object(a["h"])("i",{class:"material-icons un-checked radio__input-icon"},"radio_button_unchecked",-1)),E=l(()=>Object(a["h"])("i",{class:"material-icons checked radio__input-icon"},"radio_button_checked",-1)),K=l(()=>Object(a["h"])("p",{class:"radio__input-text"},"女性",-1)),L={class:"btn-block"},U=Object(a["j"])("登入");function J(e,t,s,c,i,r){const n=Object(a["E"])("router-link");return Object(a["x"])(),Object(a["g"])("div",o,[Object(a["h"])("div",d,[b,Object(a["h"])("div",u,[Object(a["h"])("div",p,[O,Object(a["h"])("div",m,[Object(a["h"])("p",null,[Object(a["O"])(Object(a["h"])("input",{type:"text",class:"nickname",placeholder:"暱稱","onUpdate:modelValue":t[0]||(t[0]=t=>e.registerForm.name=t)},null,512),[[a["K"],e.registerForm.name]]),Object(a["O"])(Object(a["h"])("span",j,"暱稱至少 2 個字元以上",512),[[a["L"],!e.isVerifiedNickname]])]),Object(a["h"])("p",null,[Object(a["O"])(Object(a["h"])("input",{type:"email",class:"email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=t=>e.registerForm.email=t)},null,512),[[a["K"],e.registerForm.email]]),Object(a["O"])(Object(a["h"])("span",h,"Email 格式錯誤",512),[[a["L"],!e.isVerifiedEmail]]),Object(a["O"])(Object(a["h"])("span",g,"帳號已被註冊，請替換新的 Email！",512),[[a["L"],e.isEmailRegistered]])]),Object(a["h"])("p",null,[Object(a["O"])(Object(a["h"])("input",{type:"password",class:"password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=t=>e.registerForm.password=t)},null,512),[[a["K"],e.registerForm.password]]),Object(a["O"])(Object(a["h"])("span",f,"密碼需至少 8 碼以上，並英文、數字混合",512),[[a["L"],!e.isVerifiedPassword]])]),Object(a["h"])("p",null,[Object(a["O"])(Object(a["h"])("input",{type:"password",class:"confirmPassword",placeholder:"Confirm Password","onUpdate:modelValue":t[3]||(t[3]=t=>e.registerForm.confirmPassword=t)},null,512),[[a["K"],e.registerForm.confirmPassword]]),Object(a["O"])(Object(a["h"])("span",v,"確認密碼跟密碼不一致",512),[[a["L"],!e.isVerifiedConfirmPassword]])])]),Object(a["h"])("div",w,[_,Object(a["h"])("div",k,[Object(a["h"])("label",P,[Object(a["O"])(Object(a["h"])("input",{type:"radio",name:"gender",class:"radio__input",value:"male","onUpdate:modelValue":t[4]||(t[4]=t=>e.registerForm.sex=t),checked:""},null,512),[[a["J"],e.registerForm.sex]]),x,V,F]),Object(a["h"])("label",y,[Object(a["O"])(Object(a["h"])("input",{type:"radio",name:"gender",value:"female",class:"radio__input","onUpdate:modelValue":t[5]||(t[5]=t=>e.registerForm.sex=t)},null,512),[[a["J"],e.registerForm.sex]]),C,E,K])])]),Object(a["h"])("div",L,[Object(a["h"])("button",{type:"button",class:"btn-signup",onClick:t[6]||(t[6]=(...t)=>e.register&&e.register(...t))},"註冊"),Object(a["k"])(n,{to:"/login",class:"btn-login"},{default:Object(a["N"])(()=>[U]),_:1})])])])])])}var N=s("6605"),S=s("5502"),A=s("5464"),G=Object(a["l"])({name:"PublishPost",components:{},setup(){const e=Object(N["f"])(),t=Object(S["b"])(),s=Object(a["C"])(!0),c=Object(a["C"])(!0),i=Object(a["C"])(!0),r=Object(a["C"])(!0),n=Object(a["C"])(!1),l=Object(a["B"])({name:"",email:"",password:"",confirmPassword:"",sex:"male",photo:"https://i.imgur.com/tpNL3KK.png"}),o=async()=>{if(l.name&&Object(A["d"])(l.name)?s.value=!0:s.value=!1,l.email&&Object(A["b"])(l.email)?c.value=!0:c.value=!1,l.password&&Object(A["e"])(l.password)?i.value=!0:i.value=!1,l.confirmPassword.length>0&&Object(A["a"])(l.password,l.confirmPassword)?r.value=!0:r.value=!1,s.value&&c.value&&i.value&&r.value){const s=await t.dispatch("user/register",{...l});if(console.log(s),"false"==s.status)return alert("信箱已註冊，請更換"),void(n.value=!0);e.push({path:"/login"})}};return{registerForm:l,isVerifiedNickname:s,isVerifiedEmail:c,isEmailRegistered:n,isVerifiedPassword:i,isVerifiedConfirmPassword:r,register:o}}}),R=(s("be82"),s("6b0d")),$=s.n(R);const z=$()(G,[["render",J],["__scopeId","data-v-572e74a5"]]);t["default"]=z},5464:function(e,t,s){"use strict";s.d(t,"d",(function(){return a})),s.d(t,"b",(function(){return c})),s.d(t,"e",(function(){return i})),s.d(t,"a",(function(){return r})),s.d(t,"c",(function(){return n}));const a=e=>e.length>=2,c=e=>/.+@.+\..+/.test(e),i=e=>/^((?=\S*?[A-Za-z])(?=\S*?[0-9]).{7,})\S$/.test(e),r=(e,t)=>(console.log(e==t),e==t),n=e=>/\.(jpg|png|JPG|PNG|jpeg)$/.test(e)},"80cb":function(e,t,s){},b71a:function(e,t,s){e.exports=s.p+"img/img.7dce9c6b.svg"},be82:function(e,t,s){"use strict";s("80cb")},de60:function(e,t,s){e.exports=s.p+"img/MetaWall.d0ffe334.png"}}]);
//# sourceMappingURL=chunk-5429affb.a5e72b97.js.map