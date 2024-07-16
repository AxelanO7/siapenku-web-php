import{m as x,o as b,c as w,w as u,b as l,u as t,r as h,p as _,T as k,i as y,e as v,a as s,k as S,l as m,v as p,F as B,Z as q,g as j,j as C}from"./app-DG7Pnb8T.js";import{x as P,l as U,c as I,o as L}from"./utils-n-rw4XTg.js";import{C as A}from"./check-D0oBFcyD.js";import{_ as V}from"./index-BpJ8zUNK.js";import{A as g}from"./auth_helper-CPMV5Pt2.js";import{S as d}from"./sweetalert2.all-BQIjdqMU.js";const $={__name:"Checkbox",props:{defaultChecked:{type:Boolean,required:!1},checked:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},value:{type:String,required:!1},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:checked"],setup(f,{emit:a}){const n=f,c=a,o=x(()=>{const{class:r,...i}=n;return i}),e=P(o,c);return(r,i)=>(b(),w(t(L),_(t(e),{class:t(I)("peer h-4 w-4 shrink-0 rounded-sm border border-slate-200 border-slate-900 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:data-[state=checked]:bg-slate-50 dark:data-[state=checked]:text-slate-900",n.class)}),{default:u(()=>[l(t(U),{class:"flex h-full w-full items-center justify-center text-current"},{default:u(()=>[h(r.$slots,"default",{},()=>[l(t(A),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}},N={class:"flex items-center justify-center py-20 px-4 bg-blue-400 space-x-12 w-screen h-screen select-none"},D={class:"flex w-full px-20"},K=s("div",{class:"flex items-center justify-center grow"},[s("img",{src:"/assets/images/logo.png",class:"object-cover"})],-1),M=s("p",{class:"font-black text-2xl text-center tracking-widest"}," SIAPENKU ",-1),O={class:"flex flex-col items-center justify-center mx-auto space-y-8 mt-16"},T={class:"flex transition duration-300 ease-in-out justify-between mt-4 text-sm"},E=s("p",{class:"my-auto"},"Ingat Saya",-1),F=s("p",{class:"my-auto"},"Lupa password ?",-1),R={class:"flex justify-center mt-12"},H=s("p",{class:"mt-8 text-center font-semibold"}," Sistem Pengolahan Data Administrasi Desa Balian Kecamatan Kabutambangan ",-1),X={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(f){const a=k({name:"",password:"",remember:!1}),n=()=>a.name?a.password?!0:(d.fire({icon:"error",title:"Oops...",text:"Password tidak boleh kosong"}),!1):(d.fire({icon:"error",title:"Oops...",text:"Username tidak boleh kosong"}),!1),c=async()=>{if(!n())return;const o=await g.getBaseUrl();console.log({baseUrl:o}),C.post(`${o}/login`,{name:a.name,password:a.password}).then(async e=>{localStorage.setItem("token",e.data.token);const r=e.data.user.role,i=await g.getRoleString(r);localStorage.setItem("role",i),d.fire({icon:"success",title:"Login berhasil",showConfirmButton:!1,timer:1500}),window.location.href="/"}).catch(e=>{d.fire({icon:"error",title:"Oops...",text:"Login gagal"})})};return y(()=>{localStorage.clear()}),(o,e)=>(b(),v(B,null,[l(t(q),{title:"Log in"}),s("div",N,[s("div",D,[K,s("form",{class:"p-8 bg-blue-range-50 rounded-xl shadow-lg bg-blue-50 max-w-md",onSubmit:S(c,["prevent"])},[M,s("div",O,[m(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=r=>t(a).name=r),onInput:e[1]||(e[1]=r=>t(a).name=r.target.value),placeholder:"Username",class:"border-gray-300 w-full rounded-md"},null,544),[[p,t(a).name]]),m(s("input",{type:"password","onUpdate:modelValue":e[2]||(e[2]=r=>t(a).password=r),onInput:e[3]||(e[3]=r=>t(a).password=r.target.value),class:"border-gray-300 w-full rounded-md",placeholder:"Password"},null,544),[[p,t(a).password]])]),s("div",T,[s("div",{class:"flex space-x-2 cursor-pointer items-center",onClick:e[4]||(e[4]=r=>t(a).remember=!t(a).remember)},[l(t($)),E]),F]),s("div",R,[l(t(V),{class:"px-12"},{default:u(()=>[j("Login")]),_:1})]),H],32)])])],64))}};export{X as default};
