exports.ids = [4];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return modifyArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return unfavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteComment; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const api = {
  articles: '/api/articles',
  feed: '/api/articles/feed'
};
const getArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: api.articles,
    params: data
  });
};
const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `${api.articles}/${slug}`
  });
};
const createArticles = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: api.articles,
    data
  });
};
const modifyArticle = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'put',
    url: `${api.articles}/${slug}`,
    data
  });
};
const getFeed = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: api.feed,
    params: data
  });
};
const favorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `${api.articles}/${slug}/favorite`
  });
};
const unfavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `${api.articles}/${slug}/favorite`
  });
};
const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `${api.articles}/${slug}/comments`
  });
};
const addComment = (slug, data) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `${api.articles}/${slug}/comments`,
    data
  });
};
const deleteComment = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `${api.articles}/${slug}/comments/${id}`
  });
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=template&id=74f5646e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.article.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.article.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.article.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\""+(_vm._ssrAttr("value",(_vm.article.tags)))+" class=\"form-control\"> <div class=\"tag-list\"></div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=template&id=74f5646e&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editor/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var editorvue_type_script_lang_js_ = ({
  name: 'Editor',
  middleware: ['authenticated'],

  data() {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tags: ''
      }
    };
  },

  created() {
    const {
      params
    } = this.$route;

    if (params && params.slug) {
      this.getArticle();
    }
  },

  methods: {
    async handleSubmit() {
      try {
        const {
          title,
          body,
          description,
          tags
        } = this.article;
        const {
          params
        } = this.$route;
        const {
          slug
        } = params;
        const options = {
          title: title && title.trim(),
          body: body && body.trim(),
          description: description && description.trim(),
          tagList: tags && tags.trim().split(',')
        };
        const {
          data
        } = slug ? await Object(api_article["i" /* modifyArticle */])(slug, options) : await Object(api_article["b" /* createArticles */])(options);
        this.$router.push({
          name: 'article',
          params: {
            slug: data.article.slug
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getArticle() {
      const {
        params
      } = this.$route;
      const {
        slug
      } = params;
      const {
        data
      } = await Object(api_article["e" /* getArticle */])(slug);
      console.log(data);
      const {
        article
      } = data;
      article.tags = article.tagList.join(',');
      this.article = article;
    }

  }
});
// CONCATENATED MODULE: ./pages/editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editorvue_type_script_lang_js_ = (editorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/editor/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3e8dab44"
  
)

/* harmony default export */ var editor = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map