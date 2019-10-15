/*
 * meifei v0.0.1-alpha
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
    button: 'Button',
    tabBar: 'TabBar',
    badge: 'Badge',
    music: 'Music'
  }
};

//
const PREFIX_CLS = name.libShortName.toLowerCase() + '-' + name.componentsName.icon.toLowerCase();
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
const animationArr = ['scale', 'rotate-y', 'fade-in'];
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
    },
    animated: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: 'scale'
    }
  },
  computed: {
    classes() {
      let classes = [`${PREFIX_CLS}`];

      if (this.name) {
        classes.push(`${PREFIX_CLS}` + '-' + this.name);
      } else if (this.custom) {
        this.size || (this.size = 'small');

        if (sizeArr.indexOf(this.size) !== -1) {
          classes.push(`${PREFIX_CLS}` + '-size-' + this.size);
        }
      }

      if (this.animated) {
        if (animationArr.indexOf(this.animation) !== -1) {
          classes.push(`${PREFIX_CLS}` + '-' + this.animation);
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
  const __vue_scope_id__ = "data-v-11424e90";
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
const PREFIX_CLS$1 = name.libShortName.toLowerCase() + '-' + name.componentsName.navBar.toLowerCase();
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
      return `${PREFIX_CLS$1}` + '-wrapper';
    },

    barClasses() {
      return `${PREFIX_CLS$1}`;
    },

    titleClasses() {
      return `${PREFIX_CLS$1}` + '-title';
    },

    iconBoxClasses() {
      return `${PREFIX_CLS$1}` + '-icon-box';
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
  const __vue_scope_id__$1 = "data-v-37a93bac";
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
        if (typeof obj[key] === 'object') {
          newObj[key] = this.deepCopy(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    return newObj;
  }
  /**
   * 更新数据对象
   *
   * @param {*} obj
   * @param {*} newObj
   */


  static updateObj(obj, newObj) {
    for (let key in newObj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          obj[key] = this.updateObj(obj[key], newObj[key]);
        } else {
          obj[key] = newObj[key];
        }
      }
    }

    return obj;
  }

}

