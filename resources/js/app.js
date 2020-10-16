import Vue from 'vue';
import VueRouter from "vue-router";
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import moment from 'moment';

import  './bootstrap';
import PostList from "./screens/PostList";
import TopicList from "./screens/TopicList";
import AuthorPostList from "./screens/AuthorPostList";
import Post from "./screens/Post";

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

Vue.filter('timeAgo', value => moment(value).fromNow());
Vue.filter('longDate', value => moment(value).format("MMMM Do YYYY"));

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
    },
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicList
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: AuthorPostList
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
