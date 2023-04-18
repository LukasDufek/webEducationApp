import Vue from "vue";
import Vuex from "vuex";


//import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        enemies_from_3:[
            {
                "name":"První loupežník",
                "strength": randomize_enemy_abilities(5),
                "attack": randomize_enemy_abilities(6),
                "defense": randomize_enemy_abilities(6),
                "hp": randomize_enemy_abilities(4),
                "year":3,
                "money_reward":15,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik.png',
            },
            {
                "name":"Druhý loupežník",
                "strength": randomize_enemy_abilities(6),
                "attack": randomize_enemy_abilities(8),
                "defense": randomize_enemy_abilities(8),
                "hp": randomize_enemy_abilities(6),
                "year":3,
                "money_reward":30,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_2.png'
            },
            {
                "name":"Třetí loupežník",
                "strength": randomize_enemy_abilities(8),
                "attack": randomize_enemy_abilities(10),
                "defense": randomize_enemy_abilities(10),
                "hp": randomize_enemy_abilities(8),
                "year":3,
                "money_reward":40,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_3.png'
            },
            {
                "name":"Čtvrtý loupežník",
                "strength": randomize_enemy_abilities(10),
                "attack": randomize_enemy_abilities(12),
                "defense": randomize_enemy_abilities(12),
                "hp": randomize_enemy_abilities(9),
                "year":3,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_4.png'
            },

            {
                "name":"Král loupežníků",
                "strength": randomize_enemy_abilities(12),
                "attack": randomize_enemy_abilities(15),
                "defense": randomize_enemy_abilities(15),
                "hp": randomize_enemy_abilities(12),
                "year":3,
                "money_reward":75,
                "exp_reward":400,
                "link":'assets/imgs/enemies/enemies_3/loupeznik_4.png'
            }

        ],

        enemies_from_4:[

            {
                "name":"Nepřátelský rytíř",
                "strength": randomize_enemy_abilities(11),
                "attack": randomize_enemy_abilities(15),
                "defense": randomize_enemy_abilities(15),
                "hp": randomize_enemy_abilities(12),
                "year":4,
                "money_reward":50,
                "link":'assets/imgs/enemies/enemies_4/rytir.png'
            },

            {
                "name":"Nepřátelský lučišník",
                "strength": randomize_enemy_abilities(13),
                "attack": randomize_enemy_abilities(17),
                "defense": randomize_enemy_abilities(17),
                "hp": randomize_enemy_abilities(15),
                "year":4,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/lucisnik.png'
            },

            {
                "name":"Nepřátelský generál",
                "strength": randomize_enemy_abilities(16),
                "attack": randomize_enemy_abilities(20),
                "defense": randomize_enemy_abilities(20),
                "hp": randomize_enemy_abilities(15),
                "year":4,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/velitel.png'
            },


            {
                "name":"Nepřátelský král",
                "strength": randomize_enemy_abilities(20),
                "attack": randomize_enemy_abilities(23),
                "defense": randomize_enemy_abilities(23),
                "hp": randomize_enemy_abilities(15),
                "year":4,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/kral.png'
            },

            {
                "name":"Tříhlavý drak",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(26),
                "defense": randomize_enemy_abilities(26),
                "hp": randomize_enemy_abilities(25),
                "year":4,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_4/drak.png'
            },

        ],



        enemies_from_5:[

            {
                "name":"Strážce portálu",
                "strength": randomize_enemy_abilities(19),
                "attack": randomize_enemy_abilities(19),
                "defense": randomize_enemy_abilities(19),
                "hp": randomize_enemy_abilities(15),
                "year":5,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_5/strazce_portalu.png'
            },
            {
                "name":"Zlá ježibaba",
                "strength": randomize_enemy_abilities(23),
                "attack": randomize_enemy_abilities(25),
                "defense": randomize_enemy_abilities(25),
                "hp": randomize_enemy_abilities(17),
                "year":5,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_5/jezibaba.png'
            },
            {
                "name":"Prokletý pirát",
                "strength": randomize_enemy_abilities(20),
                "attack": randomize_enemy_abilities(24),
                "defense": randomize_enemy_abilities(24),
                "hp": randomize_enemy_abilities(15),
                "year":5,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_5/proklety_pirat.png'
            },

            {
                "name":"Kostlivec",
                "strength": randomize_enemy_abilities(21),
                "attack": randomize_enemy_abilities(22),
                "defense": randomize_enemy_abilities(22),
                "hp": randomize_enemy_abilities(15),
                "year":5,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_5/kostlivec_2.png'
            },

            {
                "name":"Zotarova stráž",
                "strength": randomize_enemy_abilities(25),
                "attack": randomize_enemy_abilities(25),
                "defense": randomize_enemy_abilities(25),
                "hp": randomize_enemy_abilities(18),
                "year":5,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_5/zotarova_straz.png'
            },

            {
                "name":"Černokněžník Zotar",
                "strength": randomize_enemy_abilities(28),
                "attack": randomize_enemy_abilities(35),
                "defense": randomize_enemy_abilities(35),
                "hp": randomize_enemy_abilities(25),
                "year":5,
                "money_reward":50,
                "exp_reward":200,
                "link":'assets/imgs/enemies/enemies_5/cernokneznik_zotar.png'
            },

        ],

    },




});

function randomize_enemy_abilities(number){
    let min = 0.8 * number;
    let max = 1.2 * number;

    return Math.round(Math.random() * (max - min) + min);
}
