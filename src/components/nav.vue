<template>
    <nav class="navbar navbar-default {{a}}" style="background: #949E94;margin:0">
        <div class="container-fluid" style="background: #f8f8f8;opacity: 0.8;">
            <ul class="nav navbar-nav" style="float:left;margin:0">
                <li v-on:click="menuClick" class="pull-left" v-bind:class="isActive ? 'active' : ''">
                    <a href="javascript:;">
                        <span class="glyphicon glyphicon-menu-hamburger"></span>
                    </a>
                </li>
                <li class="pull-left"><a href="javascript:;">Liang</a></li>
             </ul>
        </div>
    </nav>
</template>

<script lang="coffee">
    store = require '../vuex'
    timer = null
    module.exports = {
      computed:
        isActive: ->
          return store.state.menuShow
      methods:
        menuClick: ->
          clearTimeout timer
          menu = $('.liang-menu')
          menu.addClass 'stretching'
          timer = setTimeout ->
            console.log 111
            if not store.state.menuShow
              menu.removeClass 'stretching'
          , 700
          store.actions.menuClick()
          this.$dispatch 'menu-show'
    }
</script>

<style>
  #llliang {
    color: white;
  }
</style>

