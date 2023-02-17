import Vue from "vue";
import Vuex from "vuex";

import Auth from "../Warehouse/Auth";
import axios from "axios";

//import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({

    modules:{
        Auth
    },
    state: {
        /*
        logged: false,
        attributes: {
            first_name: '',
            last_name: '',
            password: '',
            year_of_study: 5,
            money: 0,
            exp: 0,
            abilities:{
                strength :5,
                attack :5,
                defense :5,
                hp : 5
            },
            inventory:[],
            helm_equip:null,
            weapon_equip:null,
            armor_equip:null,



        },
        */
        examples:[],

        items:[{
            title:"",
            type:"",
            improvement_of_ability:"",
            value_of_improvement: 0,
            img_address:"",
            price:0,
            sell_price:0,
            //prodejni_cena: this.cena / 2
        }],
        word_tasks:[{
            //id:0,
            text_of_task:"",
            for_year:0,
            result: 0,
            student_result:0,
            reward:0,
        }],
    },
    mutations: {

        async addTask(state, task){

            try{
                await axios.post("api/tasks", task);
            }catch (err){
                console.log(err);
            }
            state.word_tasks.push(task.data);
        },


    },


});
