<template>
    <div>
        <p class="lz"> 1、路由嵌套 </p>
        <p class="lz"> 2、多个router-view</p>
        <p class="lz"> 3、导航守卫（三种方式）</p>

        <router-link class="mr" to="/router/first">first </router-link>
        <router-link class="mr" to="/router/second">second </router-link>
        <router-link class="mr" to="/router/huhu">:id </router-link>
        <transition name="fade">
            <router-view></router-view>
        </transition>

        <p  class="lz">谁在用琵琶弹奏一曲东风破</p>
        <p class="lz">岁月在墙上剥落看见小时候</p>
        <router-view name="jay"></router-view>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log(this.$route);
        }
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>