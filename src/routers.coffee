module.exports = (router) ->
    router.map
        '/':
            'name': 'index'
            'component': require './components/content.vue'
