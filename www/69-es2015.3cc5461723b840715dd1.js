(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{D1e0:function(e,i,n){"use strict";n.r(i),n.d(i,"SlidesPageModule",(function(){return w}));var t=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),s=n("tyNb"),c=n("mrSG"),a=n("fXoL"),l=n("7Vn+"),d=n("AZGL"),g=n("8rbx"),b=n("3no8"),f=n("1as6");function p(e,i){if(1&e&&(a.bc(0,"ion-label",24),a.Qc(1),a.ac()),2&e){const e=a.nc();a.Ib(1),a.Rc(e.message_header)}}function u(e,i){if(1&e&&(a.bc(0,"ion-label",25),a.Qc(1),a.ac()),2&e){const e=a.nc();a.Ib(1),a.Rc(e.userInf.name)}}function h(e,i){if(1&e&&(a.bc(0,"ion-col",12),a.bc(1,"ion-card"),a.bc(2,"div"),a.bc(3,"ion-card-content",36),a.bc(4,"ion-label",37),a.Qc(5),a.oc(6,"capitalize"),a.ac(),a.ac(),a.ac(),a.ac(),a.ac()),2&e){const e=i.$implicit,n=a.nc().$implicit;a.Ib(1),a.Lb("card-profiles ",n.value.descriptions,""),a.Ib(4),a.Sc(" ",a.pc(6,4,e.name)," ")}}function m(e,i){if(1&e){const e=a.cc();a.bc(0,"div",26),a.bc(1,"div",27),a.bc(2,"ion-item",28),a.bc(3,"ion-checkbox",29),a.jc("ngModelChange",(function(n){a.Hc(e);const t=i.$implicit;return a.nc().selectProfile(n,t.value.index)})),a.ac(),a.bc(4,"p",30),a.Qc(5),a.ac(),a.ac(),a.ac(),a.bc(6,"div",31),a.bc(7,"ion-grid",32),a.bc(8,"ion-row",33),a.Oc(9,h,7,6,"ion-col",34),a.ac(),a.ac(),a.ac(),a.Wb(10,"hr",35),a.ac()}if(2&e){const e=i.$implicit;a.Ib(2),a.Lb("itemback ",e.value.color,""),a.uc("formGroupName",e.value.index),a.Ib(3),a.Rc(e.value.profile.name),a.Ib(4),a.uc("ngForOf",e.value.profile.descriptions)}}const x=[{path:"",component:(()=>{class e{constructor(e,i,n,t,o,r,s,c){this.router=e,this.auth=i,this.alertController=n,this.porfiles=t,this.log=o,this.loadingService=r,this.formBuilder=s,this.route=c,this.select=!1,this.colors=["card-1","card-2","card-3"],this.descriptions=["card-descriptions-1","card-descriptions-2","card-descriptions-3"],this.minProfileSelected=e=>e.controls.map(e=>e.value.selected).reduce((e,i)=>i?e+i:e,0)>=1?null:{required:!0}}get profilesArray(){return this.form.get("profiles")}ngOnInit(){this.validateProfileUserAuth(),this.loadForm(),this.getToken(),this.getCurrentHour()}validateProfileUserAuth(){this.auth.gettokenLog().then(e=>{null!==e&&this.log.logdataInfData(e).subscribe(e=>{this.auth.gettokenDevice().then(i=>{null!==i&&this.log.saveDevice(e.id,i)}),null==e.profile_id?this.getProfiles():this.route.navigateByUrl("/users/home")})})}getCurrentHour(){var e=(new Date).getHours();this.message_header=e<12?"Buenos d\xedas":e<18?"Buenas tardes":"Buenas noches"}getToken(){this.auth.gettokenLog().then(e=>{this.token=e})}getProfiles(){this.loadingService.loadingPresent({message:"Por favor espere",spinner:"circles"}),this.porfiles.getProfiles(this.token).subscribe(e=>{this.loadProfiles(e),this.auth.gettokenLog().then(e=>{null!==e&&this.log.logdataInfData(e).subscribe(e=>{e&&(this.userInf=e)}),this.loadingService.loadingDismiss()})},e=>{this.loadingService.loadingDismiss()})}loadForm(){this.form=new o.h({profiles:this.formBuilder.array([],{validators:this.minProfileSelected})})}loadProfiles(e){var i=0;e.data.map(e=>{this.profilesArray.push(this.formBuilder.group({index:new o.f(this.profilesArray.controls.length),profile:new o.f(e),selected:new o.f(!1),color:new o.f(this.colors[i]),descriptions:new o.f(this.descriptions[i])})),2==i?i=0:i++})}selectProfile(e,i){e&&this.profilesArray.controls.filter(e=>e.get("index").value!==i).map(e=>{e.get("selected").setValue(!1)})}continuar(){if(this.form.valid){const e=this.profilesArray.controls.find(e=>!0===e.get("selected").value);e&&(this.loadingService.loadingPresent({message:"Por favor espere",spinner:"circles"}),this.porfiles.updateProfile(this.userInf.id,e.value.profile.id,this.token).subscribe(e=>{this.auth.setNomolestarP(),this.loadingService.loadingDismiss(),this.router.navigateByUrl("/target")},e=>{this.loadingService.loadingDismiss()}))}else this.alertDespuesTiempo()}alertDespuesTiempo(){return Object(c.b)(this,void 0,void 0,(function*(){this.mensaje="Debe seleccionar Un perfil"}))}}return e.\u0275fac=function(i){return new(i||e)(a.Vb(s.h),a.Vb(l.a),a.Vb(r.b),a.Vb(d.a),a.Vb(g.a),a.Vb(b.a),a.Vb(o.e),a.Vb(s.h))},e.\u0275cmp=a.Pb({type:e,selectors:[["app-slides"]],decls:34,vars:6,consts:[[1,"ion-content-principal"],[2,"background-image","url(../../../assets/slidesImg/magin_1.gif)","background-repeat","round","background-size","cover","height","100vh"],[1,"swipe-img"],[2,"background-image","url(../../../assets/slidesImg/magin_2.gif)","background-repeat","round","background-size","cover","height","100vh"],[1,"swipe-img",2,"height","120% !important"],[2,"background-image","url(../../../assets/slidesImg/magin_3.gif)","background-repeat","round","background-size","cover","height","100vh"],[2,"background-image","url(../../../assets/slidesImg/magin_4.gif)","background-repeat","round","background-size","cover","height","100vh"],["lines","none",2,"min-width","100%","min-height","100%","width","100%","overflow","auto"],["header",""],[1,"ion-toolbar-ccs"],["toolbar",""],[1,"logo"],["size","4"],[1,"icon-header"],["src","/assets/finallogo.png","width","120","height","70"],["size","8",2,"align-self","flex-end"],[1,"info-header"],["style","font-size: 14px;color: #fff;margin-right: 5px;",4,"ngIf"],["style","font-size: 14px;color: #fff;text-transform: capitalize;",4,"ngIf"],[3,"formGroup"],[1,"titulo"],["formArrayName","profiles","style","margin-bottom: 15px;text-align: -webkit-center;","lines","none",4,"ngFor","ngForOf"],[1,"buttonCss",3,"disabled","click"],["slot","end","name","arrow-forward"],[2,"font-size","14px","color","#fff","margin-right","5px"],[2,"font-size","14px","color","#fff","text-transform","capitalize"],["formArrayName","profiles","lines","none",2,"margin-bottom","15px","text-align","-webkit-center"],[2,"text-align","-webkit-center","margin-bottom","2px"],["lines","none",3,"formGroupName"],["slot","end","color","primary","formControlName","selected",3,"ngModelChange"],[2,"text-transform","uppercase","font-weight","bold","margin","0"],[2,"background-color","#a9a9a94d","width","95%","border-radius","10px","margin","10px 0px","padding","5px"],["lines","none"],[2,"align-items","center"],["size","4",4,"ngFor","ngForOf"],[1,"hr-descriptions"],[1,"content-descriptions"],[1,"label-descriptions"]],template:function(e,i){1&e&&(a.bc(0,"ion-content",0),a.bc(1,"ion-slides"),a.bc(2,"ion-slide",1),a.Wb(3,"div",2),a.ac(),a.bc(4,"ion-slide",3),a.Wb(5,"div",4),a.ac(),a.bc(6,"ion-slide",5),a.Wb(7,"div",2),a.ac(),a.bc(8,"ion-slide",6),a.Wb(9,"div",2),a.ac(),a.bc(10,"ion-slide",7),a.bc(11,"ion-header",null,8),a.bc(13,"ion-toolbar",9,10),a.bc(15,"div"),a.bc(16,"ion-toolbar"),a.bc(17,"ion-row",11),a.bc(18,"ion-col",12),a.bc(19,"div",13),a.Wb(20,"img",14),a.ac(),a.ac(),a.bc(21,"ion-col",15),a.bc(22,"div",16),a.Oc(23,p,2,1,"ion-label",17),a.Oc(24,u,2,1,"ion-label",18),a.ac(),a.ac(),a.ac(),a.ac(),a.ac(),a.ac(),a.ac(),a.bc(25,"form",19),a.bc(26,"h2",20),a.Qc(27,"\xbfCON QUE PERFIL TE IDENTIFICAS?"),a.ac(),a.bc(28,"h3"),a.Qc(29),a.ac(),a.Oc(30,m,11,6,"div",21),a.bc(31,"ion-button",22),a.jc("click",(function(){return i.continuar()})),a.Qc(32,"Continuar "),a.Wb(33,"ion-icon",23),a.ac(),a.ac(),a.ac(),a.ac(),a.ac()),2&e&&(a.Ib(23),a.uc("ngIf",i.userInf),a.Ib(1),a.uc("ngIf",i.userInf),a.Ib(1),a.uc("formGroup",i.form),a.Ib(4),a.Rc(i.mensaje),a.Ib(1),a.uc("ngForOf",i.profilesArray.controls),a.Ib(1),a.uc("disabled",!i.form.valid))},directives:[r.s,r.W,r.V,r.y,r.db,r.P,r.r,t.m,o.w,o.q,o.i,t.l,r.j,r.z,r.F,o.d,r.E,o.j,r.q,r.c,o.p,o.g,r.x,r.l,r.m],pipes:[f.a],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.ion-item-css[_ngcontent-%COMP%]{background-color:#f6f6f6;border-radius:8px;color:#535353;text-decoration:none;font-size:13px;width:115%;border:2px solid #f6f6f6;transition:all .3s ease-in-out;height:45px;text-align:center;margin:0 auto 10px}ion-slides[_ngcontent-%COMP%]{height:100%;width:100%}.swiper-slide[_ngcontent-%COMP%]{display:block}.swiper-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#032d6a;margin:15px auto;font-weight:700}.swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%;max-width:100%;pointer-events:none}b[_ngcontent-%COMP%]{font-weight:500}p[_ngcontent-%COMP%]{padding:0 10px;font-size:14px}p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--ion-text-color,#000)}.titulo[_ngcontent-%COMP%]{font-size:15px;letter-spacing:1px;text-align:center}.itemback[_ngcontent-%COMP%]{color:#fff;text-decoration:none;width:95%;border-radius:10px}.buttonCss[_ngcontent-%COMP%]{text-transform:uppercase;font-size:14px;letter-spacing:1px;margin:15px auto;text-align:center;text-decoration:none;transition:all .3s ease-in-out;width:85%;--background:#002a68!important}.card-profiles[_ngcontent-%COMP%]{margin:0;border-left:4px solid #094aa8;border-radius:10px;height:100%}.label-descriptions[_ngcontent-%COMP%]{font-size:13px;font-weight:700;color:#000}.content-descriptions[_ngcontent-%COMP%]{padding:5px}.hr-descriptions[_ngcontent-%COMP%]{background-color:#b5b5b5}.card-1[_ngcontent-%COMP%]{--background:#002a68}.card-2[_ngcontent-%COMP%]{--background:#80b9f6}.card-3[_ngcontent-%COMP%]{--background:#0041a2}.card-descriptions-1[_ngcontent-%COMP%]{border-left:4px solid #002a68}.card-descriptions-2[_ngcontent-%COMP%]{border-left:4px solid #80b9f6}.card-descriptions-3[_ngcontent-%COMP%]{border-left:4px solid #0041a2}.swipe-img[_ngcontent-%COMP%]{background-image:url(swipe.1a8c7cab8aa37c661926.gif);background-repeat:no-repeat;background-position:100%;background-size:70px;box-shadow:none!important;border-radius:10px;height:180%}"]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=a.Tb({type:e}),e.\u0275inj=a.Sb({factory:function(i){return new(i||e)},imports:[[s.j.forChild(x)],s.j]}),e})();var P=n("HsBR");let w=(()=>{class e{}return e.\u0275mod=a.Tb({type:e}),e.\u0275inj=a.Sb({factory:function(i){return new(i||e)},imports:[[t.c,r.eb,v,o.t,P.a]]}),e})()}}]);