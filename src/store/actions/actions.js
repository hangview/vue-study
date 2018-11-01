// 异步修改数据

export default {
    updateCountAsync( store, data ){
        setTimeout(()=>{
            store.commit('updateCount',data.num)
        },data.time);
    }
}