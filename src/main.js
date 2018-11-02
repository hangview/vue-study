import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App.vue'
import createRouter from './router'
import createStore from './store/store';
import GlobalComp from './GolbalComp.vue';

Vue.use(Router);
Vue.use(Vuex);
const router = createRouter();
const store = createStore();
console.log(store);

//导航守卫 全局钩子
router.beforeEach((to,from,next) =>{
    // console.log('before each');
    next();
    // if(to.path === '/home'){
    //     next();
    // }else{
    //     next('/home');
    // }
})

router.beforeResolve((to,from,next)=>{
    // console.log('before resolve');
    next();
})

router.afterEach((to,from)=>{
    // console.log('after each');
})


Vue.config.productionTip = false
// 全局指令
// 钩子函数： bind,inserted,update,componentUpdated,unbind
// 简写方式对应bind和update
Vue.directive('size',(el,binding) => {
        el.style['font-size'] = binding.value;
})

Vue.directive('focus',{
    inserted(el){
        el.focus();
    }
})

// 全局组件
//组件命名规则：驼峰、头部大写，使用时 global-comp
Vue.component('GlobalComp',{
    data(){
        return {
            text:'这是一个全局定义的组件',
    }},
    // template:'<p>这是一个全局定义的组件</p>',
    render: function(createElement){
        return createElement(
        'div',
        {},
        [createElement('p',{class:'lz'},this.text)],
    )},
    // render:h=>h(GlobalComp)
});
// Vue.component('GlobalComp',GlobalComp);


// renderError  errorCaptured
// template=>render   运行时编译（默认关闭）
// createElement => VNode 虚拟Dom
// JSX...


const app = new Vue({
    //el: '#app', //对象装载位置
    data(){
        return{
            test:'test'
        }
    },
    store,
    router,
    render: h => h(App),
});

app.$mount("#app");
// console.log('app',app);
// console.log(app.$data);

// render(createElement){
//     return createElement('div',
//         {
//
//         }
//     )
// }
//
//





