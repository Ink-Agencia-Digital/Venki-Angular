function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{xesm:function(e,t,r){"use strict";r.r(t),r.d(t,"CartPageModule",(function(){return d}));var n=r("ofXK"),o=r("3Pt+"),c=r("TEn/"),a=r("tyNb"),i=r("fXoL"),l=r("VnPy");function s(e,t){if(1&e&&(i.bc(0,"ion-item",8),i.Qc(1),i.oc(2,"currency"),i.bc(3,"ion-label",9),i.Qc(4),i.oc(5,"currency"),i.ac(),i.ac()),2&e){var r=t.$implicit;i.Ib(1),i.Uc(" ",r.count,"x ",r.name," - ",i.rc(2,4,r.price,"USD","symbol")," "),i.Ib(3),i.Rc(i.rc(5,8,r.price*r.count,"USD","symbol"))}}var u,f,b,y=[{path:"",component:(u=function(){function e(t){_classCallCheck(this,e),this.cartService=t,this.selectedItems=[],this.total=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e,t=this.cartService.getCart(),r={},n=_createForOfIteratorHelper(t);try{for(n.s();!(e=n.n()).done;){var o=e.value;r[o.id]?r[o.id].count++:r[o.id]=Object.assign(Object.assign({},o),{count:1})}}catch(c){n.e(c)}finally{n.f()}this.selectedItems=Object.keys(r).map((function(e){return r[e]})),this.total=this.selectedItems.reduce((function(e,t){return e+t.count*t.price}),0)}}]),e}(),u.\u0275fac=function(e){return new(e||u)(i.Vb(l.a))},u.\u0275cmp=i.Pb({type:u,selectors:[["app-cart"]],decls:19,vars:6,consts:[[1,"ion-toolbar-ccs"],["slot","start"],["defaultHref","/users/perfil"],[1,"tituloInfo"],[1,"color-blue"],[1,"color-blueC"],["lines","inset",4,"ngFor","ngForOf"],["slot","end"],["lines","inset"],["slot","end","text-right",""]],template:function(e,t){1&e&&(i.bc(0,"ion-header"),i.bc(1,"ion-toolbar",0),i.bc(2,"ion-buttons",1),i.Wb(3,"ion-back-button",2),i.ac(),i.bc(4,"ion-title",3),i.bc(5,"label",4),i.Qc(6,"M"),i.ac(),i.bc(7,"label",5),i.Qc(8,"A"),i.ac(),i.bc(9,"label",4),i.Qc(10,"GIN"),i.ac(),i.ac(),i.ac(),i.ac(),i.bc(11,"ion-content"),i.bc(12,"ion-list"),i.Oc(13,s,6,12,"ion-item",6),i.bc(14,"ion-item"),i.Qc(15," Total: "),i.bc(16,"span",7),i.Qc(17),i.oc(18,"currency"),i.ac(),i.ac(),i.ac(),i.ac()),2&e&&(i.Ib(13),i.uc("ngForOf",t.selectedItems),i.Ib(4),i.Rc(i.rc(18,2,t.total,"USD","symbol")))},directives:[c.y,c.db,c.k,c.g,c.h,c.cb,c.s,c.G,n.l,c.E,c.F],pipes:[n.d],styles:[""]}),u)}],p=((b=function e(){_classCallCheck(this,e)}).\u0275mod=i.Tb({type:b}),b.\u0275inj=i.Sb({factory:function(e){return new(e||b)},imports:[[a.j.forChild(y)],a.j]}),b),d=((f=function e(){_classCallCheck(this,e)}).\u0275mod=i.Tb({type:f}),f.\u0275inj=i.Sb({factory:function(e){return new(e||f)},imports:[[n.c,o.k,c.eb,p]]}),f)}}]);