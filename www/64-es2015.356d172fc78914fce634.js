(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"wT+f":function(t,e,i){"use strict";i.r(e),i.d(e,"TimelinePageModule",(function(){return k}));var n=i("ofXK"),c=i("3Pt+"),o=i("TEn/"),a=i("tyNb"),l=i("fXoL"),s=i("7Vn+"),r=i("8rbx"),d=i("VnPy"),g=i("3no8"),p=i("1as6");function m(t,e){if(1&t&&(l.bc(0,"div",22),l.bc(1,"label",23),l.Qc(2),l.oc(3,"slice"),l.ac(),l.bc(4,"label",24),l.Qc(5),l.oc(6,"capitalize"),l.oc(7,"slice"),l.ac(),l.ac()),2&t){const t=l.nc(2).$implicit;l.Ib(2),l.Rc(l.rc(3,2,t.comment,0,10)),l.Ib(3),l.Rc(l.pc(6,6,l.rc(7,8,t.comment,10,t.comment.length)))}}function b(t,e){if(1&t&&(l.bc(0,"div",22),l.bc(1,"label",25),l.Qc(2),l.oc(3,"slice"),l.ac(),l.bc(4,"label"),l.Qc(5),l.oc(6,"capitalize"),l.oc(7,"slice"),l.ac(),l.ac()),2&t){const t=l.nc(2).$implicit;l.Ib(2),l.Rc(l.rc(3,2,t.comment,0,6)),l.Ib(3),l.Rc(l.pc(6,6,l.rc(7,8,t.comment,6,t.comment.length)))}}function h(t,e){if(1&t&&(l.bc(0,"div",22),l.bc(1,"label",26),l.Qc(2),l.oc(3,"slice"),l.ac(),l.bc(4,"label"),l.Qc(5),l.oc(6,"capitalize"),l.oc(7,"slice"),l.ac(),l.ac()),2&t){const t=l.nc(2).$implicit;l.Ib(2),l.Rc(l.rc(3,2,t.comment,0,9)),l.Ib(3),l.Rc(l.pc(6,6,l.rc(7,8,t.comment,9,t.comment.length)))}}const f=function(t,e,i){return{"content-challenge":t,"content-inform":e,"content-share":i}};function _(t,e){if(1&t&&(l.bc(0,"li",15),l.bc(1,"div",16),l.bc(2,"div",17),l.Wb(3,"ion-icon",18),l.ac(),l.ac(),l.bc(4,"div",19),l.Qc(5),l.oc(6,"date"),l.ac(),l.bc(7,"div",20),l.Oc(8,m,8,12,"div",21),l.Oc(9,b,8,12,"div",21),l.Oc(10,h,8,12,"div",21),l.ac(),l.ac()),2&t){const t=l.nc().$implicit;l.Ib(4),l.uc("ngClass",l.Bc(8,f,"#"==t.comment[0],"!"==t.comment[0],"@"==t.comment[0])),l.Ib(1),l.Sc(" ",l.qc(6,5,t.date,"short")," "),l.Ib(3),l.uc("ngIf","@"==t.comment[0]),l.Ib(1),l.uc("ngIf","#"==t.comment[0]),l.Ib(1),l.uc("ngIf","!"==t.comment[0])}}function u(t,e){if(1&t&&(l.bc(0,"li",15),l.bc(1,"div",16),l.bc(2,"div",17),l.Wb(3,"ion-icon",27),l.ac(),l.ac(),l.bc(4,"div",28),l.Qc(5),l.oc(6,"date"),l.ac(),l.bc(7,"div",20),l.bc(8,"div",22),l.bc(9,"label",29),l.Qc(10),l.oc(11,"capitalize"),l.ac(),l.ac(),l.ac(),l.ac()),2&t){const t=l.nc().$implicit;l.Ib(5),l.Sc(" ",l.qc(6,2,t.date,"short")," "),l.Ib(5),l.Rc(l.pc(11,5,t.comment))}}function x(t,e){if(1&t&&(l.bc(0,"div"),l.Oc(1,_,11,12,"li",14),l.Oc(2,u,12,7,"li",14),l.ac()),2&t){const t=e.$implicit;l.Ib(1),l.uc("ngIf",1===t.type),l.Ib(1),l.uc("ngIf",2===t.type)}}function P(t,e){if(1&t&&(l.bc(0,"div"),l.bc(1,"ul",12),l.Oc(2,x,3,2,"div",13),l.ac(),l.ac()),2&t){const t=l.nc();l.Ib(2),l.uc("ngForOf",t.timeline)}}function O(t,e){1&t&&(l.bc(0,"div",30),l.bc(1,"ion-badge",31),l.Qc(2,"No existen datos para el timeline"),l.ac(),l.ac())}const M=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.auth=t,this.log=e,this.share=i,this.loadingService=n,this.infoTimeline=[],this.miactividad=[],this.feelings=[],this.timeline=[],this.usertk=null,this.getToken()}ngOnInit(){this.loadingService.loadingPresent({spinner:"circles"}),this.auth.gettokenLog().then(t=>{this.log.logdataInfData(t).subscribe(t=>{this.currentUser=t.name+" "+t.lastname,this.share.getTimeline(t.id,this.token).subscribe(e=>{this.loadingService.loadingDismiss(),this.infoTimeline=e.data,this.paginaActualPosts=e.meta.current_page,this.ultimaPagePosts=e.meta.last_page,this.totalDtPosts=e.meta.total,this.usertk=t,this.getMiactividad(this.usertk.id)},t=>{this.loadingService.loadingDismiss()})},t=>{this.loadingService.loadingDismiss()})})}getToken(){this.auth.gettokenLog().then(t=>{this.token=t})}getMiactividad(t){this.share.getActividadUsuario(t,this.token).subscribe(e=>{this.miactividad=e.data,this.paginaActualPosts=e.meta.current_page,this.ultimaPagePosts=e.meta.last_page,this.totalDtPosts=e.meta.total,this.getFeelings(t)})}getFeelings(t){this.share.getFeeling(t,this.token).subscribe(t=>{this.feelings=t.data,this.paginaActualFeelings=t.meta.current_page,this.ultimaPageFeelings=t.meta.last_page,this.totalDtFeelings=t.meta.total,this.organizeData()})}organizeData(){this.miactividad.map(t=>{this.timeline.push({type:1,comment:t.post,date:t.created_at})}),this.feelings.map(t=>{this.timeline.push({type:2,comment:t.name,date:t.created_at})}),this.organizeTimelline()}organizeTimelline(){this.timeline=this.timeline.sort((t,e)=>0-(new Date(t.date).getTime()<new Date(e.date).getTime()?-1:1))}loadData(t){this.paginaActualPosts=this.paginaActualPosts+1,this.paginaActualFeelings=this.paginaActualFeelings+1,setTimeout(()=>{if(this.infoTimeline.length>=this.totalDtPosts)return t.target.complete(),void(this.infonitescroll.disabled=!0);this.share.getNextActividadUsuario(this.usertk.id,this.token,this.paginaActualPosts).subscribe(e=>{e.data.forEach(t=>{this.timeline.push({type:1,comment:t.post,date:t.created_at})}),this.organizeTimelline(),t.target.complete()}),this.share.getFeelingNextPage(this.usertk.id,this.paginaActualFeelings,this.token).subscribe(e=>{e.data.forEach(t=>{this.timeline.push({type:2,comment:t.name,date:t.created_at})}),this.organizeTimelline(),t.target.complete()})},2500)}}return t.\u0275fac=function(e){return new(e||t)(l.Vb(s.a),l.Vb(r.a),l.Vb(d.a),l.Vb(g.a))},t.\u0275cmp=l.Pb({type:t,selectors:[["app-timeline"]],viewQuery:function(t,e){var i;1&t&&l.Wc(o.B,!0),2&t&&l.Dc(i=l.kc())&&(e.infonitescroll=i.first)},decls:17,vars:2,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"color","white"],["defaultHref","/users/perfil"],[1,"tituloInfo","logo"],[2,"color","white"],[2,"color","black"],[2,"margin-top","10px","text-align","center"],[1,"title"],[4,"ngIf"],["style","text-align: center;margin-top: 15px;",4,"ngIf"],["threshold","10%","position","center",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Cargando..."],[1,"timeline"],[4,"ngFor","ngForOf"],["class","timeline__item",4,"ngIf"],[1,"timeline__item"],[1,"timeline__step"],[1,"timeline__step__marker","timeline__step__marker--red"],["name","chatbox-outline",2,"width","30px","height","46px","color","white","margin-bottom","-8px"],[1,"timeline__time",3,"ngClass"],[1,"timeline__content"],["class","timeline__title content-timeline",4,"ngIf"],[1,"timeline__title","content-timeline"],[1,"content","label-share"],[1,""],[1,"content","label-challenge"],[1,"content","label-inform"],["name","heart-circle-outline",2,"width","30px","height","46px","color","white","margin-bottom","-8px"],[1,"timeline__time","content-feeling"],[1,"label-feeling"],[2,"text-align","center","margin-top","15px"],["color","warning"]],template:function(t,e){1&t&&(l.bc(0,"ion-header"),l.bc(1,"ion-toolbar",0),l.bc(2,"ion-buttons",1),l.Wb(3,"ion-back-button",2),l.ac(),l.bc(4,"ion-title",3),l.bc(5,"label",4),l.Qc(6,"MAGIN"),l.ac(),l.ac(),l.ac(),l.ac(),l.bc(7,"ion-content"),l.bc(8,"div"),l.bc(9,"div",5),l.bc(10,"div",6),l.bc(11,"ion-badge",7),l.Qc(12,"Mi linea de tiempo"),l.ac(),l.ac(),l.Oc(13,P,3,1,"div",8),l.Oc(14,O,3,0,"div",9),l.ac(),l.bc(15,"ion-infinite-scroll",10),l.jc("ionInfinite",(function(t){return e.loadData(t)})),l.Wb(16,"ion-infinite-scroll-content",11),l.ac(),l.ac(),l.ac()),2&t&&(l.Ib(13),l.uc("ngIf",e.timeline.length>0),l.Ib(1),l.uc("ngIf",0===e.timeline.length))},directives:[o.y,o.db,o.k,o.g,o.h,o.cb,o.s,o.i,n.m,o.B,o.C,n.l,o.z,n.k],pipes:[n.f,n.u,p.a],styles:['*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 22px;margin:0;list-style:none}.timeline[_ngcontent-%COMP%]:before{position:fixed;top:0;height:100%;padding-right:8px;border-right:2px solid #c3c3c3;content:""}.timeline__item[_ngcontent-%COMP%]{display:flex;align-items:stretch;padding:8px 0;text-align:center}.timeline__step[_ngcontent-%COMP%]{padding-right:8px}.timeline__step__marker[_ngcontent-%COMP%]{position:relative;display:table-cell;height:24px;min-height:24px;width:24px;min-width:24px;border:4px solid #f2f2f2;border-radius:50%;background-color:#fff;z-index:0}.timeline__step__marker--blue[_ngcontent-%COMP%], .timeline__step__marker--red[_ngcontent-%COMP%]{border-color:#002a68;background-color:#002a68}.timeline__time[_ngcontent-%COMP%]{padding-right:6px;font-size:10px}.timeline__title[_ngcontent-%COMP%]{padding-bottom:6px;font-size:32px;text-align:center}.timeline__points[_ngcontent-%COMP%]{padding:0;list-style:none;font-size:24px;color:#77777d}.timeline__points[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding:0 0 12px}@media (max-width:768px){.card[_ngcontent-%COMP%]{max-width:375}.timeline[_ngcontent-%COMP%]{padding:0 15px}.timeline[_ngcontent-%COMP%]:before{padding-right:23px}.timeline__item[_ngcontent-%COMP%]{padding:25px 0}.timeline__step[_ngcontent-%COMP%]{padding-right:15px}.timeline__step__marker[_ngcontent-%COMP%]{min-width:50px;border-width:2px}.timeline__time[_ngcontent-%COMP%]{padding-right:72px;font-size:13px}.timeline__title[_ngcontent-%COMP%]{padding-bottom:14.85714px;font-size:15px}.timeline__points[_ngcontent-%COMP%]{font-size:13.71429px}.timeline__points[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{padding-bottom:6.85714px}}html[_ngcontent-%COMP%]{background:url(//s3-us-west-2.amazonaws.com/s.cdpn.io/153256/trees.jpg) no-repeat 50% fixed;background-size:cover}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{line-height:1.5rem;font-family:Muli,sans-serif;font-weight:300;margin:0;box-sizing:border-box;height:100%}.card[_ngcontent-%COMP%]{background-color:#fff;max-width:750px;margin:0 auto;height:100%;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);display:table}.title[_ngcontent-%COMP%]{background-color:#002a68;font-size:18px;padding:5px 10px;border-radius:5px}.content-share[_ngcontent-%COMP%]{border-left:4px solid #3880ff!important;border:1px solid #dedede;border-radius:10px}.content-inform[_ngcontent-%COMP%], .content-share[_ngcontent-%COMP%]{padding:10px;width:135px;align-self:center}.content-inform[_ngcontent-%COMP%]{border-left:4px solid #3dc2ff!important;border:1px solid #dedede;border-radius:10px}.content-challenge[_ngcontent-%COMP%]{border-left:4px solid #eb445a!important;border:1px solid #dedede;border-radius:10px;padding:10px;width:135px;align-self:center}.label-share[_ngcontent-%COMP%]{background-color:#3880ff!important}.label-inform[_ngcontent-%COMP%]{background-color:#3dc2ff!important}.label-challenge[_ngcontent-%COMP%]{background-color:#eb445a!important}.content-timeline[_ngcontent-%COMP%]{border:1px solid #eaeaea;margin-left:10px;padding:10px;border-radius:10px;width:150px}.content[_ngcontent-%COMP%]{color:#fff;padding:3px 5px;margin-right:4px;border-radius:5px;font-weight:700;font-size:13px}.content-feeling[_ngcontent-%COMP%]{border-left:4px solid #ffc107!important;border:1px solid #dedede;border-radius:10px;padding:10px;width:135px;align-self:center}.label-feeling[_ngcontent-%COMP%]{background-color:#ffc107;padding:4px 10px;color:#000;border-radius:5px;font-weight:700}']}),t})()}];let v=(()=>{class t{}return t.\u0275mod=l.Tb({type:t}),t.\u0275inj=l.Sb({factory:function(e){return new(e||t)},imports:[[a.j.forChild(M)],a.j]}),t})();var C=i("HsBR");let k=(()=>{class t{}return t.\u0275mod=l.Tb({type:t}),t.\u0275inj=l.Sb({factory:function(e){return new(e||t)},imports:[[n.c,c.k,o.eb,v,C.a]]}),t})()}}]);