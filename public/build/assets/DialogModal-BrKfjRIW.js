import{S as p}from"./SectionTitle-BTIqJBzf.js";import{o as h,e as v,b as c,w as n,r as o,a as s,I as x,i as g,H as _,m as b,c as f,l as m,O as u,N as y,n as $,f as k,U as B}from"./app-D2BlShc-.js";const S={class:"md:grid md:grid-cols-3 md:gap-6"},C={class:"mt-5 md:mt-0 md:col-span-2"},E={class:"px-4 py-5 sm:p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg"},A={__name:"ActionSection",setup(e){return(a,t)=>(h(),v("div",S,[c(p,null,{title:n(()=>[o(a.$slots,"title")]),description:n(()=>[o(a.$slots,"description")]),_:3}),s("div",C,[s("div",E,[o(a.$slots,"content")])])]))}},W={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},N=s("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),M=[N],T={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=e,i=a;x(()=>t.show,()=>{t.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const l=()=>{t.closeable&&i("close")},d=r=>{r.key==="Escape"&&t.show&&l()};g(()=>document.addEventListener("keydown",d)),_(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const w=b(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[t.maxWidth]);return(r,O)=>(h(),f(B,{to:"body"},[c(u,{"leave-active-class":"duration-200"},{default:n(()=>[m(s("div",W,[c(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:n(()=>[m(s("div",{class:"fixed inset-0 transform transition-all",onClick:l},M,512),[[y,e.show]])]),_:1}),c(u,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[m(s("div",{class:$(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",w.value])},[e.show?o(r.$slots,"default",{key:0}):k("",!0)],2),[[y,e.show]])]),_:3})],512),[[y,e.show]])]),_:3})]))}},V={class:"px-6 py-4"},z={class:"text-lg font-medium text-gray-900 dark:text-gray-100"},D={class:"mt-4 text-sm text-gray-600 dark:text-gray-400"},L={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 dark:bg-gray-800 text-end"},H={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:a}){const t=a,i=()=>{t("close")};return(l,d)=>(h(),f(T,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:i},{default:n(()=>[s("div",V,[s("div",z,[o(l.$slots,"title")]),s("div",D,[o(l.$slots,"content")])]),s("div",L,[o(l.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{T as _,A as a,H as b};
