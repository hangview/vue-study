<template>
    <div>
        <p>过渡和动画</p>
        <button @click="show = !show">切换显示</button>
        <p class="lz" v-show="show">一段文字</p>
        <transition name="trz">
            <p class="lz" v-show="show">另一段文字</p>
        </transition>
        <transition name="third">
            <p class="lz" v-show="show">第三段文字</p>
        </transition>

        <transition
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
        >
            <p class="lz" v-show="show">js实现</p>
        </transition>

    </div>
</template>

<script>
    // v-show,v-if,动态组件,组件根节点都可以用transition
    //mode: in-out , out-in
    // 相同多元素需要指定key,来让vue进行区分
    export default {
        beforeRouteEnter(to,from,next){
            next();
        },
//        beforeRouteUpdate(){},  //路由参数变化  watch钩子
//        beforeRouteLeave(){},
        data(){
            return{
                show:true
            }
        },
        methods:{
            beforeEnter(el){

            },
            enter(el,done){

            },
            leave(el,done){

            }
        }
    }
</script>

<style>
    .trz-enter-active, .trz-leave-active {
        transition: opacity .5s;
    }
    .trz-enter, .trz-leave-to /* .trz-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .third-enter-active, .third-leave-active {
        transition: all .5s ease-out;
    }

    .third-enter {
        transform: translateY(-500px);
        opacity: 0;
    }
    .third-leave-active {
        transform: translateY(-500px);
        opacity: 0;
    }
</style>