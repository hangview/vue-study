import Vuex from 'vuex';
import defaultState from './state/state';
import mutations from './mutations/mutations';
import getters from './getters/getters';
import actions from './actions/actions';
import moduleA from './modules/a';
import moduleB from './modules/b';


export default () => {
    const store = new Vuex.Store({
        strict: process.env.NODE_ENV === 'development',   //外部无法修改state，开发环境
        state: defaultState,
        mutations: mutations,  // 更新state
        actions: actions,      // 异步更新state
        getters: getters,      // computed
        modules: {
            a: moduleA,
            b: moduleB
        },
        plugins:[                //插件
            (store) => { // 监听mutation，actions
                store.subscribe((mutation,state) => { console.log(mutation)});
                store.subscribeAction((action,state)=>{ console.log(action) });
            }
        ],
        // modules: {            // 模块化
        //     a: {
        //         namespaced: true,
        //         state: {
        //             text: '模块A'
        //         },
        //         mutations: {
        //             updateText(state, text){      // a模块里的state
        //                 state.text = text;
        //             }
        //         },
        //         getters: {
        //             textPlus(state, getters, rootState){  // 所有的getter方法、全局state
        //                 return state.text + rootState.count;
        //             }
        //         },
        //         actions: {
        //             add({state, commit, rootState}){   //context
        //                 // commit('updateText', rootState.b.text);  //直接找本模块的mutation
        //                 commit('b/updateText',rootState.b.text,{root:true});  //全局或跨模块找
        //             }
        //         }
        //     },
        //     b: {
        //         state: {
        //             text: '模块B'
        //         },
        //         mutations: {
        //             updateText(state, text){
        //                 state.text = text + '_from模块B';
        //             }
        //         }
        //     } // 模块内部可以继续嵌套模块
        // }
    })

    if (module.hot) {
        module.hot.accept([
            './state/state',
            './mutations/mutations',
            './actions/actions',
            './getters/getters',
            './modules/a',
            './modules/b',
        ], () => {
            const newState = require('./state/state').default;
            const newMutations = require('./mutations/mutations').default;
            const newActions = require('./actions/actions').default;
            const newGetters = require('./getters/getters').default;
            const newModuleA = require('./modules/a').default;
            const newModuleB = require('./modules/b').default;

            store.hotUpdate({
                state: newState,
                mutations: newMutations,
                actions: newActions,
                getters: newGetters,
                modules: {
                    a: newModuleA,
                    b: newModuleB,
                }
            });
        });
    }
    return store;
}


