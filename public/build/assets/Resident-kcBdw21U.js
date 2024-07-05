import{d as m,i as I,o as l,e as s,b as h,w as C,j as c,k as D,a as e,F as p,h as f,t as r}from"./app-C7HIAqrN.js";import T from"./CustomAppLayout-CswaaL5V.js";import{A as u}from"./auth_helper-CCDLtgHx.js";import{C as N}from"./CustomSpinner-DnwLyRky.js";import{S as o}from"./sweetalert2.all-Bcsi5jMK.js";import"./CustomSidebar-BtneaIt7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const K={key:0,class:"flex justify-center items-center py-8"},$={class:"bg-white rounded-lg shadow-lg mt-4"},L={class:"text-center font-medium text-xl pb-8 pt-4"},U=e("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[e("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),e("div",null,[e("h3",null,"Data Masyarakat Desa Bulian"),e("h3",null,"Kecamatan Kabutambahan"),e("h3",null,"Tahun 2023")])],-1),S=e("hr",{class:"border-2 border-black my-4"},null,-1),R={class:"table-auto w-full text-center border-collapse border border-gray-400"},A={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},G={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},H={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},M={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},j={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},F={class:"text-center border border-gray-400 px-4 py-2 text-gray-600 space-x-4"},J=["onClick"],V=["onClick"],Z={__name:"Resident",setup(Y){const y=["No.","NIK","Nama","L/P","Tgl Lahir","Aksi"],b=m(!1),g=m([]),i=async()=>{const t=await u.getBaseUrl();await c.get(`${t}/resident`).then(n=>{const a=n.data.data;g.value=a}).catch(n=>{console.log(n)})},x=()=>{o.fire({title:"Tambah Data",html:`
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nik">
                        NIK
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nik"
                        placeholder="NIK"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Nama
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        placeholder="Nama"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gender">
                        Gender
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        placeholder="Jenis Kelamin"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="birthdate">
                        Tanggal Lahir
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        type="date"
                        placeholder="Tanggal Lahir"
                    />
                </div>
            </form>
        `,showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal"}).then(t=>{t.isConfirmed&&w()})},w=async()=>{const t={nik:document.getElementById("nik").value,name:document.getElementById("name").value,gender:document.getElementById("gender").value,birthdate:document.getElementById("birthdate").value},n=await u.getBaseUrl();await c.post(`${n}/resident`,t).then(a=>{o.fire("Berhasil","Data berhasil ditambahkan","success"),i()}).catch(a=>{console.log(a),o.fire("Gagal","Data gagal ditambahkan","error")})},v=t=>{o.fire({title:"Edit Data",html:`
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nik">
                        NIK
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="nik"
                        placeholder="NIK"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Nama
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        placeholder="Nama"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="gender">
                        Gender
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="gender"
                        placeholder="Jenis Kelamin"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="birthdate">
                        Tanggal Lahir
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="birthdate"
                        type="date"
                        placeholder="Tanggal Lahir"
                    />
                </div>
            </form>
        `,didOpen:()=>{const n=new Date(t.birthdate);document.getElementById("nik").value=t.nik,document.getElementById("name").value=t.name,document.getElementById("gender").value=t.gender,document.getElementById("birthdate").value=n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)},showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal"}).then(n=>{n.isConfirmed&&k(t.id)})},k=async t=>{const n={id:t,nik:document.getElementById("nik").value,name:document.getElementById("name").value,gender:document.getElementById("gender").value,birthdate:document.getElementById("birthdate").value},a=await u.getBaseUrl();await c.put(`${a}/resident/${t}`,n).then(d=>{o.fire("Berhasil","Data berhasil diubah","success"),i()}).catch(d=>{console.log(d),o.fire("Gagal","Data gagal diubah","error")})},_=t=>{o.fire({title:"Hapus Data",text:"Apakah anda yakin ingin menghapus data ini?",icon:"warning",showCancelButton:!0,confirmButtonText:"Ya",cancelButtonText:"Tidak"}).then(n=>{n.isConfirmed&&B(t)})},B=async t=>{const n=await u.getBaseUrl();await c.delete(`${n}/resident/${t}`).then(a=>{o.fire("Berhasil","Data berhasil dihapus","success"),i()}).catch(a=>{console.log(a)})};return I(()=>{b.value=!0,i(),b.value=!1}),(t,n)=>(l(),s("div",null,[h(T,{title:"Resident"},{default:C(()=>[b.value?(l(),s("div",K,[h(N)])):(l(),s("form",{key:1,onSubmit:n[0]||(n[0]=D((...a)=>t.submit&&t.submit(...a),["prevent"])),class:"mx-12 mt-12"},[e("button",{class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:x}," Tambah Data "),e("div",$,[e("div",L,[U,S,e("table",R,[e("thead",null,[(l(),s(p,null,f(y,a=>e("th",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal border border-gray-400",key:a},r(a),1)),64))]),e("tbody",null,[(l(!0),s(p,null,f(g.value,(a,d)=>(l(),s("tr",{class:"bg-gray-100 text-gray-600 border border-gray-400",key:d},[e("td",A,r(d+1),1),e("td",G,r(a.nik),1),e("td",H,r(a.name),1),e("td",M,r(a.gender),1),e("td",j,r(a.birthdate),1),e("td",F,[e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-lg w-20",onClick:E=>v(a)}," Edit ",8,J),e("button",{class:"bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded text-lg w-20",onClick:E=>_(a.id)}," Hapus ",8,V)])]))),128))])])])])],32))]),_:1})]))}};export{Z as default};
