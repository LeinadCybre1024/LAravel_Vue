import {createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue"
import dashboard from "../components/dashboard.vue";
import employee from "../components/Employee.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: dashboard,
    },
    {
        path: "/employee",
        name: "employee",
        component: employee,
    },
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
});

export default router;