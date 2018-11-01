<template>
    <div>
        <p>从父祖辈那得到的消息：{{some}}</p>
    </div>
</template>
<script>
    export default {
        inject:['grandFather','some'],
        mounted(){
            console.log('我的grandFather',this.grandFather);
        }
    }
</script>