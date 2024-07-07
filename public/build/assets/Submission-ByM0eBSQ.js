import{T as G,d as g,o as _,e as v,b as n,w as i,a as e,l as c,v as m,u as a,g as d,t as b,F as U,h as $,n as x,j as y}from"./app-BwaN1s38.js";import H from"./CustomAppLayout-M0b7yzQ8.js";import{A as w}from"./auth_helper-DNVZuW5S.js";import{_ as B,C as N,c as k}from"./index-_kASFL3k.js";import{_ as D,a as S,C as A,b as V,c as F,d as L,e as T,f as j,g as P,h as z}from"./PopoverContent-BSdm5e_s.js";import{S as h}from"./sweetalert2.all-DSKFEdmA.js";import"./CustomSidebar-4emok8pJ.js";const J={class:"mx-12 mt-12 mb-8"},q={class:"bg-white rounded-lg shadow-lg"},O={class:"text-center font-medium text-xl pt-4 pb-8"},Q=e("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[e("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),e("div",null,[e("h3",null," Formulir Pengajuan Surat Administrasi Desa Bulian "),e("h3",null,"Kecamatan Kabutambahan"),e("h3",null,"Banjar Dinas Dangin Margi")])],-1),W=e("hr",{class:"border-2 border-black my-4"},null,-1),X={class:"space-y-4 px-8 py-4 text-left"},Y=e("label",{class:"text-base font-bold flex"},[d("Nama "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ee=e("label",{class:"text-base font-bold flex"},[d(" Tempat Lahir "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ae=e("label",{class:"text-base font-bold flex"},[d(" Tanggal Lahir "),e("p",{class:"text-red-500 ml-1"},"*")],-1),le={class:"flex flex-col"},te=e("label",{class:"text-base font-bold flex"},[d(" Jenis Kelamin "),e("p",{class:"text-red-500 ml-1"},"*")],-1),se=e("label",{class:"text-base font-bold flex"},[d("Agama "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ne=e("label",{class:"text-base font-bold flex"},[d("No. KK "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ie=e("label",{class:"text-base font-bold flex"},[d("NIK "),e("p",{class:"text-red-500 ml-1"},"*")],-1),oe=e("label",{class:"text-base font-bold flex"},[d("Alamat "),e("p",{class:"text-red-500 ml-1"},"*")],-1),de=e("label",{class:"text-base font-bold flex"},[d("Kebangsaan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),re=e("label",{class:"text-base font-bold flex"},[d("Keperluan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ue=e("label",{class:"text-base font-bold flex"},[d("Lampiran "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ce={class:"flex justify-end mt-8"},me=["disabled"],ye={__name:"Submission",setup(fe){const l=G({name:"",birthPlace:"",birthDate:"",gender:"",religion:"",familyCard:"",identityCard:"",address:"",nationality:"",needs:"",attachmentName:"",attachment:null}),I=async()=>{p.value=!0;const o=await w.getBaseUrl();y.post(`${o}/letter`,{name:l.name,birth_place:l.birthPlace,birth_date:l.birthDate,gender:l.gender,religion:l.religion,family_card:l.familyCard,identity_card:l.identityCard,address:l.address,nationality:l.nationality,needs:l.needs,attachment:l.attachmentName,status:"pending"}).then(s=>{h.fire({icon:"success",title:"Berhasil mengirimkan data",showConfirmButton:!1,timer:1500});const t=s.data.data.id;E(t,l.attachment)}).catch(s=>{h.fire({icon:"error",title:"Gagal mengirimkan data",showConfirmButton:!1,timer:1500})}),p.value=!1},R=async(o,s)=>{const t=await w.getBaseUrl(),r={name:l.name,birth_place:l.birthPlace,birth_date:l.birthDate,gender:l.gender,religion:l.religion,family_card:l.familyCard,identity_card:l.identityCard,address:l.address,nationality:l.nationality,needs:l.needs,attachment:s,status:"pending"};y.put(`${t}/letter/${o}`,r).then(u=>{console.log(u)}).catch(u=>{console.log(u)})},E=async(o,s)=>{const t=new FormData;t.append("file",s);const r=await w.getBaseUrl();y.post(`${r}/letter/file`,t,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>{console.log(u);const Z=u.data.data;R(o,Z)}).catch(u=>{console.log(u)})},M=o=>{if(!/(\.pdf|\.png)$/i.exec(o.target.files[0].name)){h.fire({icon:"error",title:"File harus berupa pdf atau png",showConfirmButton:!1,timer:1500}),o.target.value="";return}if(o.target.files[0].size>2097152){h.fire({icon:"error",title:"File tidak boleh lebih dari 2MB",showConfirmButton:!1,timer:1500}),o.target.value="";return}l.attachmentName=o.target.files[0].name,l.attachment=o.target.files[0],console.log(l.attachment)},C=[{value:"l",label:"Laki-laki"},{value:"p",label:"Perempuan"}],K=[{value:"islam",label:"Islam"},{value:"kristen",label:"Kristen"},{value:"katolik",label:"Katolik"},{value:"hindu",label:"Hindu"},{value:"budha",label:"Budha"},{value:"konghucu",label:"Konghucu"}],f=g(!1);g("");const p=g(!1);return(o,s)=>(_(),v("div",null,[n(H,{title:"Submission"},{default:i(()=>[e("div",J,[e("div",q,[e("div",O,[Q,W,e("div",X,[e("div",null,[Y,c(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>a(l).name=t),placeholder:"Nama",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[m,a(l).name]])]),e("div",null,[ee,c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>a(l).birthPlace=t),placeholder:"Tempat Lahir",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[m,a(l).birthPlace]])]),e("div",null,[ae,c(e("input",{type:"date","onUpdate:modelValue":s[2]||(s[2]=t=>a(l).birthDate=t),placeholder:"Tanggal Lahir",class:"border-gray-300 w-full rounded-md"},null,512),[[m,a(l).birthDate]])]),e("div",le,[te,n(a(D),{open:f.value,"onUpdate:open":s[3]||(s[3]=t=>f.value=t)},{default:i(()=>[n(a(S),{"as-child":""},{default:i(()=>[n(a(B),{variant:"outline",role:"combobox","aria-expanded":f.value,class:"justify-between"},{default:i(()=>{var t;return[d(b(a(l).gender?(t=C.find(r=>r.value===a(l).gender))==null?void 0:t.label:"Jenis kelamin")+" ",1),n(a(A),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(a(V),{class:"p-0"},{default:i(()=>[n(a(F),null,{default:i(()=>[n(a(L),{class:"h-9",placeholder:"Search..."}),n(a(T),null,{default:i(()=>[d("No data found")]),_:1}),n(a(j),null,{default:i(()=>[n(a(P),null,{default:i(()=>[(_(),v(U,null,$(C,t=>n(a(z),{key:t.value,value:t.value,onSelect:r=>{typeof r.detail.value=="string"&&(a(l).gender=r.detail.value),f.value=!1}},{default:i(()=>[d(b(t.label)+" ",1),n(a(N),{class:x(a(k)("ml-auto h-4 w-4",a(l).gender===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),e("div",null,[se,n(a(D),{open:o.openReligion,"onUpdate:open":s[4]||(s[4]=t=>o.openReligion=t)},{default:i(()=>[n(a(S),{"as-child":""},{default:i(()=>[n(a(B),{variant:"outline",role:"combobox","aria-expanded":o.openReligion,class:"w-full justify-between"},{default:i(()=>{var t;return[d(b(a(l).religion?(t=K.find(r=>r.value===a(l).religion))==null?void 0:t.label:"Agama")+" ",1),n(a(A),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(a(V),{class:"p-0"},{default:i(()=>[n(a(F),null,{default:i(()=>[n(a(L),{class:"h-9",placeholder:"Search..."}),n(a(T),null,{default:i(()=>[d("No data found")]),_:1}),n(a(j),null,{default:i(()=>[n(a(P),null,{default:i(()=>[(_(),v(U,null,$(K,t=>n(a(z),{key:t.value,value:t.value,onSelect:r=>{typeof r.detail.value=="string"&&(a(l).religion=r.detail.value),o.openReligion=!1}},{default:i(()=>[d(b(t.label)+" ",1),n(a(N),{class:x(a(k)("ml-auto h-4 w-4",a(l).religion===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),e("div",null,[ne,c(e("input",{"onUpdate:modelValue":s[5]||(s[5]=t=>a(l).familyCard=t),type:"number",placeholder:"No. KK",class:"border-gray-300 w-full rounded-md"},null,512),[[m,a(l).familyCard]])]),e("div",null,[ie,c(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>a(l).identityCard=t),type:"number",placeholder:"NIK",class:"border-gray-300 w-full rounded-md"},null,512),[[m,a(l).identityCard]])]),e("div",null,[oe,c(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>a(l).address=t),placeholder:"Alamat",class:"border-gray-300 w-full rounded-md"},null,512),[[m,a(l).address]])]),e("div",null,[de,c(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>a(l).nationality=t),placeholder:"Kebangsaan",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[m,a(l).nationality]])]),e("div",null,[re,c(e("textarea",{"onUpdate:modelValue":s[9]||(s[9]=t=>a(l).needs=t),placeholder:"Keperluan",class:"border-gray-300 w-full rounded-md",rows:"4",style:{resize:"none"}},null,512),[[m,a(l).needs]])]),e("div",null,[ue,e("input",{type:"file",placeholder:"Lampiran",onChange:M,class:"border-gray-300 w-full text-sm"},null,32)])])])]),e("div",ce,[e("button",{class:x(a(k)("bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",p.value?"opacity-50 cursor-not-allowed":"")),disabled:p.value,onClick:I}," Kirim ",10,me)])])]),_:1})]))}};export{ye as default};
