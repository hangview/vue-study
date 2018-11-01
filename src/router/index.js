import Router from 'vue-router'
import routes from './routes';

export default () =>
    new Router({
        routes: routes,
        mode: 'history',  //默认hash
        // base:'hh',
        linkActiveClass: 'active', //link 样式类
        scrollBehavior(to, from, savedPosition){
            // console.log(savedPosition);
            if (savedPosition) {
                return savedPosition;
            } else {
                return {x: 0, y: 100};
            }
        },
        fallback: true,   //对不支持history.pushState，会回退hash模式，默认true
        //对查询字符串的解析/反解析，提供默认处理，可自定义覆盖
        // parseQuery(query){
        //
        // },
        // stringifyQuery(obj){
        //
        // }
    })


