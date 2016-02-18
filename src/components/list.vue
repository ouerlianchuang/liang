<template>
    <div class="liang-menu col-sm-3 col-md-2 col-xs-12 " style="background: #151715;" v-show="menuShow" transition="menu-show">
        <ul class="list-group">
            <li class="list-group-item" style="border-bottom: 2px solid #ff865c;padding:30px 0 25px 0;height:145px">
                <div style="height: 90px;"><img height="90" width="90" src="http://uc.douyutv.com/avatar.php?uid=4217577&size=big" alt="233" class="center-block img-responsive img-circle"></div>
                <span style="font-size: 10px;color:#ccc;opacity: 0.2;margin-right:15px;display: inline-block;" class="pull-right">title png</span>
            </li>
            <li class="list-group-item"
            v-for="(index,list) in lists"
            v-bind:class="[list.active ? 'active' : '']"
            v-on:click="setListActive(index)">
                {{ list.content }}
            </li>
        </ul>
    </div>
</template>

<script lang="coffee">
    store = require '../vuex'
    module.exports = {
        data: ->
            return {
                stretch:true,
                lists: [
                    {
                        active : true,
                        content: 'oneoneoneone'
                    },
                    {
                        active : false,
                        content: 'oneoneoneone'
                    },
                    {
                        active : false,
                        content: 'oneoneoneone'
                    },
                    {
                        active : false,
                        content: 'oneoneoneone'
                    },
                    {
                        active : false,
                        content: 'oneoneoneone'
                    },
                    {
                        active : false,
                        content: 'oneoneoneone'
                    },
                ]
            }
        methods: {
            setListActive: (n)->
                for list in this.lists
                    list.active = false
                this.lists[n].active = true
        }
        computed:
            menuShow: ->
                return store.state.menuShow
    }
</script>
<style lang="less">
.menu-show-transition {
    transition-property: width;
    transition-duration: 0.7s;
}
.menu-show-enter, .menu-show-leave {
  width: 0;
}
@media (max-width: 767px) {
    .menu-show-transition {
        transition-property: height;
    }
    #app .liang-menu.menu-show-enter, #app .liang-menu.menu-show-leave {
        width: 100%;
        height: 0;
    }
}
</style>
