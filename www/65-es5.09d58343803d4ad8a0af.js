function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{xhkE:function(e,t,c){"use strict";c.r(t),c.d(t,"VercontenidoPageModule",(function(){return f}));var n=c("ofXK"),o=c("3Pt+"),a=c("TEn/"),i=c("tyNb"),r=c("fXoL");function s(e,t){if(1&e&&(r.bc(0,"ion-list"),r.bc(1,"ion-item"),r.bc(2,"ion-avatar",1),r.Wb(3,"img",7),r.ac(),r.bc(4,"ion-label"),r.bc(5,"p",9),r.Qc(6),r.ac(),r.Wb(7,"br"),r.bc(8,"ion-textarea",10),r.Qc(9),r.ac(),r.bc(10,"p",11),r.Qc(11),r.oc(12,"date"),r.ac(),r.ac(),r.ac(),r.ac()),2&e){var c=t.$implicit;r.Ib(3),r.vc("src",c.img,r.Jc),r.Ib(3),r.Rc(c.user),r.Ib(3),r.Rc(c.msg),r.Ib(2),r.Rc(r.qc(12,4,c.currentTime,"short"))}}var u,l,b,p=[{path:"",component:(u=function(){function e(t,c){var n=this;_classCallCheck(this,e),this.route=t,this.router=c,this.comments=[{id:1,id_user:3,user:"Julian",msg:"Es genial",currentTime:155409956e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"},{id:2,id_user:4,user:"Fabian",msg:"Ayuda mucho a todo lo que se necesita",currentTime:155401056e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"},{id:3,id_user:5,user:"Julia",msg:"No es de mi agrado",currentTime:155401086e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"},{id:4,id_user:6,user:"Nicolas",msg:"falta m\xe1s explicacion",currentTime:155401106e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"}],this.route.queryParams.subscribe((function(e){e&&e.info&&(n.data=e.info)}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.prueba=JSON.parse(this.data)}}]),e}(),u.\u0275fac=function(e){return new(e||u)(r.Vb(i.a),r.Vb(i.h))},u.\u0275cmp=r.Pb({type:u,selectors:[["app-vercontenido"]],decls:21,vars:3,consts:[[1,"ion-toolbar-ccs"],["slot","start"],["defaultHref","/users/perfil"],[1,"tituloInfo"],[1,"color-blue"],[1,"color-blueC"],[2,"text-align","center"],[3,"src"],[4,"ngFor","ngForOf"],[1,"titulo-user"],[1,"coment"],[1,"tiempo"]],template:function(e,t){1&e&&(r.bc(0,"ion-header"),r.bc(1,"ion-toolbar",0),r.bc(2,"ion-buttons",1),r.Wb(3,"ion-back-button",2),r.ac(),r.bc(4,"ion-title",3),r.bc(5,"label",4),r.Qc(6,"M"),r.ac(),r.bc(7,"label",5),r.Qc(8,"A"),r.ac(),r.bc(9,"label",4),r.Qc(10,"GIN"),r.ac(),r.ac(),r.ac(),r.ac(),r.bc(11,"ion-content"),r.Wb(12,"br"),r.bc(13,"ion-title",6),r.Qc(14),r.ac(),r.Wb(15,"br"),r.Wb(16,"br"),r.Wb(17,"img",7),r.Wb(18,"br"),r.Wb(19,"br"),r.Oc(20,s,13,7,"ion-list",8),r.ac()),2&e&&(r.Ib(14),r.Rc(t.prueba.title),r.Ib(3),r.vc("src",t.prueba.url,r.Jc),r.Ib(3),r.uc("ngForOf",t.comments))},directives:[a.y,a.db,a.k,a.g,a.h,a.cb,a.s,n.l,a.G,a.E,a.f,a.F,a.ab,a.pb],pipes:[n.f],styles:[""]}),u)}],m=((b=function e(){_classCallCheck(this,e)}).\u0275mod=r.Tb({type:b}),b.\u0275inj=r.Sb({factory:function(e){return new(e||b)},imports:[[i.j.forChild(p)],i.j]}),b),f=((l=function e(){_classCallCheck(this,e)}).\u0275mod=r.Tb({type:l}),l.\u0275inj=r.Sb({factory:function(e){return new(e||l)},imports:[[n.c,o.k,a.eb,m]]}),l)}}]);