<template>
    <div>
        <p></p>
        <p class="red" v-bind:class="classB"> 最后在北方 </p>
        <p :class="[classA,{italic:isItalic}]"> 爱上了一场雪 </p>
        <p :class="classC"> 在南方 </p>
        <p :style="linkCss">爱上了一张雪白的面庞</p>
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
                    color:'green',
                    fontSize:'20px'
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