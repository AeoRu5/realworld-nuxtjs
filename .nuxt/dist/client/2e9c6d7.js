(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(33),n(18)),o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2?arguments[2]:void 0,r="/articles/".concat(t,"/comments");"DELETE"===e&&(r+="/".concat(n));var o={method:e,url:r};return"POST"===e&&(o.data=n),Object(c.b)(o)},m={name:"article-comment",props:{slug:{type:String,default:""}},data:function(){return{comment:"",comments:[]}},computed:{user:function(){return this.$store.state.user.user}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t.slug);case 2:n=e.sent,r=n.data,c=r.comments,t.comments=c;case 6:case"end":return e.stop()}}),e)})))()},methods:{commentsHandler:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e.slug,"POST",{comment:{body:e.comment}});case 2:n=t.sent,r=n.data,c=r.comment,e.comment="",e.comments.unshift(c);case 7:case"end":return t.stop()}}),t)})))()}}},l=n(34),component=Object(l.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{staticClass:"card comment-form"},[n("div",{staticClass:"card-block"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment,expression:"comment"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.comment},on:{input:function(e){e.target.composing||(t.comment=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"card-footer"},[n("img",{staticClass:"comment-author-img",attrs:{src:t.user.image}}),t._v(" "),n("div",{staticClass:"btn btn-sm btn-primary",on:{click:t.commentsHandler}},[t._v("\n        Post Comment\n      ")])])]),t._v(" "),t._l(t.comments,(function(e){return n("div",{key:e.id,staticClass:"card"},[n("div",{staticClass:"card-block"},[n("p",{staticClass:"card-text"},[t._v("\n        "+t._s(e.body)+"\n      ")])]),t._v(" "),n("div",{staticClass:"card-footer"},[n("a",{staticClass:"comment-author",attrs:{href:""}},[n("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n       \n      "),n("a",{staticClass:"comment-author",attrs:{href:""}},[t._v(t._s(e.author.username))]),t._v(" "),n("span",{staticClass:"date-posted"},[t._v(t._s(t._f("dateFormatter")(e.createdAt)))])])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);