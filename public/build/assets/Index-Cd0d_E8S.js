import v from"./CustomAppLayout-CQOeb_Gx.js";import{A as w}from"./auth_helper-DOIP8WvI.js";import{d as u,i as k,o as a,c as S,w as C,j as D,a as e,e as o,b as g,t as n,F as b,h as p,f as d,n as B}from"./app-NL0Z0VXw.js";import{C as h}from"./CustomSpinner-DxGvpP6F.js";import{S as N}from"./sweetalert2.all-CAawYS2i.js";import"./CustomSidebar-bvNQK5At.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={class:"mx-12 mt-12 mb-8"},$={class:"bg-white rounded-lg shadow-lg"},j={key:0,class:"flex justify-center items-center py-8"},T={key:1,class:"text-center font-medium text-xl pb-8 pt-4"},K={class:"flex items-center px-20 justify-center h-max relative py-6"},L=e("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"},null,-1),A=e("h3",null,"Validasi Surat Administrasi Desa Bulian",-1),F=e("h3",null,"Kecamatan Kabutambahan",-1),E=e("hr",{class:"border-2 border-black my-4"},null,-1),H={class:"table-auto w-full text-center border-collapse border border-gray-400"},I={key:0,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},U={key:1,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},Y={key:2,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},z={key:3,class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},M={key:0,class:"flex justify-center items-center py-8"},O=["onClick"],tt={__name:"Index",setup(R){const y=s=>{s.status==="sended"&&(window.location.href=`/government/detail-validate/${s.id}`),s.status==="validated"&&(window.location.href=`/government/print/${s.id}`),s.status==="pending"&&N.fire({title:"Error!",text:"Surat belum divalidasi olek Kadus",icon:"error",confirmButtonText:"OK"}),s.status==="done"&&(window.location.href=`/government/done/${s.id}`)},_=["No.","Time","Nama","Status"],i=u(!1),l=u([]),x=async()=>{const s=await w.getBaseUrl();await D.get(`${s}/letter`).then(r=>{const t=r.data.data;l.value=t}).catch(r=>{console.log(r)})},f=()=>new Date().getFullYear(),m=()=>{window.location.href="/"};return k(()=>{i.value=!0,x(),i.value=!1}),(s,r)=>(a(),S(v,{title:"Resident"},{default:C(()=>[e("div",V,[e("div",$,[i.value?(a(),o("div",j,[g(h)])):(a(),o("div",T,[e("div",K,[L,e("div",null,[A,F,e("h3",null,"Tahun "+n(f()),1)])]),E,e("table",H,[e("thead",null,[(a(),o(b,null,p(_,t=>e("th",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal border border-gray-400",key:t},n(t),1)),64))]),e("tbody",null,[(a(!0),o(b,null,p(l.value,(t,c)=>(a(),o("tr",{class:"bg-gray-100 text-gray-600 border border-gray-400",key:c},[t.status!=="pending"?(a(),o("td",I,n(c+1),1)):d("",!0),t.status!=="pending"?(a(),o("td",U,n(new Date(t.updated_at).toLocaleDateString("id-ID",{weekday:"long",year:"numeric",month:"long",day:"numeric"})),1)):d("",!0),t.status!=="pending"?(a(),o("td",Y,n(t.name),1)):d("",!0),t.status!=="pending"?(a(),o("td",z,[s.isSubmitting?(a(),o("div",M,[g(h)])):(a(),o("button",{key:1,class:B({"bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out":t.status!=="validated","bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out":t.status==="validated","bg-gray-400 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out":t.status==="done"}),onClick:q=>y(t)},n(t.status==="validated"?"Tervalidasi":t.status==="done"?"Sudah Diproses":"Validasi"),11,O))])):d("",!0)]))),128))])])]))]),e("div",{class:"flex justify-end mt-8 mb-12"},[e("button",{class:"bg-black hover:bg-gray-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:m}," Selesai ")])])]),_:1}))}};export{tt as default};