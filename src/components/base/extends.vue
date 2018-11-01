<script>
    import Tip from './tip.vue';
    export default {
        extends: Tip,
        data() {
            return {
                tip:'这是继承自tip组件的extends组件'
            }
        },
        mounted(){
            console.log('extends组件mounted');
            console.log(this.$parent);  // 可以获取父组件实例并进行更改，尽量不要修改，更推荐用 props 和 events 实现父子组件通信
        }
    }
</script>