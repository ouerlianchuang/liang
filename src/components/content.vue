<template>
    <div class="liang-contnet col-xs-12" style="background:#ccc" v-bind:class="menuShow ? 'col-sm-9 col-md-10' : 'col-sm-12'">
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
