import Vuex from 'vuex';
import defaultState from './state/state';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import actions from './actions/actions';

console.log(process.env.NODE_ENV);

export default () => new Vuex.Store({
    strict: process.env.NODE_ENV === 'development' ,   //外部无法修改state，开发环境
    state: defaultState,
    mutations:mutations,  // 更新state
    actions:actions,      // 异步更新state
    getters:getters,      // computed
    modules: {            // 模块化
        a: {
            namespaced: true,
            state: {
                text: '模块A'
            },
            mutations: {
                updateText(state,text){      // a模块里的state
                    state.text = text;
                }
            },
            getters:{
                textPlus(state,getters,rootState){
                    return state.text + rootState;
                }
            }
        },
        b: {
            state: {
                text: '模块B'
            },
            mutations: {
                updateText(state,num){

                }
            }
        }
    }
})

