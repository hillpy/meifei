/*
 * meifei v0.0.0
 * (c) 2019-2019 shinn_lancelot
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.meifei = factory());
}(this, function () { 'use strict';

  let name = {
    libShortName: 'Mf',
    componentsName: {
      navBar: 'NavBar',
      loading: 'Loading',
      progressBar: 'ProgressBar'
    }
  };

  //
  const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.navBar.toLowerCase();
  var script = {
    name: name.componentsName.navBar,
    props: {},

    data() {
      return {};
    },

    computed: {
      wrapperClasses() {
        return `${prefixCls}` + '-wrapper';
      },

      barClasses() {
        return `${prefixCls}`;
      },

      titleClasses() {
        return `${prefixCls}` + '-title';
      }

    },
    methods: {},

    mounted() {}

  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { class: _vm.wrapperClasses }, [
      _c("div", { class: _vm.barClasses }, [
        _c("div", { class: _vm.titleClasses }, [_vm._t("title")], 2)
      ])
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = "data-v-d28749c0";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var NavBar = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  /**
   * 工具函数类
   */
  class utils {
    /**
     * 深度拷贝
     *
     * @param {*} obj
     */
    static deepCopy(obj) {
      let newObj = obj instanceof Array ? [] : {};

      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === "object") {
            newObj[key] = this.deepCopy(obj[key]);
          } else {
            newObj[key] = obj[key];
          }
        }
      }

      return newObj;
    }

  }

  //
  const prefixCls$1 = name.libShortName.toLowerCase() + '-' + name.componentsName.loading.toLowerCase();
  var script$1 = {
    name: name.componentsName.loading,
    props: {
      show: {
        type: Boolean,
        default: true
      },
      type: {
        type: Number,
        default: 1
      }
    },

    data() {
      return {
        loadingData: this.createLoadingData(2, 5)
      };
    },

    computed: {
      wrapperClasses() {
        return `${prefixCls$1}` + '-wrapper';
      }

    },
    methods: {
      createLoadingData(maxType, maxLoadingBar) {
        let loadingDataArr = [];
        let dataObj = {};

        for (let i = 1; i <= maxType; i++) {
          dataObj.type = i;
          dataObj.class = `${prefixCls$1}` + '-' + i;
          dataObj.items = [];
          let item = {};

          for (let j = 1; j <= maxLoadingBar; j++) {
            item.class = [`${prefixCls$1}` + '-bar-' + i, `${prefixCls$1}` + '-bar-' + i + '-' + j];
            dataObj.items.push(utils.deepCopy(item));
          }

          loadingDataArr.push(utils.deepCopy(dataObj));
        }

        return loadingDataArr;
      }

    }
  };

  /* script */
  const __vue_script__$1 = script$1;
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        directives: [
          { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
        ],
        class: _vm.wrapperClasses
      },
      _vm._l(_vm.loadingData, function(data, index) {
        return data.type == _vm.type
          ? _c(
              "div",
              { key: index, class: data.class },
              _vm._l(data.items, function(item, key) {
                return _c("div", { key: key, class: item.class })
              }),
              0
            )
          : _vm._e()
      }),
      0
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = "data-v-e79b21c0";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Loading = normalizeComponent_1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  //
  var script$2 = {
    name: name.componentsName.progressBar,
    props: {},

    data() {
      return {};
    },

    watch: {},
    computed: {},
    methods: {},

    created() {},

    mounted() {}

  };

  /* script */
  const __vue_script__$2 = script$2;
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div")
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = undefined;
    /* scoped */
    const __vue_scope_id__$2 = "data-v-1b42869e";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var ProgressBar = normalizeComponent_1(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      undefined,
      undefined
    );

  const components = {
    NavBar,
    Loading,
    ProgressBar
  };
  const prefixComponent = '';
  prefixComponent = name.libShortName;

  const install = function (Vue, ops = {}) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
      Vue.component(prefixComponent + components[key].name, components[key]);
    });
  };

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var index = {
    install,
    ...components
  };

  return index;

}));
