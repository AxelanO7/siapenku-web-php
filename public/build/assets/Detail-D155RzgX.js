import g from"./CustomAppLayout-BDgcpfAb.js";import{d as w,i as b,o as u,c as y,w as k,j as m,a as s,t as e,e as D,g as B,f as K}from"./app-D2BlShc-.js";import{A as p}from"./auth_helper-C2AJogAg.js";import{S as o}from"./sweetalert2.all-CHxwCVRs.js";import"./CustomSidebar-hxCUpzyd.js";const j={class:"m-12"},$={class:"bg-white rounded-lg shadow-lg"},N={class:"text-center font-medium text-xl pt-4 pb-8"},L=s("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[s("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),s("div",null,[s("h3",null,"Pemerintahan Kabupaten Buleleng"),s("h3",null,"Kecamatan Kabutambahan"),s("h3",null,"Banjar Dinas Dangin Margi")])],-1),S=s("hr",{class:"border-2 border-black my-4"},null,-1),V={class:"flex items-center w-full justify-center space-x-4"},A=s("h3",null,"Surat Keterangan :",-1),C=s("div",{class:"h-4"},null,-1),U={class:"flex items-center w-full justify-center space-x-4"},T=s("h3",null,"Nomor :",-1),M=s("div",{class:"h-4"},null,-1),H={class:"px-8 text-left"},I=s("h3",{class:"mb-4"}," Saya yang bertanda tangan dibawah ini : ",-1),J={class:"space-y-2"},P={class:"flex items-center"},E=s("p",{class:"w-1/4"},"a. Nama",-1),F=s("p",{class:"mx-4"},":",-1),G={class:"flex"},W=s("p",{class:"w-1/4"},"b. Jabatan",-1),q=s("p",{class:"mx-4"},":",-1),z=s("h3",{class:"my-4"},"Dengan ini menyatakan bahwa :",-1),O={key:0,class:"space-y-2"},Q={class:"flex pl-8"},R={class:"flex w-full items-center"},X=s("div",{class:"w-1/4"},"1. Nama",-1),Y={class:"w-3/4"},Z={class:"flex pl-8"},ss={class:"flex w-full items-center"},ts=s("div",{class:"w-1/4"},"2. Tempat Lahir",-1),es={class:"w-3/4"},as={class:"flex pl-8"},ls={class:"flex w-full items-center"},is=s("div",{class:"w-1/4"},"3. Tanggal Lahir",-1),ns={class:"w-3/4"},os={class:"flex pl-8"},cs={class:"flex w-full items-center"},ds=s("div",{class:"w-1/4"},"4. Jenis Kelamin",-1),_s={class:"w-3/4"},rs={class:"flex pl-8"},hs={class:"flex w-full items-center"},us=s("div",{class:"w-1/4"},"5. Agama",-1),ms={class:"w-3/4"},ps={class:"flex pl-8"},vs={class:"flex w-full items-center"},fs=s("div",{class:"w-1/4"},"6. No. KK",-1),xs={class:"w-3/4"},gs={class:"flex pl-8"},ws={class:"flex w-full items-center"},bs=s("div",{class:"w-1/4"},"7. NIK",-1),ys={class:"w-3/4"},ks={class:"flex pl-8"},Ds={class:"flex w-full items-center"},Bs=s("div",{class:"w-1/4"},"8. Alamat",-1),Ks={class:"w-3/4"},js={class:"flex pl-8"},$s={class:"flex w-full items-center"},Ns=s("div",{class:"w-1/4"},"9. Kebangsaan",-1),Ls={class:"w-3/4"},Ss={class:"flex pl-8"},Vs={class:"flex w-full items-center"},As=s("div",{class:"w-1/4"},"10. Keperluan",-1),Cs={class:"w-3/4"},Us={class:"flex pl-8"},Ts={class:"flex w-full items-center"},Ms=s("div",{class:"w-1/4"},"11. Lampiran",-1),Hs={class:"flex"},Is=s("p",{class:"mt-12"}," Demikian surat keterangan ini dibuat untuk dipergunakan dengan semestinya. ",-1),Js={class:"flex justify-end"},Ps={class:"text-center"},Es=s("p",null,"Kelian Banjar Dinas Dangin Margi",-1),Fs={class:"w-44 mx-auto p-1 rounded mt-4"},Gs=["src"],Ws={class:"mt-4"},Zs={__name:"Detail",setup(qs){const v=async()=>{const l=await p.getBaseUrl();m.get(`${l}/letter/${n}`).then(a=>{const i=a.data.data;t.value=i}).catch(a=>{console.log(a)})},t=w(),f=async()=>{const l=await p.getBaseUrl();t.value.status="validated",m.put(`${l}/letter/${n}`,t.value).then(a=>{console.log(a),o.fire({icon:"success",title:"Berhasil",text:"Data berhasil dikirim"}),window.location.href=`/government/print/${n}`}).catch(a=>{console.log(a),o.fire({icon:"error",title:"Gagal",text:"Data gagal dikirim"})})},x=l=>{o.fire({title:"Lampiran",text:l,imageUrl:`/files/${l}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})},n=window.location.href.split("/").pop();return b(()=>{v()}),(l,a)=>(u(),y(g,{title:"Submission"},{default:k(()=>{var i,c,d,_,r,h;return[s("div",j,[s("div",$,[s("div",N,[L,S,s("div",V,[A,s("p",null,e((i=t.value)==null?void 0:i.type_letter),1)]),C,s("div",U,[T,s("p",null,e((c=t.value)==null?void 0:c.no_letter),1)]),M,s("div",H,[I,s("div",J,[s("div",P,[E,F,s("p",null,e((d=t.value)==null?void 0:d.kadus.name),1)]),s("div",G,[W,q,s("p",null,e((_=t.value)==null?void 0:_.kadus.position),1)])]),z,t.value?(u(),D("div",O,[s("div",Q,[s("div",R,[X,s("p",Y," : "+e(t.value.name),1)])]),s("div",Z,[s("div",ss,[ts,s("p",es," : "+e(t.value.birth_place),1)])]),s("div",as,[s("div",ls,[is,s("p",ns," : "+e(t.value.birth_date),1)])]),s("div",os,[s("div",cs,[ds,s("p",_s," : "+e(t.value.gender===1?"Laki-laki":"Perempuan"),1)])]),s("div",rs,[s("div",hs,[us,s("p",ms," : "+e(t.value.religion),1)])]),s("div",ps,[s("div",vs,[fs,s("p",xs," : "+e(t.value.family_card),1)])]),s("div",gs,[s("div",ws,[bs,s("p",ys," : "+e(t.value.identity_card),1)])]),s("div",ks,[s("div",Ds,[Bs,s("p",Ks," : "+e(t.value.address),1)])]),s("div",js,[s("div",$s,[Ns,s("p",Ls," : "+e(t.value.nationality),1)])]),s("div",Ss,[s("div",Vs,[As,s("p",Cs," : "+e(t.value.needs),1)])]),s("div",Us,[s("div",Ts,[Ms,s("div",Hs,[B(" : "),s("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:a[0]||(a[0]=zs=>x(t.value.attachment))},e(t.value.attachment),1)])])])])):K("",!0),Is,s("div",Js,[s("div",Ps,[s("p",null," Bulian, "+e(new Date().toLocaleDateString().split("/").join("-")),1),Es,s("div",Fs,[s("img",{src:`/assets/images/signature/${(r=t.value)==null?void 0:r.kadus.signature}`,alt:"tanda tangan",class:"w-full"},null,8,Gs)]),s("p",Ws," ("+e((h=t.value)==null?void 0:h.kadus.name)+") ",1)])])])])]),s("div",{class:"flex justify-end mt-8"},[s("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:f}," Validasi ")])])]}),_:1}))}};export{Zs as default};