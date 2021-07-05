exports.ids = [11];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/setting.vue?vue&type=template&id=6d6811a0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(messages,field){return ((_vm._ssrList((messages),function(message,index){return ("<li>"+_vm._ssrEscape("\n              "+_vm._s(field)+" "+_vm._s(message)+"\n            ")+"</li>")})))}))+"</ul> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"form-control form-control-lg\"></fieldset> <div class=\"btn btn-lg btn-primary pull-xs-right\">\n              Update Settings\n            </div></fieldset></form> <hr> <div class=\"btn btn-outline-danger\">\n          Or click here to logout.\n        </div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/setting.vue?vue&type=template&id=6d6811a0&

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./api/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./store/actionTypes.js
var actionTypes = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/setting.vue?vue&type=script&lang=js&
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



const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  name: 'setting',
  middleware: ['authenticated'],

  data() {
    return {
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
      errors: {}
    };
  },

  created() {
    this.image = this.user.image;
    this.username = this.user.username;
    this.bio = this.user.bio;
    this.email = this.user.email;
  },

  computed: {
    user() {
      return this.$store.state.user.user;
    }

  },
  methods: {
    async currentUser() {
      try {
        const {
          data: userData
        } = await Object(users["b" /* currentUser */])('PUT', {
          user: {
            image: this.image,
            username: this.username,
            bio: this.bio,
            email: this.email,
            password: this.password
          }
        });
        const {
          user
        } = userData;

        if (Object(utils["a" /* isDef */])(user)) {
          this.$store.commit(actionTypes["COMMIT_SETUSER"], user);
          Cookie.set('USER', user);
        }
      } catch (err) {
        console.dir(err);
        this.errors = err.response.data.errors;
      }
    },

    logout() {
      Cookie.remove('USER');
      location.reload();
    }

  }
});
// CONCATENATED MODULE: ./pages/index/setting.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/setting.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "23ae9b9c"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=setting.js.map