<template>
    <Header />
    <router-view />
    <div class="container w-100 m-auto text-center mt-3">
        <h1 class="text-danger">Laravel vue todo list</h1>
        <add-item-form v-on:reloadlist="getItems()" />
        <list-view
            :items="items"
            v-on:reloadlist="getItems()"
            class="text-center"
        />
    </div>
</template>

<script>
import addItemForm from "./addItemForm.vue";
import listView from "./listView.vue";
import Header from './Header.vue'
import axios from 'axios';
const api = axios.create({
  baseURL: '/', // Set the baseURL to the root URL of your server or API
});
export default {
    components: {
        Header,
        addItemForm,
        listView
    },

    data: function() {
        return {
            items: []
        };
    },
    methods: {
        getItems() {
            axios
                .get("/api/items")
                .then(res => {
                    this.items = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    created() {
        this.getItems();
    }
};
</script>

<style scoped></style>