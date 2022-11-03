import Vue from "vue";
import Vuex from "vuex";
import TaskService from "../../dataServices/TaskService";

//import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        attributes: {
            first_name: '',
            last_name: '',
            password: '',
            year_of_study: 1,
            money: 0,
            exp: 0,
            abilities:{
                strength :0,
                attack :0,
                defense :0,
                hp : 0
            },
            inventory:[],
            helm_equip:null,
            weapon_equip:null,
            armor_equip:null,


        },

        items:[{
            title:"",
            type:"",
            improvement_of_ability:"",
            value_of_improvement: 0,
            img_address:"",
            price:0,
            back_price:0,
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
        addMoney(state, count){
            state.attributes.money += count;
        },
        async addTask(state, task){
            state.word_tasks.push(task);
            try{
                await TaskService.insertTask(task);
            }catch (err){
                console.log(err);
            }
        }

    },


});
