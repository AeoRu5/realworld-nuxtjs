exports.ids = [4];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=article-comment.js.map