<template>
    <div>
        <p >自定义指令</p>
        <p class="lz" v-color="'green'">v-color</p>
        <p v-size="'50px'">全局指令</p>
    </div>
</template>

<script>
    export default {
        // 五个钩子函数，简写
        directives:{
            color:(el,binding) =>{
                el.style.color = binding.value;
            }
        }
    }
</script>