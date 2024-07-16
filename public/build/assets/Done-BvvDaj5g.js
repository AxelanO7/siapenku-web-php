import k from"./CustomAppLayout-D1KUyunu.js";import{d as K,i as D,o,c as j,w as f,j as B,a as s,e as n,t,f as c,g as w,b as N,u as S}from"./app-D4EfJukm.js";import{A as L}from"./auth_helper-CM3rXave.js";import{_ as $}from"./index-DuO1JJkF.js";import{S as A}from"./sweetalert2.all-bQLE_IgW.js";import"./CustomSidebar-Dw5KcRkp.js";const C={class:"m-12"},V={class:"bg-white rounded-lg shadow-lg"},P={class:"text-center font-medium text-xl pt-4 pb-8"},T=s("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[s("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),s("div",null,[s("h3",null,"Pemerintahan Kabupaten Buleleng"),s("h3",null,"Kecamatan Kabutambahan"),s("h3",null,"Banjar Dinas Dangin Margi")])],-1),U=s("hr",{class:"border-2 border-black my-4"},null,-1),I={class:"flex items-center w-full justify-center space-x-4"},M=s("h3",null,"Surat Keterangan :",-1),H={key:0,class:"text-base items-center"},J=s("div",{class:"h-4"},null,-1),E={class:"flex items-center w-full justify-center space-x-4"},F=s("h3",null,"Nomor :",-1),W={key:0,class:"text-base items-center"},q=s("div",{class:"h-4"},null,-1),z={class:"px-8 text-left"},G=s("h3",{class:"mb-4"}," Saya yang bertanda tangan dibawah ini : ",-1),O={class:"space-y-2"},Q={class:"flex items-center"},R=s("p",{class:"w-1/4"},"a. Nama",-1),X=s("p",{class:"mx-4"},":",-1),Y={class:"w-3/4"},Z={class:"flex"},ss=s("p",{class:"w-1/4"},"b. Jabatan",-1),es=s("p",{class:"mx-4"},":",-1),ts={class:"w-3/4"},as=s("h3",{class:"my-4"},"Dengan ini menyatakan bahwa :",-1),is={key:0,class:"space-y-2"},ls={class:"flex pl-8"},os={class:"flex w-full items-center"},ns=s("div",{class:"w-1/4"},"1. Nama",-1),cs={class:"w-3/4"},ds={class:"flex pl-8"},_s={class:"flex w-full items-center"},rs=s("div",{class:"w-1/4"},"2. Tempat Lahir",-1),hs={class:"w-3/4"},us={class:"flex pl-8"},vs={class:"flex w-full items-center"},ps=s("div",{class:"w-1/4"},"3. Tanggal Lahir",-1),ms={class:"w-3/4"},fs={class:"flex pl-8"},ws={class:"flex w-full items-center"},xs=s("div",{class:"w-1/4"},"4. Jenis Kelamin",-1),gs={class:"w-3/4"},bs={class:"flex pl-8"},ys={class:"flex w-full items-center"},ks=s("div",{class:"w-1/4"},"5. Agama",-1),Ks={class:"w-3/4"},Ds={class:"flex pl-8"},js={class:"flex w-full items-center"},Bs=s("div",{class:"w-1/4"},"6. No. KK",-1),Ns={class:"w-3/4"},Ss={class:"flex pl-8"},Ls={class:"flex w-full items-center"},$s=s("div",{class:"w-1/4"},"7. NIK",-1),As={class:"w-3/4"},Cs={class:"flex pl-8"},Vs={class:"flex w-full items-center"},Ps=s("div",{class:"w-1/4"},"8. Alamat",-1),Ts={class:"w-3/4"},Us={class:"flex pl-8"},Is={class:"flex w-full items-center"},Ms=s("div",{class:"w-1/4"},"9. Kebangsaan",-1),Hs={class:"w-3/4"},Js={class:"flex pl-8"},Es={class:"flex w-full items-center"},Fs=s("div",{class:"w-1/4"}," 10. Status Perkawinan ",-1),Ws={class:"w-3/4"},qs={class:"flex pl-8"},zs={class:"flex w-full items-center"},Gs=s("div",{class:"w-1/4"},"11. Pekerjaan",-1),Os={class:"w-3/4"},Qs={class:"flex pl-8"},Rs={class:"flex w-full items-center"},Xs=s("div",{class:"w-1/4"},"12. Keperluan",-1),Ys={class:"w-3/4"},Zs={class:"flex pl-8"},se={class:"flex w-full items-center"},ee=s("div",{class:"w-1/4"},"13. Lampiran",-1),te={class:"flex"},ae=s("p",{class:"mt-12"}," Demikian surat keterangan ini dibuat untuk dipergunakan dengan semestinya. ",-1),ie={class:"flex justify-end"},le={class:"text-center"},oe=s("p",null,"Kelian Banjar Dinas Dangin Margi",-1),ne={class:"w-44 mx-auto p-1 rounded mt-4"},ce=["src"],de={class:"mt-4"},_e={class:"flex justify-end mt-8"},xe={__name:"Done",setup(re){const x=async()=>{const i=await L.getBaseUrl();B.get(`${i}/letter/${y}`).then(a=>{const l=a.data.data;e.value=l}).catch(a=>{console.log(a)})},e=K(),g=i=>{A.fire({title:"Lampiran",text:i,imageUrl:`/files/${i}`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})},b=()=>{window.location.href="/village-chief/validate"},y=window.location.href.split("/").pop();return D(()=>{x()}),(i,a)=>(o(),j(k,{title:"Submission"},{default:f(()=>{var l,d,_,r,h,u,v,p,m;return[s("div",C,[s("div",V,[s("div",P,[T,U,s("div",I,[M,e.value?(o(),n("p",H,t(e.value.type_letter||"-"),1)):c("",!0)]),J,s("div",E,[F,e.value?(o(),n("p",W,t(e.value.no_letter||"-"),1)):c("",!0)]),q,s("div",z,[G,s("div",O,[s("div",Q,[R,X,s("p",Y,t(((d=(l=e.value)==null?void 0:l.kadus)==null?void 0:d.name)||"-"),1)]),s("div",Z,[ss,es,s("p",ts,t(((r=(_=e.value)==null?void 0:_.kadus)==null?void 0:r.position)||"-"),1)])]),as,e.value?(o(),n("div",is,[s("div",ls,[s("div",os,[ns,s("p",cs," : "+t(e.value.name),1)])]),s("div",ds,[s("div",_s,[rs,s("p",hs," : "+t(e.value.birth_place),1)])]),s("div",us,[s("div",vs,[ps,s("p",ms," : "+t(e.value.birth_date),1)])]),s("div",fs,[s("div",ws,[xs,s("p",gs," : "+t(e.value.gender===1?"Laki-laki":"Perempuan"),1)])]),s("div",bs,[s("div",ys,[ks,s("p",Ks," : "+t(e.value.religion),1)])]),s("div",Ds,[s("div",js,[Bs,s("p",Ns," : "+t(e.value.family_card),1)])]),s("div",Ss,[s("div",Ls,[$s,s("p",As," : "+t(e.value.identity_card),1)])]),s("div",Cs,[s("div",Vs,[Ps,s("p",Ts," : "+t(e.value.address),1)])]),s("div",Us,[s("div",Is,[Ms,s("p",Hs," : "+t(e.value.nationality),1)])]),s("div",Js,[s("div",Es,[Fs,s("p",Ws," : "+t(e.value.marital_status),1)])]),s("div",qs,[s("div",zs,[Gs,s("p",Os," : "+t(e.value.profession.charAt(0).toUpperCase()+e.value.profession.slice(1)),1)])]),s("div",Qs,[s("div",Rs,[Xs,s("p",Ys," : "+t(e.value.needs),1)])]),s("div",Zs,[s("div",se,[ee,s("div",te,[w(" : "),s("div",{class:"bg-gray-200 px-2 py-1 rounded cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out ml-1",onClick:a[0]||(a[0]=he=>g(e.value.attachment))},t(e.value.attachment),1)])])])])):c("",!0),ae,s("div",ie,[s("div",le,[s("p",null," Bulian, "+t(new Date((h=e.value)==null?void 0:h.updated_at).toLocaleDateString("id-ID").split("/").join("-")),1),oe,s("div",ne,[s("img",{src:`/assets/images/signature/${(v=(u=e.value)==null?void 0:u.kadus)==null?void 0:v.signature}`,alt:"tanda tangan",class:"w-full"},null,8,ce)]),s("p",de," ("+t((m=(p=e.value)==null?void 0:p.kadus)==null?void 0:m.name)+") ",1)])])])])]),s("div",_e,[N(S($),{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:b},{default:f(()=>[w(" Kembali ")]),_:1})])])]}),_:1}))}};export{xe as default};