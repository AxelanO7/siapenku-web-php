var s=Object.defineProperty;var n=(t,e,r)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var a=(t,e,r)=>(n(t,typeof e!="symbol"?e+"":e,r),r);import{j as i}from"./app-C7HIAqrN.js";var u={VITE_APP_NAME:"Siapenku",VITE_PUSHER_APP_KEY:"",VITE_PUSHER_HOST:"",VITE_PUSHER_PORT:"443",VITE_PUSHER_SCHEME:"https",VITE_PUSHER_APP_CLUSTER:"mt1",BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};class l{constructor(){a(this,"baseUrl","");this.baseUrl=`${u.BACKEND_HOST}/api`}async getBaseUrl(){return this.baseUrl}async getRoleString(e){switch(e){case 1:return"Admin";case 2:return"Kadus";case 3:return"Kasi";default:return"Unknown"}}async getRoleInt(e){switch(e){case"Admin":return 1;case"Kadus":return 2;case"Kasi":return 3;default:return 0}}async getProfile(){const e=this.baseUrl+"/profile";var r=await i.get(e,{headers:{authorization:"Bearer "+localStorage.getItem("token")}});return r.status===200?r.data.user:null}}const _=new l;export{_ as A};
