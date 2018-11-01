export default {
    state: {
        text: '模块B'
    },
    mutations: {
        updateText(state, text){
            state.text = text + '_from模块B';
        }
    }
} // 模块内部可以继续嵌套模块