Vue       = require 'vue'
VueRouter = require 'vue-router'
Vuex      = require 'vuex'

routerMap = require './routers'

$ ->
    Vue.use VueRouter

    App = Vue.extend {}
    router = new VueRouter

    routerMap router
    router.start App, '#app'

