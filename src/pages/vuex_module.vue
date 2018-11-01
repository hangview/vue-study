<template>
    <div>
        <p>Vuex 模块化</p>
        <p class="lz">自己的ownText:{{ownText}}</p>
        <p class="lz">模块A的text:{{textA}}</p>
        <p class="lz">模块B的text:{{textB}}</p>
        <button @click="updateTextA('haha')">更新模块A的text</button>
        <button class="ml" @click="updateText('B没有加命名空间，mutations直接绑定全局store')">更新模块B的text</button>
        <p class="lz">getters: {{textPlus}}</p>
        <button @click="addAsync">调用模块A的action</button>
        <button class="ml" @click="updateCount(10000)">更新全局state的count</button>
        <p> Vuex 热替换</p>
        <p> Vuex 插件</p>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';
    export default {
        computed:{
            ownText(){
                return this.textA + '-> 自己的'
            },
            ...mapState({
                textA:state => state.a.text,
                textB:state => state.b.text,
            }),
            ...mapGetters({
                textPlus:'a/textPlus'
            })
        },
        methods:{
            ...mapMutations({
                updateTextA:'a/updateText',
                updateText:'updateText',
                updateCount:'updateCount'

            }),

            ...mapActions({
                addAsync: 'a/add',
            })
        },
    }
</script>

<style>

</style>