<template>
    <div>
        <p >组件相关</p>
        <div class="card">
            <p>全局组件：</p>
            <global-comp></global-comp>
        </div>

        <div class="card">
            <p>父组件props传递子组件属性:</p>
            <input type="text" v-model="like" v-focus placeholder="父组件输入框" />
            <child name="peter" user-age=18 :like="like">
                <p class="lz"> 父组件通过slot插进的内容 </p>
                <p slot="header" class="lz" slot-scope="props"> slot插入头部的内容 slot-scope（子组件属性更新至父组件）:{{props.res}} </p>
            </child>
         </div>

        <div class="card">
            <p> 动态组件</p>
            <button @click="changeComp">切换动态组件</button>
            <keep-alive>
                <component :is="currentComponent" name="peter" user-age=18 :like="like"></component>
            </keep-alive>
        </div>

        <div class="card">
            <p ref="p">extend:</p>
            <extends-component ref="comp"></extends-component>
            <p>ref绑定：（console）</p>
        </div>

        <div class="card">
            <p>跨层级关系provide inject:</p>
            <deep-child></deep-child>
        </div>

        <div class="card">
            <p>vue-router scrollBehavior:</p>
            <router-link to="/">回到过去</router-link>
        </div>
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
        },
        beforeCreated(){
        }

    }
</script>
