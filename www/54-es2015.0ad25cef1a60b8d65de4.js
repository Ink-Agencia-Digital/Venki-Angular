(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"9oMD":function(c,t,e){"use strict";e.r(t),e.d(t,"CursosGeneralPageModule",(function(){return f}));var n=e("ofXK"),i=e("3Pt+"),r=e("TEn/"),o=e("tyNb"),s=e("fXoL"),a=e("VnPy"),u=e("7Vn+");function b(c,t){if(1&c){const c=s.cc();s.bc(0,"div"),s.bc(1,"ion-item"),s.bc(2,"ion-avatar",1),s.bc(3,"img",8),s.jc("click",(function(){s.Hc(c);const e=t.$implicit;return s.nc().verCurso(e)})),s.ac(),s.ac(),s.bc(4,"ion-label",9),s.jc("click",(function(){s.Hc(c);const e=t.$implicit;return s.nc().verCurso(e)})),s.Qc(5),s.ac(),s.bc(6,"ion-icon",10),s.jc("click",(function(){s.Hc(c);const e=t.$implicit;return s.nc().agregarCurso(e)})),s.ac(),s.ac(),s.ac()}if(2&c){const c=t.$implicit;s.Ib(3),s.wc("src","http://venki.tk/",c.photo,"",s.Jc),s.Ib(2),s.Rc(c.name)}}const l=[{path:"",component:(()=>{class c{constructor(c,t,e,n){this.share=c,this.router=t,this.route=e,this.auth=n,this.route.queryParams.subscribe(c=>{c&&c.info&&(this.data=c.info)}),this.getToken()}ngOnInit(){}getToken(){this.auth.gettokenLog().then(c=>{this.token=c,this.prueba=JSON.parse(this.data),this.share.getCursos(this.token).subscribe(c=>{this.cursos=c.data})})}verCurso(c){let t={queryParams:{info:JSON.stringify(c.id)}};this.router.navigate(["/users/perfil/vercursos-general/"],t)}agregarCurso(c){this.share.agregarCurso(this.prueba,c.id,this.token).subscribe(c=>{})}}return c.\u0275fac=function(t){return new(t||c)(s.Vb(a.a),s.Vb(o.h),s.Vb(o.a),s.Vb(u.a))},c.\u0275cmp=s.Pb({type:c,selectors:[["app-cursos-general"]],decls:16,vars:1,consts:[[1,"ion-toolbar-ccs"],["slot","start"],["defaultHref","/users/perfil"],[1,"tituloInfo"],[1,"color-blue"],[1,"color-blueC"],[1,"title-css",2,"text-align","center"],[4,"ngFor","ngForOf"],[3,"src","click"],[1,"Subtitle-css",3,"click"],["name","add-circle-outline",3,"click"]],template:function(c,t){1&c&&(s.bc(0,"ion-header"),s.bc(1,"ion-toolbar",0),s.bc(2,"ion-buttons",1),s.Wb(3,"ion-back-button",2),s.ac(),s.bc(4,"ion-title",3),s.bc(5,"label",4),s.Qc(6,"M"),s.ac(),s.bc(7,"label",5),s.Qc(8,"A"),s.ac(),s.bc(9,"label",4),s.Qc(10,"GIN"),s.ac(),s.ac(),s.ac(),s.ac(),s.bc(11,"ion-content"),s.bc(12,"ion-card-title",6),s.Qc(13,"Cursos"),s.ac(),s.bc(14,"ion-list"),s.Oc(15,b,7,2,"div",7),s.ac(),s.ac()),2&c&&(s.Ib(15),s.uc("ngForOf",t.cursos))},directives:[r.y,r.db,r.k,r.g,r.h,r.cb,r.s,r.p,r.G,n.l,r.E,r.f,r.F,r.z],styles:[""]}),c})()}];let h=(()=>{class c{}return c.\u0275mod=s.Tb({type:c}),c.\u0275inj=s.Sb({factory:function(t){return new(t||c)},imports:[[o.j.forChild(l)],o.j]}),c})(),f=(()=>{class c{}return c.\u0275mod=s.Tb({type:c}),c.\u0275inj=s.Sb({factory:function(t){return new(t||c)},imports:[[n.c,i.k,r.eb,h]]}),c})()}}]);