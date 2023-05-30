class Cache {
  constructor(options) {
    this.cache = {}
    this.options = options || {expiresIn: 60 * 1000}
    this.timer = null  
  }
  
  get(key) {
    return this.cache[key]
  }
  
  set(key, value) {
    this.cache[key] = {
      value,
      timestamp: Date.now()
    }
    clearTimeout(this.timer)   
    this.timer = setTimeout(() => {  
      this.clearCache()
    }, this.options.expiresIn)
  }
  
  delete(key) {
    delete this.cache[key]
  }
  
  clearCache() {
    this.cache = {}
  }
}