import i from"./CustomAppLayout-M0b7yzQ8.js";import{_ as c,a as d}from"./CustomCard-CU84VkWY.js";import{i as l,o as a,c as u,w as m,b as s,a as e,e as p,h as _,F as g}from"./app-BwaN1s38.js";import"./CustomSidebar-4emok8pJ.js";import"./auth_helper-DNVZuW5S.js";const h={class:"flex space-x-12 px-8 mt-8 mb-12 select-none"},k={class:"w-full space-y-4"},f=e("div",{class:"card bg-blue-50 shadow-xl px-8 py-4"},[e("h2",{class:"text-center underline text-2xl font-bold rounded-md"}," Dokumentasi "),e("div",{class:"h-4"}),e("div",{class:"flex-col justify-center space-y-4"},[e("img",{src:"/assets/images/doc_1.jpg",alt:"Dokumentasi",class:"rounded-md w-56"}),e("img",{src:"/assets/images/doc_2.jpg",alt:"Dokumentasi",class:"rounded-md w-56"}),e("img",{src:"/assets/images/doc_3.jpg",alt:"Dokumentasi",class:"rounded-md w-56"})])],-1),B={__name:"MainPage",setup(D){const n=[{title:"Surat Keterangan Miskin",description:"Dokumen pengajuan surat keterangan miskin",shortDescription:"Miskin",cardRoute:"/admin/dashboard"},{title:"Surat Keterangan Usaha",description:"Dokumen pengajuan surat keterangan usaha",shortDescription:"Usaha",cardRoute:"/admin/dashboard"},{title:"Surat Keterangan KK Baru",description:"Dokumen pengajuan surat keterangan KK baru",shortDescription:"KK Baru",cardRoute:"/admin/dashboard"}],o=()=>!!localStorage.getItem("token");return l(()=>{o()||(window.location.href="/login")}),(r,x)=>(a(),u(i,{title:"Dashboard"},{default:m(()=>[s(c),e("div",h,[e("div",k,[(a(),p(g,null,_(n,t=>s(d,{key:t.title,title:t.title,description:t.description,shortDescription:t.shortDescription,cardRoute:t.cardRoute},null,8,["title","description","shortDescription","cardRoute"])),64))]),f])]),_:1}))}};export{B as default};
