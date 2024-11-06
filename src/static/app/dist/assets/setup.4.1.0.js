import{_ as u,D as m,q as p,c as r,b as e,d as o,f as c,t as h,e as f,m as l,s as d,a as i,j as w}from"./index.4.1.0.js";import{L as g}from"./localeText.4.1.0.js";const b={name:"setup",components:{LocaleText:g},setup(){return{store:m()}},data(){return{setup:{username:"",newPassword:"",repeatNewPassword:"",enable_totp:!0},loading:!1,errorMessage:"",done:!1}},computed:{goodToSubmit(){return this.setup.username&&this.setup.newPassword.length>=8&&this.setup.repeatNewPassword.length>=8&&this.setup.newPassword===this.setup.repeatNewPassword}},methods:{submit(){this.loading=!0,p("/api/Welcome_Finish",this.setup,n=>{n.status?(this.done=!0,this.$router.push("/2FASetup")):(document.querySelectorAll("#createAccount input").forEach(s=>s.classList.add("is-invalid")),this.errorMessage=n.message,document.querySelector(".login-container-fluid").scrollTo({top:0,left:0,behavior:"smooth"})),this.loading=!1})}}},_=["data-bs-theme"],x={class:"m-auto text-body",style:{width:"500px"}},v={class:"dashboardLogo display-4"},y={class:"mb-5"},P={key:0,class:"alert alert-danger"},N={class:"d-flex flex-column gap-3"},k={id:"createAccount",class:"d-flex flex-column gap-2"},S={class:"form-group text-body"},T={for:"username",class:"mb-1 text-muted"},C={class:"form-group text-body"},L={for:"password",class:"mb-1 text-muted"},V={class:"form-group text-body"},q={for:"confirmPassword",class:"mb-1 text-muted"},$=["disabled"],A={key:0,class:"d-flex align-items-center w-100"},M={key:1,class:"d-flex align-items-center w-100"};function B(n,s,D,E,U,F){const t=w("LocaleText");return i(),r("div",{class:"container-fluid login-container-fluid d-flex main pt-5 overflow-scroll","data-bs-theme":this.store.Configuration.Server.dashboard_theme},[e("div",x,[e("span",v,[o(t,{t:"Nice to meet you!"})]),e("p",y,[o(t,{t:"Please fill in the following fields to finish setup"}),s[4]||(s[4]=c(" 😊"))]),e("div",null,[e("h3",null,[o(t,{t:"Create an account"})]),this.errorMessage?(i(),r("div",P,h(this.errorMessage),1)):f("",!0),e("div",N,[e("form",k,[e("div",S,[e("label",T,[e("small",null,[o(t,{t:"Enter an username you like"})])]),l(e("input",{type:"text",autocomplete:"username","onUpdate:modelValue":s[0]||(s[0]=a=>this.setup.username=a),class:"form-control",id:"username",name:"username",required:""},null,512),[[d,this.setup.username]])]),e("div",C,[e("label",L,[e("small",null,[o(t,{t:"Enter a password"}),e("code",null,[o(t,{t:"(At least 8 characters and make sure is strong enough!)"})])])]),l(e("input",{type:"password",autocomplete:"new-password","onUpdate:modelValue":s[1]||(s[1]=a=>this.setup.newPassword=a),class:"form-control",id:"password",name:"password",required:""},null,512),[[d,this.setup.newPassword]])]),e("div",V,[e("label",q,[e("small",null,[o(t,{t:"Confirm password"})])]),l(e("input",{type:"password",autocomplete:"confirm-new-password","onUpdate:modelValue":s[2]||(s[2]=a=>this.setup.repeatNewPassword=a),class:"form-control",id:"confirmPassword",name:"confirmPassword",required:""},null,512),[[d,this.setup.repeatNewPassword]])])]),e("button",{class:"btn btn-dark btn-lg mb-5 d-flex btn-brand shadow align-items-center",ref:"signInBtn",disabled:!this.goodToSubmit||this.loading||this.done,onClick:s[3]||(s[3]=a=>this.submit())},[!this.loading&&!this.done?(i(),r("span",A,[o(t,{t:"Next"}),s[5]||(s[5]=e("i",{class:"bi bi-chevron-right ms-auto"},null,-1))])):(i(),r("span",M,[o(t,{t:"Saving..."}),s[6]||(s[6]=e("span",{class:"spinner-border ms-auto spinner-border-sm",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1))]))],8,$)])])])],8,_)}const W=u(b,[["render",B]]);export{W as default};
