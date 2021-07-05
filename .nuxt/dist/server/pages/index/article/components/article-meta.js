exports.ids = [5];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return articlesHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getArticlesFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return articleDetail; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

const getTags = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/tags'
  });
};
/**
  @param {String} method //'GET' 'POST'
  // GET
  @param {String} tag
  @param {String} author
  @param {String} favorited
  @param {Number} limit
  @param {Number} offset
  // POST
  data: {
    "article": {
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "You have to believe",
      "tagList": ["reactjs", "angularjs", "dragons"]
    }
  }
*/

const articlesHandler = (method = 'GET', data) => {
  const config = {
    method,
    url: '/articles'
  };
  method === 'GET' && (config.params = data);
  method === 'POST' && (config.data = data);
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])(config);
};
const getArticlesFeed = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/articles/feed'
  });
};
const setFavorite = (type = false, slug) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: type ? 'POST' : 'DELETE',
    url: `/articles/${slug}/favorite`
  });
};
/**
  @param {String} slug
  @param {String} method 'GET' 'PUT' 'DELETE'
  @param {Object} params
  // PUT
  data: {
    "article": {
      "title": "Did you train your dragon?"
    }
  }
*/

const articleDetail = (slug, method = 'GET', params = null) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method,
    url: `/articles/${slug}`,
    params
  });
};

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/components/article-meta.vue?vue&type=template&id=e1dd33f6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      path: ("/profile/" + (_vm.article.author.username)),
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        path: ("/profile/" + (_vm.article.author.username)),
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormatter")(_vm.article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{
      active: _vm.article.author.following,
    }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n      Follow "+_vm._s(_vm.article.author.username)+"\n    ")+"</button>\n   \n  <button"+(_vm._ssrAttr("disabled",_vm.favoriteDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{
      active: _vm.article.favorited,
    }))+"><i class=\"ion-heart\"></i>\n      Favorite Post\n    <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/article/components/article-meta.vue?vue&type=template&id=e1dd33f6&

// EXTERNAL MODULE: ./api/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/components/article-meta.vue?vue&type=script&lang=js&
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


/* harmony default export */ var article_metavue_type_script_lang_js_ = ({
  name: 'article-meta',
  props: {
    article: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      favoriteDisabled: false,
      followDisabled: false
    };
  },

  methods: {
    async setFavorite(type, slug) {
      this.favoriteDisabled = true;
      const {
        data: articleData
      } = await Object(api_article["e" /* setFavorite */])(type, slug);
      this.favoriteDisabled = false;
      const {
        article
      } = articleData;
      this.$emit('update', article);
    },

    async followHandler(type, username) {
      this.followDisabled = true;
      const {
        data: profileData
      } = await Object(users["c" /* followHandler */])(type, username);
      this.followDisabled = false;
      const {
        profile
      } = profileData;
      this.$emit('update', profile);
    }

  }
});
// CONCATENATED MODULE: ./pages/index/article/components/article-meta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_metavue_type_script_lang_js_ = (article_metavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/article/components/article-meta.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_metavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ac77c304"
  
)

/* harmony default export */ var article_meta = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=article-meta.js.map