<template>
    <div>
        <p >组件相关</p>
        <p>全局组件：</p>
        <global-comp></global-comp>
        <p>父组件props传递子组件属性:</p>
        <input type="text" v-model="like" v-focus placeholder="父组件输入框" />
        <child name="peter" user-age=18 :like="like">
            <p class="lz"> slot插进的内容 </p>
            <p slot="header" class="lz" slot-scope="props"> slot插入头部的内容 slot-scope:{{props.res}} </p>
        </child>

        <p> 动态组件</p>
        <button @click="changeComp">切换动态组件</button>
        <keep-alive>
            <component :is="currentComponent" name="peter" user-age=18 :like="like"></component>
        </keep-alive>


        <p ref="p">extend:</p>
        <extends-component ref="comp"></extends-component>

        <p>ref绑定：（console）</p>

        <p>跨层级关系provide inject:</p>
        <deep-child></deep-child>

        <p>vue-router scrollBehavior:</p>
        <router-link to="/">回到过去</router-link>
    </div>
</template>
<script>
    import child from '@/components/child.vue';
    import tip from '@/components/tip.vue';
    import ExtendsComponent  from '@/components/extends.vue';
    import DeepChild from '@/components/deepChild.vue';
    export default {
        components:{
            child,
            tip,
            ExtendsComponent,
            DeepChild
        },
        provide(){
            return {
                grandFather:this,
                some:'vue niu beer'
            }
        },
        data(){
            return {
                like:'',
                currentComponent:'child'
            }
        },
        methods:{
            changeComp(){
                const current = this.currentComponent ==='tip'?'child':'tip';
                this.currentComponent = current;
            }
        },
        mounted(){
            console.log(this.$refs.comp,this.$refs.p);
        }
    }
</script>
