google.maps.__gjsload__('overlay', function(_){var Sx=function(a){this.i=a},Tx=function(){},Ux=function(a){a.fh=a.fh||new Tx;return a.fh},Vx=function(a){this.La=new _.zi(function(){var b=a.fh;if(a.getPanes()){if(a.getProjection()){if(!b.kg&&a.onAdd)a.onAdd();b.kg=!0;a.draw()}}else{if(b.kg)if(a.onRemove)a.onRemove();else a.remove();b.kg=!1}},0)},Wx=function(a,b){function c(){return _.Ai(e.La)}var d=Ux(a),e=d.Nf;e||(e=d.Nf=new Vx(a));_.z(d.Ea||[],_.K.removeListener);var f=d.Ra=d.Ra||new _.ku,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.dj=d.dj||new Sx(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ea=[_.K.addListener(a,"panes_changed",c),_.K.addListener(g,"zoom_changed",c),_.K.addListener(g,"offset_changed",c),_.K.addListener(b,"projection_changed",c),_.K.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.xf&&(_.tg(b,
"Ox"),_.ln("Ox","-p",a))},Zx=function(a){if(a){var b=a.getMap(),c=a.__gmop;if(c){if(c.map==b)return;a.__gmop=null;_.mn("Ox","-p",c.mb);c.mb.unbindAll();c.mb.set("panes",null);c.mb.set("projection",null);_.hb(c.nn.j,c);c.Cf&&(c.Cf=!1,c.mb.onRemove?c.mb.onRemove():c.mb.remove())}if(b&&b instanceof _.xf){var d=b.__gm;d.overlayLayer?a.__gmop=new Xx(b,a,d.overlayLayer):d.j.then(function(e){e=e.rb;var f=new Yx(b,e);e.xc(f);d.overlayLayer=f;Zx(a)})}}},Xx=function(a,b,c){this.map=a;this.mb=b;this.nn=c;this.Cf=
!1;_.tg(this.map,"Ox");_.ln("Ox","-p",this.mb);c.j.push(this);c.i&&$x(this,c.i);c.o.Ng()},$x=function(a,b){a.mb.get("projection")!=b&&(a.mb.bindTo("panes",a.map.__gm),a.mb.set("projection",b))},Yx=function(a,b){this.H=a;this.o=b;this.i=null;this.j=[]};_.y(Sx,_.M);Sx.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.fe(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.i:null))};_.y(Vx,_.M);Xx.prototype.draw=function(){this.Cf||(this.Cf=!0,this.mb.onAdd&&this.mb.onAdd());this.mb.draw&&this.mb.draw()};Yx.prototype.dispose=function(){};Yx.prototype.Pb=function(a,b,c,d,e,f,g,h){var k=this.i=this.i||new _.Oo(this.H,this.o,function(){});k.Pb(a,b,c,d,e,f,g,h);a=_.xa(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,$x(b,k),b.draw()};_.df("overlay",{Jh:function(a){if(a){var b=a.getMap();if(b&&b instanceof _.xf||a.__gmop)Zx(a);else{b=a.getMap();var c=Ux(a),d=c.Cm;c.Cm=b;d&&(c=Ux(a),(d=c.Ra)&&d.unbindAll(),(d=c.dj)&&d.unbindAll(),a.unbindAll(),a.set("panes",null),a.set("projection",null),_.z(c.Ea,_.K.removeListener),c.Ea=null,c.Nf&&(c.Nf.La.Nb(),c.Nf=null),_.mn("Ox","-p",a));b&&Wx(a,b)}}},preventMapHitsFrom:function(a){_.fp(_.Hp(a,{onClick:function(b){return _.cp(b.event)},Gb:function(b){return _.$o(b)},Ad:function(b){return _.ap(b)},
Xb:function(b){return _.ap(b)},Mb:function(b){return _.bp(b)}}),!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.hf);a.addEventListener("contextmenu",_.hf);a.addEventListener("dblclick",_.hf);a.addEventListener("mousedown",_.hf);a.addEventListener("mousemove",_.hf);a.addEventListener("MSPointerDown",_.hf);a.addEventListener("pointerdown",_.hf);a.addEventListener("touchstart",_.hf);a.addEventListener("wheel",_.hf)}});});
