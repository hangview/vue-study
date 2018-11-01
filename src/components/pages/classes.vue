<template>
    <div>
        <p></p>
        <p class="red" v-bind:class="classB"> 一段文字 </p>
        <p :class="[classA,{italic:isItalic}]"> 一段文字 </p>
        <p :class="classC"> 一段文字 </p>
        <p :style="linkCss">一段文字</p>
    </div>
</template>

<script>
    export default {
        props:['id'],
        data(){
            return {
                classA:'red',
                classB:'weight',
                classC:'italic',
                isItalic:true,
                linkCss:{
                    color:'green'
                }
            }
        },
        mounted(){
            console.log(this.id);
        }
    }
</script>

<style scoped>
    .red {
        color:red;
    }

    .weight {
        font-weight: bolder;
    }
    .italic {
        font-style:italic;
    }


</style>