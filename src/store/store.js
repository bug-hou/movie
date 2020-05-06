import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const config = new Vuex.Store({
    state:{
        current:{},
        empty : false
    },
    mutations:{
        add(state,obj){
            state.empty = true;
           state.current = obj;
        },
        delete(state){
            state.current = {};
        }
    }
}) 
export default config;