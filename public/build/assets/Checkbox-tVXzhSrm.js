import{m as n,l as u,s as l,o as i,e as p}from"./app-BwaN1s38.js";const k=["value"],m={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(e,{emit:r}){const s=r,c=e,t=n({get(){return c.checked},set(o){s("update:checked",o)}});return(o,a)=>u((i(),p("input",{"onUpdate:modelValue":a[0]||(a[0]=d=>t.value=d),type:"checkbox",value:e.value,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,k)),[[l,t.value]])}};export{m as _};
