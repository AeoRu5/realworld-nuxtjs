exports.ids = [8];
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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/mkarticle.vue?vue&type=template&id=3df262b4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\" disabled=\"disabled\""+(_vm._ssrAttr("value",(_vm.tagList)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.tags),function(tag,tagIdx){return ("<div class=\"tag-pill tag-default\" style=\"cursor: pointer\">"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</div>")}))+"</div></fieldset> <div class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </div></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/mkarticle.vue?vue&type=template&id=3df262b4&

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/mkarticle.vue?vue&type=script&lang=js&
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


/* harmony default export */ var mkarticlevue_type_script_lang_js_ = ({
  name: 'mk-article',
  middleware: ['authenticated'],

  data() {
    return {
      title: '',
      description: '',
      body: '',
      tagList: [],
      tags: []
    };
  },

  async mounted() {
    const {
      data: tagData
    } = await Object(api_article["d" /* getTags */])();
    const tags = tagData.tags.map(tag => tag.replace(new RegExp(decodeURI('%E2%80%8C'), 'g'), '')).filter(tag => tag.length);
    this.tags = tags;
  },

  methods: {
    async articlesHandler() {
      const {
        data: articleData
      } = await Object(api_article["b" /* articlesHandler */])('POST', {
        article: {
          title: this.title,
          description: this.description,
          body: this.body,
          tagList: this.tagList
        }
      });
      const {
        article
      } = articleData;

      if (Object(utils["a" /* isDef */])(article)) {
        this.$router.push('/');
      }
    },

    addTag(tag) {
      const tagList = this.tagList;
      tagList.push(tag);
      this.tagList = [...new Set(tagList)];
    }

  }
});
// CONCATENATED MODULE: ./pages/index/mkarticle.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_mkarticlevue_type_script_lang_js_ = (mkarticlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/mkarticle.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  index_mkarticlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d601320c"
  
)

/* harmony default export */ var mkarticle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mkarticle.js.map