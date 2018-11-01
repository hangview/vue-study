import Home from '@/pages/home'
import First from '@/pages/router/first'
import Second from '@/pages/router/second'
import RouterPage from '@/pages/router'
import Arrays from '@/pages/array'
import Lifecycle from '@/pages/lifecycle'
import Classes from '@/pages/classes'
import Events from '@/pages/events'
import Components from '@/pages/components'
import Animations from '@/pages/animations'
import Directives from '@/pages/directives'
import VuexComp from '@/pages/vuex'
import VuexModule from '@/pages/vuex_module'

//router-view

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path: '/home',
        name: 'home', // 路径名
        component: Home,
        beforeEnter(to,from,next){
            next();
        }
    },
    {
        path: '/router',
        name: 'router',
        component: RouterPage,
        children: [
            {
                path:'first',
                name:'first',
                component:First,

            },
            {
                path:'second',
                name:'second',
                // 定义多个route-view
                components: {
                    default: Second,
                    jay:First
                },
            },
            {
                path:':id',
                // props:true,  //该设置可以将path中的变量作为Classes的属性
                props:(route) => ({id: route.query.a}),   //灵活定制，this.$route解耦
                component:Classes
            }
        ],
        meta:{
        }
    },
    { path: '/arrays', name: 'arrays', component: Arrays },
    { path: '/lifecycle', name: 'lifecycle', component: Lifecycle },
    { path: '/classes', name: 'classes', component: Classes },
    { path: '/events', name: 'events', component: Events },
    { path: '/components', name: 'components', component: Components },
    { path: '/animations', name: 'animation', component: Animations },
    { path: '/directives', name: 'directives', component: Directives },
    { path: '/vuex', name: 'vuex', component: VuexComp },
    { path: '/vuex-module', name: 'vuex-module', component: VuexModule},
];

export default routes;