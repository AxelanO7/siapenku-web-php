import{d as r,o as a,e as d,a as s,b as l,u as c,t as u}from"./app-BwaN1s38.js";const w={class:"collapse-title hover:bg-blue-500 flex items-center space-x-4 hover:text-white"},p={__name:"CustomSidebar",props:["title","sidebarRoute","icon"],setup(e){const i=r(window.innerWidth);window.addEventListener("resize",()=>{i.value=window.innerWidth});const n=t=>{window.location.href=t};return(t,o)=>(a(),d("div",{class:"collapse border border-base-300 cursor-pointer",onClick:o[0]||(o[0]=b=>n(e.sidebarRoute))},[s("div",w,[l(c(e.icon),{class:"h-6 w-6"}),s("p",null,u(e.title),1)])]))}};export{p as default};
