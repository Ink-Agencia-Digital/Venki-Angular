(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"zf+l":function(t,o,e){"use strict";e.r(o),e.d(o,"DiagnosticoInicioPageModule",(function(){return f}));var i=e("ofXK"),n=e("3Pt+"),c=e("TEn/"),a=e("tyNb"),s=e("mrSG"),r=e("fXoL"),d=e("VnPy"),l=e("h7Fw"),b=e("7Vn+");const u=["videoDiagnosis"];function g(t,o){if(1&t&&(r.bc(0,"div"),r.bc(1,"ion-item"),r.bc(2,"ion-avatar",16),r.Wb(3,"img",17),r.ac(),r.bc(4,"ion-label"),r.bc(5,"h3",18),r.Qc(6),r.ac(),r.ac(),r.ac(),r.ac()),2&t){const t=o.$implicit;r.Ib(6),r.Rc(t.name.split(":")[0])}}const h=[{path:"",component:(()=>{class t{constructor(t,o,e,i,n){this.share=t,this.alertController=o,this.pObjecto=e,this.router=i,this.auth=n,this.categorias=[],this.cursos=[],this.getToken()}ngOnInit(){this.informacion=this.pObjecto.getNavData()}getToken(){this.auth.gettokenLog().then(t=>{this.token=t,this.getcursos(),this.getcategorias()})}alertAvisoGif(){return Object(s.b)(this,void 0,void 0,(function*(){this.alerta=yield this.alertController.create({cssClass:"my-custombackInicio",header:"Recomendaciones",message:"\n      <br> 1. Seleccionar el puntaje o la respuesta correspondiente a la pregunta  \n      <br> 2.  Deslizar hacia la derecha para continuar  \n      <br> 3. No se guardara el progreso hasta contestar todas las preguntas de cada bloque",buttons:[{text:"",cssClass:"secondaryClose"}]}),yield this.alerta.present()}))}diagnosticoRedirect(){return Object(s.b)(this,void 0,void 0,(function*(){this.videoDiagnosis.nativeElement.pause(),this.pObjecto.setData(this.informacion),this.router.navigate(["/users/perfil/diagnostico"])}))}getcursos(){this.share.getCategorias(this.token).subscribe(t=>{this.cursos=t.data})}getcategorias(){this.share.getCategorias(this.token).subscribe(t=>{this.categorias=t.data})}}return t.\u0275fac=function(o){return new(o||t)(r.Vb(d.a),r.Vb(c.b),r.Vb(l.a),r.Vb(a.h),r.Vb(b.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-diagnostico-inicio"]],viewQuery:function(t,o){var e;1&t&&r.Wc(u,!0),2&t&&r.Dc(e=r.kc())&&(o.videoDiagnosis=e.first)},decls:27,vars:1,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"color","white"],["defaultHref","/users/perfil"],[1,"tituloInfo","logo"],[2,"color","white"],[2,"padding","9px 5px","text-align-last","center"],[1,"title-css"],[2,"padding","0px 15px"],["autoplay","","width","100%","height","100%","controls","","src","../../../../assets/diag.mp4",2,"border-radius","10px"],["videoDiagnosis",""],[1,"contenido"],[4,"ngFor","ngForOf"],["size","small",1,"footer-dis-bot1",3,"click"],["name","information-outline"],["size","small",1,"footer-dis-bot2",3,"click"],["name","caret-forward-outline"],["slot","start"],["src","../../../../assets/cheque.png"],[2,"margin","0"]],template:function(t,o){1&t&&(r.bc(0,"ion-header"),r.bc(1,"ion-toolbar",0),r.bc(2,"ion-buttons",1),r.Wb(3,"ion-back-button",2),r.ac(),r.bc(4,"ion-title",3),r.bc(5,"label",4),r.Qc(6,"MAGIN"),r.ac(),r.ac(),r.ac(),r.ac(),r.bc(7,"ion-content"),r.bc(8,"ion-card-content",5),r.bc(9,"ion-badge",6),r.Qc(10,"\xbfQu\xe9 es el diagn\xf3stico?"),r.ac(),r.ac(),r.bc(11,"ion-card-content",7),r.Wb(12,"video",8,9),r.ac(),r.bc(14,"ion-card-content",10),r.Qc(15," Como se mencionaba en el video, el diagn\xf3stico esta dividido de acuerdo a ciertos aspectos: "),r.bc(16,"ion-list"),r.Oc(17,g,7,1,"div",11),r.ac(),r.ac(),r.bc(18,"ion-row"),r.bc(19,"ion-col"),r.bc(20,"ion-button",12),r.jc("click",(function(){return o.alertAvisoGif()})),r.Wb(21,"ion-icon",13),r.Qc(22," Instrucciones "),r.ac(),r.ac(),r.bc(23,"ion-col"),r.bc(24,"ion-button",14),r.jc("click",(function(){return o.diagnosticoRedirect()})),r.Wb(25,"ion-icon",15),r.Qc(26," Continuar "),r.ac(),r.ac(),r.ac(),r.ac()),2&t&&(r.Ib(17),r.uc("ngForOf",o.cursos))},directives:[c.y,c.db,c.k,c.g,c.h,c.cb,c.s,c.m,c.i,c.G,i.l,c.P,c.r,c.j,c.z,c.E,c.f,c.F],styles:["*[_ngcontent-%COMP%]{font-family:Geneva,Tahoma,Verdana,sans-serif!important}.contenido[_ngcontent-%COMP%]{text-align:justify;font-size:15px;padding:0 10px}.footer-dis-bot1[_ngcontent-%COMP%]{--background:#9e9e9e}.footer-dis-bot1[_ngcontent-%COMP%], .footer-dis-bot2[_ngcontent-%COMP%]{display:list-item;--padding-top:10px;--padding-bottom:10px;height:30px}.footer-dis-bot2[_ngcontent-%COMP%]{--background:#002a68}.header-title[_ngcontent-%COMP%]{text-align:center;color:#35538f}iframe[_ngcontent-%COMP%]{position:relative;height:100%;width:100%}.title-css[_ngcontent-%COMP%]{background-color:#002a68;padding:10px 15px;font-size:16px;font-weight:500;border-radius:8px}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=r.Tb({type:t}),t.\u0275inj=r.Sb({factory:function(o){return new(o||t)},imports:[[a.j.forChild(h)],a.j]}),t})(),f=(()=>{class t{}return t.\u0275mod=r.Tb({type:t}),t.\u0275inj=r.Sb({factory:function(o){return new(o||t)},imports:[[i.c,n.k,c.eb,p]]}),t})()}}]);