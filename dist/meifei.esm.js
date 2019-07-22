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
    icon: 'Icon'
  }
};

var back = "data:image/png;base64,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";

var menu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAE+klEQVR4Xu2dT6hVZRTF1xppOUonOWiSEPEgaCCRSChCRlCUJNFIkQQRpXAigkoQNAq0qMRBguHwPY0CBwWCKAQhDhL/ENUkgkBtECgOt3zgg0fcd8+5Z/PRWX7rTO8966792z/O4z543yN8NU2ATU/v4WEBGpfAAliAxgk0Pr6fABagcQKNj+8ngAVonEDj4/sJYAEaJ9D4+H4CWID+BCLiBQBr+t/hd/6PBH4m+aDr83s9ASLiVQCHAWzqCvTroyHwN4BTJI9Oa9QpQESUpV8czVguMiuBIsHu5W6aKkBEPAngdwBrZ/1Uv39UBN4geX5Soy4BtgE4N6pRXGYIgXmS7w4R4AMAnw/5RN8zKgK3SM4NEWAHgG9GNYrLDCFwleT6IQI8C+CPIZ/oe0ZF4FOSB2cWoNwQEScB7BnVOC4zC4G7AOZI3hkqwEoAJwDsmuVT/d5RELgO4D2SNwZ9DVx6U0S8COB1ACtGMZpLdBH4heS3XW/q/EVQV4Bf1yZgAbT3l25vAdIItQMsgPb+0u0tQBqhdoAF0N5fur0FSCPUDrAA2vtLt7cAaYTaARZAe3/p9hYgjVA7wAJo7y/d3gKkEWoHWADt/aXbW4A0Qu0AC6C9v3R7C5BGqB1gAbT3l25vAdIItQMsgPb+0u0tQBqhdoAF0N5fur0FSCPUDrAA2vtLt7cAaYTaARZAe3/p9hYgjVA7wAJo7y/d3gKkEWoH9BYgIlYBKKdNPaU9cjPtF0iWPw+fevUSICI+AlBOmCinhvnSIXAZwDvLHQ5RxugUICL2A/hCZ2Y3/Q+BKyRfWo7KVAEi4mkA5cRJX9oE9pP8atIIXQLsBHBae3a3B/AjydeGCOBzAh8Pf34j+dwQAbYDmH88GDQ9xSWSEw/67voRsBrAXwCeaBqf/vAHSH428xOg3BARex8dE6ePoc0Jyv8NeHnQt4DFmyKiHBl7zP8sQs6gLwEcInk/JcASETYD2OCzAkcvwk0AF0j+09W08xdBXQF+XZuABdDeX7q9BUgj1A6wANr7S7e3AGmE2gEWQHt/6fYWII1QO8ACaO8v3d4CpBFqB1gA7f2l21uANELtAAugvb90ewuQRqgdYAG095dubwHSCLUDLID2/tLtLUAaoXaABdDeX7q9BUgj1A6wANr7S7e3AGmE2gEWQHt/6fYWII1QO8ACaO8v3d4CpBFqB1gA7f2l21uANELtAAugvb90ewuQRqgd0FuAiCh/GfyhzwmUWfgCgDMk/53WuFOAiFgJ4DyALTKju+gigXtlbySvLIekjwBfA3jfTGUJ3AEwR/LupAmmChARcwBuyI7u4osEPiF5ZIgAewCcNEd5Aj+R3DhEgH0AyjkzvrQJ/Ery+SECbAXwg/bsbg/ge5JvzSxAuSEi/gTwjDFKE3ib5HdDBXgFwCXp8dsuf4Jk+VE+8er8GvjoKbAOwHEAb7bNUmr6awA+Jnl2WuteAiwNiAifEzh+D26SvN2n5swC9An1e3QIWACdXVVpagGqYNUJtQA6u6rS1AJUwaoTagF0dlWlqQWoglUn1ALo7KpKUwtQBatOqAXQ2VWVphagCladUAugs6sqTS1AFaw6oRZAZ1dVmlqAKlh1Qi2Azq6qNLUAVbDqhFoAnV1VaWoBqmDVCbUAOruq0tQCVMGqE2oBdHZVpakFqIJVJ9QC6OyqSlMLUAWrTuhDat2vgdzMh4wAAAAASUVORK5CYII=";

//
const prefixCls = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase();
const iconObj = {
  back: back,
  menu: menu
};
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
const sizeObj = {
  XXXSmall: '5px',
  XXSmall: '10px',
  XSmall: '15px',
  small: '20px',
  medium: '25px',
  large: '30px',
  XLarge: '35px',
  XXLarge: '40px',
  XXXLarge: '45px'
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
      default: 'XSmall'
    }
  },
  computed: {
    classes() {
      return `${prefixCls}`;
    },

    styles() {
      let styles = '';

      if (this.name && iconObj.hasOwnProperty(this.name)) {
        styles += 'background-image: url(' + iconObj[this.name] + '); ';
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

      if (this.size && sizeObj.hasOwnProperty(this.size)) {
        styles += 'width: ' + sizeObj[this.size] + '; height: ' + sizeObj[this.size] + '; ';
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
  const __vue_scope_id__ = "data-v-093c3787";
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
    leftIcon: {
      type: Object,
      default: () => {
        return {
          name: '',
          position: '',
          size: 'small',
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
          size: 'small',
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
    _c("div", { class: _vm.barClasses }, [
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
  const __vue_scope_id__$1 = "data-v-77804046";
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
  const __vue_scope_id__$2 = "data-v-e79b21c0";
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
    [_c("div", { class: _vm.barClasses, style: _vm.barStyles })]
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = "data-v-09003122";
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

const components = {
  NavBar,
  Loading,
  ProgressBar,
  Icon
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
