<template>
    <div>
        <nav-list v-bind:a="a"></nav-list>
        <div class="container-fluid overflow-hidden" style="max-width:1670px; margin-left:0;">
            <div class="row liang">
                <list></list>
                <router-view ></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="coffee">
    module.exports = {
        components:
            'nav-list': require './nav.vue'
            'list': require './list.vue'
        events:
            'menu-show': ->
                console.log 'app'
                return true
    }
</script>
