import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import VueAxios from "vue-axios";


Vue.use(Vuex,VueAxios, axios)

export default new Vuex.Store({
    state: {
        usuarios: [],
    },
    actions: {
        async obtenerUsuarios({commit}){
            try {
                let {data:usuarios} = await axios.get('https://628e5e53a339dfef87ad1064.mockapi.io/Usuarios')
                commit('getUsuarios', usuarios)
              } catch (error) {
                console.log(error.message)
              }
        },
        async enviarNuevoUsuario({commit}, nuevoUsuario){
            try {
                await axios.post('https://628e5e53a339dfef87ad1064.mockapi.io/Usuarios', nuevoUsuario, {'content-type' : 'application/json'})
                commit('postUsuario', nuevoUsuario)
            } catch (error) {
                console.log(error.message)
              }
        }
    },
    mutations: {
        getUsuarios(state, users){
            state.usuarios = users
        } 
    }
})