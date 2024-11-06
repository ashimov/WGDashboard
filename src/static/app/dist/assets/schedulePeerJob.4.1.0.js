import{_,a as d,c as r,b as s,t as m,n as y,F as j,h as S,e as f,r as h,D as k,q as v,j as b,d as n,i as x,m as D,s as $,f as p}from"./index.4.1.0.js";import{V as J}from"./vue-datepicker.4.1.0.js";import{d as V}from"./dayjs.min.4.1.0.js";import{L as C}from"./localeText.4.1.0.js";const O={name:"scheduleDropdown",props:{options:Array,data:String,edit:!1},setup(t){t.data===void 0&&this.$emit("update",this.options[0].value)},computed:{currentSelection(){return this.options.find(t=>t.value===this.data)}}},M={class:"dropdown scheduleDropdown"},N={class:"dropdown-menu rounded-3 shadow",style:{"font-size":"0.875rem",width:"200px"}},P=["onClick"],F={key:0,class:"bi bi-check ms-auto"};function L(t,e,l,o,c,w){return d(),r("div",M,[s("button",{class:y(["btn btn-sm btn-outline-primary rounded-3",{"disabled border-transparent":!l.edit}]),type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[s("samp",null,m(this.currentSelection.display),1)],2),s("ul",N,[l.edit?(d(!0),r(j,{key:0},S(this.options,a=>(d(),r("li",null,[s("a",{class:"dropdown-item d-flex align-items-center",role:"button",onClick:u=>t.$emit("update",a.value)},[s("samp",null,m(a.display),1),a.value===this.currentSelection.value?(d(),r("i",F)):f("",!0)],8,P)]))),256)):f("",!0)])])}const T=_(O,[["render",L],["__scopeId","data-v-6a5aba2a"]]),A={name:"schedulePeerJob",components:{LocaleText:C,VueDatePicker:J,ScheduleDropdown:T},props:{dropdowns:Array[Object],pjob:Object,viewOnly:!1},setup(t){const e=h({}),l=h(!1),o=h(!1);e.value=JSON.parse(JSON.stringify(t.pjob)),e.value.CreationDate||(l.value=!0,o.value=!0);const c=k();return{job:e,edit:l,newJob:o,store:c}},data(){return{inputType:void 0}},watch:{pjob:{deep:!0,immediate:!0,handler(t){this.edit||(this.job=JSON.parse(JSON.stringify(t)))}}},methods:{save(){this.job.Field&&this.job.Operator&&this.job.Action&&this.job.Value?v("/api/savePeerScheduleJob/",{Job:this.job},t=>{t.status?(this.edit=!1,this.store.newMessage("Server","Peer job saved","success"),console.log(t.data),this.$emit("refresh",t.data[0]),this.newJob=!1):this.store.newMessage("Server",t.message,"danger")}):this.alert()},alert(){let t="animate__flash",e=this.$el.querySelectorAll(".scheduleDropdown"),l=this.$el.querySelectorAll("input");e.forEach(o=>o.classList.add("animate__animated",t)),l.forEach(o=>o.classList.add("animate__animated",t)),setTimeout(()=>{e.forEach(o=>o.classList.remove("animate__animated",t)),l.forEach(o=>o.classList.remove("animate__animated",t))},2e3)},reset(){this.job.CreationDate?(this.job=JSON.parse(JSON.stringify(this.pjob)),this.edit=!1):this.$emit("delete")},delete(){this.job.CreationDate&&v("/api/deletePeerScheduleJob/",{Job:this.job},t=>{t.status?this.store.newMessage("Server","Peer job deleted","success"):(this.store.newMessage("Server",t.message,"danger"),this.$emit("delete"))}),this.$emit("delete")},parseTime(t){t&&(this.job.Value=V(t).format("YYYY-MM-DD HH:mm:ss"))}}},E={class:"card-header bg-transparent text-muted border-0"},U={key:0,class:"d-flex"},H={class:"me-auto"},B={key:1},I={class:"badge text-bg-warning"},Y={class:"card-body pt-1",style:{"font-family":"var(--bs-font-monospace)"}},q={class:"d-flex gap-2 align-items-center mb-2"},z=["disabled"],G={class:"px-5 d-flex gap-2 align-items-center"},K={class:"d-flex gap-3"},Q={key:0,class:"ms-auto d-flex gap-3"},R={key:1,class:"ms-auto d-flex gap-3"};function W(t,e,l,o,c,w){const a=b("LocaleText"),u=b("ScheduleDropdown"),g=b("VueDatePicker");return d(),r("div",{class:y(["card shadow-sm rounded-3 mb-2",{"border-warning-subtle":this.newJob}])},[s("div",E,[this.newJob?(d(),r("small",B,[s("span",I,[n(a,{t:"Unsaved Job"})])])):(d(),r("small",U,[s("strong",H,[n(a,{t:"Job ID"})]),s("samp",null,m(this.job.JobID),1)]))]),s("div",Y,[s("div",q,[s("samp",null,[n(a,{t:"if"})]),n(u,{edit:o.edit,options:this.dropdowns.Field,data:this.job.Field,onUpdate:e[0]||(e[0]=i=>{this.job.Field=i})},null,8,["edit","options","data"]),s("samp",null,[n(a,{t:"is"})]),n(u,{edit:o.edit,options:this.dropdowns.Operator,data:this.job.Operator,onUpdate:e[1]||(e[1]=i=>this.job.Operator=i)},null,8,["edit","options","data"]),this.job.Field==="date"?(d(),x(g,{key:0,is24:!0,"min-date":new Date,"model-value":this.job.Value,"onUpdate:modelValue":this.parseTime,"time-picker-inline":"",format:"yyyy-MM-dd HH:mm:ss","preview-format":"yyyy-MM-dd HH:mm:ss",clearable:!1,disabled:!o.edit,dark:this.store.Configuration.Server.dashboard_theme==="dark"},null,8,["min-date","model-value","onUpdate:modelValue","disabled","dark"])):D((d(),r("input",{key:1,class:"form-control form-control-sm form-control-dark rounded-3 flex-grow-1",disabled:!o.edit,"onUpdate:modelValue":e[2]||(e[2]=i=>this.job.Value=i),style:{width:"auto"}},null,8,z)),[[$,this.job.Value]]),s("samp",null,m(this.dropdowns.Field.find(i=>i.value===this.job.Field)?.unit)+" { ",1)]),s("div",G,[s("samp",null,[n(a,{t:"then"})]),n(u,{edit:o.edit,options:this.dropdowns.Action,data:this.job.Action,onUpdate:e[3]||(e[3]=i=>this.job.Action=i)},null,8,["edit","options","data"])]),s("div",K,[e[12]||(e[12]=s("samp",null,"}",-1)),this.edit?(d(),r("div",R,[s("a",{role:"button",class:"text-secondary text-decoration-none",onClick:e[6]||(e[6]=i=>this.reset())},[e[10]||(e[10]=p("[C] ")),n(a,{t:"Cancel"})]),s("a",{role:"button",class:"text-primary ms-auto text-decoration-none",onClick:e[7]||(e[7]=i=>this.save())},[e[11]||(e[11]=p("[S] ")),n(a,{t:"Save"})])])):(d(),r("div",Q,[s("a",{role:"button",class:"ms-auto text-decoration-none",onClick:e[4]||(e[4]=i=>this.edit=!0)},[e[8]||(e[8]=p("[E] ")),n(a,{t:"Edit"})]),s("a",{role:"button",onClick:e[5]||(e[5]=i=>this.delete()),class:"text-danger text-decoration-none"},[e[9]||(e[9]=p("[D] ")),n(a,{t:"Delete"})])]))])])],2)}const se=_(A,[["render",W],["__scopeId","data-v-8f3f1b93"]]);export{se as S,T as a};
