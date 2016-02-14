Vue  = require 'vue'

Vuex = require('vuex').default

Vue.use(Vuex)

state =
  menuShow: true

mutations =
  MENUCLICK:(state)->
    state.menuShow = !state.menuShow

actions=
  menuClick: ({ dispatch, state }) ->
    dispatch 'MENUCLICK'

module.exports = new Vuex.Store {
    state,
    mutations,
    actions
}

