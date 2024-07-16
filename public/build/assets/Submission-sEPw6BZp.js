import{T as ie,d as x,o as p,e as f,b as n,w as d,a as e,u as l,l as i,v as r,g as o,t as m,F as C,h as D,n as v,f as j,j as A}from"./app-DG7Pnb8T.js";import re from"./CustomAppLayout-DrHFvSw7.js";import{A as W}from"./auth_helper-CPMV5Pt2.js";import{c as y}from"./utils-n-rw4XTg.js";import{_ as N}from"./index-BpJ8zUNK.js";import{C as S,_ as F,a as k,b as K,c as U,d as P,e as M}from"./CommandList-DO4H2AyL.js";import{_ as V,a as R,b as T}from"./CustomSidebar-CxkkTbBr.js";import{S as b}from"./sweetalert2.all-BQIjdqMU.js";import{C as z}from"./check-D0oBFcyD.js";const ue={class:"mx-12 mt-12 mb-8"},ce={class:"bg-white rounded-lg shadow-lg"},he={class:"text-center font-medium text-xl pt-4 pb-8"},pe=e("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[e("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),e("div",null,[e("h3",null," Formulir Pengajuan Surat Administrasi Desa Bulian "),e("h3",null,"Kecamatan Kabutambahan"),e("h3",null,"Banjar Dinas Dangin Margi")])],-1),fe=e("hr",{class:"border-2 border-black my-4"},null,-1),me={key:0,class:"space-y-4 px-8 py-4 text-left"},be={class:"flex space-x-8"},_e={class:"w-full"},xe=e("label",{class:"text-base font-bold flex"},[o("Nama Lengkap "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ve={class:"w-full"},ye=e("label",{class:"text-base font-bold flex"},[o(" Urutan Anak "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ge={class:"flex space-x-8"},we={class:"w-full"},Ce=e("label",{class:"text-base font-bold flex"},[o(" Tempat Lahir "),e("p",{class:"text-red-500 ml-1"},"*")],-1),De={class:"w-full"},Ae=e("label",{class:"text-base font-bold flex"},[o(" Penolong Kelahiran "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ne={class:"flex space-x-8"},Se={class:"w-full"},Fe=e("label",{class:"text-base font-bold flex"},[o("Alamat "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ke={class:"w-full"},Ke=e("label",{class:"text-base font-bold flex"},[o("Alamat Penolong Kelahiran "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ue={class:"flex space-x-8"},Pe={class:"w-full"},Me=e("label",{class:"text-base font-bold flex"},[o("NIK Ibu "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ve={class:"w-full"},Re=e("label",{class:"text-base font-bold flex"},[o("Nama Ibu "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Te={class:"flex space-x-8"},ze={class:"w-full"},Be=e("label",{class:"text-base font-bold flex"},[o(" Tempat Lahir Ibu "),e("p",{class:"text-red-500 ml-1"},"*")],-1),qe={class:"w-full"},Le=e("label",{class:"text-base font-bold flex"},[o(" Tanggal Lahir Ibu "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ie={class:"flex space-x-8"},$e={class:"w-full"},Ee=e("label",{class:"text-base font-bold flex"},[o("NIK Ayah "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ze={class:"w-full"},je=e("label",{class:"text-base font-bold flex"},[o("Nama Ayah "),e("p",{class:"text-red-500 ml-1"},"*")],-1),We={class:"flex space-x-8"},He={class:"w-full"},Ge=e("label",{class:"text-base font-bold flex"},[o(" Tempat Lahir Ayah "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Je={class:"w-full"},Oe=e("label",{class:"text-base font-bold flex"},[o(" Tanggal Lahir Ayah "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Qe={class:"flex space-x-8"},Xe={class:"w-full"},Ye=e("label",{class:"text-base font-bold flex"},[o("Alamat Ayah "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ea={class:"w-full"},aa=e("label",{class:"text-base font-bold flex"},[o("Alamat Ibu "),e("p",{class:"text-red-500 ml-1"},"*")],-1),la=e("label",{class:"text-base font-bold flex"},[o("Keperluan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ta={key:1,class:"space-y-4 px-8 py-4 text-left"},sa={class:"flex space-x-8"},na={class:"w-full"},oa=e("label",{class:"text-base font-bold flex"},[o("Nama "),e("p",{class:"text-red-500 ml-1"},"*")],-1),da={class:"w-full"},ia=e("label",{class:"text-base font-bold flex"},[o(" Tempat Lahir "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ra={class:"flex space-x-8"},ua={class:"w-full"},ca=e("label",{class:"text-base font-bold flex"},[o(" Jenis Kelamin "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ha={class:"w-full"},pa=e("label",{class:"text-base font-bold flex"},[o("Agama "),e("p",{class:"text-red-500 ml-1"},"*")],-1),fa={class:"flex space-x-8"},ma={class:"w-full"},ba=e("label",{class:"text-base font-bold flex"},[o(" Tanggal Lahir "),e("p",{class:"text-red-500 ml-1"},"*")],-1),_a={class:"w-full"},xa=e("label",{class:"text-base font-bold flex"},[o("No. KK "),e("p",{class:"text-red-500 ml-1"},"*")],-1),va={class:"flex space-x-8"},ya={class:"w-full"},ga=e("label",{class:"text-base font-bold flex"},[o("NIK "),e("p",{class:"text-red-500 ml-1"},"*")],-1),wa={class:"w-full"},Ca=e("label",{class:"text-base font-bold flex"},[o("Kewarganegaraan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Da=e("label",{class:"text-base font-bold flex"},[o("Alamat "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Aa={class:"flex space-x-8"},Na={class:"flex flex-col w-full"},Sa=e("label",{class:"text-base font-bold flex"},[o(" Pekerjaan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Fa={class:"flex flex-col w-full"},ka=e("label",{class:"text-base font-bold flex"},[o(" Status Perkawinan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ka={key:0,class:"space-y-4"},Ua={class:"flex space-x-8"},Pa={class:"w-full"},Ma=e("label",{class:"text-base font-bold flex"},[o("Nama Pemohon "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Va={class:"w-full"},Ra=e("label",{class:"text-base font-bold flex"},[o("NIK Pemohon "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ta={class:"flex space-x-8"},za={class:"w-full"},Ba=e("label",{class:"text-base font-bold flex"},[o("Alamat Pemohon "),e("p",{class:"text-red-500 ml-1"},"*")],-1),qa={class:"w-full"},La=e("label",{class:"text-base font-bold flex"},[o("Hubungan dengan Almarhum "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ia={class:"flex space-x-8"},$a={class:"w-full"},Ea=e("label",{class:"text-base font-bold flex"},[o(" Tanggal Kematian "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Za={class:"w-full"},ja=e("label",{class:"text-base font-bold flex"},[o(" Penyebab Kematian "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Wa={class:"flex space-x-8"},Ha={class:"w-full"},Ga=e("label",{class:"text-base font-bold flex"},[o("Desa Tempat Kematian "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Ja={class:"w-full"},Oa=e("label",{class:"text-base font-bold flex"},[o("Kecamatan Tempat Kematian "),e("p",{class:"text-red-500 ml-1"},"*")],-1),Qa={class:"flex space-x-8"},Xa={class:"w-full"},Ya=e("label",{class:"text-base font-bold flex"},[o("Kabupaten Tempat Kematian "),e("p",{class:"text-red-500 ml-1"},"*")],-1),el={class:"w-full"},al=e("label",{class:"text-base font-bold flex"},[o("Provinsi Tempat Kematian "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ll=e("label",{class:"text-base font-bold flex"},[o("Keperluan "),e("p",{class:"text-red-500 ml-1"},"*")],-1),tl={class:"flex px-8 text-start"},sl={class:"w-full"},nl=e("label",{class:"text-base font-bold flex"},[o("Lampiran Kartu Keluarga "),e("p",{class:"text-red-500 ml-1"},"*")],-1),ol=e("p",{class:"text-sm text-gray-500 mt-2"}," File harus berupa pdf dan tidak lebih dari 2MB ",-1),dl={key:0,class:"w-full"},il=e("label",{class:"text-base font-bold flex"},[o("Lampiran Serifikat "),e("p",{class:"text-red-500 ml-1"},"*")],-1),rl=e("p",{class:"text-sm text-gray-500 mt-2"}," File harus berupa pdf dan tidak lebih dari 2MB ",-1),ul={key:1,class:"w-full"},cl=e("label",{class:"text-base font-bold flex"},[o("Lampiran Surat Keterangan RS "),e("p",{class:"text-red-500 ml-1"},"*")],-1),hl=e("p",{class:"text-sm text-gray-500 mt-2"}," File harus berupa pdf dan tidak lebih dari 2MB ",-1),pl={class:"flex justify-end mt-8"},fl=["disabled"],Al={__name:"Submission",setup(ml){const a=ie({name:"",birthPlace:"",birthDate:"",gender:"",religion:"",familyCard:"",identityCard:"",address:"",nationality:"",needs:"",maritalStatus:"",profession:"",attFC:null,attNameFC:"",attCE:null,attNameCE:"",attRS:null,attNameRS:"",typeSubmission:window.location.pathname.split("/").pop(),orderChild:null,birthAttendant:null,addressAttendant:null,identityCardMother:null,nameMother:null,birthPlaceMother:null,birthDateMother:null,addressMother:null,identityCardFather:null,nameFather:null,birthPlaceFather:null,birthDateFather:null,addressFather:null,nameRequester:null,identityCardRequester:null,addressRequester:null,relationshipRequester:null,dateDeath:null,villageDeath:null,subDistrictDeath:null,districtDeath:null,provinceDeath:null,causeDeath:null}),le=async()=>{E.value=!0;const c=await W.getBaseUrl(),s={name:a.name,birth_place:a.birthPlace,birth_date:a.birthDate,gender:a.gender,religion:a.religion,family_card:a.familyCard,identity_card:a.identityCard,address:a.address,nationality:a.nationality,needs:a.needs,marital_status:a.maritalStatus,profession:a.profession,status:"pending",att_family_card:a.attNameFC,att_certificate:a.attNameCE,att_rs:a.attNameRS,type_submission:a.typeSubmission,order_child:a.orderChild,birth_attendant:a.birthAttendant,address_attendant:a.addressAttendant,identity_card_mother:a.identityCardMother,name_mother:a.nameMother,birth_place_mother:a.birthPlaceMother,birth_date_mother:a.birthDateMother,address_mother:a.addressMother,identity_card_father:a.identityCardFather,name_father:a.nameFather,birth_place_father:a.birthPlaceFather,birth_date_father:a.birthDateFather,address_father:a.addressFather,name_requester:a.nameRequester,identity_card_requester:a.identityCardRequester,address_requester:a.addressRequester,relationship_requester:a.relationshipRequester,date_death:a.dateDeath,village_death:a.villageDeath,sub_district_death:a.subDistrictDeath,district_death:a.districtDeath,province_death:a.provinceDeath,cause_death:a.causeDeath};A.post(`${c}/letter`,s).then(t=>{b.fire({icon:"success",title:"Berhasil mengirimkan data",showConfirmButton:!1,timer:1500});const u=t.data.data.id;se(u,a.attFC,a.attCE,a.attRS)}).catch(t=>{b.fire({icon:"error",title:"Gagal mengirimkan data",showConfirmButton:!1,timer:1500})}),E.value=!1},te=async(c,s,t,u)=>{const g=await W.getBaseUrl(),w={name:a.name,birth_place:a.birthPlace,birth_date:a.birthDate,gender:a.gender,religion:a.religion,family_card:a.familyCard,identity_card:a.identityCard,address:a.address,nationality:a.nationality,needs:a.needs,marital_status:a.maritalStatus,profession:a.profession,status:"pending",att_family_card:s,att_certificate:t,att_rs:u,type_submission:a.typeSubmission,order_child:a.orderChild,birth_attendant:a.birthAttendant,address_attendant:a.addressAttendant,identity_card_mother:a.identityCardMother,name_mother:a.nameMother,birth_place_mother:a.birthPlaceMother,birth_date_mother:a.birthDateMother,address_mother:a.addressMother,identity_card_father:a.identityCardFather,name_father:a.nameFather,birth_place_father:a.birthPlaceFather,birth_date_father:a.birthDateFather,address_father:a.addressFather,name_requester:a.nameRequester,identity_card_requester:a.identityCardRequester,address_requester:a.addressRequester,relationship_requester:a.relationshipRequester,date_death:a.dateDeath,village_death:a.villageDeath,sub_district_death:a.subDistrictDeath,district_death:a.districtDeath,province_death:a.provinceDeath,cause_death:a.causeDeath};A.put(`${g}/letter/${c}`,w).then(_=>{console.log(_)}).catch(_=>{console.log(_)})},se=async(c,s,t,u)=>{let g="",w="",_="";const Z=await W.getBaseUrl(),X=new FormData;X.append("file",s),await A.post(`${Z}/letter/file`,X,{headers:{"Content-Type":"multipart/form-data"}}).then(h=>{console.log(h),g=h.data.data}).catch(h=>{console.log(h)});const Y=new FormData;Y.append("file",t),await A.post(`${Z}/letter/file`,Y,{headers:{"Content-Type":"multipart/form-data"}}).then(h=>{console.log(h),w=h.data.data}).catch(h=>{console.log(h)});const ee=new FormData;ee.append("file",u),await A.post(`${Z}/letter/file`,ee,{headers:{"Content-Type":"multipart/form-data"}}).then(h=>{console.log(h),_=h.data.data}).catch(h=>{console.log(h)}),console.log("idProps",c,"fileNameFC",g,"fileNameCE",w,"fileNameRS",_),te(c,g,w,_)},ne=c=>{if(!/(\.pdf|\.png)$/i.exec(c.target.files[0].name)){b.fire({icon:"error",title:"File harus berupa pdf atau png",showConfirmButton:!1,timer:1500}),c.target.value="";return}if(c.target.files[0].size>2097152){b.fire({icon:"error",title:"File tidak boleh lebih dari 2MB",showConfirmButton:!1,timer:1500}),c.target.value="";return}a.attNameFC=c.target.files[0].name,a.attFC=c.target.files[0],console.log(a.attFC)},oe=c=>{if(!/(\.pdf|\.png)$/i.exec(c.target.files[0].name)){b.fire({icon:"error",title:"File harus berupa pdf atau png",showConfirmButton:!1,timer:1500}),c.target.value="";return}if(c.target.files[0].size>2097152){b.fire({icon:"error",title:"File tidak boleh lebih dari 2MB",showConfirmButton:!1,timer:1500}),c.target.value="";return}a.attNameCE=c.target.files[0].name,a.attCE=c.target.files[0],console.log(a.attCE)},de=c=>{if(!/(\.pdf|\.png)$/i.exec(c.target.files[0].name)){b.fire({icon:"error",title:"File harus berupa pdf atau png",showConfirmButton:!1,timer:1500}),c.target.value="";return}if(c.target.files[0].size>2097152){b.fire({icon:"error",title:"File tidak boleh lebih dari 2MB",showConfirmButton:!1,timer:1500}),c.target.value="";return}a.attNameRS=c.target.files[0].name,a.attRS=c.target.files[0],console.log(a.attRS)},H=[{value:"l",label:"Laki-laki"},{value:"p",label:"Perempuan"}],G=[{value:"islam",label:"Islam"},{value:"kristen",label:"Kristen"},{value:"katolik",label:"Katolik"},{value:"hindu",label:"Hindu"},{value:"budha",label:"Budha"},{value:"konghucu",label:"Konghucu"}],J=[{value:"Belum Menikah",label:"Belum Menikah"},{value:"Menikah",label:"Menikah"},{value:"Cerai",label:"Cerai"}],O=[{value:"pns",label:"PNS"},{value:"tni",label:"TNI"},{value:"polri",label:"Polri"},{value:"swasta",label:"Swasta"},{value:"wiraswasta",label:"Wiraswasta"},{value:"petani",label:"Petani"},{value:"nelayan",label:"Nelayan"},{value:"buruh",label:"Buruh"},{value:"lainnya",label:"Lainnya"}],Q=[{value:"WNI",label:"WNI"},{value:"WNA",label:"WNA"}],B=x(!1),q=x(!1),L=x(!1),I=x(!1),$=x(!1),E=x(!1);return(c,s)=>(p(),f("div",null,[n(re,{title:"Submission"},{default:d(()=>[e("div",ue,[e("div",ce,[e("div",he,[pe,fe,l(a).typeSubmission==="birth-letter"?(p(),f("div",me,[e("div",be,[e("div",_e,[xe,i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>l(a).name=t),placeholder:"Nama Lengkap Anak",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).name]])]),e("div",ve,[ye,i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>l(a).orderChild=t),type:"number",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},null,512),[[r,l(a).orderChild]])])]),e("div",ge,[e("div",we,[Ce,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>l(a).birthPlace=t),placeholder:"Tempat Lahir",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).birthPlace]])]),e("div",De,[Ae,i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>l(a).birthAttendant=t),placeholder:"Penolong Kelahiran",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).birthAttendant]])])]),e("div",Ne,[e("div",Se,[Fe,i(e("textarea",{"onUpdate:modelValue":s[4]||(s[4]=t=>l(a).address=t),placeholder:"Alamat",class:"border-gray-300 w-full rounded-md",rows:"2",style:{resize:"none"}},null,512),[[r,l(a).address]])]),e("div",ke,[Ke,i(e("textarea",{"onUpdate:modelValue":s[5]||(s[5]=t=>l(a).addressAttendant=t),placeholder:"Alamat Penolong Kelahiran",class:"border-gray-300 w-full rounded-md",rows:"2",style:{resize:"none"}},null,512),[[r,l(a).addressAttendant]])])]),e("div",Ue,[e("div",Pe,[Me,i(e("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>l(a).identityCardMother=t),type:"number",placeholder:"NIK Ibu",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},null,512),[[r,l(a).identityCardMother]])]),e("div",Ve,[Re,i(e("input",{"onUpdate:modelValue":s[7]||(s[7]=t=>l(a).nameMother=t),placeholder:"Nama Ibu",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).nameMother]])])]),e("div",Te,[e("div",ze,[Be,i(e("input",{"onUpdate:modelValue":s[8]||(s[8]=t=>l(a).birthPlaceMother=t),placeholder:"Tempat Lahir Ibu",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).birthPlaceMother]])]),e("div",qe,[Le,i(e("input",{type:"date","onUpdate:modelValue":s[9]||(s[9]=t=>l(a).birthDateMother=t),placeholder:"Tanggal Lahir Ibu",class:"border-gray-300 w-full rounded-md"},null,512),[[r,l(a).birthDateMother]])])]),e("div",Ie,[e("div",$e,[Ee,i(e("input",{"onUpdate:modelValue":s[10]||(s[10]=t=>l(a).identityCardFather=t),type:"number",placeholder:"NIK Ayah",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},null,512),[[r,l(a).identityCardFather]])]),e("div",Ze,[je,i(e("input",{"onUpdate:modelValue":s[11]||(s[11]=t=>l(a).nameFather=t),placeholder:"Nama Ayah",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).nameFather]])])]),e("div",We,[e("div",He,[Ge,i(e("input",{"onUpdate:modelValue":s[12]||(s[12]=t=>l(a).birthPlaceFather=t),placeholder:"Tempat Lahir Ayah",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).birthPlaceFather]])]),e("div",Je,[Oe,i(e("input",{type:"date","onUpdate:modelValue":s[13]||(s[13]=t=>l(a).birthDateFather=t),placeholder:"Tanggal Lahir Ayah",class:"border-gray-300 w-full rounded-md"},null,512),[[r,l(a).birthDateFather]])])]),e("div",Qe,[e("div",Xe,[Ye,i(e("textarea",{"onUpdate:modelValue":s[14]||(s[14]=t=>l(a).addressFather=t),placeholder:"Alamat Ayah",class:"border-gray-300 w-full rounded-md",rows:"2",style:{resize:"none"}},null,512),[[r,l(a).addressFather]])]),e("div",ea,[aa,i(e("textarea",{"onUpdate:modelValue":s[15]||(s[15]=t=>l(a).addressMother=t),placeholder:"Alamat Ibu",class:"border-gray-300 w-full rounded-md",rows:"2",style:{resize:"none"}},null,512),[[r,l(a).addressMother]])])]),e("div",null,[la,i(e("textarea",{"onUpdate:modelValue":s[16]||(s[16]=t=>l(a).needs=t),placeholder:"Keperluan",class:"border-gray-300 w-full rounded-md",rows:"4",style:{resize:"none"}},null,512),[[r,l(a).needs]])])])):(p(),f("div",ta,[e("div",sa,[e("div",na,[oa,i(e("input",{"onUpdate:modelValue":s[17]||(s[17]=t=>l(a).name=t),placeholder:"Nama",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).name]])]),e("div",da,[ia,i(e("input",{"onUpdate:modelValue":s[18]||(s[18]=t=>l(a).birthPlace=t),placeholder:"Tempat Lahir",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).birthPlace]])])]),e("div",ra,[e("div",ua,[ca,n(l(V),{open:B.value,"onUpdate:open":s[19]||(s[19]=t=>B.value=t)},{default:d(()=>[n(l(R),{"as-child":""},{default:d(()=>[n(l(N),{variant:"outline",role:"combobox","aria-expanded":B.value,class:"w-full justify-between"},{default:d(()=>{var t;return[o(m(l(a).gender?(t=H.find(u=>u.value===l(a).gender))==null?void 0:t.label:"Jenis kelamin")+" ",1),n(l(S),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(l(T),{class:"p-0"},{default:d(()=>[n(l(F),null,{default:d(()=>[n(l(k),{class:"h-9",placeholder:"Search..."}),n(l(K),null,{default:d(()=>[o("No data found")]),_:1}),n(l(U),null,{default:d(()=>[n(l(P),null,{default:d(()=>[(p(),f(C,null,D(H,t=>n(l(M),{key:t.value,value:t.value,onSelect:u=>{typeof u.detail.value=="string"&&(l(a).gender=u.detail.value),B.value=!1}},{default:d(()=>[o(m(t.label)+" ",1),n(l(z),{class:v(l(y)("ml-auto h-4 w-4",l(a).gender===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),e("div",ha,[pa,n(l(V),{open:q.value,"onUpdate:open":s[20]||(s[20]=t=>q.value=t)},{default:d(()=>[n(l(R),{"as-child":""},{default:d(()=>[n(l(N),{variant:"outline",role:"combobox","aria-expanded":q.value,class:"w-full justify-between"},{default:d(()=>{var t;return[o(m(l(a).religion?(t=G.find(u=>u.value===l(a).religion))==null?void 0:t.label:"Agama")+" ",1),n(l(S),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(l(T),{class:"p-0"},{default:d(()=>[n(l(F),null,{default:d(()=>[n(l(k),{class:"h-9",placeholder:"Search..."}),n(l(K),null,{default:d(()=>[o("No data found")]),_:1}),n(l(U),null,{default:d(()=>[n(l(P),null,{default:d(()=>[(p(),f(C,null,D(G,t=>n(l(M),{key:t.value,value:t.value,onSelect:u=>{typeof u.detail.value=="string"&&(l(a).religion=u.detail.value),q.value=!1}},{default:d(()=>[o(m(t.label)+" ",1),n(l(z),{class:v(l(y)("ml-auto h-4 w-4",l(a).religion===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])]),e("div",fa,[e("div",ma,[ba,i(e("input",{type:"date","onUpdate:modelValue":s[21]||(s[21]=t=>l(a).birthDate=t),placeholder:"Tanggal Lahir",class:"border-gray-300 w-full rounded-md"},null,512),[[r,l(a).birthDate]])]),e("div",_a,[xa,i(e("input",{"onUpdate:modelValue":s[22]||(s[22]=t=>l(a).familyCard=t),type:"number",placeholder:"No. KK",class:"border-gray-300 w-full rounded-md"},null,512),[[r,l(a).familyCard]])])]),e("div",va,[e("div",ya,[ga,i(e("input",{"onUpdate:modelValue":s[23]||(s[23]=t=>l(a).identityCard=t),type:"number",placeholder:"NIK",class:"border-gray-300 w-full rounded-md"},null,512),[[r,l(a).identityCard]])]),e("div",wa,[Ca,n(l(V),{open:$.value,"onUpdate:open":s[25]||(s[25]=t=>$.value=t)},{default:d(()=>[n(l(R),{"as-child":""},{default:d(()=>[n(l(N),{variant:"outline",role:"combobox","aria-expanded":$.value,class:"w-full justify-between"},{default:d(()=>{var t;return[o(m(l(a).nationality?(t=Q.find(u=>u.value===l(a).nationality))==null?void 0:t.label:"Kewarganegaraan")+" ",1),n(l(S),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(l(T),{class:"p-0"},{default:d(()=>[n(l(F),null,{default:d(()=>[n(l(k),{class:"h-9",placeholder:"Search..."}),n(l(K),null,{default:d(()=>[o("No data found")]),_:1}),n(l(U),null,{default:d(()=>[n(l(P),null,{default:d(()=>[(p(),f(C,null,D(Q,t=>n(l(M),{key:t.value,value:t.value,onSelect:s[24]||(s[24]=u=>{typeof u.detail.value=="string"&&(l(a).nationality=u.detail.value),$.value=!1})},{default:d(()=>[o(m(t.label)+" ",1),n(l(z),{class:v(l(y)("ml-auto h-4 w-4",l(a).nationality===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])]),e("div",null,[Da,i(e("textarea",{"onUpdate:modelValue":s[26]||(s[26]=t=>l(a).address=t),placeholder:"Alamat",class:"border-gray-300 w-full rounded-md",rows:"2",style:{resize:"none"}},null,512),[[r,l(a).address]])]),e("div",Aa,[e("div",Na,[Sa,n(l(V),{open:I.value,"onUpdate:open":s[27]||(s[27]=t=>I.value=t)},{default:d(()=>[n(l(R),{"as-child":""},{default:d(()=>[n(l(N),{variant:"outline",role:"combobox","aria-expanded":I.value,class:"justify-between"},{default:d(()=>{var t;return[o(m(l(a).profession?(t=O.find(u=>u.value===l(a).profession))==null?void 0:t.label:"Pekerjaan")+" ",1),n(l(S),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(l(T),{class:"p-0"},{default:d(()=>[n(l(F),null,{default:d(()=>[n(l(k),{class:"h-9",placeholder:"Search..."}),n(l(K),null,{default:d(()=>[o("No data found")]),_:1}),n(l(U),null,{default:d(()=>[n(l(P),null,{default:d(()=>[(p(),f(C,null,D(O,t=>n(l(M),{key:t.value,value:t.value,onSelect:u=>{typeof u.detail.value=="string"&&(l(a).profession=u.detail.value),I.value=!1}},{default:d(()=>[o(m(t.label)+" ",1),n(l(z),{class:v(l(y)("ml-auto h-4 w-4",l(a).profession===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),e("div",Fa,[ka,n(l(V),{open:L.value,"onUpdate:open":s[29]||(s[29]=t=>L.value=t)},{default:d(()=>[n(l(R),{"as-child":""},{default:d(()=>[n(l(N),{variant:"outline",role:"combobox","aria-expanded":L.value,class:"justify-between w-full"},{default:d(()=>{var t;return[o(m(l(a).maritalStatus?(t=J.find(u=>u.value===l(a).maritalStatus))==null?void 0:t.label:"Status Perkawinan")+" ",1),n(l(S),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(l(T),{class:"p-0"},{default:d(()=>[n(l(F),null,{default:d(()=>[n(l(k),{class:"h-9",placeholder:"Search..."}),n(l(K),null,{default:d(()=>[o("No data found")]),_:1}),n(l(U),null,{default:d(()=>[n(l(P),null,{default:d(()=>[(p(),f(C,null,D(J,t=>n(l(M),{key:t.value,value:t.value,onSelect:s[28]||(s[28]=u=>{typeof u.detail.value=="string"&&(l(a).maritalStatus=u.detail.value),L.value=!1})},{default:d(()=>[o(m(t.label)+" ",1),n(l(z),{class:v(l(y)("ml-auto h-4 w-4",l(a).maritalStatus===t.value?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])])]),l(a).typeSubmission==="death-letter"?(p(),f("div",Ka,[e("div",Ua,[e("div",Pa,[Ma,i(e("input",{"onUpdate:modelValue":s[30]||(s[30]=t=>l(a).nameRequester=t),placeholder:"Nama Pemohon",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).nameRequester]])]),e("div",Va,[Ra,i(e("input",{"onUpdate:modelValue":s[31]||(s[31]=t=>l(a).identityCardRequester=t),type:"number",placeholder:"NIK Pemohon",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^0-9]/g, '')"},null,512),[[r,l(a).identityCardRequester]])])]),e("div",Ta,[e("div",za,[Ba,i(e("textarea",{"onUpdate:modelValue":s[32]||(s[32]=t=>l(a).addressRequester=t),placeholder:"Alamat Pemohon",class:"border-gray-300 w-full rounded-md",rows:"1",style:{resize:"none"}},null,512),[[r,l(a).addressRequester]])]),e("div",qa,[La,i(e("input",{"onUpdate:modelValue":s[33]||(s[33]=t=>l(a).relationship=t),placeholder:"Hubungan dengan Almarhum",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).relationship]])])]),e("div",Ia,[e("div",$a,[Ea,i(e("input",{type:"date","onUpdate:modelValue":s[34]||(s[34]=t=>l(a).dateDeath=t),placeholder:"Tanggal Kematian",class:"border-gray-300 w-full rounded-md"},null,512),[[r,l(a).dateDeath]])]),e("div",Za,[ja,i(e("input",{"onUpdate:modelValue":s[35]||(s[35]=t=>l(a).causeDeath=t),placeholder:"Penyebab Kematian",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).causeDeath]])])]),e("div",Wa,[e("div",Ha,[Ga,i(e("input",{"onUpdate:modelValue":s[36]||(s[36]=t=>l(a).villageDeath=t),placeholder:"Desa Tempat Kematian",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).villageDeath]])]),e("div",Ja,[Oa,i(e("input",{"onUpdate:modelValue":s[37]||(s[37]=t=>l(a).subDistrictDeath=t),placeholder:"Kecamatan Tempat Kematian",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).subDistrictDeath]])])]),e("div",Qa,[e("div",Xa,[Ya,i(e("input",{"onUpdate:modelValue":s[38]||(s[38]=t=>l(a).districtDeath=t),placeholder:"Kabupaten Tempat Kematian",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).districtDeath]])]),e("div",el,[al,i(e("input",{"onUpdate:modelValue":s[39]||(s[39]=t=>l(a).provinceDeath=t),placeholder:"Provinsi Tempat Kematian",class:"border-gray-300 w-full rounded-md",oninput:"this.value = this.value.replace(/[^a-z A-Z]/g, '')"},null,512),[[r,l(a).provinceDeath]])])])])):j("",!0),e("div",null,[ll,i(e("textarea",{"onUpdate:modelValue":s[40]||(s[40]=t=>l(a).needs=t),placeholder:"Keperluan",class:"border-gray-300 w-full rounded-md",rows:"4",style:{resize:"none"}},null,512),[[r,l(a).needs]])])])),e("div",tl,[e("div",sl,[nl,e("input",{type:"file",placeholder:"Lampiran",onChange:ne,class:"border-gray-300 w-full text-sm"},null,32),ol]),l(a).typeSubmission==="name-change-letter"?(p(),f("div",dl,[il,e("input",{type:"file",placeholder:"Lampiran",onChange:oe,class:"border-gray-300 w-full text-sm"},null,32),rl])):j("",!0),l(a).typeSubmission==="birth-letter"||l(a).typeSubmission==="death-letter"?(p(),f("div",ul,[cl,e("input",{type:"file",placeholder:"Lampiran",onChange:de,class:"border-gray-300 w-full text-sm"},null,32),hl])):j("",!0)])])]),e("div",pl,[e("button",{class:v(l(y)("bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",E.value?"opacity-50 cursor-not-allowed":"")),disabled:E.value,onClick:le}," Kirim ",10,fl)])])]),_:1})]))}};export{Al as default};
