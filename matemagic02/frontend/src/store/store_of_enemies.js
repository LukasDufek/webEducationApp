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
                "money_reward":15,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik.png',
            },
            {
                "name":"Druhý loupežník",
                "strength": randomize_enemy_abilities(15),
                "attack": randomize_enemy_abilities(15),
                "defense": randomize_enemy_abilities(15),
                "hp": randomize_enemy_abilities(10),
                "money_reward":30,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_2.png'
            },
            {
                "name":"Třetí loupežník",
                "strength": randomize_enemy_abilities(20),
                "attack": randomize_enemy_abilities(20),
                "defense": randomize_enemy_abilities(20),
                "hp": randomize_enemy_abilities(13),
                "money_reward":40,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_3.png'
            },
            {
                "name":"Čtvrtý loupežník",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_4.png'
            },

            {
                "name":"Král loupežníků",
                "strength": randomize_enemy_abilities(30),
                "attack": randomize_enemy_abilities(30),
                "defense": randomize_enemy_abilities(30),
                "hp": randomize_enemy_abilities(25),
                "money_reward":75,
                "exp_reward":400,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_4.png'
            }

        ],

        enemies_from_4:[

            {
                "name":"Nepřátelský rytíř",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/rytir.png'
            },

            {
                "name":"Nepřátelský lučišník",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/lucisnik.png'
            },

            {
                "name":"Nepřátelský generál",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/velitel.png'
            },


            {
                "name":"Nepřátelský král",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/kral.png'
            },

            {
                "name":"Tříhlavý drak",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/drak.png'
            },

        ],



        enemies_from_5:[],

    },



});

function randomize_enemy_abilities(number){
    let min = 0.8 * number;
    let max = 1.2 * number;

    return Math.round(Math.random() * (max - min) + min);
}
