exports.ids = [3,4,5];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/components/article-comment.vue?vue&type=template&id=2a7e37b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <div class=\"btn btn-sm btn-primary\">\n        Post Comment\n      </div></div></form> "+(_vm._ssrList((_vm.comments),function(comment){return ("<div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n        "+_vm._s(comment.body)+"\n      ")+"</p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img"+(_vm._ssrAttr("src",comment.author.image))+" class=\"comment-author-img\"></a>\n       \n      <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(comment.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("dateFormatter")(comment.createdAt)))+"</span></div></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/article/components/article-comment.vue?vue&type=template&id=2a7e37b0&

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(2);

// CONCATENATED MODULE: ./api/comment.js

const commentsHandler = (slug, method = 'GET', params) => {
  let url = `/articles/${slug}/comments`;
  method === 'DELETE' && (url += `/${params}`);
  const config = {
    method,
    url
  };
  method === 'POST' && (config.data = params);
  return Object(request["b" /* request */])(config);
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/components/article-comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var article_commentvue_type_script_lang_js_ = ({
  name: 'article-comment',
  props: {
    slug: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      comment: '',
      comments: []
    };
  },

  computed: {
    user() {
      return this.$store.state.user.user;
    }

  },

  async mounted() {
    const {
      data: commentsData
    } = await commentsHandler(this.slug);
    const {
      comments
    } = commentsData;
    this.comments = comments;
  },

  methods: {
    async commentsHandler(slug) {
      const {
        data: commentData
      } = await commentsHandler(this.slug, 'POST', {
        comment: {
          body: this.comment
        }
      });
      const {
        comment
      } = commentData;
      this.comment = '';
      this.comments.unshift(comment);
    }

  }
});
// CONCATENATED MODULE: ./pages/index/article/components/article-comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_article_commentvue_type_script_lang_js_ = (article_commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/article/components/article-comment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_article_commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "903cdd14"
  
)

/* harmony default export */ var article_comment = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/_slug.vue?vue&type=template&id=5b66d289&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('article-meta',{attrs:{"article":_vm.article},on:{"update":_vm.updated}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('article-meta',{attrs:{"article":_vm.article},on:{"update":_vm.updated}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('article-comment',{attrs:{"slug":_vm.slug}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index/article/_slug.vue?vue&type=template&id=5b66d289&

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(31);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(6);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(32);

// EXTERNAL MODULE: ./pages/index/article/components/article-meta.vue + 4 modules
var article_meta = __webpack_require__(34);

// EXTERNAL MODULE: ./pages/index/article/components/article-comment.vue + 5 modules
var article_comment = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index/article/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: 'article-detail',
  middleware: ['noslug'],

  head() {
    return {
      title: `${this.article.title} - Realworld`,
      meta: [{
        hid: 'description',
        name: 'description',
        content: this.article.description
      }]
    };
  },

  async asyncData({
    route
  }) {
    const {
      data: articleData
    } = await Object(api_article["a" /* articleDetail */])(route.params.slug);
    const {
      article
    } = articleData;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article,
      slug: route.params.slug
    };
  },

  components: {
    ArticleMeta: article_meta["default"],
    ArticleComment: article_comment["default"]
  },
  methods: {
    updated(data) {
      if (Object(utils["a" /* isDef */])(data.author)) {
        this.article = article;
      } else {
        this.$set(this.article, 'author', data);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/index/article/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index/article/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6101b386"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map