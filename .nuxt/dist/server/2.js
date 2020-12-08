exports.ids = [2];
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unFollow; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

const api = {
  login: '/api/users/login',
  users: '/api/users',
  user: '/api/user',
  profile: 'api/profiles'
};
const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: api.login,
    data
  });
};
const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: api.users,
    data
  });
};
const getUser = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: api.user
  });
};
const updateUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'put',
    url: api.user,
    data
  });
};
const getProfile = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'get',
    url: `${api.profile}/${username}`
  });
};
const follow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'post',
    url: `${api.profile}/${username}/follow`
  });
};
const unFollow = username => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'delete',
    url: `${api.profile}/${username}/follow`
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=432eb126&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('ArticleMeta',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('ArticleMeta',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.content))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n              "+_vm._s(comment.body)+"\n            ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                name: 'profile',
                params: { username: comment.author.username },
              }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n             \n            "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
                name: 'profile',
                params: { username: comment.author.username },
              }}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMMM DD, YYYY')))+"</span> "+((_vm.user.username === comment.author.username)?("<span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=432eb126&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleMeta.vue?vue&type=template&id=d1b1d59c&
var ArticleMetavue_type_template_id_d1b1d59c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
      name: 'profile',
      params: { username: _vm.article.author.username },
    }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: { username: _vm.article.author.username },
      }}},[_vm._v("\n      "+_vm._s(_vm.article.author.username)+"\n    ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.followLoading))+(_vm._ssrClass("btn btn-sm",{ 'btn-outline-secondary': _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n      "+_vm._s(_vm.article.author.following ? 'UnFollow' : 'Follow')+"\n    "+_vm._s(_vm.article.author.username)+"\n  ")+"</button>\n    \n  <button"+(_vm._ssrAttr("disabled",_vm.changFavoriteStatusIng))+(_vm._ssrClass("btn btn-sm",{ 'btn-outline-primary': _vm.article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n      Favorite "+_vm._s(_vm.article.author.username)+"\n    ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")],2)}
var ArticleMetavue_type_template_id_d1b1d59c_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue?vue&type=template&id=d1b1d59c&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/ArticleMeta.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ArticleMetavue_type_script_lang_js_ = ({
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      followLoading: false,
      changFavoriteStatusIng: false
    };
  },

  methods: {
    async handleFollowChange() {
      const {
        author: {
          following,
          username
        }
      } = this.article;
      this.followLoading = true;

      try {
        const {
          data
        } = following ? await Object(user["f" /* unFollow */])(username) : await Object(user["a" /* follow */])(username); // ?

        Object.assign(this.article.author, data.profile);
      } catch (error) {
        console.log(error);
      }

      this.followLoading = false;
    },

    async handleFavoriteChange() {
      const article = this.article;

      try {
        if (this.changFavoriteStatusIng) return;
        this.changFavoriteStatusIng = true;
        const {
          slug
        } = article;
        const api = article.favorited ? api_article["j" /* unfavorite */] : api_article["d" /* favorite */];
        const res = await api(slug);
        Object.assign(article, res.data.article);
        this.changFavoriteStatusIng = false;
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleMetavue_type_script_lang_js_ = (ArticleMetavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/article/components/ArticleMeta.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleMetavue_type_script_lang_js_,
  ArticleMetavue_type_template_id_d1b1d59c_render,
  ArticleMetavue_type_template_id_d1b1d59c_staticRenderFns,
  false,
  injectStyles,
  null,
  "827fa52e"
  
)

/* harmony default export */ var ArticleMeta = (component.exports);
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(26);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: 'ArticleIndex',
  components: {
    ArticleMeta: ArticleMeta
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },

  data() {
    return {
      content: ''
    };
  },

  async asyncData({
    params
  }) {
    const {
      slug
    } = params;

    try {
      const [articleRes, commentsRes] = await Promise.all([Object(api_article["e" /* getArticle */])(slug), Object(api_article["g" /* getComments */])(slug)]);
      const article = articleRes.data.article;
      const md = new external_markdown_it_default.a();
      article.body = md.render(article.body);
      return {
        article: articleRes.data.article,
        comments: commentsRes.data.comments
      };
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async handleSubmit() {
      try {
        const {
          params
        } = this.$route;
        const {
          slug
        } = params;
        const content = this.content;
        await Object(api_article["a" /* addComment */])(slug, {
          comment: {
            body: content
          }
        });
        this.content = '';
        this.getComment();
      } catch (error) {
        console.log(error);
      }
    },

    async getComment() {
      try {
        const {
          params
        } = this.$route;
        const {
          slug
        } = params;
        const {
          data
        } = await Object(api_article["g" /* getComments */])(slug);
        this.comments = data.comments;
      } catch (error) {
        console.log(error);
      }
    },

    async handleDeleteComment(comment) {
      try {
        const {
          id
        } = comment;
        const {
          params: {
            slug
          }
        } = this.$route;
        await Object(api_article["c" /* deleteComment */])(slug, id);
        const {
          data
        } = await Object(api_article["g" /* getComments */])(slug);
        this.comments = data.comments;
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "05f4158a"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map