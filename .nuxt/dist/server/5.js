exports.ids = [5];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=3a31a1c4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'your_feed' },attrs:{"to":{ name: 'home', query: { tab: 'your_feed' } }}},[_vm._v("\n                  Your Feed\n                ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{ active: _vm.tab === 'global_feed' },attrs:{"to":{ name: 'home', query: { tab: 'global_feed' } }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "+((_vm.tag)?("<li class=\"nav-item\"><span"+(_vm._ssrClass("nav-link",{ active: _vm.tab === 'tag' }))+">"+_vm._ssrEscape("#"+_vm._s(_vm.tag))+"</span></li>"):"<!---->"))],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":{
                  name: 'profile',
                  params: { username: article.author.username },
                }}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
                    name: 'profile',
                    params: { username: article.author.username },
                  }}},[_vm._v("\n                  "+_vm._s(article.author.username)+"\n                ")]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.createdAt,'MMMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",article.disabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n              ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{ name: 'article', params: { slug: article.slug } }}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.body))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._ssrNode("<div class=\"tag-list\">","</div>",_vm._l((_vm.tags),function(tag){return _c('nuxt-link',{key:tag,staticClass:"tag-pill tag-default",attrs:{"to":{ name: '', query: { tab: 'tag', page: _vm.page, tag: tag } }}},[_vm._v("\n                "+_vm._s(tag)+"\n              ")])}),1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{
                active: item === _vm.page,
              }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'home',
                  query: {
                    page: item,
                    tag: _vm.$route.query.tag,
                    tab: _vm.tab,
                  },
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=3a31a1c4&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// EXTERNAL MODULE: ./plugins/request.js
var request = __webpack_require__(5);

// CONCATENATED MODULE: ./api/tag.js

const tag_api = {
  tags: '/api/tags'
};
const getTags = () => {
  return Object(request["b" /* request */])({
    method: 'get',
    url: tag_api.tags
  });
};
// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const TAB = {
  GLOBAL_FEED: 'global_feed',
  YOUR_FEED: 'your_feed',
  TAG: 'tag'
};
const limit = 20;
/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'Home',
  watchQuery: ['page', 'tab', 'tag'],

  data() {
    return {
      articles: [],
      articlesCount: 0,
      tags: []
    };
  },

  computed: {
    totalPage() {
      return Math.ceil(this.articlesCount / limit);
    }

  },

  async asyncData({
    query,
    store
  }) {
    try {
      const {
        page = 1,
        tab = TAB.GLOBAL_FEED,
        tag
      } = query;
      const {
        user
      } = store.state;
      const loadArticles = user && tab === TAB.YOUR_FEED ? api_article["h" /* getFeed */] : api_article["f" /* getArticles */];
      const offset = (page - 1) * limit;
      const [articleRes, tagRes] = await Promise.all([loadArticles({
        limit,
        offset,
        tag
      }), getTags()]);
      articleRes.data.articles.forEach(item => item.disabled = false);
      return {
        articles: articleRes.data.articles,
        articlesCount: articleRes.data.articlesCount,
        limit,
        page: Number(page),
        tags: tagRes.data.tags,
        tab,
        tag
      };
    } catch (error) {
      console.log(error);
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
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "47b064d0"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map