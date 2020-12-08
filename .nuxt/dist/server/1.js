exports.ids = [1];
exports.modules = {

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("5f26aa29", content, true, context)
};

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e0f2233_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e0f2233_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e0f2233_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e0f2233_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5e0f2233_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".user-pic[data-v-5e0f2233]{height:26px;border-radius:50px;margin-right:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=template&id=5e0f2233&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"navbar navbar-light\" data-v-5e0f2233>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-5e0f2233>","</div>",[_vm._ssrNode("<a href=\"index.html\" class=\"navbar-brand\" data-v-5e0f2233>conduit</a> "),_vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\" data-v-5e0f2233>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-5e0f2233>","</li>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),(_vm.user)?[_vm._ssrNode("<li class=\"nav-item\" data-v-5e0f2233>","</li>",[_c('nuxt-link',{attrs:{"to":"/editor"}},[_c('i',{staticClass:"ion-compose"}),_vm._v(" New Post\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-5e0f2233>","</li>",[_c('nuxt-link',{attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Settings\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-5e0f2233>","</li>",[_c('nuxt-link',{attrs:{"to":{name: 'profile', params: {username: _vm.user.username}}}},[_c('img',{staticClass:"user-pic",attrs:{"src":_vm.user.image}}),_vm._v("\n              "+_vm._s(_vm.user.username)+"\n            ")])],1)]:[_vm._ssrNode("<li class=\"nav-item\" data-v-5e0f2233>","</li>",[_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Sign in")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-5e0f2233>","</li>",[_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("Sign up")])],1)]],2)],2)]),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" <footer data-v-5e0f2233><div class=\"container\" data-v-5e0f2233><a href=\"/\" class=\"logo-font\" data-v-5e0f2233>conduit</a> <span class=\"attribution\" data-v-5e0f2233>\n        An interactive learning project from\n        <a href=\"https://thinkster.io\" data-v-5e0f2233>Thinkster</a>. Code &amp; design\n        licensed under MIT.\n      </span></div></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=template&id=5e0f2233&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: 'LayoutIndex',
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/layout/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5e0f2233",
  "6936884a"
  
)

/* harmony default export */ var layout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map