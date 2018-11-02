<template>
    <div>
        <p>生命周期</p>
        <p><input type="text"  v-model="vae" placeholder="一个输入框" ></p>
        <p>{{vae}}</p>
        <img src="https://cn.vuejs.org/images/lifecycle.png"  width="500px" alt="vue生命周期">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text: 0,
                vae: '',
            }
        },
        beforeCreate () {       // 此时无法获取data、methods
            console.log(this.$el, 'beforeCreate :this.$el')
            console.log(this.$data, 'beforeCreate :this.$data')
        },
        created () {     // 可以调用methods、data； 发送请求获取数据
            console.log(this.$el, 'created :this.$el')
            console.log(this.$data, 'created: this.$data')
        },
        beforeMount () {
            console.log(this.$el, 'beforeMount :this.$el')
            console.log(this.$data, 'beforeMount :this.$data')
        },
        mounted () {      //vue实例挂载到页面中，可操作dom,请求ajax
            console.log(this.$el, 'mounted :this.$el')
            console.log(this.$data, 'mounted: this.$data')
        },
        beforeUpdate () {   //data更新，还没有开始渲染，在此处再更新data不会重新再触发新的渲染
            console.log(this.$data, 'beforeUpdate')
        },
        updated () {
            console.log(this, 'updated')
        },
        activated () {   // <keep-alive> 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。  去components动态组件处查看，加到了Tip组件
            console.log(this, 'activated')
        },
        deactivated () {   //
            console.log(this, 'deactivated')
        },
        beforeDestroy () {
            console.log(this, 'beforeDestroy')
        },
        destroyed () {
            console.log(this, 'destroyed')
        },
    }
</script>