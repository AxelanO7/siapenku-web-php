<<<<<<<< HEAD:public/build/assets/Detail-B2xjf9tK.js
import x from"./CustomAppLayout-Cn2j_n2O.js";import{A as m}from"./auth_helper-BszlIFpL.js";import{d as v,i as b,o as n,e as r,b as w,w as K,j as h,a as t,F as B,h as $,t as c,g as y,f as D}from"./app-Mv1FYOcs.js";import{S as d}from"./sweetalert2.all-DoXgCx5M.js";import"./CustomSidebar-BLHsWyrZ.js";const N={class:"mx-12 mt-12"},C={class:"bg-white rounded-lg shadow-lg"},V={class:"text-center font-medium text-xl pt-4 pb-8"},A=t("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[t("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),t("div",null,[t("h3",null," Formulir Pengajuan Surat Administrasi Desa Bulian "),t("h3",null,"Kecamatan Kabutambahan"),t("h3",null,"Banjar Dinas Dangin Margi")])],-1),S=t("hr",{class:"border-2 border-black my-4"},null,-1),T={class:"space-y-2 px-8"},j={class:"flex text-left"},L={key:0,class:"flex w-full"},U={class:"w-1/3"},k=["onClick"],F={key:1,class:"w-2/3"},W={__name:"Detail",setup(I){const l=window.location.href.split("/").pop(),_=async()=>{const e=await m.getBaseUrl(),s=o.value;s.status="sending",h.put(`${e}/letter/${l}`,s).then(i=>{console.log(i),d.fire({icon:"success",title:"Berhasil",text:"Berhasil divalidasi"}),window.location.href=`/village-chief/recommendation/${l}`}).catch(i=>{d.fire({icon:"error",title:"Gagal",text:"Gagal divalidasi"}),console.log(i)})},o=v(),g=async()=>{const e=await m.getBaseUrl();await h.get(`${e}/letter/${l}`).then(s=>{const i=s.data.data;o.value=i}).catch(s=>{console.log(s)})},p=e=>{switch(e){case"id":return"ID";case"status":return"Status";case"created_at":return"Dibuat pada";case"updated_at":return"Diperbarui pada";case"nik":return"NIK";case"name":return"Nama";case"birth_place":return"Tempat Lahir";case"birth_date":return"Tanggal Lahir";case"gender":return"Jenis Kelamin";case"religion":return"Agama";case"address":return"Alamat";case"family_card":return"Nomor Kartu Keluarga";case"identity_card":return"Nomor KTP";case"nationality":return"Kewarganegaraan";case"needs":return"Keperluan";case"attachment":return"Lampiran"}},u=e=>{d.fire({title:"Lampiran",text:e,imageUrl:`/files/${e}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})};return b(()=>{g()}),(e,s)=>(n(),r("div",null,[w(x,{title:"Submission"},{default:K(()=>[t("div",N,[t("div",C,[t("div",V,[A,S,t("div",T,[(n(!0),r(B,null,$(o.value,(i,a,G)=>(n(),r("div",j,[a!=="id"&&a!=="status"&&a!=="created_at"&&a!=="updated_at"&&a!=="no_letter"&&a!=="type_letter"&&a!=="name_witness"&&a!=="position_witness"&&a!=="kasi_id"&&a!=="kadus_id"&&a!=="kadus"&&a!=="kasi"?(n(),r("div",L,[t("div",U,[t("h3",null,c(p(a)),1)]),a==="attachment"?(n(),r("div",{key:0,class:"w-2/3 flex",onClick:f=>u(i)},[y(" : "),t("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:s[0]||(s[0]=f=>u(o.value.attachment))},c(o.value.attachment),1)],8,k)):(n(),r("div",F," : "+c(i),1))])):D("",!0)]))),256))])])]),t("div",{class:"flex justify-end mt-8"},[t("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:_}," Validasi ")])])]),_:1})]))}};export{W as default};
========
import x from"./CustomAppLayout-BDgcpfAb.js";import{A as m}from"./auth_helper-C2AJogAg.js";import{d as v,i as b,o as n,e as r,b as w,w as K,j as h,a as t,F as B,h as $,t as c,g as y,f as D}from"./app-D2BlShc-.js";import{S as d}from"./sweetalert2.all-CHxwCVRs.js";import"./CustomSidebar-hxCUpzyd.js";const N={class:"mx-12 mt-12"},C={class:"bg-white rounded-lg shadow-lg"},V={class:"text-center font-medium text-xl pt-4 pb-8"},A=t("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[t("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),t("div",null,[t("h3",null," Formulir Pengajuan Surat Administrasi Desa Bulian "),t("h3",null,"Kecamatan Kabutambahan"),t("h3",null,"Banjar Dinas Dangin Margi")])],-1),S=t("hr",{class:"border-2 border-black my-4"},null,-1),T={class:"space-y-2 px-8"},j={class:"flex text-left"},L={key:0,class:"flex w-full"},U={class:"w-1/3"},k=["onClick"],F={key:1,class:"w-2/3"},W={__name:"Detail",setup(I){const l=window.location.href.split("/").pop(),_=async()=>{const e=await m.getBaseUrl(),s=o.value;s.status="sending",h.put(`${e}/letter/${l}`,s).then(i=>{console.log(i),d.fire({icon:"success",title:"Berhasil",text:"Berhasil divalidasi"}),window.location.href=`/village-chief/recommendation/${l}`}).catch(i=>{d.fire({icon:"error",title:"Gagal",text:"Gagal divalidasi"}),console.log(i)})},o=v(),g=async()=>{const e=await m.getBaseUrl();await h.get(`${e}/letter/${l}`).then(s=>{const i=s.data.data;o.value=i}).catch(s=>{console.log(s)})},p=e=>{switch(e){case"id":return"ID";case"status":return"Status";case"created_at":return"Dibuat pada";case"updated_at":return"Diperbarui pada";case"nik":return"NIK";case"name":return"Nama";case"birth_place":return"Tempat Lahir";case"birth_date":return"Tanggal Lahir";case"gender":return"Jenis Kelamin";case"religion":return"Agama";case"address":return"Alamat";case"family_card":return"Nomor Kartu Keluarga";case"identity_card":return"Nomor KTP";case"nationality":return"Kewarganegaraan";case"needs":return"Keperluan";case"attachment":return"Lampiran"}},u=e=>{d.fire({title:"Lampiran",text:e,imageUrl:`/files/${e}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})};return b(()=>{g()}),(e,s)=>(n(),r("div",null,[w(x,{title:"Submission"},{default:K(()=>[t("div",N,[t("div",C,[t("div",V,[A,S,t("div",T,[(n(!0),r(B,null,$(o.value,(i,a,G)=>(n(),r("div",j,[a!=="id"&&a!=="status"&&a!=="created_at"&&a!=="updated_at"&&a!=="no_letter"&&a!=="type_letter"&&a!=="name_witness"&&a!=="position_witness"&&a!=="kasi_id"&&a!=="kadus_id"&&a!=="kadus"&&a!=="kasi"?(n(),r("div",L,[t("div",U,[t("h3",null,c(p(a)),1)]),a==="attachment"?(n(),r("div",{key:0,class:"w-2/3 flex",onClick:f=>u(i)},[y(" : "),t("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:s[0]||(s[0]=f=>u(o.value.attachment))},c(o.value.attachment),1)],8,k)):(n(),r("div",F," : "+c(i),1))])):D("",!0)]))),256))])])]),t("div",{class:"flex justify-end mt-8"},[t("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:_}," Validasi ")])])]),_:1})]))}};export{W as default};
>>>>>>>> origin/dev:public/build/assets/Detail-C9TtXRrB.js
