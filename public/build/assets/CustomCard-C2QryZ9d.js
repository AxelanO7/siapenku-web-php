import{o as a,e as c,a as t,b as r,u as l,t as n}from"./app-NL0Z0VXw.js";function d(e,s){return a(),c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"fill-rule":"evenodd",d:"M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z","clip-rule":"evenodd"})])}const u={class:"flex w-full justify-end pe-8"},h={class:"flex items-center bg-white shadow-md rounded-full p-4 h-10 space-x-2"},_=t("input",{type:"text m-0 text-sm font-light outline-none",placeholder:"Search"},null,-1),g={__name:"CustomSearchInput",setup(e){return(s,o)=>(a(),c("div",u,[t("div",h,[_,r(l(d),{class:"h-6 w-6"})])]))}},p={class:"card bg-blue-50 shadow-xl w-full h-max"},f={class:"card-body"},m={class:"card-title"},x={class:"card-actions"},b={__name:"CustomCard",props:["title","description","shortDescription","cardRoute"],setup(e){const s=o=>{window.location.href=o};return(o,i)=>(a(),c("div",p,[t("div",f,[t("h2",m,n(e.title),1),t("p",null,n(e.description),1),t("p",null,n(e.shortDescription),1),t("div",x,[t("p",{class:"cursor-pointer transition duration-300 ease-in-out hover:text-blue-500 text-right",onClick:i[0]||(i[0]=w=>s(e.cardRoute))}," Lihat >>> ")])])]))}};export{g as _,b as a};
