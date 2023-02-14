import Vue from "vue";
import Vuex from "vuex";


//import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        items:[
            {
                "name":"Rytířský meč",
                "type":"Zbraň",
                "using":"attack",
                "value":5,
                "img_address":"https://s4.gifyu.com/images/sword.th.png",
                "price":40,
                "sell_price":20
            },
            {
                "name":"Zlatý vyvážený meč",
                "type":"Zbraň","using":"attack",
                "value":10,
                "img_address":"https://s1.gifyu.com/images/sword1.th.png",
                "price":80,
                "sell_price":40,
            },
            {
                "name":"Turnajová přilbice",
                "type":"Helma",
                "using":"defence",
                "value":7,
                "img_address":"https://s1.gifyu.com/images/helmet.th.png",
                "price":100,
                "sell_price":50,
            },
            {
                "name":"Rytířská zbroj",
                "type":"Brnění",
                "using":"defence",
                "value":16,
                "img_address":"https://s1.gifyu.com/images/armor.th.png",
                "price":150,
                "sell_price":70,
            },
            {
                "name":"Falchion",
                "type":"Zbraň",
                "using":"attack",
                "value":6,
                "img_address":"https://s4.gifyu.com/images/sword2.th.png",
                "price":60,
                "sell_price":30,

            },

        ],

    },



});
