import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import auth from './modules/auth'
import category from './modules/category'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'inchiesta',
  storage: localStorage
})


export default new Vuex.Store({
  modules: {
    auth,
    category
  },
  plugins: [vuexPersist.plugin]
})