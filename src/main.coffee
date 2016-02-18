Vue       = require 'vue'
VueRouter = require 'vue-router'

routerMap = require './routers'

require '../public/less/general.less'

$ ->
    Vue.use VueRouter

    Vue.transition 'menu-show', {
        beforeEnter: (e) ->
            addTransitionClass(e)
        afterEnter: (e) ->
            removeTransitionClass(e)
        afterLeave: (e) ->
            removeTransitionClass(e)
        beforeLeave: (e) ->
            addTransitionClass(e)
    }

    App = Vue.extend(require './components/app.vue')

    router = new VueRouter

    routerMap router

    router.start App, '#app'

    addTransitionClass = (dom)->
        $(dom).addClass 'menu-show-transition'
            .next().addClass 'menu-show-transition'
    removeTransitionClass = (dom)->
        $(dom).removeClass 'menu-show-transition'
            .next().removeClass 'menu-show-transition'
