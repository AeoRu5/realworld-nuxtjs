exports.ids = [10];
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

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/profile/_username.vue?vue&type=template&id=4deb5d42&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.profile.bio)+"\n          ")+"</p> "),(_vm.user.username === _vm.username)?_c('nuxt-link',{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{"to":"/setting"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v("\n              Edit Profile Settings\n          ")]):_c('button',{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{
              active: _vm.profile.following,
            },attrs:{"disabled":_vm.followDisabled},on:{"click":function($event){return _vm.followHandler(!_vm.profile.following, _vm.profile.username)}}},[_c('i',{staticClass:"ion-plus-round"}),_vm._v("\n              Follow "+_vm._s(_vm.profile.username)+"\n          ")])],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab === 'my_articles',
                },attrs:{"to":{
                  path: ("/profile/" + _vm.username),
                  query: {
                    tab: 'my_articles',
                  },
                }}},[_vm._v("My Articles")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                  path: ("/profile/" + _vm.username),
                }}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                path: ("/profile/" + (article.author.username)),
              }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                  path: ("/profile/" + (article.author.username)),
                }}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormatter")(article.createdAt)))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.favoriteDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{
                active: article.favorited,
              }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              path: ("/article/" + (article.slug)),
            }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.pagination),function(page){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: _vm.pageNumber === page }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                  path: ("/profile/" + _vm.username),
                  query: {
                    tab: _vm.tab,
                    pageNumber: page,
                  },
                }}},[_vm._v(_vm._s(page))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/profile/_username.vue?vue&type=template&id=4deb5d42&

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./api/users.js
var users = __webpack_require__(10);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/profile/_username.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _usernamevue_type_script_lang_js_ = ({
  name: 'profile-detail',

  async asyncData({
    route,
    query
  }) {
    const limit = 8;
    const tab = query.tab || undefined;
    const pageNumber = Number(query.pageNumber) || 1;
    const [{
      data: profileData
    }, {
      data: articleData
    }] = await Promise.all([Object(users["d" /* getProfile */])(route.params.username), Object(utils["a" /* isDef */])(tab) ? Object(api_article["b" /* articlesHandler */])('GET', {
      limit,
      author: route.params.username,
      offset: (pageNumber - 1) * limit
    }) : Object(api_article["b" /* articlesHandler */])('GET', {
      limit,
      favorited: route.params.username,
      offset: (pageNumber - 1) * limit
    })]);
    const {
      profile
    } = profileData;
    const {
      articles,
      articlesCount
    } = articleData;
    return {
      tab,
      profile,
      pageNumber,
      articles,
      articlesCount,
      username: route.params.username,
      pagination: Math.ceil(articlesCount / limit)
    };
  },

  watchQuery: ['pageNumber', 'tab'],

  data() {
    return {
      followDisabled: false,
      favoriteDisabled: false
    };
  },

  computed: {
    user() {
      return this.$store.state.user.user;
    }

  },
  methods: {
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

    async followHandler(type, username) {
      this.followDisabled = true;
      const {
        data: profileData
      } = await Object(users["c" /* followHandler */])(type, username);
      this.followDisabled = false;
      const {
        profile
      } = profileData;
      this.profile = profile;
    }

  }
});
// CONCATENATED MODULE: ./pages/index/profile/_username.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_usernamevue_type_script_lang_js_ = (_usernamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/profile/_username.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_usernamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0de29bb8"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_username.js.map