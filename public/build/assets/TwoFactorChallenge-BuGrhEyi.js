import{d as u,T as b,o as a,e as r,b as o,u as t,w as m,F as c,Z as h,a as i,g as n,k as _,n as C,x as w}from"./app-NL0Z0VXw.js";import{A as V}from"./AuthenticationCard-CFhCd_Ix.js";import{_ as T}from"./AuthenticationCardLogo-BgdGOgLJ.js";import{_ as p,a as v}from"./TextInput-CVldinDb.js";import{_ as g}from"./InputLabel-DNmmAgYH.js";import{_ as $}from"./PrimaryButton-ge6g-aRp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const I={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},U={key:0},B={key:1},F={class:"flex items-center justify-end mt-4"},S={__name:"TwoFactorChallenge",setup(N){const s=u(!1),e=b({code:"",recovery_code:""}),f=u(null),y=u(null),k=async()=>{s.value^=!0,await w(),s.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},x=()=>{e.post(route("two-factor.login"))};return(A,l)=>(a(),r(c,null,[o(t(h),{title:"Two-factor Confirmation"}),o(V,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",I,[s.value?(a(),r(c,{key:1},[n(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),r(c,{key:0},[n(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:_(x,["prevent"])},[s.value?(a(),r("div",B,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(p,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":l[1]||(l[1]=d=>t(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(a(),r("div",U,[o(g,{for:"code",value:"Code"}),o(p,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":l[0]||(l[0]=d=>t(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",F,[i("button",{type:"button",class:"text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",onClick:_(k,["prevent"])},[s.value?(a(),r(c,{key:1},[n(" Use an authentication code ")],64)):(a(),r(c,{key:0},[n(" Use a recovery code ")],64))]),o($,{class:C(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>[n(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{S as default};
