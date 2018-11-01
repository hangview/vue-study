<template>
    <div>
        <p class="lz">这是一个child子组件</p>
        <span>name:{{name}}</span>
        <span class="ml">age:{{userAge}}</span>
        <span class="ml">like:{{like}}</span><br/>
        <slot name="header" :value="slotValue1" :res="slotValue2"> *****header****</slot>
        <slot></slot>
        <slot name="footer"> *****footer*****</slot>
        <deep-child></deep-child>
    </div>
</template>

<script>
    import DeepChild from '@/components/deepChild.vue';
    export default {
        components:{
            DeepChild
        },
        props:[
            'name',
            'user-age',      //属性大小写不敏感，驼峰和-的处理
            'like'
        ],
//        props:{             //对象格式的指定
//          name:String,
//          'user-age':[Number,String]
//          other:{
//              type:
//              default:function(){return {}}
//              required:
//              validator:
//          }
//        },
        data(){
            return {
                slotValue1:'slot value 1',   //slot-scope 作用域插槽
                slotValue2:'slot value 2'
            }
        },
        mounted(){
            setTimeout(()=> this.slotValue2 = '更新了slot value 2', 3000);
        }

    }
</script>