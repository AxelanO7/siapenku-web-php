import{_ as c}from"./AppLayout-CWyAm0ev.js";import p from"./DeleteUserForm-BOwzdaCg.js";import l from"./LogoutOtherBrowserSessionsForm-BSqBrDRj.js";import{S as s}from"./SectionBorder-CdmlKbNr.js";import f from"./TwoFactorAuthenticationForm-C7QxGGRD.js";import u from"./UpdatePasswordForm-wL2Nz1yr.js";import d from"./UpdateProfileInformationForm-oZpRs5CU.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-NL0Z0VXw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-PLz-ALhe.js";import"./SectionTitle-NCV-5Ui7.js";import"./DangerButton-CTw6tYeY.js";import"./TextInput-CVldinDb.js";import"./SecondaryButton-DHB__cWj.js";import"./ActionMessage-BFwjk1LZ.js";import"./PrimaryButton-ge6g-aRp.js";import"./InputLabel-DNmmAgYH.js";import"./FormSection-BoGegxHC.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};
