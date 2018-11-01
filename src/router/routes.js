import Home from '@/components/pages/home'
import First from '@/components/pages/router/first'
import Second from '@/components/pages/router/second'
import RouterPage from '@/components/pages/router'
import Arrays from '@/components/pages/array'
import Classes from '@/components/pages/classes'
import Events from '@/components/pages/events'
import Components from '@/components/pages/components'
import Animations from '@/components/pages/animations'
import Directives from '@/components/pages/directives'
import VuexComp from '@/components/pages/vuex'

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
    { path: '/classes', name: 'classes', component: Classes },
    { path: '/events', name: 'events', component: Events },
    { path: '/components', name: 'components', component: Components },
    { path: '/animations', name: 'animation', component: Animations },
    { path: '/directives', name: 'directives', component: Directives },
    { path: '/vuex', name: 'vuex', component: VuexComp },
];

export default routes;