<template>
    <div>
        <p>Vuex</p>
        <p>{{count}}</p>
        <p>{{fullName}}</p>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions,
        mapMutations }
        from 'vuex';
    export default {
        computed:{
            ...mapState({
                count:'count'
            }),
            ...mapGetters(['fullName']),
//            count(){
//                return this.$store.state.count;
//            },
//            fullName() {
//                return this.$store.getters.fullName;
//            }
        },
        mounted(){
            console.log(this.$store);
            let i =1;
//            this.$store.state.count = 100 ;   strict=true报错
            this._interval = setInterval(()=>{
                this.$store.commit(
                    'updateCount',  //mutations
                    i++);
            },1000);

            // action
//            this.$store.dispatch('updateCountAsync',{
//                num:2018,
//                time:2000
//            })
            this.updateCountAsync({
                num:2019,
                time:1000
            })


        },
        methods:{
            ...mapMutations(['updateCount']),
            ...mapActions(['updateCountAsync']),
        },
        beforeDestroy(){
            this.$store.commit('updateCount', 0);
            clearInterval(this._interval);
        }
    }
</script>