exports.ids = [6];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=template&id=31bab7d2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user && !_vm.isUndef(_vm.user))?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'your_feed',
                },attrs:{"to":{
                  path: '/',
                  query: {
                    tab: 'your_feed',
                  },
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.isUndef(_vm.tab) && _vm.isUndef(_vm.tag),
                },attrs:{"to":"/"}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.isDef(_vm.tag))?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.isDef(_vm.tag),
                },attrs:{"to":{}}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                path: ("/profile/" + (article.author.username)),
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  path: ("/profile/" + (article.author.username)),
                }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormatter")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited,
              }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              path: ("/article/" + (article.slug)),
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.pagination),function(page){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: _vm.pageNumber === page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                  path: '/',
                  query: {
                    tag: _vm.tag,
                    tab: _vm.tab,
                    pageNumber: page,
                  },
                }}},[_vm._v(_vm._s(page))])],1)}),0)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag,tagIdx){return _c('nuxt-link',{key:tagIdx,staticClass:"tag-pill tag-default",attrs:{"to":{
                path: '/',
                query: {
                  tag: tag,
                },
              }}},[_vm._v(_vm._s(tag))])}),1)],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=template&id=31bab7d2&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(32);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var indexvue_type_script_lang_js_ = ({
  name: 'home',

  async asyncData({
    query,
    store
  }) {
    const limit = 8;
    const tab = query.tab || undefined;
    const tag = query.tag || undefined;
    const author = query.author || undefined;
    const pageNumber = Number(query.pageNumber) || 1;
    const [{
      data: tagData
    }, {
      data: articleData
    }] = await Promise.all([Object(api_article["d" /* getTags */])(), Object(utils["a" /* isDef */])(tab) && Object(utils["a" /* isDef */])(store.state.user.user) ? Object(api_article["c" /* getArticlesFeed */])({
      limit,
      offset: (pageNumber - 1) * limit
    }) : Object(api_article["b" /* articlesHandler */])('GET', {
      tag,
      limit,
      author,
      offset: (pageNumber - 1) * limit
    })]);
    const tags = tagData.tags.map(tag => tag.replace(new RegExp(decodeURI('%E2%80%8C'), 'g'), '')).filter(tag => tag.length);
    const {
      articles,
      articlesCount
    } = articleData;
    return {
      tab,
      tags,
      tag,
      pageNumber,
      articles,
      articlesCount,
      pagination: Math.ceil(articlesCount / limit)
    };
  },

  watchQuery: ['pageNumber', 'tab', 'tag', 'author'],
  computed: {
    user() {
      return this.$store.state.user.user;
    }

  },
  methods: {
    isDef: utils["a" /* isDef */],
    isUndef: utils["b" /* isUndef */],

    async setFavorite(type, slug) {
      const index = this.articles.findIndex(article => slug === article.slug);
      this.$set(this.articles[index], 'favoriteDisabled', true);
      const {
        data: articleData
      } = await Object(api_article["e" /* setFavorite */])(type, slug);
      const {
        article
      } = articleData;
      this.$set(this.articles, index, article);
    },

    changePage(pageNumber) {
      this.pageNumber = pageNumber;
    }

  }
});
// CONCATENATED MODULE: ./pages/index/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_indexvue_type_script_lang_js_ = (indexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "56d98634"
  
)

/* harmony default export */ var pages_index = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map