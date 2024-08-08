import L from"./CustomAppLayout-DcMarQND.js";import{d as v,i as N,o as l,c as T,w as j,j as x,a,t as r,e as d,h as B,g as S,F as I}from"./app-C2IXWA7E.js";import{A as w}from"./auth_helper-BWklPJ7E.js";import{S as _}from"./sweetalert2.all-D92ZqAUT.js";import"./CustomSidebar-CTQay3of.js";import"./utils-CHJqwRcc.js";const $={class:"m-12"},C={class:"bg-white rounded-lg shadow-lg"},U={class:"text-center font-medium text-xl pt-4 pb-8"},V=a("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[a("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),a("div",null,[a("h3",null,"Pemerintahan Kabupaten Buleleng"),a("h3",null,"Kecamatan Kabutambahan"),a("h3",null,"Banjar Dinas Desa Bulian")])],-1),q=a("hr",{class:"border-2 border-black my-4"},null,-1),F={class:"flex items-center w-full justify-center space-x-4"},H=a("h3",null,"Surat Keterangan :",-1),J=a("div",{class:"h-4"},null,-1),z={class:"flex items-center w-full justify-center space-x-4"},E=a("h3",null,"Nomor :",-1),G=a("div",{class:"h-4"},null,-1),M={class:"px-8 text-left"},O=a("h3",{class:"mb-4"}," Saya yang bertanda tangan dibawah ini : ",-1),R={class:"space-y-2"},W={class:"flex items-center"},Q=a("p",{class:"w-1/4"},"a. Nama",-1),X=a("p",{class:"mx-4"},":",-1),Y={class:"flex"},Z=a("p",{class:"w-1/4"},"b. Jabatan",-1),aa=a("p",{class:"mx-4"},":",-1),ea=a("h3",{class:"my-4"},"Dengan ini menyatakan bahwa :",-1),ta={class:"space-y-2"},sa={class:"flex text-left ml-8"},na={class:"w-1/3 flex"},ra={class:"w-10"},ia=["onClick"],la=["onClick"],ca={key:1,class:"w-2/3"},oa=a("p",{class:"mt-12"}," Demikian surat keterangan ini dibuat untuk dipergunakan dengan semestinya. ",-1),da={class:"flex justify-end"},ua={class:"text-center"},_a=a("p",null,"Kelian Banjar Dinas Desa Bulian",-1),ha={class:"w-44 mx-auto p-1 rounded mt-4"},ma=["src"],pa={class:"mt-4"},ya={__name:"Detail",setup(ga){const K=async()=>{const t=await w.getBaseUrl();x.get(`${t}/letter/${u}`).then(n=>{const i=n.data.data;s.value=i,k()}).catch(n=>{console.log(n)})},s=v(),y=async()=>{const t=await w.getBaseUrl();s.value.status="validated",delete s.value.kadus,delete s.value.kasi,x.put(`${t}/letter/${u}`,s.value).then(n=>{console.log(n),_.fire({icon:"success",title:"Berhasil",text:"Data berhasil dikirim"}),window.location.href=`/government/print/${u}`}).catch(n=>{console.log(n),_.fire({icon:"error",title:"Gagal",text:"Data gagal dikirim"})})},h=v(),k=()=>{const t=s.value,n=Object.keys(t).reduce((i,e)=>(e!=="id"&&e!=="status"&&e!=="created_at"&&e!=="updated_at"&&e!=="no_letter"&&e!=="type_letter"&&e!=="name_witness"&&e!=="position_witness"&&e!=="kasi_id"&&e!=="kadus_id"&&e!=="kadus"&&e!=="kasi"&&t[e]!==null&&(i[e]=t[e]),i),{});h.value=n},D=t=>{switch(t){case"id":return"ID";case"status":return"Status";case"created_at":return"Dibuat pada";case"updated_at":return"Diperbarui pada";case"nik":return"NIK";case"name":return"Nama";case"birth_place":return"Tempat Lahir";case"birth_date":return"Tanggal Lahir";case"gender":return"Jenis Kelamin";case"religion":return"Agama";case"address":return"Alamat";case"family_card":return"Nomor Kartu Keluarga";case"identity_card":return"Nomor KTP";case"nationality":return"Kewarganegaraan";case"marital_status":return"Status Perkawinan";case"profession":return"Pekerjaan";case"needs":return"Keperluan";case"attachment":return"Lampiran";case"type_submission":return"Jenis Pengajuan";case"att_family_card":return"Lampiran Kartu Keluarga";case"att_certificate":return"Lampiran Ijazah";case"att_rs":return"Lampiran Surat Keterangan Rumah Sakit";case"order_child":return"Anak ke";case"birth_attendant":return"Pembantu Kelahiran";case"address_attendant":return"Alamat Pembantu Kelahiran";case"identity_card_mother":return"Nomor KTP Ibu";case"name_mother":return"Nama Ibu";case"birth_place_mother":return"Tempat Lahir Ibu";case"birth_date_mother":return"Tanggal Lahir Ibu";case"address_mother":return"Alamat Ibu";case"identity_card_father":return"Nomor KTP Ayah";case"name_father":return"Nama Ayah";case"birth_place_father":return"Tempat Lahir Ayah";case"birth_date_father":return"Tanggal Lahir Ayah";case"address_father":return"Alamat Ayah";case"name_requester":return"Nama Pemohon";case"identity_card_requester":return"Nomor KTP Pemohon";case"address_requester":return"Alamat Pemohon";case"relationship_requester":return"Hubungan dengan Pemohon";case"date_death":return"Tanggal Kematian";case"village_death":return"Desa Kematian";case"sub_district_death":return"Kecamatan Kematian";case"district_death":return"Kabupaten Kematian";case"province_death":return"Provinsi Kematian";case"cause_death":return"Penyebab Kematian";default:return t}},m=t=>{_.fire({title:"Lampiran",text:t,imageUrl:`/files/${t}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})},u=window.location.href.split("/").pop();return N(()=>{K()}),(t,n)=>(l(),T(L,{title:"Submission"},{default:j(()=>{var i,e,p,g,f,b;return[a("div",$,[a("div",C,[a("div",U,[V,q,a("div",F,[H,a("p",null,r((i=s.value)==null?void 0:i.type_letter),1)]),J,a("div",z,[E,a("p",null,r((e=s.value)==null?void 0:e.no_letter),1)]),G,a("div",M,[O,a("div",R,[a("div",W,[Q,X,a("p",null,r((p=s.value)==null?void 0:p.kadus.name),1)]),a("div",Y,[Z,aa,a("p",null,r((g=s.value)==null?void 0:g.kadus.position),1)])]),ea,a("div",ta,[(l(!0),d(I,null,B(h.value,(c,o,P)=>(l(),d("div",null,[a("div",sa,[a("div",na,[a("h3",ra,r(P+1)+".",1),a("h3",null,r(D(o)),1)]),o==="att_family_card"||o==="att_certificate"||o==="att_rs"?(l(),d("div",{key:0,class:"w-2/3 flex",onClick:A=>m(c)},[S(" : "),a("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:A=>m(c)},r(c),9,la)],8,ia)):(l(),d("div",ca," : "+r(c),1))])]))),256))]),oa,a("div",da,[a("div",ua,[a("p",null," Bulian, "+r(new Date().toLocaleDateString().split("/").join("-")),1),_a,a("div",ha,[a("img",{src:`/assets/images/signature/${(f=s.value)==null?void 0:f.kadus.signature}`,alt:"tanda tangan",class:"w-full"},null,8,ma)]),a("p",pa," ("+r((b=s.value)==null?void 0:b.kadus.name)+") ",1)])])])])]),a("div",{class:"flex justify-end mt-8"},[a("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:y}," Validasi ")])])]}),_:1}))}};export{ya as default};
