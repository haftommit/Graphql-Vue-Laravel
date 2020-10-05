import Vue from 'vue';
import VueRouter from "vue-router";
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

import  './bootstrap';
import PostList from "./screens/PostList";
import Post from "./screens/Post";

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    }
];

const apolloClient = new ApolloClient({
    uri: 'http://localhost:8001/graphql'
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
