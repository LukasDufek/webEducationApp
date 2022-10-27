import Vue from "vue";
import Vuex from "vuex";

//import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        atributy: {
            jmeno: '',
            prijmeni: '',
            heslo: '',
            rocnik: 1,
            penize: 0,
            zkusenosti: 0,

        },
        ulohy:[{
            //id:0,
            zadani:"",
            proRocnik:0,
            vysledek: 0,
            vysledekZaka:0
        }],
    },
    mutations: {
        zvysPocet(state, pocet){
            state.atributy.penize += pocet;
        },
        pridejUlohu(state, uloha){
            state.ulohy.push(uloha);
        }

    },


});
