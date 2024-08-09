import{d as m,i as _,o as l,e as s,b as g,w as B,j as c,k as S,a as e,F as h,h as y,t as n}from"./app-SM9tal0I.js";import E from"./CustomAppLayout-D6kgxprS.js";import{A as p}from"./auth_helper-CM0zGiX4.js";import{C as I}from"./CustomSpinner-G5HOGPOv.js";import{S as d}from"./sweetalert2.all-DANktxQX.js";import"./CustomSidebar-DouQyn_C.js";import"./utils-DfWrn5YB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={key:0,class:"flex justify-center items-center py-8"},D={class:"bg-white rounded-lg shadow-lg mt-4"},M={class:"text-center font-medium text-xl pb-8 pt-4"},N=e("div",{class:"flex items-center px-20 justify-center h-max relative py-6"},[e("img",{src:"/assets/images/kop.png",class:"h-28 w-28 absolute left-20"}),e("div",null,[e("h3",null,"Data Masyarakat Desa Bulian"),e("h3",null,"Kecamatan Kabutambahan"),e("h3",null,"Tahun 2023")])],-1),C=e("hr",{class:"border-2 border-black my-4"},null,-1),P={class:"table-auto w-full text-center border-collapse border border-gray-400"},A={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},K={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},L={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},U={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},$={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},R={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},G={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},j={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},F={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},H={class:"text-center border border-gray-400 px-4 py-2 text-gray-600"},J={class:"text-center border border-gray-400 px-4 py-2 text-gray-600 space-x-4"},V=["onClick"],ae={__name:"Resident",setup(O){const x=["No.","NIK","Nama","L/P","Tgl Lahir","Alamat","Status","Pendidikan","No. Telepon","Status Penduduk","Aksi"],i=m(!1),b=m([]),u=async()=>{const t=await p.getBaseUrl();await c.get(`${t}/resident`).then(o=>{const a=o.data.data;b.value=a}).catch(o=>{console.log(o)})},f=()=>{d.fire({title:"Tambah Data",html:`
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
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                        Alamat
                    </label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        placeholder="Alamat"
                    ></textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="marital_status">
                        Status Pernikahan
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="marital_status"
                    >
                        <option value="Belum Menikah">Belum Menikah</option>
                        <option value="Menikah">Menikah</option>
                        <option value="Cerai">Cerai</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="education">
                        Pendidikan
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="education"
                    >
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        No. Telepon
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        placeholder="No. Telepon"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="resident_status">
                        Status Penduduk
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resident_status"
                    >
                        <option value="Tetap">Tetap</option>
                        <option value="Tidak Tetap">Tidak Tetap</option>
                    </select>
                </div>
            </form>
        `,showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal"}).then(t=>{t.isConfirmed&&v()})},v=async()=>{const t={nik:document.getElementById("nik").value,name:document.getElementById("name").value,gender:document.getElementById("gender").value,birthdate:document.getElementById("birthdate").value,address:document.getElementById("address").value,marital_status:document.getElementById("marital_status").value,education:document.getElementById("education").value,phone:document.getElementById("phone").value,resident_status:document.getElementById("resident_status").value},o=await p.getBaseUrl();await c.post(`${o}/resident`,t).then(a=>{d.fire("Berhasil","Data berhasil ditambahkan","success"),u()}).catch(a=>{console.log(a),d.fire("Gagal","Data gagal ditambahkan","error")})},w=t=>{d.fire({title:"Edit Data",html:`
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
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="address">
                        Alamat
                    </label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        placeholder="Alamat"
                    ></textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="marital_status">
                        Status Pernikahan
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="marital_status"
                    >
                        <option value="Belum Menikah">Belum Menikah</option>
                        <option value="Menikah">Menikah</option>
                        <option value="Cerai">Cerai</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="education">
                        Pendidikan
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="education"
                    >
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                        <option value="S2">S2</option>
                        <option value="S3">S3</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        No. Telepon
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="number"
                        id="phone"
                        placeholder="No. Telepon"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="resident_status">
                        Status Penduduk
                    </label>
                    <select
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="resident_status"
                    >
                        <option value="Tetap">Tetap</option>
                        <option value="Tidak Tetap">Tidak Tetap</option>
                    </select>
                </div>
            </form>
        `,didOpen:()=>{const o=new Date(t.birthdate);document.getElementById("nik").value=t.nik,document.getElementById("name").value=t.name,document.getElementById("gender").value=t.gender,document.getElementById("birthdate").value=o.getFullYear()+"-"+("0"+(o.getMonth()+1)).slice(-2)+"-"+("0"+o.getDate()).slice(-2),document.getElementById("address").value=t.address,document.getElementById("marital_status").value=t.marital_status,document.getElementById("education").value=t.education,document.getElementById("phone").value=t.phone,document.getElementById("resident_status").value=t.resident_status},showCancelButton:!0,confirmButtonText:"Simpan",cancelButtonText:"Batal"}).then(o=>{o.isConfirmed&&k(t.id)})},k=async t=>{const o={id:t,nik:document.getElementById("nik").value,name:document.getElementById("name").value,gender:document.getElementById("gender").value,birthdate:document.getElementById("birthdate").value,address:document.getElementById("address").value,marital_status:document.getElementById("marital_status").value,education:document.getElementById("education").value,phone:document.getElementById("phone").value,resident_status:document.getElementById("resident_status").value},a=await p.getBaseUrl();await c.put(`${a}/resident/${t}`,o).then(r=>{d.fire("Berhasil","Data berhasil diubah","success"),u()}).catch(r=>{console.log(r),d.fire("Gagal","Data gagal diubah","error")})};return _(()=>{i.value=!0,u(),i.value=!1}),(t,o)=>(l(),s("div",null,[g(E,{title:"Resident"},{default:B(()=>[i.value?(l(),s("div",T,[g(I)])):(l(),s("form",{key:1,onSubmit:o[0]||(o[0]=S((...a)=>t.submit&&t.submit(...a),["prevent"])),class:"mx-12 mt-12"},[e("button",{class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded transition duration-200 ease-in-out text-xl cursor-pointer hover:text-white",onClick:f}," Tambah Data "),e("div",D,[e("div",M,[N,C,e("table",P,[e("thead",null,[(l(),s(h,null,y(x,a=>e("th",{class:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal border border-gray-400",key:a},n(a),1)),64))]),e("tbody",null,[(l(!0),s(h,null,y(b.value,(a,r)=>(l(),s("tr",{class:"bg-gray-100 text-gray-600 border border-gray-400",key:r},[e("td",A,n(r+1),1),e("td",K,n(a.nik),1),e("td",L,n(a.name),1),e("td",U,n(a.gender),1),e("td",$,n(a.birthdate),1),e("td",R,n(a.address),1),e("td",G,n(a.marital_status),1),e("td",j,n(a.education),1),e("td",F,n(a.phone),1),e("td",H,n(a.resident_status),1),e("td",J,[e("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-lg w-20",onClick:Y=>w(a)}," Edit ",8,V)])]))),128))])])])])],32))]),_:1})]))}};export{ae as default};
