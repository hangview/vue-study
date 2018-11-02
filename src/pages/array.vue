<template>
    <div>
        <p>循环绑定</p>
        <button v-on:click="addItem">add</button>
        <button class="ml" @click="changeItem">change</button>
        <p>数组：</p>
        <ul>
            <li  v-for="(item,index) in list" :key="item+index">{{index}}:{{item}}</li>
        </ul>
        <p>对象：</p>
        <ul>
            <li v-for="(item,key,index) in obj" :key="key">key:{{key}},value:{{item}},index:{{index}}</li>
        </ul>

        <p>v-once:</p>
        <ul>
            <li  v-once v-for="(item,index) in list" :key="item+index">{{index}}:{{item}}</li>
        </ul>
        <p>v-pre:</p>
        <ul>
            <li  v-pre v-for="(item,index) in list" :key="item+index">{{index}}:{{item}}</li>
        </ul>

        <p>v-text,v-html</p>
    </div>


</template>
<script>
    import Vue from 'vue';
    export default {
        data(){
            return {
                list:[
                    '北京','上海','广州','杭州'
                ],
                obj:{
                    huashan:'华山',
                    taishan:'泰山',
                    lushan:'庐山',
                    songshan:'嵩山'
                }
            }
        },
        methods: {
            addItem(){
                this.list.push('福建');
            },
            changeItem(){
                this.list[1] = '山东';   //数组直接赋值某项、或者改变长度，不会触发渲染
//                  this.$forceUpdate();
                this.obj.haha = '人猿泰山';
                Vue.set(this.list,1,'山东');
                Vue.set(this.obj,'haha','人猿泰山');
            }
        }
    }
</script>