<template>
    <div>
        <p>事件绑定和表单</p>
        <div class="card">
            <input @keydown.enter="onKeyDown" placeholder="回车修饰符" type="text">
        </div>

        <div class="card">
            <p>父组件监听子组件事件：</p>
            <Tip @tipEvent="onTipEvent"></Tip>
        </div>

        <div class="card">
            <p>表单：</p>
            <input type="text" v-model="value1"  placeholder="v-modal,数据双向绑定"  />
            value1:{{value1}}<br/>

            <input type="text" v-model.lazy="value2"   placeholder="v-modal.lazy"/>
            {{value2}}<br/>

            <input  type="checkbox" v-model="checkBox" value="1" />
            <input  type="checkbox" v-model="checkBox" value="2" />
            <input  type="checkbox" v-model="checkBox" value="3" />
            {{checkBox}}<br/>

            <input  type="radio" v-model="radio" value="1" />
            <input  type="radio" v-model="radio" value="2" />
            <input  type="radio" v-model="radio" value="3" />
            {{radio}}<br/>

            <select v-model="selection">
                <option v-for="item in selectOption" :value="item.value">{{item.text}}</option>
            </select>
            {{selection}}
        </div>

        <div class="card">
            <p>计算属性和数据监听：</p>
            <p class="lz">value1去除数字(computed)：{{value1NoNum}}</p>
            <p class="lz">value1监听变化（watch）{{value1Change}}</p>
            <p class="lz">value1去除数字(methods)：{{getValue()}}</p>
            <br/>
            <p class="lz">time(computed):{{time}}</p>
            <p class="lz">time(method):{{getTime()}}</p>
        </div>
        <div>{{obj.a}}</div>

    </div>
</template>

<script>
    import Tip from '@/components/tip.vue';
    export default {
        components:{
            Tip
        },
        data(){
            return {
                value1:'',
                value2:'',
                checkBox:[],
                radio: '',// radio会返回具体的值
                selection:'cat',
                obj:{
                },
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
              console.log('computed触发');
              return this.value1.replace(/\d/g,'');
          },
          time() {
              return +new Date();
          },
        },
        // 监听属性变化
        // 'obj.a' || deep:true  默认false
        //handler , immediate:true  绑定时即执行,
        watch: {
            value1:function(val,oldVal){
                console.log('watch 触发');
                let texts = `old value为${oldVal}，当前value为${val}`;
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
            },
            getValue(){
                //使用方法来监听数据变化每次data更新会触发方法调用
                console.log('methods触发')
                return this.value1.replace(/\d/g,'');
            },
            getTime(){
                return +new Date();
            }
        },
        mounted(){
            setTimeout(function(){
                this.obj.a = 2;
                }.bind(this),5000);
        }
    }
</script>

<style>

</style>

