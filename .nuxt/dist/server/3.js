exports.ids = [3];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=500c6dae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.profile.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.profile.name))+"</h4> <p>"+_vm._ssrEscape("\n              "+_vm._s(_vm.profile.bio)+"\n            ")+"</p> <button"+(_vm._ssrAttr("disabled",_vm.followLoading))+" class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n                "+_vm._s(_vm.profile.following ? 'Unfollow' : 'Follow')+"\n              "+_vm._s(_vm.profile.username)+"\n            ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.articleType !== 'favorited' },attrs:{"to":{ name: 'profile' }}},[_vm._v("\n                  My Articles\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.articleType === 'favorited' },attrs:{"to":{
                    name: 'profile',
                    params: { articleType: 'favorited' },
                  }}},[_vm._v("\n                  Favorited Articles\n                ")])],1)],2)]),_vm._ssrNode(" "),_c('Articles',{attrs:{"articles":_vm.articles}})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=500c6dae&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(28);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles/index.vue?vue&type=template&id=4539f6f1&
var Articlesvue_type_template_id_4539f6f1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.articles),function(article){return _c('Article',{key:article.slug,attrs:{"article":article}})}),1)}
var Articlesvue_type_template_id_4539f6f1_staticRenderFns = []


// CONCATENATED MODULE: ./components/Articles/index.vue?vue&type=template&id=4539f6f1&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles/Article/index.vue?vue&type=template&id=267159d8&
var Articlevue_type_template_id_267159d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
          name: 'profile',
          params: { username: _vm.article.author.username },
        }}},[_c('img',{attrs:{"src":_vm.article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
            name: 'profile',
            params: { username: _vm.article.author.username },
          }}},[_vm._v("\n          "+_vm._s(_vm.article.author.username)+"\n        ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.article.disabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: _vm.article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.article.favoritesCount)+"\n      ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: _vm.article.slug } }}},[_c('h1',[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.article.body))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)])}
var Articlevue_type_template_id_267159d8_staticRenderFns = []


// CONCATENATED MODULE: ./components/Articles/Article/index.vue?vue&type=template&id=267159d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles/Article/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Articlevue_type_script_lang_js_ = ({
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: () => []
    }
  },
  methods: {
    async handleFavoriteChange(article) {
      try {
        if (article.disabled) return;
        article.disabled = true;
        const {
          slug
        } = article;
        const api = article.favorited ? api_article["j" /* unfavorite */] : api_article["d" /* favorite */];
        const res = await api(slug);
        Object.assign(article, res.data.article);
        article.disabled = false;
      } catch (error) {
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Articles/Article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Articles_Articlevue_type_script_lang_js_ = (Articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Articles/Article/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Articles_Articlevue_type_script_lang_js_,
  Articlevue_type_template_id_267159d8_render,
  Articlevue_type_template_id_267159d8_staticRenderFns,
  false,
  injectStyles,
  null,
  "4f03c6f7"
  
)

/* harmony default export */ var Article = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Articlesvue_type_script_lang_js_ = ({
  name: 'Articles',
  components: {
    Article: Article
  },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  }
});
// CONCATENATED MODULE: ./components/Articles/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Articlesvue_type_script_lang_js_ = (Articlesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Articles/index.vue



function Articles_injectStyles (context) {
  
  
}

/* normalize component */

var Articles_component = Object(componentNormalizer["a" /* default */])(
  components_Articlesvue_type_script_lang_js_,
  Articlesvue_type_template_id_4539f6f1_render,
  Articlesvue_type_template_id_4539f6f1_staticRenderFns,
  false,
  Articles_injectStyles,
  null,
  "f2cfd220"
  
)

/* harmony default export */ var Articles = (Articles_component.exports);
// CONCATENATED MODULE: ./components/index.js

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: 'Profile',
  watchParams: ['articleType', 'username'],
  components: {
    Articles: Articles
  },

  data() {
    return {
      followLoading: false
    };
  },

  async asyncData({
    params
  }) {
    const {
      username,
      articleType
    } = params;

    try {
      const limit = 20;
      const offset = 0;
      const option = {
        limit,
        offset
      };

      if (articleType === 'favorited') {
        option.favorited = username;
      } else {
        option.author = username;
      }

      const [profileRes, articlesRes] = await Promise.all([Object(user["b" /* getProfile */])(username), Object(api_article["f" /* getArticles */])(option)]);
      articlesRes.data && articlesRes.data.articles && articlesRes.data.articles.forEach(item => {
        item.disabled = false;
      });
      return {
        profile: profileRes.data.profile,
        articles: articlesRes.data.articles,
        articleType
      };
    } catch (error) {
      console.log(error);
      return {
        profile: {},
        articles: [],
        articleType
      };
    }
  },

  methods: {
    async handleFollowChange() {
      const {
        following,
        username
      } = this.profile;
      this.followLoading = true;

      try {
        const {
          data
        } = following ? await Object(user["f" /* unFollow */])(username) : await Object(user["a" /* follow */])(username);
        console.log(data);
        this.profile = data.profile;
      } catch (error) {
        console.log(error);
      }

      this.followLoading = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/profile/index.vue



function profile_injectStyles (context) {
  
  
}

/* normalize component */

var profile_component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  profile_injectStyles,
  null,
  "167c0d58"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (profile_component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map