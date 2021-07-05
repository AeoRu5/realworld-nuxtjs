exports.ids = [1];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=af62b3c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"navbar navbar-light\">","</nav>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/"}},[_vm._v("conduit")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),(_vm.user && !_vm.isUndef(_vm.user))?[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/mkarticle"}},[_c('i',{staticClass:"ion-compose"}),_vm._v(" New Post\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/setting"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Settings\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                path: ("/profile/" + (_vm.user.username)),
              }}},[_c('img',{staticClass:"user-pic",attrs:{"src":_vm.user.image}}),_vm._v("\n              "+_vm._s(_vm.user.username)+"\n            ")])],1)]:[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                path: '/login',
                query: {
                  sign_in: true,
                },
              }}},[_vm._v("Sign in")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                path: '/login',
                query: {
                  sign_in: false,
                },
              }}},[_vm._v("Sign up")])],1)]],2)],2)]),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" "),_vm._ssrNode("<footer>","</footer>",[_vm._ssrNode("<div class=\"container\">","</div>",[_c('nuxt-link',{staticClass:"logo-font",attrs:{"to":"/"}},[_vm._v("conduit")]),_vm._ssrNode(" <span class=\"attribution\">\n        An interactive learning project from\n        <a to=\"https://thinkster.io\">Thinkster</a>. Code &amp; design licensed\n        under MIT.\n      </span>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=af62b3c8&

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Layout',
  computed: {
    user() {
      return this.$store.state.user.user;
    }

  },
  methods: {
    isUndef: utils["b" /* isUndef */]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "51da63be"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map