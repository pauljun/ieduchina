webpackJsonp([3],{"/14J":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("PJh5");var n={data:function(){return{time:(new Date).valueOf()}},props:["info"]},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{style:{backgroundImage:"url("+t.info.thumb+")"}}),t._v(" "),i("div",{staticClass:"nav"},[i("h3",[t._v(t._s(t.info.title))]),t._v(" "),i("div",{staticClass:"time"},[t._v("\n\t\t\t"+t._s(t._f("dmformat")(1e3*t.info.start_day))+"开播\n\t\t\t"),i("span",{staticClass:"red"},[t._v("88小时")]),t._v(" "),i("span",{staticClass:"price"},[t._v("\n\t\t\t\t¥"+t._s(t.info.price)+"\n\t\t\t")])]),t._v(" "),i("div",{staticClass:"footer"},[i("i",{staticClass:"iconfont icon-fine_icon_limit"}),t._v("\n\t\t\t限购"+t._s(t.info.sale_limit)+"人\n\t\t\t"),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"fr"},[this._v("\n\t\t\t\t距离停售：\n\t\t\t\t"),e("span",{staticClass:"bl"},[this._v("\n\t\t\t\t\t32天 16:30:58\n\t\t\t\t")])])}]};var s=i("VU/8")(n,a,!1,function(t){i("MxNO")},null,null).exports,r=i("odqc"),o=i("Znkm"),l=i("fBcm"),c=i("b+jt"),d=i("1sNz"),u=i("J5LH"),v={data:function(){return{teachers:[]}},props:["id"],created:function(){var t=this;u.a.getClassTeacher(this.id).then(function(e){0===e.code&&(t.teachers=e.data)})}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"tearcher-wrapper"},t._l(t.teachers,function(e,n){return i("li",{key:n},[i("div",{staticClass:"info"},[i("span",{staticClass:"logo",style:{backgroundImage:"url("+e.thumb+")"}}),t._v(" "),i("div",{staticClass:"main"},[t._v("\n        "+t._s(e.name)+"\n        "),i("p",[t._v(t._s(e.keywords))])])]),t._v(" "),i("div",{staticClass:"content",domProps:{innerHTML:t._s(e.description)}})])}))},staticRenderFns:[]};var f=i("VU/8")(v,h,!1,function(t){i("LrJ4")},null,null).exports,b={data:function(){return{list:[]}},props:["id"],created:function(){var t=this;u.a.getClassPeriods(this.id).then(function(e){0===e.code&&(t.list=e.data)})}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"lesson-wrapper"},t._l(t.list,function(e,n){return i("li",{key:n},[i("div",{staticClass:"info"},[i("span",{staticClass:"num"},[t._v("\n        "+t._s(n+1)+"\n      ")]),t._v(" "),i("div",{staticClass:"main"},[i("h3",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v("\n          "+t._s(e.teacher_name)+" \n          "),i("span",{staticClass:"fr"},[t._v("无限次回放")])])])])])}))},staticRenderFns:[]};var p=i("VU/8")(b,_,!1,function(t){i("LkMe")},null,null).exports,m=(r.a,o.a,l.a,c.a,d.a,{data:function(){return{atviveTab:0,list:["课程介绍","课程大纲","老师介绍"]}},props:["id"],components:{Tab:r.a,TabItem:o.a,Swiper:l.a,SwiperItem:c.a,Tearcher:f,ViewBox:d.a,Lesson:p}}),C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"detail-tab"},[i("tab",{attrs:{"active-color":"#24A5ED"},model:{value:t.atviveTab,callback:function(e){t.atviveTab=e},expression:"atviveTab"}},t._l(t.list,function(e,n){return i("tab-item",{key:n,staticClass:"vux-center",attrs:{selected:t.atviveTab===e},on:{click:function(i){t.atviveTab=e}}},[t._v(t._s(e))])})),t._v(" "),i("swiper",{attrs:{"show-dots":!1,threshold:100},model:{value:t.atviveTab,callback:function(e){t.atviveTab=e},expression:"atviveTab"}},[i("swiper-item",{key:0},[i("view-box",[i("lesson",{attrs:{id:t.id}})],1)],1),t._v(" "),i("swiper-item",{key:1},[i("view-box",[i("lesson",{attrs:{id:t.id}})],1)],1),t._v(" "),i("swiper-item",{key:2},[i("view-box",[i("tearcher",{attrs:{id:t.id}})],1)],1)],1)],1)},staticRenderFns:[]};var g=i("VU/8")(m,C,!1,function(t){i("xI9q")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("div",{staticClass:"content"},[i("div",{staticClass:"one"},[i("span",{staticClass:"red"},[t._v("限时折扣")]),t._v(" "),i("p",[t._v("已有"),i("span",{staticClass:"red"},[t._v("300")]),t._v("人购买")])]),t._v(" "),i("div",{staticClass:"bt"},[t._v("¥8888\n      "),i("br"),t._v(" "),i("p",[t._v("直接购买")])]),t._v(" "),i("div",{staticClass:"bt active"},[t._v("¥8888\n      "),i("br"),t._v(" "),i("p",[t._v("发起拼购(四人已拼)")])])])])}]};var w=i("VU/8")({},x,!1,function(t){i("Ld3+")},null,null).exports,y={data:function(){return{data:{}}},components:{HeaderView:s,FooterView:w,TabView:g},created:function(){var t=this,e=this.$route.params.id;this.id=e,u.a.getClassInfo(e).then(function(e){0===e.code&&(t.data=e.data)})}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"index-detail-wrapper"},[e("header-view",{attrs:{info:this.data}}),this._v(" "),e("div",{staticClass:"tab-content"},[e("tab-view",{attrs:{info:this.data,id:this.id}})],1),this._v(" "),e("footer-view",{attrs:{info:this.data}})],1)},staticRenderFns:[]};var $=i("VU/8")(y,k,!1,function(t){i("vDf/")},null,null);e.default=$.exports},J2Sx:function(t,e){},"Ld3+":function(t,e){},LkMe:function(t,e){},LrJ4:function(t,e){},MxNO:function(t,e){},Znkm:function(t,e,i){"use strict";var n=i("piuB"),a=(n.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[n.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},r=i("VU/8")(a,s,!1,null,null,null);e.a=r.exports},"b+jt":function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},a=i("VU/8")({name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},n,!1,null,null,null);e.a=a.exports},odqc:function(t,e,i){"use strict";var n=i("piuB"),a=(n.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function n(){var a=t.$refs.nav;a.scrollLeft+=(e.offsetLeft-(a.offsetWidth-e.offsetWidth)/2-a.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)})}}}}),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]};var r=i("VU/8")(a,s,!1,function(t){i("J2Sx")},null,null);e.a=r.exports},"vDf/":function(t,e){},xI9q:function(t,e){}});
//# sourceMappingURL=3.069f3e341588c95db324.js.map