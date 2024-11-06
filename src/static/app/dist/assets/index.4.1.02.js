import{r as k,o as D,a,c,b as e,d as s,e as x,f as b,t as f,_ as $,W as H,D as y,g as N,G,w as r,F as S,h as w,n as C,i as h,T as M,j as m,k as L,l as T,S as V}from"./index.4.1.0.js";import{L as _}from"./localeText.4.1.0.js";import{M as W}from"./message.4.1.0.js";import"./dayjs.min.4.1.0.js";const B={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},O={class:"container d-flex h-100 w-100"},U={class:"m-auto modal-dialog-centered dashboardModal"},z={class:"card rounded-3 shadow flex-grow-1"},A={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-2"},F={class:"mb-0"},R={class:"card-body px-4 pb-4 d-flex flex-column gap-2"},j={class:"card text-decoration-none",target:"_blank",role:"button",href:"https://discord.com/invite/ZkJSPAaQ"},q={class:"card-body d-flex gap-4 align-items-center"},I={class:"d-flex align-items-center"},J={class:"badge rounded-pill text-bg-primary ms-2"},P={key:0,class:"spinner-border spinner-border-sm",style:{width:"0.7rem",height:"0.7rem"}},E={key:1},Q={class:"text-muted"},Z={class:"card text-decoration-none",href:"https://donaldzou.github.io/WGDashboard-Documentation/",target:"_blank"},K={class:"card-body d-flex gap-4 align-items-center"},X={class:"mb-0"},Y={class:"text-muted"},ee={__name:"helpModal",setup(n){const t=k(!0),p=k(void 0);return D(()=>{t.value=!0,fetch("https://discord.com/api/guilds/1276818723637956628/widget.json").then(d=>d.json()).then(d=>{p.value=d,t.value=!1}).catch(()=>{t.value=!1})}),(d,o)=>(a(),c("div",B,[e("div",O,[e("div",U,[e("div",z,[e("div",A,[e("h4",F,[s(_,{t:"Help"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:o[0]||(o[0]=g=>d.$emit("close"))})]),e("div",R,[e("a",j,[e("div",q,[o[3]||(o[3]=e("h1",{class:"mb-0"},[e("i",{class:"bi bi-discord"})],-1)),e("div",null,[e("div",I,[o[2]||(o[2]=e("h5",{class:"mb-0"}," Discord Server ",-1)),e("span",J,[t.value?(a(),c("span",P)):x("",!0),p.value!==void 0&&!t.value?(a(),c("span",E,[o[1]||(o[1]=e("i",{class:"bi bi-person-fill me-2"},null,-1)),b(f(p.value.presence_count)+" Online ",1)])):x("",!0)])]),e("small",Q,[s(_,{t:"Join our Discord server for quick help or chat about WGDashboard!"})])])])]),e("a",Z,[e("div",K,[o[4]||(o[4]=e("h1",{class:"mb-0"},[e("i",{class:"bi bi-hash"})],-1)),e("div",null,[e("h5",X,[s(_,{t:"Official Documentation"})]),e("small",Y,[s(_,{t:"Official documentation contains User Guides and more..."})])])])])])])])])]))}},te={name:"navbar",components:{HelpModal:ee,LocaleText:_},setup(){const n=H(),t=y();return{wireguardConfigurationsStore:n,dashboardConfigurationStore:t}},data(){return{updateAvailable:!1,updateMessage:"Checking for update...",updateUrl:"",openHelpModal:!1}},mounted(){N("/api/getDashboardUpdate",{},n=>{n.status?(n.data&&(this.updateAvailable=!0,this.updateUrl=n.data),this.updateMessage=n.message):(this.updateMessage=G("Failed to check available update"),console.log(`Failed to get update: ${n.message}`))})}},se=["data-bs-theme"],oe={id:"sidebarMenu",class:"bg-body-tertiary sidebar border h-100 rounded-3 shadow overflow-y-scroll"},ae={class:"sidebar-sticky"},ne={class:"nav flex-column px-2"},ie={class:"nav-item"},le={class:"nav-item"},de={class:"nav-item"},re={class:"sidebar-heading px-3 mt-4 mb-1 text-muted text-center"},ce={class:"nav flex-column px-2"},ue={class:"nav-item"},me={class:"sidebar-heading px-3 mt-4 mb-1 text-muted text-center"},pe={class:"nav flex-column px-2"},be={class:"nav-item"},_e={class:"nav-item"},fe={class:"nav flex-column px-2 mb-3"},he={class:"nav-item"},ge={class:"nav-item",style:{"font-size":"0.8rem"}},ve=["href"],xe={class:"nav-link text-muted rounded-3"},ke={key:1,class:"nav-link text-muted rounded-3"};function Ce(n,t,p,d,o,g){const i=m("LocaleText"),u=m("RouterLink"),v=m("HelpModal");return a(),c("div",{class:C(["col-md-3 col-lg-2 d-md-block p-2 navbar-container",{active:this.dashboardConfigurationStore.ShowNavBar}]),"data-bs-theme":d.dashboardConfigurationStore.Configuration.Server.dashboard_theme},[e("nav",oe,[e("div",ae,[t[10]||(t[10]=e("h5",{class:"text-white text-center m-0 py-3 mb-3 btn-brand"},"WGDashboard",-1)),e("ul",ne,[e("li",ie,[s(u,{class:"nav-link rounded-3",to:"/","exact-active-class":"active"},{default:r(()=>[t[3]||(t[3]=e("i",{class:"bi bi-house me-2"},null,-1)),s(i,{t:"Home"})]),_:1})]),e("li",le,[s(u,{class:"nav-link rounded-3",to:"/settings","exact-active-class":"active"},{default:r(()=>[t[4]||(t[4]=e("i",{class:"bi bi-gear me-2"},null,-1)),s(i,{t:"Settings"})]),_:1})]),e("li",de,[e("a",{class:"nav-link rounded-3",role:"button",onClick:t[0]||(t[0]=l=>o.openHelpModal=!0)},[t[5]||(t[5]=e("i",{class:"bi bi-question-circle me-2"},null,-1)),s(i,{t:"Help"})])])]),t[11]||(t[11]=e("hr",{class:"text-body"},null,-1)),e("h6",re,[t[6]||(t[6]=e("i",{class:"bi bi-body-text me-2"},null,-1)),s(i,{t:"WireGuard Configurations"})]),e("ul",ce,[(a(!0),c(S,null,w(this.wireguardConfigurationsStore.Configurations,l=>(a(),c("li",ue,[s(u,{to:"/configuration/"+l.Name+"/peers",class:"nav-link nav-conf-link rounded-3","active-class":"active"},{default:r(()=>[e("span",{class:C(["dot me-2",{active:l.Status}])},null,2),b(" "+f(l.Name),1)]),_:2},1032,["to"])]))),256))]),t[12]||(t[12]=e("hr",{class:"text-body"},null,-1)),e("h6",me,[t[7]||(t[7]=e("i",{class:"bi bi-tools me-2"},null,-1)),s(i,{t:"Tools"})]),e("ul",pe,[e("li",be,[s(u,{to:"/ping",class:"nav-link rounded-3","active-class":"active"},{default:r(()=>[s(i,{t:"Ping"})]),_:1})]),e("li",_e,[s(u,{to:"/traceroute",class:"nav-link rounded-3","active-class":"active"},{default:r(()=>[s(i,{t:"Traceroute"})]),_:1})])]),t[13]||(t[13]=e("hr",{class:"text-body"},null,-1)),e("ul",fe,[e("li",he,[e("a",{class:"nav-link text-danger rounded-3",onClick:t[1]||(t[1]=l=>this.dashboardConfigurationStore.signOut()),role:"button",style:{"font-weight":"bold"}},[t[8]||(t[8]=e("i",{class:"bi bi-box-arrow-left me-2"},null,-1)),s(i,{t:"Sign Out"})])]),e("li",ge,[this.updateAvailable?(a(),c("a",{key:0,href:this.updateUrl,class:"text-decoration-none rounded-3",target:"_blank"},[e("small",xe,[s(i,{t:this.updateMessage},null,8,["t"]),t[9]||(t[9]=b(" (")),s(i,{t:"Current Version:"}),b(" "+f(d.dashboardConfigurationStore.Configuration.Server.version)+") ",1)])],8,ve)):(a(),c("small",ke,[s(i,{t:this.updateMessage},null,8,["t"]),b(" ("+f(d.dashboardConfigurationStore.Configuration.Server.version)+") ",1)]))])])])]),s(M,{name:"zoom"},{default:r(()=>[this.openHelpModal?(a(),h(v,{key:0,onClose:t[2]||(t[2]=l=>{o.openHelpModal=!1})})):x("",!0)]),_:1})],10,se)}const $e=$(te,[["render",Ce],["__scopeId","data-v-d7e4562a"]]),ye={name:"index",components:{Message:W,Navbar:$e},async setup(){return{dashboardConfigurationStore:y()}},computed:{getMessages(){return this.dashboardConfigurationStore.Messages.filter(n=>n.show)}}},Se=["data-bs-theme"],we={class:"row h-100"},Me={class:"col-md-9 col-lg-10 overflow-y-scroll mb-0 pt-2"},De={class:"messageCentre text-body position-fixed d-flex"};function He(n,t,p,d,o,g){const i=m("Navbar"),u=m("RouterView"),v=m("Message");return a(),c("div",{class:"container-fluid flex-grow-1 main","data-bs-theme":this.dashboardConfigurationStore.Configuration.Server.dashboard_theme},[e("div",we,[s(i),e("main",Me,[(a(),h(V,null,{default:r(()=>[s(u,null,{default:r(({Component:l})=>[s(M,{name:"fade2",mode:"out-in",appear:""},{default:r(()=>[(a(),h(T(l)))]),_:2},1024)]),_:1})]),_:1})),e("div",De,[s(L,{name:"message",tag:"div",class:"position-relative flex-sm-grow-0 flex-grow-1 d-flex align-items-end ms-sm-auto flex-column gap-2"},{default:r(()=>[(a(!0),c(S,null,w(g.getMessages.slice().reverse(),l=>(a(),h(v,{message:l,key:l.id},null,8,["message"]))),128))]),_:1})])])])],8,Se)}const Ve=$(ye,[["render",He],["__scopeId","data-v-ce114a8b"]]);export{Ve as default};
