//创建路由器

//引入createRuter
import {createRouter,createWebHistory} from 'vue-router'

//引入可能要呈现的组件
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Detail from '@/views/Detail.vue'

//创建路由器
const router = createRouter({
    history:createWebHistory(),
    routes:[
       {
        path:'/',
        component:Home
       },{
        path:'/about',
        component:About
       },{
        path:'/news',
        component:News,
        children:[
            {path:'detail',component:Detail}
        ]
       }
    ]
})

export default router
