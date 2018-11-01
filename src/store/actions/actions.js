// 异步修改数据

export default {
    updateCountAsync( { commit }, data ){
        setTimeout(()=>{
            commit('updateCount',data.num)
        },data.time);
    }
}