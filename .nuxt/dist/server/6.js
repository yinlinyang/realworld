exports.ids = [6];
exports.modules = {

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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=7cf55948&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">Sign up</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errors),function(message,field){return ("<li>"+_vm._ssrEscape(_vm._s(field)+" "+_vm._s(message))+"</li>")}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n            Sign up\n          </button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=7cf55948&

// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


const Cookie =  false ? undefined : null;
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "Login",
  middleware: ['notAuthenticated'],

  data() {
    return {
      user: {
        username: 'ccc.yyy@gmail.com',
        email: 'ccc.yyy@gmail.com',
        password: '12345678'
      },
      errors: []
    };
  },

  computed: {
    isLogin() {
      return this.$route.name === 'login';
    }

  },
  methods: { ...Object(external_vuex_["mapMutations"])(['setUser']),

    async onSubmit() {
      try {
        const user = this.user;
        const {
          data
        } = this.isLogin ? await Object(api_user["d" /* login */])({
          user
        }) : await Object(api_user["e" /* register */])({
          user
        });
        this.$router.push('/');
        Cookie.set('user', data.user);
        this.setUser(data.user);
      } catch (err) {
        console.log(err);

        if (err && err.response) {
          this.errors = err.response.data.errors;
        }
      } finally {}
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d8ff324"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map