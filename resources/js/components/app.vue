<template>
    <Header />
    <router-view />
</template>

<script>
import Header from './Header.vue'

export default {
    components: {
        Header
    },

}
</script>