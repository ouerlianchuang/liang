Vue       = require 'vue'
VueRouter = require 'vue-router'

routerMap = require './routers'

require '../public/less/general.less'

$ ->
    Vue.use VueRouter

    App = Vue.extend(require './components/app.vue')

    router = new VueRouter

    routerMap router

    router.start App, '#app'
