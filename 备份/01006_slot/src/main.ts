import {createApp} from 'vue'
import App from './App.vue'
//一 引入
import {createPinia} from 'pinia'
import router from './router'

//创建一个应用
const app = createApp(App)
//二 创建
const pinia = createPinia()
//三 安装
app.use(pinia)
app.use(router)
//挂载整个应用到app容器中
app.mount('#app')