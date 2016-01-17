module.exports = (router) ->
    router.map
        '/':
            'name': 'index'
            'component': require './components/app.vue'
