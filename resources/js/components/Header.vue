<template>
    <h1 class="p-4">Welcome To My Vue Project</h1>
    <div class="p-4">
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard">To Do</router-link> |
        <router-link to="/employee">Employee</router-link> |
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
a {}

h1 {
    background-color: cornflowerblue;
    color: white;
    text-align: center;
}

.active-link {
    color: #42b983;
}

.exact-active-link {
    color: #42b983;
    font-weight: bold;
}
</style>