### 1.解决代码中频繁调用同一个接口

```
利用缓存将数据存储下来，设置时间内再次使用时，直接获取缓存
```

## 安装使用

```shell
npm install --save-dev sjq-cache-api

import SjqCacheApi from 'sjq-cache-api'

Vue.use(SjqCacheApi, { /* options */ })

```

