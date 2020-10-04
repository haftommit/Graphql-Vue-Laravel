import Vue from 'vue';
import VueRouter from "vue-router";

import  './bootstrap';
import PostList from "./components/PostList";
import Post from "./components/Post";

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'name',
        component: Post
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
});
