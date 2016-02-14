<template>
    <div class="liang-contnet col-xs-12" v-bind:class="menuShow ? 'col-sm-9 menu-show' : 'menu-hide col-sm-11'">
        <h1>Content</h1>
    </div>
</template>

<script lang="coffee">
    store = require '../vuex'
    module.exports = {
        computed:
            menuShow: ->
                return store.state.menuShow
    }
</script>
