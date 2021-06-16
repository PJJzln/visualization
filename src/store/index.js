import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import mutations from './multation'
 
Vue.use(Vuex);
const store =new Vuex.Store({
    state,
    getters,
    mutations
})
export default store;