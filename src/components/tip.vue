<template>
    <div>
        <p style="font-size: 12px; ">{{tip}}</p>
        <button @click="emitEvent">子组件按钮</button>
    </div>

</template>

<script>
    export default {
        data(){
          return {
              tip:'这是一个Tip子组件'
          }
        },
        methods:{
            emitEvent(){
                this.$emit('tipEvent',this.tip);
            }
        },
        mounted(){
            console.log('tip组件mounted');
        },
        activated(){
            console.log('keep-alive 组件激活了');
        },
        deactivated(){
            console.log('keep-alive 组件停用了');
        }
    }
</script>

<style></style>
