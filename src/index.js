import name from './common/js/name'
import NavBar from './components/nav-bar'
import Loading from './components/loading'
import ProgressBar from './components/progress-bar'
import Icon from './components/icon'
import Button from './components/button'
import TabBar from './components/tab-bar'
import Music from './components/music'

const components = {
  NavBar,
  Loading,
  ProgressBar,
  Icon,
  Button,
  TabBar,
  Music
}

let prefixComponent = ''

prefixComponent = name.libShortName

const install = function (Vue, ops = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(prefixComponent + components[key].name, components[key]);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
}