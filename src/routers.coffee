module.exports = (router) ->
    console.log 1
    router.map
        '/':
            'name': 'index'
            'component':
                'template': '<h1>Hello World</h1>'

