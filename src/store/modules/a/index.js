export default {
    namespaced: true,    // 命名空间
    state: {
        text: '模块A'
    },
    mutations: {
        updateText(state, text){      // a模块里的state
            state.text = text;
        }
    },
    getters: {
        textPlus(state, getters, rootState){  // 所有的getter方法、全局state
            return state.text + rootState.count + 1;
        }
    },
    actions: {
        add({state, commit, rootState}){   //context
            commit('updateText', rootState.b.text);  //直接找本模块的mutation
            // commit('b/updateText',rootState.b.text,{root:true});  //全局或跨模块找
        }
    }
}