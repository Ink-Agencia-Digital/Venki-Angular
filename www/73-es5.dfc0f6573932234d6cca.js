function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{Lkkt:function(e,t,n){"use strict";n.r(t),n.d(t,"TargetPageModule",(function(){return w}));var o=n("ofXK"),a=n("3Pt+"),i=n("TEn/"),r=n("tyNb"),c=n("mrSG"),s=n("fXoL"),l=n("VnPy"),g=n("8rbx"),d=n("7Vn+"),u=n("3no8"),b=n("dNgK");function f(e,t){if(1&e&&(s.bc(0,"ion-label",24),s.Qc(1),s.ac()),2&e){var n=s.nc();s.Ib(1),s.Rc(n.message_header)}}function p(e,t){if(1&e&&(s.bc(0,"ion-label",25),s.Qc(1),s.ac()),2&e){var n=s.nc();s.Ib(1),s.Rc(n.usertk.name)}}function m(e,t){if(1&e&&(s.bc(0,"ion-item"),s.bc(1,"ion-reorder"),s.Wb(2,"ion-icon",26),s.ac(),s.bc(3,"div",27),s.bc(4,"ion-label",28),s.Qc(5),s.ac(),s.ac(),s.ac()),2&e){var n=t.$implicit;s.Ib(5),s.Sc(" ",n.target," ")}}function h(e,t){1&e&&(s.bc(0,"ion-row",29),s.bc(1,"ion-badge",30),s.Qc(2,"No existen objetivos"),s.ac(),s.ac())}var v,x,k,y=[{path:"",component:(v=function(){function e(t,n,o,a,i,r){_classCallCheck(this,e),this.share=t,this.log=n,this.auth=o,this.loadingService=a,this.router=i,this.snackbar=r,this.targets=[],this.usertk=null,this.getDataInfo(),this.getCurrentHour(),this.getToken()}return _createClass(e,[{key:"ngOnInit",value:function(){this.getTargets()}},{key:"getToken",value:function(){var e=this;this.auth.gettokenLog().then((function(t){e.token=t}))}},{key:"getDataInfo",value:function(){var e=this;this.auth.gettokenLog().then((function(t){e.log.logdataInfData(t).subscribe((function(t){e.usertk=t}))}))}},{key:"getTargets",value:function(){this.targets.push({target:"Mejorar mi rendimiento deportivo"},{target:"Controlar mis emociones y pensamientos"},{target:"Aprender a reponerme de los errores y mantenerme dentro de la competencia"},{target:"Tener un gran reconocimiento dentro del entorno deportivo"},{target:"Mejorar mis h\xe1bitos de bienestar"},{target:"Aumentar mi confianza"},{target:"Tener m\xe1s motivaci\xf3n tanto en competencia como en los entrenamientos"},{target:"Adquirir mayor agilidad f\xedsica y mental tanto en mi deporte como en la vida"},{target:"Concentrarme m\xe1s, antes, durante y despu\xe9s de una actividad deportiva"},{target:"Enfocar 100% mi carrera deportiva como proyecto de vida"})}},{key:"reorder",value:function(e){var t=this.targets.splice(e.detail.from,1)[0];this.targets.splice(e.detail.to,0,t),e.detail.complete()}},{key:"submit",value:function(){var e=this,t=[],n=1;this.targets.map((function(e){t.push({achievement:e.target,priority:n,date:""}),n++})),this.loadingService.loadingPresent({spinner:"circles"}),this.share.agregarObjetivos({objectives:t,user_id:this.usertk.id},this.token).subscribe((function(t){return Object(c.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t?(this.loadingService.loadingDismiss(),this.mostrarmensaje("Los objetivos se han guardado satisfactoriamente","OK","green-snackbar"),this.router.navigateByUrl("/users/home")):(this.loadingService.loadingDismiss(),this.mostrarmensaje("Error guardando los objetivos","Error","red-snackbar"));case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){e.loadingService.loadingDismiss(),e.mostrarmensaje("Error guardando los objetivos","Error","red-snackbar"),e.auth.logout()}))}},{key:"getCurrentHour",value:function(){var e=(new Date).getHours();this.message_header=e<12?"Buenos d\xedas":e<18?"Buenas tardes":"Buenas noches"}},{key:"mostrarmensaje",value:function(e,t,n){this.snackbar.open(e,t,{duration:2e3,panelClass:[n]})}}]),e}(),v.\u0275fac=function(e){return new(e||v)(s.Vb(l.a),s.Vb(g.a),s.Vb(d.a),s.Vb(u.a),s.Vb(r.h),s.Vb(b.a))},v.\u0275cmp=s.Pb({type:v,selectors:[["app-target"]],decls:48,vars:4,consts:[["header",""],[1,"ion-toolbar-ccs"],["toolbar",""],[1,"logo"],["size","4"],[1,"icon-header"],["src","/assets/finallogo.png","width","120","height","70"],["size","8",2,"align-self","flex-end"],[1,"info-header"],["style","font-size: 14px;color: #fff;margin-right: 5px;",4,"ngIf"],["style","font-size: 14px;color: #fff;text-transform: capitalize;",4,"ngIf"],[1,"title"],[1,"subtitle"],[1,"badge-instructions"],[2,"margin-left","15px"],[2,"font-size","13px","font-weight","500"],[2,"margin-left","15px","margin","10px"],[2,"font-size","12px","font-weight","500","color","#939393"],[2,"font-size","18px","font-weight","500","background","#002a68","color","white","text-transform","uppercase","display","block","text-align","center","padding","0"],["disabled","false",3,"ionItemReorder"],[4,"ngFor","ngForOf"],[2,"text-align-last","center"],[1,"button-end",3,"click"],["class","no-content",4,"ngIf"],[2,"font-size","14px","color","#fff","margin-right","5px"],[2,"font-size","14px","color","#fff","text-transform","capitalize"],["name","medal-outline",1,"icon-target"],[2,"margin-left","10px","width","100%"],[1,"label-target"],[1,"no-content"],["color","danger",1,"badge-no-content"]],template:function(e,t){1&e&&(s.bc(0,"ion-header",null,0),s.bc(2,"ion-toolbar",1,2),s.bc(4,"div"),s.bc(5,"ion-toolbar"),s.bc(6,"ion-row",3),s.bc(7,"ion-col",4),s.bc(8,"div",5),s.Wb(9,"img",6),s.ac(),s.ac(),s.bc(10,"ion-col",7),s.bc(11,"div",8),s.Oc(12,f,2,1,"ion-label",9),s.Oc(13,p,2,1,"ion-label",10),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.ac(),s.bc(14,"ion-content"),s.bc(15,"div"),s.bc(16,"ion-card-title",11),s.Qc(17,"\xbfQu\xe9 objetivos quieres alcanzar con nuestros programas?"),s.ac(),s.bc(18,"ion-card-subtitle",12),s.Qc(19,"Organiza estos objetivos seg\xfan t\xfa inter\xe9s y actualidad deportiva."),s.ac(),s.bc(20,"div"),s.bc(21,"ion-badge",13),s.Qc(22,"Instrucciones:"),s.ac(),s.bc(23,"div",14),s.bc(24,"ion-label",15),s.Qc(25," 1. Lee atentamente los objetivos propuestos. "),s.ac(),s.ac(),s.bc(26,"div",14),s.bc(27,"ion-label",15),s.Qc(28," 2. Utiliza el icono azul que encuentras al inicio de cada objetivo para organizarlos. "),s.ac(),s.ac(),s.bc(29,"div",14),s.bc(30,"ion-label",15),s.Qc(31," 3. Desliza los objetivos conforme a tu prioridad. "),s.ac(),s.ac(),s.bc(32,"div",14),s.bc(33,"ion-label",15),s.Qc(34," 4. Despu\xe9s de organizar tus objetivos presiona finalizar. "),s.ac(),s.ac(),s.bc(35,"div",16),s.bc(36,"ion-label",17),s.Qc(37," *Nota. Estos objetivos podr\xe1s modificarlos posteriormente. "),s.ac(),s.ac(),s.ac(),s.bc(38,"ion-list"),s.bc(39,"ion-list-header",18),s.bc(40,"ion-label"),s.Qc(41,"Objetivos"),s.ac(),s.ac(),s.bc(42,"ion-reorder-group",19),s.jc("ionItemReorder",(function(e){return t.reorder(e)})),s.Oc(43,m,6,1,"ion-item",20),s.ac(),s.ac(),s.bc(44,"div",21),s.bc(45,"ion-button",22),s.jc("click",(function(){return t.submit()})),s.Qc(46,"Finalizar"),s.ac(),s.ac(),s.ac(),s.Oc(47,h,3,0,"ion-row",23),s.ac()),2&e&&(s.Ib(12),s.uc("ngIf",t.usertk),s.Ib(1),s.uc("ngIf",t.usertk),s.Ib(30),s.uc("ngForOf",t.targets),s.Ib(4),s.uc("ngIf",0===t.targets.length))},directives:[i.y,i.db,i.P,i.r,o.m,i.s,i.p,i.o,i.i,i.F,i.G,i.H,i.N,o.l,i.j,i.E,i.M,i.z],styles:[".title[_ngcontent-%COMP%]{padding:10px 25px;font-size:16px;font-weight:700;text-transform:uppercase}.subtitle[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.subtitle[_ngcontent-%COMP%]{padding:10px 20px;font-size:15px}.badge-instructions[_ngcontent-%COMP%]{background-color:#fff;padding:5px;font-weight:700;font-size:13px;margin-left:15px;color:#002a68;text-transform:uppercase}.no-content[_ngcontent-%COMP%]{place-content:center;margin-top:10px}.badge-no-content[_ngcontent-%COMP%]{font-size:14px;padding:5px 10px;border-radius:5px;font-weight:500}.icon-target[_ngcontent-%COMP%]{color:#fff;background-color:#002a68;padding:5px;border-radius:10px;margin-right:5px}.label-target[_ngcontent-%COMP%]{white-space:normal;font-size:14px;font-weight:500}.button-end[_ngcontent-%COMP%]{--background:#002a68;margin-bottom:15px}"]}),v)}],j=((k=function e(){_classCallCheck(this,e)}).\u0275mod=s.Tb({type:k}),k.\u0275inj=s.Sb({factory:function(e){return new(e||k)},imports:[[r.j.forChild(y)],r.j]}),k),w=((x=function e(){_classCallCheck(this,e)}).\u0275mod=s.Tb({type:x}),x.\u0275inj=s.Sb({factory:function(e){return new(e||x)},imports:[[o.c,a.k,i.eb,j]]}),x)}}]);