import{_ as c}from"./AppLayout-D-t-_DNZ.js";import p from"./DeleteUserForm-B_iTD36Z.js";import l from"./LogoutOtherBrowserSessionsForm-w1UMev32.js";import{S as s}from"./SectionBorder-DNzBVeUJ.js";import f from"./TwoFactorAuthenticationForm-Drv8B8sr.js";import u from"./UpdatePasswordForm-er6ZrSIz.js";import d from"./UpdateProfileInformationForm-DbYwNvUY.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-D4EfJukm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-CCIQUje1.js";import"./SectionTitle-B7guwfT6.js";import"./DangerButton-BGRHrUOJ.js";import"./TextInput-CCqTG_Z2.js";import"./SecondaryButton-DACHTkDS.js";import"./ActionMessage-BKCV9ckb.js";import"./PrimaryButton-wg0p3tbV.js";import"./InputLabel-Brn6zdQ9.js";import"./FormSection-fT-Whhtx.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};