##脚手架
vue init webpack vuedemo

cd vuedemo && cnpm install

npm run dev


##首页-信息列表-全部产品
创建pages/index.vue

db.json

## vue-resource实现Ajax获取信息数据、json-server模拟数据
cnpm install vue-resource --save

找到src/main.js
import VueResource from 'vue-resource'
Vue.use(VueResource)

所有有的文件里可以用
找到文件 src/pages/index.vue
````
created: function(){
	this.$http.get('api/getNewsList')
	.then(res=>{
		this.newsList = res.data
	},err=>{
		console.log(err)
	})
}

````

## 安装json-server  
cnpm install json-server --save
https://github.com/typicode/json-server

找到dev-server.js
````
const jsonServer = require('json-server')
const apiServer = jsonServer.create()
const apiRouter = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

apiServer.use(middlewares)
apiServer.use('/api',apiRouter)

apiServer.listen(port+1, () => {
  console.log('JSON Server is running')
})
````
找到config/index.js

````
dev: {
  proxyTable: {
	  '/api/': 'http://localhost:8081/'
  }
}
````
##express 启动服务器

找到dev-server.js
````
var apiServer = express()
var bodyParser = require('body-parser')
apiServer.use(bodyParser.urlencoded({ extended: true }))
apiServer.use(bodyParser.json())
var apiRouter = express.Router()
var fs = require('fs')
apiRouter.route('/:apiName')
.all(function (req, res) {
  fs.readFile('./db.json', 'utf8', function (err, data) {
    if (err) throw err
    var data = JSON.parse(data)
    if (data[req.params.apiName]) {
      res.json(data[req.params.apiName])
    }
    else {
      res.send('no such api name')
    }

  })
})


apiServer.use('/api', apiRouter);
apiServer.listen(port + 1, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + (port + 1) + '\n')
})
````








##
