import U from"./CustomAppLayout-CQOeb_Gx.js";import{d as r,i as L,o as m,c as D,w as i,j as x,a as s,t as a,b as n,u as l,g,e as B,h as P,n as T,F as V,f as A}from"./app-NL0Z0VXw.js";import{A as b}from"./auth_helper-DOIP8WvI.js";import{_ as I,C as J,c as F}from"./index-BE1akyrO.js";import{a as M,C as z,b as E,c as H,d as q,e as G,f as O,g as Q,h as R,_ as W}from"./PopoverContent-ih8KNv7r.js";import"./html2pdf-BfOr4hm1.js";import"./CustomSidebar-bvNQK5At.js";const X={class:"m-12"},Y={class:"bg-white rounded-lg shadow-lg download-content",id:"download-content"},Z={class:"text-center font-medium text-xl pt-4 pb-8"},ss=s("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[s("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),s("div",null,[s("h3",null,"Pemerintahan Kabupaten Buleleng"),s("h3",null,"Kecamatan Kabutambahan"),s("h3",null,"Desa Bulian"),s("h3",null," Jln. Kubutambahan-Kintamani, Telp. 087758730344, Kode Pos 81172 ")])],-1),es=s("hr",{class:"border-2 border-black my-4"},null,-1),as={class:"flex items-center w-full justify-center space-x-4"},ts=s("h3",null,"Surat Keterangan :",-1),ls=s("div",{class:"h-4"},null,-1),ns={class:"flex items-center w-full justify-center space-x-4"},os=s("h3",null,"Nomor :",-1),is=s("div",{class:"h-4"},null,-1),cs={class:"px-8 text-left"},ds=s("h3",{class:"mb-4"}," Saya yang bertanda tangan dibawah ini : ",-1),_s={class:"space-y-2"},us={class:"flex items-center"},rs=s("p",{class:"w-1/4"},"a. Nama",-1),hs=s("p",{class:"mx-4"},":",-1),ps={class:"flex"},vs=s("p",{class:"w-1/4"},"b. Jabatan",-1),ms=s("p",{class:"mx-4"},":",-1),fs=["value"],ws=s("h3",{class:"my-4"},"Dengan ini menyatakan bahwa :",-1),xs={key:0,class:"space-y-2"},gs={class:"flex pl-8"},bs={class:"flex w-full items-center"},ys=s("div",{class:"w-1/4"},"1. Nama",-1),Ks={class:"w-3/4"},$s={class:"flex pl-8"},ks={class:"flex w-full items-center"},Ds=s("div",{class:"w-1/4"},"2. Tempat Lahir",-1),Bs={class:"w-3/4"},js={class:"flex pl-8"},Cs={class:"flex w-full items-center"},Ns=s("div",{class:"w-1/4"},"3. Tanggal Lahir",-1),Ss={class:"w-3/4"},Us={class:"flex pl-8"},Ls={class:"flex w-full items-center"},Ps=s("div",{class:"w-1/4"},"4. Jenis Kelamin",-1),Ts={class:"w-3/4"},Vs={class:"flex pl-8"},As={class:"flex w-full items-center"},Is=s("div",{class:"w-1/4"},"5. Agama",-1),Js={class:"w-3/4"},Fs={class:"flex pl-8"},Ms={class:"flex w-full items-center"},zs=s("div",{class:"w-1/4"},"6. No. KK",-1),Es={class:"w-3/4"},Hs={class:"flex pl-8"},qs={class:"flex w-full items-center"},Gs=s("div",{class:"w-1/4"},"7. NIK",-1),Os={class:"w-3/4"},Qs={class:"flex pl-8"},Rs={class:"flex w-full items-center"},Ws=s("div",{class:"w-1/4"},"8. Alamat",-1),Xs={class:"w-3/4"},Ys={class:"flex pl-8"},Zs={class:"flex w-full items-center"},se=s("div",{class:"w-1/4"},"9. Kebangsaan",-1),ee={class:"w-3/4"},ae={class:"flex pl-8"},te={class:"flex w-full items-center"},le=s("div",{class:"w-1/4"},"10. Keperluan",-1),ne={class:"w-3/4"},oe=s("p",{class:"mt-12"}," Demikian surat keterangan ini dibuat untuk dipergunakan dengan semestinya. ",-1),ie={class:"flex justify-end"},ce={class:"text-center"},de=s("p",null,"Kelian Banjar Dinas Dangin Margi",-1),_e={class:"w-44 mx-auto p-1 rounded mt-4"},ue=["src"],re={class:"mt-4"},be={__name:"Print",setup(he){const j=async()=>{const d=await b.getBaseUrl();x.get(`${d}/letter/${w}`).then(t=>{const c=t.data.data;e.value=c}).catch(t=>{console.log(t)})},e=r(),C=async()=>{const d=await b.getBaseUrl();x.get(`${d}/kasi`).then(t=>{const c=t.data.data;f.value=c}).catch(t=>{console.log(t)})},f=r(),h=r(!1),u=r(""),p=r(),N=async()=>{const d=await b.getBaseUrl();let t=e.value;const c={kasi_id:u.value};t={...t,...c},t.status="done",x.put(`${d}/letter/${w}`,t).then(_=>{console.log(_)}).catch(_=>{console.log(_)})},S=async()=>{N(),window.location.href=`/government/done/${w}`},w=window.location.href.split("/").pop();return L(()=>{j(),C()}),(d,t)=>(m(),D(U,{title:"Submission"},{default:i(()=>{var c,_,y,K,$,k;return[s("div",X,[s("div",Y,[s("div",Z,[ss,es,s("div",as,[ts,s("p",null,a((c=e.value)==null?void 0:c.type_letter),1)]),ls,s("div",ns,[os,s("p",null,a((_=e.value)==null?void 0:_.no_letter),1)]),is,s("div",cs,[ds,s("div",_s,[s("div",us,[rs,hs,n(l(W),{open:h.value,"onUpdate:open":t[0]||(t[0]=o=>h.value=o)},{default:i(()=>[n(l(M),{"as-child":""},{default:i(()=>[n(l(I),{variant:"outline",role:"combobox","aria-expanded":h.value,class:"justify-between"},{default:i(()=>{var o;return[g(a(u.value?(o=f.value.find(v=>v.id===u.value))==null?void 0:o.name:"Pilih nama...")+" ",1),n(l(z),{class:"ml-2 h-4 w-4 shrink-0 opacity-50"})]}),_:1},8,["aria-expanded"])]),_:1}),n(l(E),{class:"w-[200px] p-0"},{default:i(()=>[n(l(H),null,{default:i(()=>[n(l(q),{class:"h-9",placeholder:"Cari nama..."}),n(l(G),null,{default:i(()=>[g(" Tidak ada data ")]),_:1}),n(l(O),null,{default:i(()=>[n(l(Q),null,{default:i(()=>[(m(!0),B(V,null,P(f.value,o=>(m(),D(l(R),{key:o.id,value:o.id,onSelect:v=>{typeof v.detail.value=="number"&&(u.value=v.detail.value),p.value=o,h.value=!1}},{default:i(()=>[g(a(o.name)+" ",1),n(l(J),{class:T(l(F)("ml-auto h-4 w-4",u.value===o.id?"opacity-100":"opacity-0"))},null,8,["class"])]),_:2},1032,["value","onSelect"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])]),s("div",ps,[vs,ms,s("input",{class:"rounded border border-gray-300",disabled:"",value:((y=p.value)==null?void 0:y.position)||"-"},null,8,fs)])]),ws,e.value?(m(),B("div",xs,[s("div",gs,[s("div",bs,[ys,s("p",Ks," : "+a(e.value.name),1)])]),s("div",$s,[s("div",ks,[Ds,s("p",Bs," : "+a(e.value.birth_place),1)])]),s("div",js,[s("div",Cs,[Ns,s("p",Ss," : "+a(e.value.birth_date),1)])]),s("div",Us,[s("div",Ls,[Ps,s("p",Ts," : "+a(e.value.gender===1?"Laki-laki":"Perempuan"),1)])]),s("div",Vs,[s("div",As,[Is,s("p",Js," : "+a(e.value.religion),1)])]),s("div",Fs,[s("div",Ms,[zs,s("p",Es," : "+a(e.value.family_card),1)])]),s("div",Hs,[s("div",qs,[Gs,s("p",Os," : "+a(e.value.identity_card),1)])]),s("div",Qs,[s("div",Rs,[Ws,s("p",Xs," : "+a(e.value.address),1)])]),s("div",Ys,[s("div",Zs,[se,s("p",ee," : "+a(e.value.nationality),1)])]),s("div",ae,[s("div",te,[le,s("p",ne," : "+a(e.value.needs),1)])])])):A("",!0),oe,s("div",ie,[s("div",ce,[s("p",null," Bulian, "+a(new Date((K=e.value)==null?void 0:K.updated_at).toLocaleDateString("id-ID").split("/").join("-")),1),de,s("div",_e,[s("img",{src:`/assets/images/signature/${($=p.value)==null?void 0:$.signature}`,alt:"tanda tangan",class:"w-full"},null,8,ue)]),s("p",re,"("+a((k=p.value)==null?void 0:k.name)+")",1)])])])])]),s("div",{class:"flex justify-end mt-8"},[s("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:S}," Download ")])])]}),_:1}))}};export{be as default};