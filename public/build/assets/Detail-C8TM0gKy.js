import K from"./CustomAppLayout-DcMarQND.js";import{A as d}from"./auth_helper-BWklPJ7E.js";import{d as p,i as w,o as n,e as i,b as y,w as A,j as u,a,F as P,h as T,t as m,g as L,f as N}from"./app-C2IXWA7E.js";import{S as _}from"./sweetalert2.all-D92ZqAUT.js";import"./CustomSidebar-CTQay3of.js";import"./utils-CHJqwRcc.js";const B={class:"mx-12 my-12"},$={class:"bg-white rounded-lg shadow-lg"},I={class:"text-center font-medium text-xl pt-4 pb-8"},k=a("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[a("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),a("div",null,[a("h3",null," Formulir Pengajuan Surat Administrasi Desa Bulian "),a("h3",null,"Kecamatan Kabutambahan"),a("h3",null,"Banjar Dinas Desa Bulian")])],-1),D=a("hr",{class:"border-2 border-black my-4"},null,-1),S={class:"space-y-2 px-8"},j={class:"flex text-left"},C={key:0,class:"flex w-full"},U={class:"w-1/3"},V=["onClick"],q=["onClick"],F={key:1,class:"w-2/3"},W={__name:"Detail",setup(H){const o=window.location.href.split("/").pop(),c=p(""),g=async()=>{const r=await d.getBaseUrl();u.get(`${r}/letter/type/${o}`).then(t=>{c.value=t.data.data})},b=async()=>{const r=await d.getBaseUrl(),t=l.value;t.status="sending",t.type_letter=c.value.letter_type,t.no_letter=c.value.last_no_letter,delete t.kasi,delete t.kadus,u.put(`${r}/letter/${o}`,t).then(s=>{console.log(s),_.fire({icon:"success",title:"Berhasil",text:"Berhasil divalidasi"}),window.location.href=`/village-chief/recommendation/${o}`}).catch(s=>{_.fire({icon:"error",title:"Gagal",text:"Gagal divalidasi"}),console.log(s)})},l=p(),f=async()=>{const r=await d.getBaseUrl();await u.get(`${r}/letter/${o}`).then(t=>{const s=t.data.data;l.value=s,g()}).catch(t=>{console.log(t)})},x=r=>{switch(r){case"id":return"ID";case"status":return"Status";case"created_at":return"Dibuat pada";case"updated_at":return"Diperbarui pada";case"nik":return"NIK";case"name":return"Nama";case"birth_place":return"Tempat Lahir";case"birth_date":return"Tanggal Lahir";case"gender":return"Jenis Kelamin";case"religion":return"Agama";case"address":return"Alamat";case"family_card":return"Nomor Kartu Keluarga";case"identity_card":return"Nomor KTP";case"nationality":return"Kewarganegaraan";case"marital_status":return"Status Perkawinan";case"profession":return"Pekerjaan";case"needs":return"Keperluan";case"attachment":return"Lampiran";case"type_submission":return"Jenis Pengajuan";case"att_family_card":return"Lampiran Kartu Keluarga";case"att_certificate":return"Lampiran Ijazah";case"att_rs":return"Lampiran Surat Keterangan Rumah Sakit";case"order_child":return"Anak ke";case"birth_attendant":return"Pembantu Kelahiran";case"address_attendant":return"Alamat Pembantu Kelahiran";case"identity_card_mother":return"Nomor KTP Ibu";case"name_mother":return"Nama Ibu";case"birth_place_mother":return"Tempat Lahir Ibu";case"birth_date_mother":return"Tanggal Lahir Ibu";case"address_mother":return"Alamat Ibu";case"identity_card_father":return"Nomor KTP Ayah";case"name_father":return"Nama Ayah";case"birth_place_father":return"Tempat Lahir Ayah";case"birth_date_father":return"Tanggal Lahir Ayah";case"address_father":return"Alamat Ayah";case"name_requester":return"Nama Pemohon";case"identity_card_requester":return"Nomor KTP Pemohon";case"address_requester":return"Alamat Pemohon";case"relationship_requester":return"Hubungan dengan Pemohon";case"date_death":return"Tanggal Kematian";case"village_death":return"Desa Kematian";case"sub_district_death":return"Kecamatan Kematian";case"district_death":return"Kabupaten Kematian";case"province_death":return"Provinsi Kematian";case"cause_death":return"Penyebab Kematian";default:return r}},h=r=>{_.fire({title:"Lampiran",text:r,imageUrl:`/files/${r}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})};return w(()=>{f()}),(r,t)=>(n(),i("div",null,[y(K,{title:"Submission"},{default:A(()=>[a("div",B,[a("div",$,[a("div",I,[k,D,a("div",S,[(n(!0),i(P,null,T(l.value,(s,e)=>(n(),i("div",j,[e!=="id"&&e!=="status"&&e!=="created_at"&&e!=="updated_at"&&e!=="no_letter"&&e!=="type_letter"&&e!=="name_witness"&&e!=="position_witness"&&e!=="kasi_id"&&e!=="kadus_id"&&e!=="kadus"&&e!=="kasi"&&s!==null?(n(),i("div",C,[a("div",U,[a("h3",null,m(x(e)),1)]),e==="att_family_card"||e==="att_certificate"||e==="att_rs"?(n(),i("div",{key:0,class:"w-2/3 flex",onClick:v=>h(s)},[L(" : "),a("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:v=>h(s)},m(s),9,q)],8,V)):(n(),i("div",F," : "+m(s),1))])):N("",!0)]))),256))])])]),a("div",{class:"flex justify-end mt-8"},[a("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:b}," Validasi ")])])]),_:1})]))}};export{W as default};
