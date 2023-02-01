import Vue from "vue";
import Vuex from "vuex";


//import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        enemies_from_3:[
            {
                "name":"První loupežník",
                "strength": randomize_enemy_abilities(10),
                "attack": randomize_enemy_abilities(10),
                "defense": randomize_enemy_abilities(10),
                "hp": randomize_enemy_abilities(6),
                "money_reward":20,
                "exp_reward":200,
                "link":'https://s9.gifyu.com/images/loupeznik.md.png',
            },
            {
                "name":"Druhý loupežník",
                "strength": randomize_enemy_abilities(15),
                "attack": randomize_enemy_abilities(15),
                "defense": randomize_enemy_abilities(15),
                "hp": randomize_enemy_abilities(10),
                "money_reward":50,
                "exp_reward":200,
                "link":'https://s9.gifyu.com/images/loupeznik_2.md.png'
            },
            {
                "name":"Třetí loupežník",
                "strength": randomize_enemy_abilities(20),
                "attack": randomize_enemy_abilities(20),
                "defense": randomize_enemy_abilities(20),
                "hp": randomize_enemy_abilities(13),
                "money_reward":60,
                "exp_reward":200,
                "link":'https://s9.gifyu.com/images/loupeznik_3.md.png'
            },
            {
                "name":"Čtvrtý loupežník",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":80,
                "exp_reward":200,
                "link":'https://s9.gifyu.com/images/loupeznik_4.md.png'
            },

        ],

        enemies_from_4:[],


        enemies_from_5:[],

    },



});

function randomize_enemy_abilities(number){
    let min = 0.8 * number;
    let max = 1.2 * number;

    return Math.round(Math.random() * (max - min) + min);
}
