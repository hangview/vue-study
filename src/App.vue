<template>
    <div>
        <header><router-link to="/">VUE-Learning</router-link></header>
        <router-view></router-view>
    </div>
</template>

<script>
import Tip from '@/components/tip';
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

    .card {
        width: 95%;
        height: 100%;
        border: 1px solid #e9e5e5;
        padding: 10px;
        box-shadow: 0 2px 8px #f0f1f2;
        margin-bottom:20px;
    }
</style>
