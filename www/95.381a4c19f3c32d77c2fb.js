(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{rZCR:function(l,t,n){"use strict";n.r(t);var i=n("8Y7J"),e=n("b/41");class a{constructor(l,t,n,i){this._gameService=l,this.router=t,this.storage=n,this.snackBar=i,this.show=!1,this.hidden=!1,this.numberList=[],this.open1=!1,this.open2=!1,this.iconMap={1:"basket",2:"contract",3:"expand",4:"flashlight",5:"happy",6:"jet",7:"planet",8:"rose",9:"pulse",10:"rocket",11:"heart",12:"flash",13:"add-circle",14:"add-circle-outline",15:"cafe",16:"basketball",17:"car",18:"bus",19:"hand",20:"clock",21:"heart-half",22:"moon",23:"paw",24:"sad",25:"school",26:"star",27:"logo-instagram",28:"logo-youtube",29:"logo-android",30:"logo-apple",31:"logo-facebook",32:"logo-freebsd-devil"}}ngOnInit(){}ngAfterViewInit(){this.storage.ready().then(()=>{this.checkGameAsync().then(l=>{let t=JSON.parse(l);this.game=t,this.rows=t.rows,this.show=!0,this._gameService.generateGrid()})})}checkGameAsync(){return this.storage.get("game").then(l=>l||new Promise((l,t)=>{setTimeout(()=>{this.checkGameAsync().then(t=>{l(t)}).catch(()=>{t()})},1e3)}))}flipCard(l){if(l.hidden)if(e.a.isCurrentPlayer){if(!e.a.isSending){e.a.isSending=!0;var t=!0;e.a.game.users.forEach(l=>{if(null==l.username)return t=!1,void this.openSnackBar("Error!","Wait for other players!")}),t&&this._gameService.getCurrentValue(l.index).then(t=>{l.icon=this.iconMap[""+t]}).catch(l=>{console.log(l)})}}else this.openSnackBar("Error!","Not your turn!")}openSnackBar(l,t){this.snackBar.open(l,t,{duration:2e3})}openSnackBar2(l,t){this.snackBar.open(l,t,{duration:2e4})}}class r{}var o=n("xYTU"),u=n("pMnS"),d=n("oBZk"),g=n("ZZ/e"),s=n("FVPZ"),b=n("IP0z"),c=n("Xd0L"),m=n("cUpR"),h=i.mb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function p(l){return i.Db(2,[(l()(),i.ob(0,0,null,null,1,"div",[],null,null,null,null,null)),i.xb(null,0)],null,null)}var f=i.mb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function w(l){return i.Db(2,[(l()(),i.ob(0,0,null,null,1,"figure",[["class","mat-figure"]],null,null,null,null,null)),i.xb(null,0)],null,null)}var y=n("SVse"),x=n("iInd"),k=n("xgBC"),v=n("dFDH"),C=i.mb({encapsulation:0,styles:[["mat-grid-tile[_ngcontent-%COMP%]{background:#add8e6;font-size:3rem}mat-grid-list[_ngcontent-%COMP%]{width:400px;height:400px;margin:auto;padding:0!important}.header-title[_ngcontent-%COMP%]{color:#3498db;font-weight:bolder;margin-left:35%}.players[_ngcontent-%COMP%]{color:#3498db;font-weight:bolder;margin-top:12%;margin-left:5%;float:left}.players2[_ngcontent-%COMP%]{color:#3498db;font-weight:bolder;margin-top:12%;margin-left:9%;float:left}.pl[_ngcontent-%COMP%]{color:#000;font-weight:initial;margin-top:10%}@media only screen and (max-width:420px){mat-grid-list[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function O(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,1,"ion-icon",[],null,null,null,d.u,d.f)),i.nb(1,49152,null,0,g.z,[i.h,i.k,i.y],{name:[0,"name"]},null)],function(l,t){l(t,1,0,i.qb(1,"",t.parent.context.$implicit.icon,""))},null)}function S(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,3,"mat-grid-tile",[["class","mat-grid-tile"]],null,[[null,"click"]],function(l,t,n){var i=!0;return"click"===t&&(i=!1!==l.component.flipCard(l.context.$implicit)&&i),i},w,f)),i.nb(1,49152,[[1,4]],0,s.c,[i.k,[2,s.e]],null,null),(l()(),i.fb(16777216,null,0,1,null,O)),i.nb(3,16384,null,0,y.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null)],function(l,t){l(t,3,0,!t.context.$implicit.hidden)},null)}function M(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,6,"div",[["style","margin-top:1%;"]],null,null,null,null,null)),(l()(),i.ob(1,0,null,null,5,"mat-grid-list",[["class","mat-grid-list"],["rowHeight","1:1"]],null,null,null,p,h)),i.zb(6144,null,s.e,null,[s.a]),i.nb(3,2211840,null,1,s.a,[i.k,[2,b.b]],{cols:[0,"cols"],rowHeight:[1,"rowHeight"]},null),i.Ab(603979776,1,{_tiles:1}),(l()(),i.fb(16777216,null,0,1,null,S)),i.nb(6,278528,null,0,y.h,[i.N,i.K,i.r],{ngForOf:[0,"ngForOf"]},null)],function(l,t){var n=t.component;l(t,3,0,i.qb(1,"",n.rows,""),"1:1"),l(t,6,0,n._gameService.getCards())},null)}function P(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,1,"div",[["class","pl"]],null,null,null,null,null)),(l()(),i.Cb(1,null,[" "," | "," pts. "]))],null,function(l,t){l(t,1,0,t.context.$implicit.username,t.context.$implicit.points)})}function _(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,4,"div",[["style","display: inline-block; width:100%"]],null,null,null,null,null)),(l()(),i.ob(1,0,null,null,3,"div",[["class","players"]],null,null,null,null,null)),(l()(),i.Cb(-1,null,["Players: "])),(l()(),i.fb(16777216,null,null,1,null,P)),i.nb(4,278528,null,0,y.h,[i.N,i.K,i.r],{ngForOf:[0,"ngForOf"]},null)],function(l,t){l(t,4,0,t.component._gameService.getGame().users)},null)}function z(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,11,"ion-content",[],null,null,null,d.r,d.c)),i.nb(1,49152,null,0,g.r,[i.h,i.k,i.y],null,null),(l()(),i.ob(2,0,null,0,5,"ion-header",[["translucent",""]],null,null,null,d.t,d.e)),i.nb(3,49152,null,0,g.y,[i.h,i.k,i.y],{translucent:[0,"translucent"]},null),(l()(),i.ob(4,0,null,0,3,"ion-toolbar",[],null,null,null,d.D,d.o)),i.nb(5,49152,null,0,g.yb,[i.h,i.k,i.y],null,null),(l()(),i.ob(6,0,null,0,1,"span",[["class","header-title"]],null,null,null,null,null)),(l()(),i.Cb(-1,null,["Memory Game"])),(l()(),i.fb(16777216,null,0,1,null,M)),i.nb(9,16384,null,0,y.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(l()(),i.fb(16777216,null,0,1,null,_)),i.nb(11,16384,null,0,y.i,[i.N,i.K],{ngIf:[0,"ngIf"]},null)],function(l,t){var n=t.component;l(t,3,0,""),l(t,9,0,n.show),l(t,11,0,n.show)},null)}function D(l){return i.Db(0,[(l()(),i.ob(0,0,null,null,1,"app-game",[],null,null,null,z,C)),i.nb(1,4308992,null,0,a,[e.a,x.m,k.b,v.b],null,null)],function(l,t){l(t,1,0)},null)}var F=i.kb("app-game",a,D,{},{},[]),j=n("s7LF"),B=n("qJ5m"),I=n("QQfA"),N=n("Gi4r"),q=n("/HVE"),A=n("Fwaw"),G=n("zMNK"),H=n("qJ50"),J=n("hOhj"),K=n("zQui"),Z=n("8rEH"),E=n("igqZ"),V=n("02hT"),$=n("Q+lL"),L=n("5Bek"),Q=n("c9fC"),T=n("pOgC");n.d(t,"GamePageModuleNgFactory",function(){return R});var R=i.lb(r,[],function(l){return i.vb([i.wb(512,i.j,i.ab,[[8,[o.a,o.b,u.a,F]],[3,i.j],i.w]),i.wb(4608,y.k,y.j,[i.t,[2,y.r]]),i.wb(4608,j.r,j.r,[]),i.wb(4608,g.a,g.a,[i.y,i.g]),i.wb(4608,g.Cb,g.Cb,[g.a,i.j,i.q]),i.wb(4608,g.Fb,g.Fb,[g.a,i.j,i.q]),i.wb(5120,B.b,B.a,[[3,B.b]]),i.wb(4608,c.a,c.a,[]),i.wb(4608,I.a,I.a,[I.g,I.c,i.j,I.f,I.d,i.q,i.y,y.c,b.b,[2,y.f]]),i.wb(5120,I.h,I.i,[I.a]),i.wb(1073742336,y.b,y.b,[]),i.wb(1073742336,j.p,j.p,[]),i.wb(1073742336,j.g,j.g,[]),i.wb(1073742336,g.Ab,g.Ab,[]),i.wb(1073742336,b.a,b.a,[]),i.wb(1073742336,c.d,c.d,[[2,c.b],[2,m.g]]),i.wb(1073742336,c.e,c.e,[]),i.wb(1073742336,s.b,s.b,[]),i.wb(1073742336,N.a,N.a,[]),i.wb(1073742336,q.b,q.b,[]),i.wb(1073742336,c.h,c.h,[]),i.wb(1073742336,A.c,A.c,[]),i.wb(1073742336,G.f,G.f,[]),i.wb(1073742336,H.e,H.e,[]),i.wb(1073742336,B.c,B.c,[]),i.wb(1073742336,J.b,J.b,[]),i.wb(1073742336,I.e,I.e,[]),i.wb(1073742336,v.e,v.e,[]),i.wb(1073742336,K.o,K.o,[]),i.wb(1073742336,Z.a,Z.a,[]),i.wb(1073742336,E.a,E.a,[]),i.wb(1073742336,c.f,c.f,[]),i.wb(1073742336,V.a,V.a,[]),i.wb(1073742336,$.a,$.a,[]),i.wb(1073742336,L.c,L.c,[]),i.wb(1073742336,Q.a,Q.a,[]),i.wb(1073742336,T.a,T.a,[]),i.wb(1073742336,x.n,x.n,[[2,x.t],[2,x.m]]),i.wb(1073742336,r,r,[]),i.wb(1024,x.k,function(){return[[{path:"",component:a}]]},[])])})}}]);