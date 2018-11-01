<template>
    <div>
        <p>事件绑定和表单</p>
        <input @keydown.enter="onKeyDown" placeholder="回车修饰符" type="text">
        <p>父组件监听子组件事件：</p>
        <Tip @tipEvent="onTipEvent"></Tip>
        <p>表单：</p>
        <input type="text" v-model="value1" placeholder="v-modal,数据双向绑定"  />
        value1:{{value1}}<br/>

        <input type="text" v-model.lazy="value2" placeholder="v-modal.lazy"/>
        {{value2}}<br />

        <input  type="checkbox" v-model="checkBox" value="1" />
        <input  type="checkbox" v-model="checkBox" value="2" />
        <input  type="checkbox" v-model="checkBox" value="3" />
        {{checkBox}}

        <select v-model="selection">
            <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
        </select>
        {{selection}}

        <p>计算属性和数据监听：</p>
        value1去除数字：{{value1NoNum}}
        <p v-if="value1Change" >{{value1Change}}</p>

    </div>
</template>

<script>
    import Tip from '../base/tip.vue';
    export default {
        components:{
            Tip
        },
        data(){
            return {
                value1:'',
                value2:'',
                checkBox:[],   // radio会返回具体的值
                selection:'cat',
                selectOption:[   //注意value要动态绑定
                    {
                        text:'猫',
                        value:'cat'
                    },
                    {
                        text:'狗',
                        value:'dog'

                    }
                ],
                value1Change:'',
            }
        },
        // methods 方法每次调用会触发更新，computed依赖缓存数据是否改动
        computed: {
          value1NoNum(){
              return this.value1.replace(/\d/g,'');
          }
        },
        // 监听属性变化
        watch: {
            value1:function(val,oldVal){
                let texts = `value1属性监听到变化，old value为${oldVal}，当前value为${val}`;
                this.value1Change = texts;
            }
        },
        methods:{
            //修饰符 .enter 输入enter时才执行
            onKeyDown(){
                alert('回车');
            },
            onTipEvent(params){
                console.log(params);
                alert(params);
            }
        }
    }
</script>

<style>

</style>

