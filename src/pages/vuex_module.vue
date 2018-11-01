<template>
    <div>
        <p>Vuex 模块化</p>
        <p class="lz">自己的ownText:{{ownText}}</p>
        <p class="lz">store的text:{{textA}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed:{
            ownText(){

            },
            ...mapState({
                textA:state => state.a.text,
            }),
        },
        methods:{

        }
    }
</script>

<style>

</style>