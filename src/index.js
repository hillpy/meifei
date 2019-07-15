import Demo from './components/demo'

const components = [
  Demo
]

const install = function (Vue, ops = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Demo
}