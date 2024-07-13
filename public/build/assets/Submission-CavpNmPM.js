import{T as O,d as p,o as b,e as h,b as s,w as n,a as l,l as c,v as f,u as e,g as i,t as m,F as C,h as S,n as v,j as M}from"./app-D5DRvD2D.js";import Q from"./CustomAppLayout-CqBnbx-G.js";import{A as z}from"./auth_helper-DGzngXjf.js";import{_ as N,c as _}from"./index-CoNJNlkU.js";import{_ as U,a as B,C as K,b as $,c as P,d as D,e as j,f as A,g as V,h as L}from"./PopoverContent-CZPVBRCJ.js";import{S as T}from"./sweetalert2.all-aJRC7M3o.js";import{C as F}from"./check-DRO-jrxj.js";import"./CustomSidebar-CX89nF15.js";const X={class:"mx-12 mt-12 mb-8"},Y={class:"bg-white rounded-lg shadow-lg"},ee={class:"text-center font-medium text-xl pt-4 pb-8"},ae=l("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[l("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),l("div",null,[l("h3",null," Formulir Pengajuan Surat Administrasi Desa Bulian "),l("h3",null,"Kecamatan Kabutambahan"),l("h3",null,"Banjar Dinas Dangin Margi")])],-1),le=l("hr",{class:"border-2 border-black my-4"},null,-1),te={class:"space-y-4 px-8 py-4 text-left"},se=l("label",{class:"text-base font-bold flex"},[i("Nama "),l("p",{class:"text-red-500 ml-1"},"*")],-1),ne=l("label",{class:"text-base font-bold flex"},[i(" Tempat Lahir "),l("p",{class:"text-red-500 ml-1"},"*")],-1),oe=l("label",{class:"text-base font-bold flex"},[i(" Tanggal Lahir "),l("p",{class:"text-red-500 ml-1"},"*")],-1),ie={class:"flex flex-col"},de=l("label",{class:"text-base font-bold flex"},[i(" Jenis Kelamin "),l("p",{class:"text-red-500 ml-1"},"*")],-1),re=l("label",{class:"text-base font-bold flex"},[i("Agama "),l("p",{class:"text-red-500 ml-1"},"*")],-1),ue=l("label",{class:"text-base font-bold flex"},[i("No. KK "),l("p",{class:"text-red-500 ml-1"},"*")],-1),ce=l("label",{class:"text-base font-bold flex"},[i("NIK "),l("p",{class:"text-red-500 ml-1"},"*")],-1),fe=l("label",{class:"text-base font-bold flex"},[i("Alamat "),l("p",{class:"text-red-500 ml-1"},"*")],-1),me=l("label",{class:"text-base font-bold flex"},[i("Kebangsaan "),l("p",{class:"text-red-500 ml-1"},"*")],-1),pe=l("label",{class:"text-base font-bold flex"},[i("Keperluan "),l("p",{class:"text-red-500 ml-1"},"*")],-1),be={class:"flex flex-col"},he=l("label",{class:"text-base font-bold flex"},[i(" Status Perkawinan "),l("p",{class:"text-red-500 ml-1"},"*")],-1),ve={class:"flex flex-col"},_e=l("label",{class:"text-base font-bold flex"},[i(" Pekerjaan "),l("p",{class:"text-red-500 ml-1"},"*")],-1),xe=l("label",{class:"text-base font-bold flex"},[i("Lampiran "),l("p",{class:"text-red-500 ml-1"},"*")],-1),ge={class:"flex justify-end mt-8"},ye=["disabled"],Pe={__name:"Submission",setup(we){const t=O({name:"",birthPlace:"",birthDate:"",gender:"",religion:"",familyCard:"",identityCard:"",address:"",nationality:"",needs:"",attachmentName:"",marital_status:"",profession:"",attachment:null}),H=async()=>{k.value=!0;const r=await z.getBaseUrl();M.post(`${r}/letter`,{name:t.name,birth_place:t.birthPlace,birth_date:t.birthDate,gender:t.gender,religion:t.religion,family_card:t.familyCard,identity_card:t.identityCard,address:t.address,nationality:t.nationality,needs:t.needs,attachment:t.attachmentName,marital_status:t.marital_status,profession:t.profession,status:"pending"}).then(o=>{T.fire({icon:"success",title:"Berhasil mengirimkan data",showConfirmButton:!1,timer:1500});const a=o.data.data.id;R(a,t.attachment)}).catch(o=>{T.fire({icon:"error",title:"Gagal mengirimkan data",showConfirmButton:!1,timer:1500})}),k.value=!1},J=async(r,o)=>{const a=await z.getBaseUrl(),d={name:t.name,birth_place:t.birthPlace,birth_date:t.birthDate,gender:t.gender,religion:t.religion,family_card:t.familyCard,identity_card:t.identityCard,address:t.address,nationality:t.nationality,needs:t.needs,attachment:o,status:"pending"};M.put(`${a}/letter/${r}`,d).then(u=>{console.log(u)}).catch(u=>{console.log(u)})},R=async(r,o)=>{const a=new FormData;a.append("file",o);const d=await z.getBaseUrl();M.post(`${d}/letter/file`,a,{headers:{"Content-Type":"multipart/form-data"}}).then(u=>{console.log(u);const q=u.data.data;J(r,q)}).catch(u=>{console.log(u)})},W=r=>{if(!/(\.pdf|\.png)$/i.exec(r.target.files[0].name)){T.fire({icon:"error",title:"File harus berupa pdf atau png",showConfirmButton:!1,timer:1500}),r.target.value="";return}if(r.target.files[0].size>2097152){T.fire({icon:"error",title:"File tidak boleh lebih dari 2MB",showConfirmButton:!1,timer:1500}),r.target.value="";return}t.attachmentName=r.target.files[0].name,t.attachment=r.target.files[0],console.log(t.attachment)},I=[{value:"l",label:"Laki-laki"},{value:"p",label:"Perempuan"}],E=[{value:"islam",label:"Islam"},{value:"kristen",label:"Kristen"},{value:"katolik",label:"Katolik"},{value:"hindu",label:"Hindu"},{value:"budha",label:"Budha"},{value:"konghucu",label:"Konghucu"}],Z=[{value:"Belum Menikah",label:"Belum Menikah"},{value:"Menikah",label:"Menikah"},{value:"Cerai",label:"Cerai"}],G=[{value:"pns",label:"PNS"},{value:"tni",label:"TNI"},{value:"polri",label:"Polri"},{value:"swasta",label:"Swasta"},{value:"wiraswasta",label:"Wiraswasta"},{value:"petani",label:"Petani"},{value:"nelayan",label:"Nelayan"},{value:"buruh",label:"Buruh"},{value:"lainnya",label:"Lainnya"}],x=p(!1),g=p(!1),y=p(!1),w=p(!1),k=p(!1);return(r,o)=>(b(),h("div",null,[s(Q,{title:"Submission"},{default:n(()=>[l("div",X,[l("div",Y,[l("div",ee,[ae,le,l("div",te,[l("div",null,[se,c(l("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e(t).name=a),placeholder:"Nama",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[f,e(t).name]])]),l("div",null,[ne,c(l("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).birthPlace=a),placeholder:"Tempat Lahir",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[f,e(t).birthPlace]])]),l("div",null,[oe,c(l("input",{type:"date","onUpdate:modelValue":o[2]||(o[2]=a=>e(t).birthDate=a),placeholder:"Tanggal Lahir",class:"border-gray-300 w-full rounded-md"},null,512),[[f,e(t).birthDate]])]),l("div",ie,[de,s(e(U),{open:x.value,"onUpdate:open":o[3]||(o[3]=a=>x.value=a)},{default:n(()=>[s(e(B),{"as-child":""},{default:n(()=>[s(e(N),{variant:"outline",role:"combobox","aria-expanded":x.value,class:"justify-between"},{default:n(()=>{var a;return[i(m(e(t).gender?(a=I.find(d=>d.value===e(t).gender))==null?void 0:a.label:"Jenis kelamin")+" ",1),s(e(K),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),s(e($),{class:"p-0"},{default:n(()=>[s(e(P),null,{default:n(()=>[s(e(D),{class:"h-9",placeholder:"Search..."}),s(e(j),null,{default:n(()=>[i("No data found")]),_:1}),s(e(A),null,{default:n(()=>[s(e(V),null,{default:n(()=>[(b(),h(C,null,S(I,a=>s(e(L),{key:a.value,value:a.value,onSelect:d=>{typeof d.detail.value=="string"&&(e(t).gender=d.detail.value),x.value=!1}},{default:n(()=>[i(m(a.label)+" ",1),s(e(F),{class:v(e(_)("ml-auto h-4 w-4",e(t).gender===a.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),l("div",null,[re,s(e(U),{open:g.value,"onUpdate:open":o[4]||(o[4]=a=>g.value=a)},{default:n(()=>[s(e(B),{"as-child":""},{default:n(()=>[s(e(N),{variant:"outline",role:"combobox","aria-expanded":g.value,class:"w-full justify-between"},{default:n(()=>{var a;return[i(m(e(t).religion?(a=E.find(d=>d.value===e(t).religion))==null?void 0:a.label:"Agama")+" ",1),s(e(K),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),s(e($),{class:"p-0"},{default:n(()=>[s(e(P),null,{default:n(()=>[s(e(D),{class:"h-9",placeholder:"Search..."}),s(e(j),null,{default:n(()=>[i("No data found")]),_:1}),s(e(A),null,{default:n(()=>[s(e(V),null,{default:n(()=>[(b(),h(C,null,S(E,a=>s(e(L),{key:a.value,value:a.value,onSelect:d=>{typeof d.detail.value=="string"&&(e(t).religion=d.detail.value),g.value=!1}},{default:n(()=>[i(m(a.label)+" ",1),s(e(F),{class:v(e(_)("ml-auto h-4 w-4",e(t).religion===a.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),l("div",null,[ue,c(l("input",{"onUpdate:modelValue":o[5]||(o[5]=a=>e(t).familyCard=a),type:"number",placeholder:"No. KK",class:"border-gray-300 w-full rounded-md"},null,512),[[f,e(t).familyCard]])]),l("div",null,[ce,c(l("input",{"onUpdate:modelValue":o[6]||(o[6]=a=>e(t).identityCard=a),type:"number",placeholder:"NIK",class:"border-gray-300 w-full rounded-md"},null,512),[[f,e(t).identityCard]])]),l("div",null,[fe,c(l("input",{"onUpdate:modelValue":o[7]||(o[7]=a=>e(t).address=a),placeholder:"Alamat",class:"border-gray-300 w-full rounded-md"},null,512),[[f,e(t).address]])]),l("div",null,[me,c(l("input",{"onUpdate:modelValue":o[8]||(o[8]=a=>e(t).nationality=a),placeholder:"Kebangsaan",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[f,e(t).nationality]])]),l("div",null,[pe,c(l("textarea",{"onUpdate:modelValue":o[9]||(o[9]=a=>e(t).needs=a),placeholder:"Keperluan",class:"border-gray-300 w-full rounded-md",rows:"4",style:{resize:"none"}},null,512),[[f,e(t).needs]])]),l("div",be,[he,s(e(U),{open:y.value,"onUpdate:open":o[10]||(o[10]=a=>y.value=a)},{default:n(()=>[s(e(B),{"as-child":""},{default:n(()=>[s(e(N),{variant:"outline",role:"combobox","aria-expanded":y.value,class:"justify-between"},{default:n(()=>{var a;return[i(m(e(t).marital_status?(a=Z.find(d=>d.value===e(t).marital_status))==null?void 0:a.label:"Status Perkawinan")+" ",1),s(e(K),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),s(e($),{class:"p-0"},{default:n(()=>[s(e(P),null,{default:n(()=>[s(e(D),{class:"h-9",placeholder:"Search..."}),s(e(j),null,{default:n(()=>[i("No data found")]),_:1}),s(e(A),null,{default:n(()=>[s(e(V),null,{default:n(()=>[(b(),h(C,null,S(Z,a=>s(e(L),{key:a.value,value:a.value,onSelect:d=>{typeof d.detail.value=="string"&&(e(t).marital_status=d.detail.value),y.value=!1}},{default:n(()=>[i(m(a.label)+" ",1),s(e(F),{class:v(e(_)("ml-auto h-4 w-4",e(t).marital_status===a.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),l("div",ve,[_e,s(e(U),{open:w.value,"onUpdate:open":o[11]||(o[11]=a=>w.value=a)},{default:n(()=>[s(e(B),{"as-child":""},{default:n(()=>[s(e(N),{variant:"outline",role:"combobox","aria-expanded":w.value,class:"justify-between"},{default:n(()=>{var a;return[i(m(e(t).profession?(a=G.find(d=>d.value===e(t).profession))==null?void 0:a.label:"Pekerjaan")+" ",1),s(e(K),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),s(e($),{class:"p-0"},{default:n(()=>[s(e(P),null,{default:n(()=>[s(e(D),{class:"h-9",placeholder:"Search..."}),s(e(j),null,{default:n(()=>[i("No data found")]),_:1}),s(e(A),null,{default:n(()=>[s(e(V),null,{default:n(()=>[(b(),h(C,null,S(G,a=>s(e(L),{key:a.value,value:a.value,onSelect:d=>{typeof d.detail.value=="string"&&(e(t).profession=d.detail.value),w.value=!1}},{default:n(()=>[i(m(a.label)+" ",1),s(e(F),{class:v(e(_)("ml-auto h-4 w-4",e(t).profession===a.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),l("div",null,[xe,l("input",{type:"file",placeholder:"Lampiran",onChange:W,class:"border-gray-300 w-full text-sm"},null,32)])])])]),l("div",ge,[l("button",{class:v(e(_)("bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",k.value?"opacity-50 cursor-not-allowed":"")),disabled:k.value,onClick:H}," Kirim ",10,ye)])])]),_:1})]))}};export{Pe as default};
