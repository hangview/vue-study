<template>
    <div>
        <ul>
            <li><router-link  :to="{name: 'classes'}"> 样式渲染 </router-link></li>
            <li><router-link  to="/arrays"> 数据绑定 </router-link></li>
            <li><router-link  to="/lifecycle"> 生命周期 </router-link></li>
            <li><router-link  to="/events"> 事件绑定和表单 </router-link></li>
            <li><router-link  to="/components"> 组件相关 </router-link></li>
            <li><router-link  to="/animations"> 过渡和动画 </router-link></li>
            <li><router-link  to="/directives"> 自定义指令 </router-link></li>

            <li><router-link  to="/router"> vue-router </router-link></li>
            <li><router-link  to="/vuex"> vuex </router-link></li>
            <li><router-link  to="/vuex-module"> vuex module </router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
    export  default {
        components:{
        }
    };
</script>
<style scoped>
    .marginL {
        margin-right: 15px;
        display: inline;
    }
</style>