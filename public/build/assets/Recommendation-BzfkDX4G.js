import H from"./CustomAppLayout-BFGSSqGp.js";import{d as l,i as J,o as _,c as T,w as c,j as v,a,t as d,b as o,u as r,g as b,e as p,h as A,n as z,F as C}from"./app-Bj11j8gw.js";import{A as y}from"./auth_helper-DJqVhYSW.js";import{c as R}from"./utils-CRInxG8n.js";import{_ as E}from"./index-CTd50CMT.js";import{C as M,_ as O,a as W,b as G,c as Q,d as X,e as Y}from"./CommandList-DaPKA8Ry.js";import{a as Z,b as aa,_ as ea}from"./CustomSidebar-DMhCqQwd.js";import{S as $}from"./sweetalert2.all-DcxmDWPX.js";import{C as ta}from"./check-B5bGoG4-.js";const sa={class:"m-12"},na={class:"bg-white rounded-lg shadow-lg"},ra={class:"text-center font-medium text-xl pt-4 pb-8"},ia=a("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[a("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),a("div",null,[a("h3",null,"Pemerintahan Kabupaten Buleleng"),a("h3",null,"Kecamatan Kabutambahan"),a("h3",null,"Banjar Dinas Desa Bulian")])],-1),la=a("hr",{class:"border-2 border-black my-4"},null,-1),oa={class:"flex items-center w-full justify-center space-x-4"},ca=a("h3",null,"Surat Keterangan :",-1),da=a("div",{class:"h-4"},null,-1),ua={class:"flex items-center w-full justify-center space-x-4"},_a=a("h3",null,"Nomor :",-1),ma=a("div",{class:"h-4"},null,-1),ha={class:"px-8 text-left"},pa=a("h3",{class:"mb-4"}," Saya yang bertanda tangan dibawah ini : ",-1),fa={class:"space-y-2"},ga={class:"flex items-center"},va=a("p",{class:"w-1/4"},"a. Nama",-1),ba=a("p",{class:"mx-4"},":",-1),ya={class:"flex"},wa=a("p",{class:"w-1/4"},"b. Jabatan",-1),xa=a("p",{class:"mx-4"},":",-1),Ka=["value"],$a=a("h3",{class:"my-4"},"Dengan ini menyatakan bahwa :",-1),Da={class:"space-y-2"},Pa={class:"flex text-left ml-8"},ka={class:"w-1/3 flex"},Ba={class:"w-10"},La=["onClick"],Ta=["onClick"],Aa={key:1,class:"w-2/3"},Ca=a("p",{class:"mt-12"}," Demikian surat keterangan ini dibuat untuk dipergunakan dengan semestinya. ",-1),Na={class:"flex justify-end"},ja={class:"text-center"},Sa=a("p",null,"Kelian Banjar Dinas Desa Bulian",-1),Ia={class:"w-44 mx-auto p-1 rounded mt-4"},Ua=["src"],Va={class:"mt-4"},Ga={__name:"Recommendation",setup(qa){l(!1),l(""),l(!1),l("");const f=l(!1),m=l(""),g=l(),N=async()=>{const s=await y.getBaseUrl();v.get(`${s}/letter/${K}`).then(t=>{const i=t.data.data;h.value=i,j()}).catch(t=>{console.log(t)})},h=l(),D=l(),j=()=>{const s=h.value,t=Object.keys(s).reduce((i,e)=>(e!=="id"&&e!=="status"&&e!=="created_at"&&e!=="updated_at"&&e!=="no_letter"&&e!=="type_letter"&&e!=="name_witness"&&e!=="position_witness"&&e!=="kasi_id"&&e!=="kadus_id"&&e!=="kadus"&&e!=="kasi"&&s[e]!==null&&(i[e]=s[e]),i),{});D.value=t},S=async()=>{const s=await y.getBaseUrl();v.get(`${s}/kadus`).then(t=>{const i=t.data.data;w.value=i}).catch(t=>{console.log(t)})},w=l(),x=l(),I=async()=>{const s=await y.getBaseUrl();v.get(`${s}/letter/type/${K}`).then(t=>{x.value=t.data.data})},U=async()=>{const s=await y.getBaseUrl();let t=h.value;const i={no_letter:x.value.last_no_letter_by_type,kadus_id:m.value};t={...t,...i},t.status="sended",delete t.kasi,delete t.kadus,v.put(`${s}/letter/${K}`,t).then(e=>{console.log(e),$.fire({icon:"success",title:"Data berhasil dikirim",showConfirmButton:!1,timer:1500}),window.location.href="/village-chief/validate"}).catch(e=>{$.fire({icon:"error",title:"Data gagal dikirim",showConfirmButton:!1,timer:1500}),console.log(e)})},V=s=>{switch(s){case"id":return"ID";case"status":return"Status";case"created_at":return"Dibuat pada";case"updated_at":return"Diperbarui pada";case"nik":return"NIK";case"name":return"Nama";case"birth_place":return"Tempat Lahir";case"birth_date":return"Tanggal Lahir";case"gender":return"Jenis Kelamin";case"religion":return"Agama";case"address":return"Alamat";case"family_card":return"Nomor Kartu Keluarga";case"identity_card":return"Nomor KTP";case"nationality":return"Kewarganegaraan";case"marital_status":return"Status Perkawinan";case"profession":return"Pekerjaan";case"needs":return"Keperluan";case"attachment":return"Lampiran";case"type_submission":return"Jenis Pengajuan";case"att_family_card":return"Lampiran Kartu Keluarga";case"att_certificate":return"Lampiran Ijazah";case"att_rs":return"Lampiran Surat Keterangan Rumah Sakit";case"order_child":return"Anak ke";case"birth_attendant":return"Pembantu Kelahiran";case"address_attendant":return"Alamat Pembantu Kelahiran";case"identity_card_mother":return"Nomor KTP Ibu";case"name_mother":return"Nama Ibu";case"birth_place_mother":return"Tempat Lahir Ibu";case"birth_date_mother":return"Tanggal Lahir Ibu";case"address_mother":return"Alamat Ibu";case"identity_card_father":return"Nomor KTP Ayah";case"name_father":return"Nama Ayah";case"birth_place_father":return"Tempat Lahir Ayah";case"birth_date_father":return"Tanggal Lahir Ayah";case"address_father":return"Alamat Ayah";case"name_requester":return"Nama Pemohon";case"identity_card_requester":return"Nomor KTP Pemohon";case"address_requester":return"Alamat Pemohon";case"relationship_requester":return"Hubungan dengan Pemohon";case"date_death":return"Tanggal Kematian";case"village_death":return"Desa Kematian";case"sub_district_death":return"Kecamatan Kematian";case"district_death":return"Kabupaten Kematian";case"province_death":return"Provinsi Kematian";case"cause_death":return"Penyebab Kematian";default:return s}},P=s=>{$.fire({title:"Lampiran",text:s,imageUrl:`/files/${s}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})},K=window.location.href.split("/").pop();return J(()=>{N(),S(),I()}),(s,t)=>(_(),T(H,{title:"Submission"},{default:c(()=>{var i,e,k,B,L;return[a("div",sa,[a("div",na,[a("div",ra,[ia,la,a("div",oa,[ca,a("p",null,d((i=h.value)==null?void 0:i.type_letter),1)]),da,a("div",ua,[_a,a("p",null,d(x.value.value.last_no_letter_by_type),1)]),ma,a("div",ha,[pa,a("div",fa,[a("div",ga,[va,ba,o(r(ea),{open:f.value,"onUpdate:open":t[0]||(t[0]=n=>f.value=n)},{default:c(()=>[o(r(Z),{"as-child":""},{default:c(()=>[o(r(E),{variant:"outline",role:"combobox","aria-expanded":f.value,class:"justify-between w-3/4"},{default:c(()=>{var n;return[b(d(m.value?(n=w.value.find(u=>u.id===m.value))==null?void 0:n.name:"Pilih nama...")+" ",1),o(r(M),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),o(r(aa),{class:"w-[200px] p-0"},{default:c(()=>[o(r(O),null,{default:c(()=>[o(r(W),{class:"h-9",placeholder:"Cari nama..."}),o(r(G),null,{default:c(()=>[b(" Tidak ada data ")]),_:1}),o(r(Q),null,{default:c(()=>[o(r(X),null,{default:c(()=>[(_(!0),p(C,null,A(w.value,n=>(_(),T(r(Y),{key:n.id,value:n.id,onSelect:u=>{typeof u.detail.value=="number"&&(m.value=u.detail.value),g.value=n,f.value=!1}},{default:c(()=>[b(d(n.name)+" ",1),o(r(ta),{class:z(r(R)("ml-auto h-4 w-4",m.value===n.id?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),a("div",ya,[wa,xa,a("input",{class:"w-3/4 rounded border border-gray-300",disabled:"",value:((e=g.value)==null?void 0:e.position)||"-"},null,8,Ka)])]),$a,a("div",Da,[(_(!0),p(C,null,A(D.value,(n,u,q)=>(_(),p("div",null,[a("div",Pa,[a("div",ka,[a("h3",Ba,d(q+1)+".",1),a("h3",null,d(V(u)),1)]),u==="att_family_card"||u==="att_certificate"||u==="att_rs"?(_(),p("div",{key:0,class:"w-2/3 flex",onClick:F=>P(n)},[b(" : "),a("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:F=>P(n)},d(n),9,Ta)],8,La)):(_(),p("div",Aa," : "+d(n),1))])]))),256))]),Ca,a("div",Na,[a("div",ja,[a("p",null," Bulian, "+d(new Date((k=h.value)==null?void 0:k.updated_at).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"}).split("/").join("-")),1),Sa,a("div",Ia,[a("img",{src:`/assets/images/signature/${(B=g.value)==null?void 0:B.signature}`,alt:"tanda tangan",class:"w-full"},null,8,Ua)]),a("p",Va,"("+d((L=g.value)==null?void 0:L.name)+")",1)])])])])]),a("div",{class:"flex justify-end mt-8"},[a("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:U}," Kirim ")])])]}),_:1}))}};export{Ga as default};
