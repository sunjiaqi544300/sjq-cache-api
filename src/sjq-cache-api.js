import Cache from './cache'

const install = function (Vue, options) {
  Vue.prototype.$cacheApi = new Cache(options)
}

export default {
  install
}