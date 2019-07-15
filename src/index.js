import Demo from './components/demo'

const components = {
  Demo
};

const install = function (Vue, ops = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.components(key, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
}