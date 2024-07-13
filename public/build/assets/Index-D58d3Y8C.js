import w from"./CustomAppLayout-CqBnbx-G.js";import{A as k}from"./auth_helper-DGzngXjf.js";import{d as g,i as S,o as a,c as D,w as C,j as B,a as e,e as s,b,t as r,F as p,h as y,f as i,n as N}from"./app-D5DRvD2D.js";import{C as h}from"./CustomSpinner-ChpR1Y-d.js";import{S as T}from"./sweetalert2.all-aJRC7M3o.js";import"./CustomSidebar-CX89nF15.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"mx-12 mt-12 mb-8"},$={class:"bg-white rounded-lg shadow-lg"},j={key:0,class:"flex justify-center items-center py-8"},K={key:1,class:"text-center font-medium text-xl pb-8 pt-4"},L={class:"flex items-center px-20 justify-center h-max relative py-6"},A=e("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"},null,-1),F=e("h3",null,"Validasi Surat Administrasi Desa Bulian",-1),E=e("h3",null,"Kecamatan Kabutambahan",-1),H=e("hr",{class:"border-2 border-black my-4"},null,-1),I={class:"table-auto w-full text-center border-collapse border border-gray-400"},U={key:0,class:"bg-gray-100 text-gray-600 border border-gray-400"},Y=e("td",{class:"text-center border border-gray-400 px-4 py-2 text-gray-600",colspan:"4"}," Tidak ada data ",-1),z=[Y],M={key:0,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},O={key:1,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},R={key:2,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},q={key:3,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},G={key:0,class:"flex justify-center items-center py-8"},J=["onClick"],st={__name:"Index",setup(P){const _=o=>{o.status==="sended"&&(window.location.href=`/government/detail-validate/${o.id}`),o.status==="validated"&&(window.location.href=`/government/print/${o.id}`),o.status==="pending"&&T.fire({title:"Error!",text:"Surat belum divalidasi olek Kadus",icon:"error",confirmButtonText:"OK"}),o.status==="done"&&(window.location.href=`/government/done/${o.id}`)},x=["No.","Time","Nama","Status"],l=g(!1),c=g([]),f=async()=>{const o=await k.getBaseUrl();await B.get(`${o}/letter`).then(n=>{const t=n.data.data;t.sort((d,u)=>new Date(u.updated_at)-new Date(d.updated_at)),c.value=t}).catch(n=>{console.log(n)})},m=()=>new Date().getFullYear(),v=()=>{window.location.href="/"};return S(()=>{l.value=!0,f(),l.value=!1}),(o,n)=>(a(),D(w,{title:"Resident"},{default:C(()=>[e("div",V,[e("div",$,[l.value?(a(),s("div",j,[b(h)])):(a(),s("div",K,[e("div",L,[A,e("div",null,[F,E,e("h3",null,"Tahun "+r(m()),1)])]),H,e("table",I,[e("thead",null,[(a(),s(p,null,y(x,t=>e("th",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal border border-gray-400",key:t},r(t),1)),64))]),e("tbody",null,[c.value.length===0?(a(),s("tr",U,z)):(a(!0),s(p,{key:1},y(c.value,(t,d)=>(a(),s("tr",{class:"bg-gray-100 text-gray-600 border border-gray-400",key:d},[t.status!=="pending"?(a(),s("td",M,r(d+1),1)):i("",!0),t.status!=="pending"?(a(),s("td",O,r(new Date(t.updated_at).toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)):i("",!0),t.status!=="pending"?(a(),s("td",R,r(t.name),1)):i("",!0),t.status!=="pending"?(a(),s("td",q,[o.isSubmitting?(a(),s("div",G,[b(h)])):(a(),s("button",{key:1,class:N({"bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out":t.status!=="validated","bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out":t.status==="validated","bg-gray-400 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out":t.status==="done"}),onClick:u=>_(t)},r(t.status==="validated"?"Tervalidasi":t.status==="done"?"Sudah Diproses":"Validasi"),11,J))])):i("",!0)]))),128))])])]))]),e("div",{class:"flex justify-end mt-8 mb-12"},[e("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:v}," Selesai ")])])]),_:1}))}};export{st as default};