//
const PREFIX_CLS$2 = name.libShortName.toLowerCase() + '-' + name.componentsName.loading.toLowerCase();
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
      return `${PREFIX_CLS$2}` + '-wrapper';
    }

  },
  methods: {
    createLoadingData(maxType, maxLoadingBar) {
      let loadingDataArr = [];
      let dataObj = {};

      for (let i = 1; i <= maxType; i++) {
        dataObj.type = i;
        dataObj.class = `${PREFIX_CLS$2}` + '-' + i;
        dataObj.items = [];
        let item = {};

        for (let j = 1; j <= maxLoadingBar; j++) {
          item.class = [`${PREFIX_CLS$2}` + '-bar-' + i, `${PREFIX_CLS$2}` + '-bar-' + i + '-' + j];
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
    [
      _vm._l(_vm.loadingData, function(data, index) {
        return [
          data.type == _vm.type
            ? _c(
                "div",
                { key: index, class: data.class },
                _vm._l(data.items, function(item, key) {
                  return _c("div", { key: key, class: item.class })
                }),
                0
              )
            : _vm._e()
        ]
      })
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = "data-v-e0ac11e6";
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
const PREFIX_CLS$3 = name.libShortName.toLowerCase() + '-' + name.componentsName.progressBar.toLowerCase();
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
      return `${PREFIX_CLS$3}` + '-wrapper';
    },

    barBoxClasses() {
      return `${PREFIX_CLS$3}` + '-box';
    },

    barClasses() {
      return `${PREFIX_CLS$3}`;
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
  const __vue_scope_id__$3 = "data-v-4ed9bf31";
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
const PREFIX_CLS$4 = name.libShortName.toLowerCase() + '-' + name.componentsName.button.toLowerCase();
var script$4 = {
  name: name.componentsName.button,
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
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
    },
    size: {
      type: String,
      default: ''
    },
    radius: {
      type: String,
      default: ''
    },
    long: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  watch: {},
  computed: {
    wrapperClasses() {
      let wrapperClasses = [];
      wrapperClasses.push(`${PREFIX_CLS$4}`);
      this.type && wrapperClasses.push(`${PREFIX_CLS$4}` + '-' + this.type);
      this.size && wrapperClasses.push(`${PREFIX_CLS$4}` + '-' + this.size);

      if (this.radius === 'circle') {
        wrapperClasses.push(`${PREFIX_CLS$4}` + '-' + this.radius);
      }

      if (this.long === true) {
        wrapperClasses.push(`${PREFIX_CLS$4}` + '-long');
      }

      return wrapperClasses;
    },

    styles() {
      let styles = '';

      if (this.radius !== '' && this.radius !== 'circle') {
        styles += 'border-radius: ' + this.radius + '; ';
      }

      return styles;
    }

  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.$emit('buttonClick', e);
    }

  }
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
    {
      class: _vm.wrapperClasses,
      style: _vm.styles,
      on: { click: _vm.handleClick }
    },
    [
      _vm.icon.name
        ? _c("icon", { attrs: { name: _vm.icon.name, size: "icon.size" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.title ? _c("span", [_vm._v(_vm._s(_vm.title))]) : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = "data-v-3f8442d1";
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

//
const PREFIX_CLS$5 = name.libShortName.toLowerCase() + '-' + name.componentsName.tabBar.toLowerCase();
var script$5 = {
  name: name.componentsName.tabBar,
  components: {
    Icon
  },
  props: {
    maxWidth: {
      type: String,
      default: '750px'
    },
    height: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: ''
    },
    titleSize: {
      type: String,
      default: ''
    },
    datas: {
      type: Array,
      default: () => {
        return [];
      }
    },
    hideLine: {
      type: Boolean,
      default: false
    },
    autoUpdate: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      defaultItemData: {
        title: '',
        titleSize: '',
        icon: {
          unselected: '',
          selected: ''
        },
        custom: {
          unselected: '',
          selected: ''
        },
        iconSize: '20px',
        selected: true,
        animated: true,
        animation: 'scale'
      },
      itemDatas: []
    };
  },

  watch: {
    datas: {
      handler(val) {
        this.itemDatas = this.handleDatas(this.datas);
      },

      deep: true
    }
  },
  computed: {
    wrapperClasses() {
      return `${PREFIX_CLS$5}` + '-wrapper';
    },

    barClasses() {
      let classes = [];

      if (this.hideLine === false) {
        classes.push(`${PREFIX_CLS$5}`);
      } else {
        classes.push(`${PREFIX_CLS$5}` + '-no-line');
      }

      return classes;
    },

    barStyles() {
      let styles = '';

      if (this.maxWidth) {
        styles += 'maxWidth: ' + this.maxWidth + '; ';
      }

      if (this.height) {
        styles += 'height: ' + this.height + '; ';
      }

      return styles;
    },

    itemClasses() {
      return data => {
        let classes = [];
        classes.push(`${PREFIX_CLS$5}` + '-item');

        if (data.selected === true) {
          classes.push(`${PREFIX_CLS$5}` + '-selected');
        }

        return classes;
      };
    },

    itemConClasses() {
      return `${PREFIX_CLS$5}` + '-item-content';
    },

    titleStyles() {
      let styles = '';

      if (this.titleSize) {
        styles += 'font-size: ' + this.titleSize + ';';
      }

      return styles;
    }

  },

  created() {
    this.itemDatas = this.handleDatas(this.datas);
  },

  methods: {
    handleDatas(datas) {
      let newDatas = [];

      for (let i = 0, len = datas.length; i < len; i++) {
        newDatas.push(utils.updateObj(utils.deepCopy(this.defaultItemData), datas[i]));
      }

      return newDatas;
    },

    handleClick(key) {
      if (this.autoUpdate === true) {
        for (let i = 0, len = this.itemDatas.length; i < len; i++) {
          if (i === key) {
            this.itemDatas[i].selected = true;
          } else if (this.itemDatas[i].selected === true) {
            this.itemDatas[i].selected = false;
          }
        }
      }

      this.$emit('itemClick', key);
    },

    handleName(data) {
      let name = '';

      if (data.custom.unselected == '' && data.custom.selected == '' && data.icon.unselected != '' && data.icon.selected != '') {
        name = data.selected === true ? data.icon.selected : data.icon.unselected;
      }

      return name;
    },

    handleCustom(data) {
      let custom = '';

      if (data.custom.unselected != '' && data.custom.selected != '') {
        custom = data.selected === true ? data.custom.selected : data.custom.unselected;
      }

      return custom;
    },

    handleSize(data) {
      let size = '';

      if (data.iconSize) {
        size = data.iconSize;
      } else if (this.iconSize) {
        size = this.iconSize;
      }

      return size;
    },

    handleAnimated(data) {
      let animated = false;

      if (data.selected === true) {
        animated = true;
      }

      return animated;
    },

    handleAnimation(data) {
      let animation = 'scale';

      if (data.animation) {
        animation = data.animation;
      }

      return animation;
    }

  }
};

/* script */
const __vue_script__$5 = script$5;
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.wrapperClasses }, [
    _c(
      "ul",
      { class: _vm.barClasses, style: _vm.barStyles },
      _vm._l(_vm.itemDatas, function(data, key) {
        return _c(
          "li",
          {
            key: key,
            class: _vm.itemClasses(data),
            on: {
              click: function($event) {
                return _vm.handleClick(key)
              }
            }
          },
          [
            _c(
              "div",
              { class: _vm.itemConClasses },
              [
                _c("icon", {
                  attrs: {
                    name: _vm.handleName(data),
                    custom: _vm.handleCustom(data),
                    size: _vm.handleSize(data),
                    animated: _vm.handleAnimated(data),
                    animation: _vm.handleAnimation(data)
                  }
                }),
                _vm._v(" "),
                _c("span", { style: _vm.titleStyles }, [
                  _vm._v(_vm._s(data.title))
                ])
              ],
              1
            )
          ]
        )
      }),
      0
    )
  ])
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = "data-v-b9abd82a";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var TabBar = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

//
const PREFIX_CLS$6 = name.libShortName.toLowerCase() + '-' + name.componentsName.music.toLowerCase();
const ANIMATION_ARR = ['rotate', 'scale'];
const SIZE_ARR = ['small', 'medium', 'large'];
var script$6 = {
  name: name.componentsName.music,
  props: {
    src: {
      type: String,
      default: '',
      required: true
    },
    playClass: {
      type: String,
      default: `${PREFIX_CLS$6}` + '-play'
    },
    pauseClass: {
      type: String,
      default: `${PREFIX_CLS$6}` + '-pause'
    },
    maxVolume: {
      type: Number,
      default: 1
    },
    volStepSize: {
      type: Number,
      default: 0.05
    },
    animated: {
      type: Boolean,
      default: true
    },
    animation: {
      type: String,
      default: 'rotate'
    },
    size: {
      type: String,
      default: 'medium'
    },
    show: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      audio: {},
      clickState: true,
      paused: true,
      volume: 0,
      pausedClass: `${PREFIX_CLS$6}` + '-animation-paused',
      wrapperClasses: []
    };
  },

  watch: {
    volume(val, oldVal) {
      if (val < 0) {
        val = 0;
      } else if (val > this.maxVolume) {
        val = this.maxVolume;
      }

      this.audio.volume = val; // 音量小于等于0，则播放状态改成暂停，允许点击播放器

      if (val <= 0) {
        this.paused = true;
        this.clickState = true; // 音量刚从0变大，则播放状态改成播放
      } else if (val > 0 && oldVal <= 0) {
        this.paused = false;
      } // 音量达到最大，则允许点击播放器


      if (val >= this.maxVolume) {
        this.clickState = true;
      }
    },

    paused(val) {
      // 监听播放状态变量，调整播放状态与样式
      if (val === true) {
        this.updateWrapperClasses([this.pauseClass, this.pausedClass]);
        this.audio.pause();
      } else {
        this.updateWrapperClasses([this.playClass]);
        this.audio.play();
      }
    }

  },

  created() {
    // 校验并修正最大音量
    if (this.maxVolume > 1 || this.maxVolume <= 0) {
      this.maxVolume = 1;
    } // 更新样式


    this.updateWrapperClasses([this.pauseClass, this.pausedClass]); // 创建audio对象

    this.audio = new Audio();
    this.audio.src = this.src;
    this.audio.preload = true;
    this.audio.loop = true;
  },

  methods: {
    handleClick(e) {
      if (!this.clickState) {
        return;
      }

      this.clickState = false;

      if (this.audio.paused === true) {
        this.play();
      } else {
        this.pause();
      }

      this.$emit('musicClick', e);
    },

    // 播放
    play() {
      this.increaseVolume();
    },

    // 暂停
    pause() {
      this.decreaseVolume();
    },

    // 增大音量
    increaseVolume() {
      if (this.volume < this.maxVolume) {
        let index = setInterval(() => {
          if (this.volume >= this.maxVolume) {
            clearInterval(index);
          }

          this.volume += this.volStepSize < this.maxVolume && this.volStepSize > 0 ? this.volStepSize : this.maxVolume;

          if (this.volume >= this.maxVolume) {
            this.volume = this.maxVolume;
          }
        }, 50);
      }
    },

    // 减小音量
    decreaseVolume() {
      if (this.volume > 0) {
        let index = setInterval(() => {
          if (this.volume <= 0) {
            clearInterval(index);
          }

          this.volume -= this.volStepSize < this.maxVolume && this.volStepSize > 0 ? this.volStepSize : this.maxVolume;

          if (this.volume <= 0) {
            this.volume = 0;
          }
        }, 50);
      }
    },

    // 更新容器样式
    updateWrapperClasses(arr) {
      let classes = [`${PREFIX_CLS$6}`];

      if (SIZE_ARR.indexOf(this.size) !== -1) {
        classes.push(`${PREFIX_CLS$6}` + '-size-' + this.size);
      }

      if (this.animated === true) {
        if (ANIMATION_ARR.indexOf(this.animation) !== -1) {
          classes.push(`${PREFIX_CLS$6}` + '-animation-' + this.animation);
        }
      }

      classes = classes.concat(arr);
      this.wrapperClasses = classes;
    }

  }
};

/* script */
const __vue_script__$6 = script$6;
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    directives: [
      { name: "show", rawName: "v-show", value: _vm.show, expression: "show" }
    ],
    class: _vm.wrapperClasses,
    on: { click: _vm.handleClick }
  })
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = "data-v-5d5a967e";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Music = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

const components = {
  NavBar,
  Loading,
  ProgressBar,
  Icon,
  Button,
  TabBar,
  Music
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
