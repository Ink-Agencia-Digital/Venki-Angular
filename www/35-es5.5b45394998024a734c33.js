function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var a=0;a<i.length;a++){var n=i[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,i,a){return i&&_defineProperties(t.prototype,i),a&&_defineProperties(t,a),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"8g1P":function(t,i,a){"use strict";a.r(i),a.d(i,"AudioplayerPageModule",(function(){return H}));var n=a("ofXK"),e=a("3Pt+"),o=a("TEn/"),r=a("tyNb"),c=a("mrSG"),s=a("HlzF"),l=a("fXoL"),d=a("h7Fw"),u=a("J2Na"),b=a("VnPy"),f=a("0Wod"),v=a("KB8S"),m=a("3no8"),p=a("dNgK"),h=a("7Vn+"),g=["range"];function y(t,i){if(1&t){var a=l.cc();l.bc(0,"ion-item",15),l.jc("click",(function(){l.Hc(a);var t=i.$implicit;return l.nc().start(t)})),l.bc(1,"div",16),l.bc(2,"ion-badge",17),l.Qc(3),l.ac(),l.ac(),l.ac()}if(2&t){var n=i.$implicit,e=l.nc();l.Ib(2),l.uc("color",n===e.activetrack?"info":"medium"),l.Ib(1),l.Rc(e.audioname)}}function k(t,i){if(1&t){var a=l.cc();l.bc(0,"ion-button",26),l.jc("click",(function(){l.Hc(a);var t=l.nc().$implicit;return l.nc(2).toggleplayer(!0,t)})),l.Wb(1,"ion-icon",30),l.ac()}}function w(t,i){if(1&t){var a=l.cc();l.bc(0,"ion-button",26),l.jc("click",(function(){l.Hc(a);var t=l.nc().$implicit;return l.nc(2).toggleplayer(!0,t)})),l.Wb(1,"ion-icon",31),l.ac()}}function O(t,i){if(1&t){var a=l.cc();l.bc(0,"ion-col",19),l.bc(1,"ion-button",26),l.jc("click",(function(){return l.Hc(a),l.nc(2).prev()})),l.Wb(2,"ion-icon",27),l.ac(),l.Oc(3,k,2,0,"ion-button",28),l.Oc(4,w,2,0,"ion-button",28),l.bc(5,"ion-button",26),l.jc("click",(function(){return l.Hc(a),l.nc(2).next()})),l.Wb(6,"ion-icon",29),l.ac(),l.ac()}if(2&t){var n=l.nc(2);l.Ib(3),l.uc("ngIf",!n.isPlaying),l.Ib(1),l.uc("ngIf",n.isPlaying)}}function W(t,i){if(1&t){var a=l.cc();l.bc(0,"div"),l.bc(1,"ion-button",33),l.jc("click",(function(){l.Hc(a);var t=l.nc(2).$implicit,i=l.nc(2).$implicit;return l.nc(3).startVideo(i.name,t.video,t.order,null==i.resources?null:i.resources.length)})),l.Qc(2," Continuar "),l.Wb(3,"ion-icon",34),l.ac(),l.ac()}}function C(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,W,4,0,"div",14),l.ac()),2&t){var a=l.nc().$implicit;l.Ib(1),l.uc("ngIf",a.video)}}function P(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,C,2,1,"div",14),l.ac()),2&t){var a=i.$implicit;l.Ib(1),l.uc("ngIf",2===a.order)}}function x(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,P,2,1,"div",32),l.ac()),2&t){var a=l.nc().$implicit;l.Ib(1),l.uc("ngForOf",a.resources)}}function _(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,x,2,1,"div",14),l.ac()),2&t){var a=i.index,n=l.nc(3);l.Ib(1),l.uc("ngIf",a===n.indexLessons)}}function M(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,_,2,1,"div",32),l.ac()),2&t){var a=i.$implicit;l.Ib(1),l.uc("ngForOf",a.lessons)}}function j(t,i){if(1&t){var a=l.cc();l.bc(0,"ion-footer"),l.bc(1,"ion-toolbar",18),l.bc(2,"ion-row"),l.bc(3,"ion-col",19),l.bc(4,"ion-label",20),l.Qc(5),l.ac(),l.ac(),l.bc(6,"ion-col",21),l.bc(7,"ion-range",22,23),l.jc("ngModelChange",(function(t){return l.Hc(a),l.nc().progress=t}))("touched",(function(){return l.Hc(a),l.nc().seek()}))("mouseup",(function(){return l.Hc(a),l.nc().seek()})),l.ac(),l.ac(),l.Oc(9,O,7,2,"ion-col",24),l.Oc(10,M,2,1,"div",25),l.ac(),l.ac(),l.ac()}if(2&t){var n=l.nc();l.Ib(5),l.Rc(n.audioname),l.Ib(2),l.uc("ngModel",n.progress),l.Ib(2),l.uc("ngForOf",n.aud),l.Ib(1),l.uc("ngForOf",n.cursos)}}var I,D,F,V=[{path:"",component:(I=function(){function t(i,a,n,e,o,r,c,s,l){_classCallCheck(this,t),this.router=i,this.pObjecto=a,this.PObjectAux=n,this.share=e,this.pObjectoVideo=o,this.PObjecIndex=r,this.loadingService=c,this.snackbar=s,this.auth=l,this.player=null,this.isPlaying=!1,this.progress=0,this.cursos=[],this.menajeNuevo="",this.img="https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png",this.comentariosGeneral=[],this.autoClose=!0,this.exam=0,this.getToken()}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getToken",value:function(){var t=this;this.auth.gettokenLog().then((function(i){t.token=i,t.loadPage()}))}},{key:"loadPage",value:function(){var t=this,i=this.pObjecto.getNavData();i&&(this.share.guardarLeccionActiva(i),this.data=i.audioInfo,this.audioname=i.name,this.orderID=i.orderid,this.tam=i.tm,this.aud=[],this.aud.push(this.data)),this.activetrack=this.aud,this.share.verorder().then((function(i){i===t.tam?t.share.varExam.next("Listo para el examen"):t.share.updateorder(t.orderID)})),this.indexLessons=this.PObjecIndex.getData();var a=this.pObjectoVideo.getNavData();this.color=a.color,this.data=a.infoCurso,this.userinfo=a.userInf,this.course=a.course.name,this.courseID=a.infoCurso.id,this.getCourse()}},{key:"getCourse",value:function(){var t=this;this.loadingService.loadingPresent({spinner:"circles"}),this.share.getCursoEspecifico(this.data.id,this.token).subscribe((function(i){return Object(c.b)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.info=i.data,this.share.getComentariosCurso(this.data.id,this.token).subscribe((function(t){a.comentariosGeneral=t.data,a.share.getCursosUsuario(a.userinfo.id,a.token).subscribe((function(t){a.loadingService.loadingDismiss();var i=t.data.filter((function(t){return t.id===a.courseID}));i.forEach((function(t){a.CourseLessonID=t.id,a.progreso=t.pivot.progress})),a.share.hayorder().then((function(t){t?a.share.verorder().then((function(t){a.orderStorage=t})):a.share.iniciorder()})),a.cursos=i}),(function(t){a.loadingService.loadingDismiss()}))}),(function(t){a.loadingService.loadingDismiss()}));case 1:case"end":return t.stop()}}),t,this)})))}),(function(i){t.loadingService.loadingDismiss()}))}},{key:"start",value:function(t){var i=this,a=this;this.player&&this.player.stop(),this.player=new s.Howl({src:[t],html5:!0,onplay:function(){i.isPlaying=!0,i.activetrack=t,i.updateProgress()},onend:function(){i.player.stop()},onloaderror:function(){a.mostrarmensaje("Error al cargar el audio","Error","red-snackbar")}}),this.player.play()}},{key:"toggleplayer",value:function(t,i){this.player?(this.isPlaying=!t,t?this.player.pause():null===this.player?(console.group(i),this.start(i)):this.player.play()):this.mostrarmensaje("Error al cargar el audio","Error","red-snackbar")}},{key:"next",value:function(){var t=this.aud.indexOf(this.activetrack);this.start(t!=this.aud.length-1?this.aud[t+1]:this.aud[0])}},{key:"prev",value:function(){var t=this.aud.indexOf(this.activetrack);this.start(t>0?this.aud[t-1]:this.aud[this.aud.length-1])}},{key:"seek",value:function(){var t=+this.range.value,i=this.player.duration();this.player.seek(i*(t/100))}},{key:"updateProgress",value:function(){var t=this,i=this.player.seek();this.progress=i/this.player.duration()*100||0,setTimeout((function(){t.updateProgress()}),1e3)}},{key:"startVideo",value:function(t,i,a,n){this.pObjectoVideo.setData({name:t,vidInfo:i,orderid:a,tm:n}),this.router.navigate(["/users/entrena/vercurso/verleccion/vidplayer/"])}},{key:"anterior",value:function(){this.pObjecto.setData(this.PObjectAux.getNavData()),this.pObjectoVideo.setData(this.PObjectAux.getNavData()),this.router.navigate(["/users/entrena/vercurso/verleccion/"])}},{key:"mostrarmensaje",value:function(t,i,a){this.snackbar.open(t,i,{duration:2e3,panelClass:[a]})}}]),t}(),I.\u0275fac=function(t){return new(t||I)(l.Vb(r.h),l.Vb(d.a),l.Vb(u.a),l.Vb(b.a),l.Vb(f.a),l.Vb(v.a),l.Vb(m.a),l.Vb(p.a),l.Vb(h.a))},I.\u0275cmp=l.Pb({type:I,selectors:[["app-audioplayer"]],viewQuery:function(t,i){var a;1&t&&l.Wc(g,!0),2&t&&l.Dc(a=l.kc())&&(i.range=a.first)},decls:112,vars:2,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"color","white"],[3,"click"],[1,"tituloInfo","logo"],[2,"color","white"],["lines","none"],["button","",3,"click",4,"ngFor","ngForOf"],[1,"coverBack"],[1,"container"],[1,"rain"],[1,"drop"],[1,"waves"],[1,"splash"],[1,"particles"],[4,"ngIf"],["button","",3,"click"],[2,"width","100%"],[1,"title",3,"color"],[1,"toolbarColor"],["size","12",1,"ion-text-center"],["color","light"],["size","12"],["max","100","color","dark",3,"ngModel","ngModelChange","touched","mouseup"],["range",""],["size","12","class","ion-text-center",4,"ngFor","ngForOf"],[4,"ngFor","ngForIndex","ngForOf"],["fill","clear","color","dark",3,"click"],["slot","icon-only","name","play-back",2,"color","black"],["fill","clear","color","dark",3,"click",4,"ngIf"],["slot","icon-only","name","play-forward",2,"color","black"],["slot","icon-only","name","play",2,"color","black"],["slot","icon-only","name","pause",2,"color","black"],[4,"ngFor","ngForOf"],[1,"footer-dis-bot2",3,"click"],["name","caret-forward-outline"]],template:function(t,i){1&t&&(l.bc(0,"ion-header"),l.bc(1,"ion-toolbar",0),l.bc(2,"ion-buttons",1),l.bc(3,"ion-back-button",2),l.jc("click",(function(){return i.anterior()})),l.ac(),l.ac(),l.bc(4,"ion-title",3),l.bc(5,"label",4),l.Qc(6,"MAGIN"),l.ac(),l.ac(),l.ac(),l.ac(),l.bc(7,"ion-content"),l.bc(8,"ion-list",5),l.Oc(9,y,4,2,"ion-item",6),l.ac(),l.bc(10,"div",7),l.bc(11,"div",8),l.bc(12,"div",9),l.Wb(13,"div",10),l.bc(14,"div",11),l.Wb(15,"div"),l.Wb(16,"div"),l.ac(),l.Wb(17,"div",12),l.bc(18,"div",13),l.Wb(19,"div"),l.Wb(20,"div"),l.Wb(21,"div"),l.Wb(22,"div"),l.ac(),l.ac(),l.bc(23,"div",9),l.Wb(24,"div",10),l.bc(25,"div",11),l.Wb(26,"div"),l.Wb(27,"div"),l.ac(),l.Wb(28,"div",12),l.bc(29,"div",13),l.Wb(30,"div"),l.Wb(31,"div"),l.Wb(32,"div"),l.Wb(33,"div"),l.ac(),l.ac(),l.bc(34,"div",9),l.Wb(35,"div",10),l.bc(36,"div",11),l.Wb(37,"div"),l.Wb(38,"div"),l.ac(),l.Wb(39,"div",12),l.bc(40,"div",13),l.Wb(41,"div"),l.Wb(42,"div"),l.Wb(43,"div"),l.Wb(44,"div"),l.ac(),l.ac(),l.bc(45,"div",9),l.Wb(46,"div",10),l.bc(47,"div",11),l.Wb(48,"div"),l.Wb(49,"div"),l.ac(),l.Wb(50,"div",12),l.bc(51,"div",13),l.Wb(52,"div"),l.Wb(53,"div"),l.Wb(54,"div"),l.Wb(55,"div"),l.ac(),l.ac(),l.bc(56,"div",9),l.Wb(57,"div",10),l.bc(58,"div",11),l.Wb(59,"div"),l.Wb(60,"div"),l.ac(),l.Wb(61,"div",12),l.bc(62,"div",13),l.Wb(63,"div"),l.Wb(64,"div"),l.Wb(65,"div"),l.Wb(66,"div"),l.ac(),l.ac(),l.bc(67,"div",9),l.Wb(68,"div",10),l.bc(69,"div",11),l.Wb(70,"div"),l.Wb(71,"div"),l.ac(),l.Wb(72,"div",12),l.bc(73,"div",13),l.Wb(74,"div"),l.Wb(75,"div"),l.Wb(76,"div"),l.Wb(77,"div"),l.ac(),l.ac(),l.bc(78,"div",9),l.Wb(79,"div",10),l.bc(80,"div",11),l.Wb(81,"div"),l.Wb(82,"div"),l.ac(),l.Wb(83,"div",12),l.bc(84,"div",13),l.Wb(85,"div"),l.Wb(86,"div"),l.Wb(87,"div"),l.Wb(88,"div"),l.ac(),l.ac(),l.bc(89,"div",9),l.Wb(90,"div",10),l.bc(91,"div",11),l.Wb(92,"div"),l.Wb(93,"div"),l.ac(),l.Wb(94,"div",12),l.bc(95,"div",13),l.Wb(96,"div"),l.Wb(97,"div"),l.Wb(98,"div"),l.Wb(99,"div"),l.ac(),l.ac(),l.bc(100,"div",9),l.Wb(101,"div",10),l.bc(102,"div",11),l.Wb(103,"div"),l.Wb(104,"div"),l.ac(),l.Wb(105,"div",12),l.bc(106,"div",13),l.Wb(107,"div"),l.Wb(108,"div"),l.Wb(109,"div"),l.Wb(110,"div"),l.ac(),l.ac(),l.ac(),l.ac(),l.ac(),l.Oc(111,j,11,4,"ion-footer",14)),2&t&&(l.Ib(9),l.uc("ngForOf",i.aud),l.Ib(102),l.uc("ngIf",i.activetrack))},directives:[o.y,o.db,o.k,o.g,o.h,o.cb,o.s,o.G,n.l,n.m,o.E,o.i,o.w,o.P,o.r,o.F,o.L,o.ob,e.p,e.s,o.j,o.z],styles:[".coverBack[_ngcontent-%COMP%]{height:120%;margin:0;display:flex;justify-content:center;align-items:center;background-color:rgba(33,65,153,.623)}.toolbarColor[_ngcontent-%COMP%]{--ion-background-color:linear-gradient(162deg,rgba(114,150,247,0.603) 20%,rgba(33,65,153,0.623))}.container[_ngcontent-%COMP%]{width:100%;height:100%;min-width:600px;max-width:800px;max-height:500px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}.row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.rain[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.rain[_ngcontent-%COMP%]:first-of-type{--duration:2.7s;--delay:1s;transform:translate(10%,10%) scale(.9)}.rain[_ngcontent-%COMP%]:nth-of-type(2){--duration:2.1s;--delay:1.2s;transform:translate(-20%,40%) scale(1.3)}.rain[_ngcontent-%COMP%]:nth-of-type(3){--duration:2.3s;--delay:2s;transform:translateY(50%) scale(1.1)}.rain[_ngcontent-%COMP%]:nth-of-type(4){--duration:2s;--delay:4s;transform:translateY(-10%) scale(1.2)}.rain[_ngcontent-%COMP%]:nth-of-type(5){--duration:2.5s;--delay:0s;transform:translate(10%) scale(.9)}.rain[_ngcontent-%COMP%]:nth-of-type(6){--duration:2s;--delay:2.7s;transform:translate(-20%) scale(1)}.rain[_ngcontent-%COMP%]:nth-of-type(7){--duration:1.8s;--delay:1.3s;transform:translate(20%,-40%) scale(1.2)}.rain[_ngcontent-%COMP%]:nth-of-type(8){--duration:2.2s;--delay:0s;transform:translate(20%) scale(1)}.rain[_ngcontent-%COMP%]:nth-of-type(9){--duration:2s;--delay:0.5s;transform:translateY(-10%) scale(1.3)}.drop[_ngcontent-%COMP%]{background-color:#fff;width:3px;height:100px;position:absolute;top:calc(50% - 100px);left:calc(50% - 1.5px);-webkit-animation-name:fall;animation-name:fall;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@-webkit-keyframes fall{0%{transform:translateY(-120vh)}45%{transform:translateY(0);opacity:1}46%{opacity:0}to{opacity:0}}@keyframes fall{0%{transform:translateY(-120vh)}45%{transform:translateY(0);opacity:1}46%{opacity:0}to{opacity:0}}.waves[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;border:3px solid #fff;-webkit-animation-name:spread;animation-name:spread;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.waves[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:calc(var(--delay) + .3s);animation-delay:calc(var(--delay) + .3s);-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes spread{0%{transform:scale(0);opacity:1}40%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:0}}@keyframes spread{0%{transform:scale(0);opacity:1}40%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:0}}.splash[_ngcontent-%COMP%]{position:absolute;top:10%;bottom:50%;left:35%;right:35%;border-radius:8px;-webkit-clip-path:polygon(7% 100%,5% 95%,3% 80%,11% 50%,17% 38%,23% 44%,30% 53%,37% 28%,40% 29%,45% 43%,51% 53%,59% 36%,64% 22%,67% 23%,70% 34%,72% 46%,79% 37%,83% 37%,93% 61%,96% 76%,96% 94%,94% 100%);clip-path:polygon(7% 100%,5% 95%,3% 80%,11% 50%,17% 38%,23% 44%,30% 53%,37% 28%,40% 29%,45% 43%,51% 53%,59% 36%,64% 22%,67% 23%,70% 34%,72% 46%,79% 37%,83% 37%,93% 61%,96% 76%,96% 94%,94% 100%);background-color:#fff;transform-origin:bottom;-webkit-animation-name:splash;animation-name:splash;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@-webkit-keyframes splash{0%{transform:scale(.3,0)}49%{transform:scale(.3,0)}50%{transform:scale(.3)}60%{transform:scaleX(.7)}90%{transform:scaleY(0)}to{transform:scaleY(0)}}@keyframes splash{0%{transform:scale(.3,0)}49%{transform:scale(.3,0)}50%{transform:scale(.3)}60%{transform:scaleX(.7)}90%{transform:scaleY(0)}to{transform:scaleY(0)}}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;border-radius:100%;background-color:#fff;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:7px;height:7px;top:50%}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){left:50%;-webkit-animation-name:jumpLeft;animation-name:jumpLeft}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){width:5px;height:5px;top:30%;-webkit-animation-delay:calc(var(--delay) + .1s);animation-delay:calc(var(--delay) + .1s)}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){width:3px;height:3px;top:20%;left:70%;-webkit-animation-delay:calc(var(--delay) + .15s);animation-delay:calc(var(--delay) + .15s)}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-name:jumpRight;animation-name:jumpRight}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){width:5px;height:5px;top:30%;left:50%;-webkit-animation-delay:calc(var(--delay) + .3s);animation-delay:calc(var(--delay) + .3s)}@-webkit-keyframes jumpLeft{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(-50px,-90px) scale(1)}to{transform:translate(-60px) scale(.1)}}@keyframes jumpLeft{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(-50px,-90px) scale(1)}to{transform:translate(-60px) scale(.1)}}@-webkit-keyframes jumpRight{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(30px,-80px) scale(1)}to{transform:translate(50px) scale(.1)}}@keyframes jumpRight{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(30px,-80px) scale(1)}to{transform:translate(50px) scale(.1)}}.footer-dis-bot2[_ngcontent-%COMP%]{--background:#002a68;display:list-item}*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.title[_ngcontent-%COMP%]{white-space:break-spaces;font-weight:500;padding:5px;font-size:14px;width:100%}.list-md[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}"]}),I)}],L=((F=function t(){_classCallCheck(this,t)}).\u0275mod=l.Tb({type:F}),F.\u0275inj=l.Sb({factory:function(t){return new(t||F)},imports:[[r.j.forChild(V)],r.j]}),F),H=((D=function t(){_classCallCheck(this,t)}).\u0275mod=l.Tb({type:D}),D.\u0275inj=l.Sb({factory:function(t){return new(t||D)},imports:[[n.c,e.k,o.eb,L]]}),D)}}]);