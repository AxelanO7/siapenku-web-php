import r from"./CustomAppLayout-DrHFvSw7.js";import{_ as i}from"./CustomCard-D7pAN-O8.js";import{i as c,o as s,c as l,w as u,a as e,e as d,h as m,b as p,F as g}from"./app-DG7Pnb8T.js";import"./CustomSidebar-CxkkTbBr.js";import"./utils-n-rw4XTg.js";import"./auth_helper-CPMV5Pt2.js";const _={class:"flex space-x-12 px-8 mt-8 mb-12 select-none"},k={class:"w-full space-y-4"},h=e("div",{class:"card bg-blue-50 shadow-xl px-8 py-4"},[e("h2",{class:"text-center underline text-2xl font-bold rounded-md"}," Dokumentasi "),e("div",{class:"h-4"}),e("div",{class:"flex-col justify-center space-y-4"},[e("img",{src:"/assets/images/doc_1.jpg",alt:"Dokumentasi",class:"rounded-md w-56"}),e("img",{src:"/assets/images/doc_2.jpg",alt:"Dokumentasi",class:"rounded-md w-56"}),e("img",{src:"/assets/images/doc_3.jpg",alt:"Dokumentasi",class:"rounded-md w-56"})])],-1),B={__name:"MainPage",setup(f){const a=[{title:"Surat Keterangan Miskin",description:"Dokumen pengajuan surat keterangan miskin",shortDescription:"Miskin",cardRoute:"/"},{title:"Surat Keterangan Usaha",description:"Dokumen pengajuan surat keterangan usaha",shortDescription:"Usaha",cardRoute:"/"},{title:"Surat Keterangan KK Baru",description:"Dokumen pengajuan surat keterangan KK baru",shortDescription:"KK Baru",cardRoute:"/"}],o=()=>!!localStorage.getItem("token");return c(()=>{o()||(window.location.href="/login")}),(n,D)=>(s(),l(r,{title:"Dashboard"},{default:u(()=>[e("div",_,[e("div",k,[(s(),d(g,null,m(a,t=>p(i,{key:t.title,title:t.title,description:t.description,shortDescription:t.shortDescription,cardRoute:t.cardRoute},null,8,["title","description","shortDescription","cardRoute"])),64))]),h])]),_:1}))}};export{B as default};
