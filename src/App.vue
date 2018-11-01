<template>
    <div id="app">
        <header><router-link to="/">VUE-Learning</router-link></header>
        <router-view></router-view>
    </div>
</template>

<script>
import Tip from './components/base/tip';
export default {
    name: 'app',
    data() {
        return {
            word:'hello'
        }
    },
    components: {
        Tip
    }
}
</script>

<style>
    .ml {
        margin-left: 15px;
    }
    .mr {
        margin-right: 10px;
    }

    .lz {
        font-size: 12px;
    }
</style>
