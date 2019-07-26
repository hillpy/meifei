/*
 * meifei v0.0.0
 * (c) 2019-2019 shinn_lancelot
 * Released under the MIT License.
 */

let name = {
  libShortName: 'Mf',
  componentsName: {
    navBar: 'NavBar',
    loading: 'Loading',
    progressBar: 'ProgressBar',
    icon: 'Icon',
    button: 'Button'
  }
};

//
const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase();
const sizeArr = ['xxx-small', 'xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', 'xxx-large'];
const positionObj = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  leftTop: ['left', 'top'],
  rightTop: ['right', 'top'],
  leftBottom: ['left', 'bottom'],
  rightBottom: ['right', 'bottom']
};
var script = {
  name: name.componentsName.icon,
  props: {
    name: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    custom: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes() {
      let classes = [`${prefixCls}`];

      if (this.name) {
        classes.push(`${prefixCls}` + '-' + this.name);
      } else if (this.custom) {
        this.size || (this.size = 'small');

        if (sizeArr.indexOf(this.size) !== -1) {
          classes.push(`${prefixCls}` + '-size-' + this.size);
        }
      }

      return classes;
    },

    styles() {
      let styles = '';

      if (this.name) {
        if (this.size && sizeArr.indexOf(this.size) === -1) {
          styles += 'font-size: ' + this.size + '; ';
        }
      } else if (this.custom) {
        if (this.size && sizeArr.indexOf(this.size) === -1) {
          styles += 'width: ' + this.size + '; height: ' + this.size + '; ';
        }

        styles += 'background-image: url(' + this.custom + '); ';
      }

      if (this.position && positionObj.hasOwnProperty(this.position)) {
        styles += 'position: absolute; ';

        if (positionObj[this.position] instanceof Array) {
          positionObj[this.position].map((item, key) => {
            styles += item + ': 0; ';
          });
        } else {
          styles += positionObj[this.position] + ': 0; ';
        }
      }

      return styles;
    }

  },
  methods: {
    handleClick(e) {
      this.$emit('iconClick', e);
    }

  }
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
  return _c("i", {
    class: _vm.classes,
    style: _vm.styles,
    on: { click: _vm.handleClick }
  })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Icon = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
const prefixCls$1 = name.libShortName.toLowerCase() + '-' + name.componentsName.navBar.toLowerCase();
var script$1 = {
  name: name.componentsName.navBar,
  components: {
    Icon
  },
  props: {
    maxWidth: {
      type: String,
      default: '750px'
    },
    leftIcon: {
      type: Object,
      default: () => {
        return {
          name: '',
          position: '',
          size: '',
          click: () => {}
        };
      }
    },
    rightIcon: {
      type: Object,
      default: () => {
        return {
          name: '',
          position: '',
          size: '',
          click: () => {}
        };
      }
    }
  },
  computed: {
    wrapperClasses() {
      return `${prefixCls$1}` + '-wrapper';
    },

    barClasses() {
      return `${prefixCls$1}`;
    },

    titleClasses() {
      return `${prefixCls$1}` + '-title';
    },

    iconBoxClasses() {
      return `${prefixCls$1}` + '-icon-box';
    },

    barStyles() {
      let styles = '';

      if (this.maxWidth) {
        styles += 'maxWidth: ' + this.maxWidth + ';';
      }

      return styles;
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
  return _c("div", { class: _vm.wrapperClasses }, [
    _c("div", { class: _vm.barClasses, style: _vm.barStyles }, [
      _c(
        "div",
        { class: _vm.iconBoxClasses },
        [
          _c("icon", {
            attrs: {
              name: _vm.leftIcon.name,
              position: _vm.leftIcon.position,
              size: _vm.leftIcon.size
            },
            on: { iconClick: _vm.leftIcon.click }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { class: _vm.titleClasses }, [_vm._t("title")], 2),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.iconBoxClasses },
        [
          _c("icon", {
            attrs: {
              name: _vm.rightIcon.name,
              position: _vm.rightIcon.position,
              size: _vm.rightIcon.size
            },
            on: { iconClick: _vm.rightIcon.click }
          })
        ],
        1
      )
    ])
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var NavBar = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
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
const prefixCls$2 = name.libShortName.toLowerCase() + '-' + name.componentsName.loading.toLowerCase();
var script$2 = {
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
      return `${prefixCls$2}` + '-wrapper';
    }

  },
  methods: {
    createLoadingData(maxType, maxLoadingBar) {
      let loadingDataArr = [];
      let dataObj = {};

      for (let i = 1; i <= maxType; i++) {
        dataObj.type = i;
        dataObj.class = `${prefixCls$2}` + '-' + i;
        dataObj.items = [];
        let item = {};

        for (let j = 1; j <= maxLoadingBar; j++) {
          item.class = [`${prefixCls$2}` + '-bar-' + i, `${prefixCls$2}` + '-bar-' + i + '-' + j];
          dataObj.items.push(utils.deepCopy(item));
        }

        loadingDataArr.push(utils.deepCopy(dataObj));
      }

      return loadingDataArr;
    }

  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
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
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Loading = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

//
const prefixCls$3 = name.libShortName.toLowerCase() + '-' + name.componentsName.progressBar.toLowerCase();
var script$3 = {
  name: name.componentsName.progressBar,
  props: {
    decimal: {
      type: Number,
      default: 0
    },
    position: {
      type: String,
      default: 'top'
    },
    endedHide: {
      type: Boolean,
      default: true
    },
    maxWidth: {
      type: String,
      default: '750px'
    }
  },

  data() {
    return {
      hide: false
    };
  },

  watch: {
    decimal(val) {
      if (val >= 1 && this.endedHide === true) {
        this.hide = true;
      }
    }

  },
  computed: {
    wrapperClasses() {
      return `${prefixCls$3}` + '-wrapper';
    },

    barBoxClasses() {
      return `${prefixCls$3}` + '-box';
    },

    barClasses() {
      return `${prefixCls$3}`;
    },

    wrapperStyles() {
      let position = '';
      let positionArr = ['top', 'bottom'];
      let positionStyle = {
        top: 'top: 0; bottom: auto;',
        bottom: 'top: auto; bottom: 0;'
      };
      position = positionArr.indexOf(this.position) === -1 ? 'top' : this.position;
      return positionStyle[position];
    },

    barBoxStyles() {
      let styles = '';

      if (this.maxWidth) {
        styles += 'maxWidth: ' + this.maxWidth + ';';
      }

      return styles;
    },

    barStyles() {
      let decimal = 0;
      decimal = this.decimal > 1 ? 1 : this.decimal;
      decimal = (decimal * 100).toFixed(2);

      if (decimal.indexOf('.00') != -1) {
        decimal = decimal.replace(/\.00/g, '');
      }

      this.percentDecimal = decimal + '%';
      return 'width: ' + this.percentDecimal + ';';
    }

  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: !_vm.hide,
          expression: "!hide"
        }
      ],
      class: _vm.wrapperClasses,
      style: _vm.wrapperStyles
    },
    [
      _c("div", { class: _vm.barBoxClasses, style: _vm.barBoxStyles }, [
        _c("div", { class: _vm.barClasses, style: _vm.barStyles })
      ])
    ]
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var ProgressBar = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

//
const prefixCls$4 = name.libShortName.toLowerCase() + '-' + name.componentsName.button.toLowerCase();
var script$4 = {
  name: name.componentsName.button,
  components: {
    Icon
  },
  props: {
    icon: {
      type: Object,
      default: () => {
        return {
          name: '',
          size: ''
        };
      }
    },
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  watch: {},
  computed: {
    wrapperClasses() {
      return `${prefixCls$4}` + '-wrapper';
    },

    titleClasses() {
      return `${prefixCls$4}` + '-title';
    }

  },
  methods: {
    handleClick(e) {
      this.$emit('buttonClick', e);
    }

  },

  created() {},

  mounted() {}

};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    { class: _vm.wrapperClasses, on: { click: _vm.handleClick } },
    [
      _c("icon", { attrs: { name: _vm.icon.name, size: "icon.size" } }),
      _vm._v(" "),
      _c("span", { class: _vm.titleClasses }, [_vm._v(_vm._s(_vm.title))])
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Button = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

const components = {
  NavBar,
  Loading,
  ProgressBar,
  Icon,
  Button
};
let prefixComponent = '';
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

export default index;
