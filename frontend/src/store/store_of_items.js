import Vue from "vue";
import Vuex from "vuex";


//import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {


        items:[

            //"img_address":"https://drive.google.com/uc?export=view&id=17NxQuJ4VJJXrz3B4lNMEWdqCOaM7QWnE",

            //zbrane
            {
                "name":"Palice",
                "type":"weapon",
                "using":"attack",
                "value":2,
                "img_address":"assets/imgs/items/weapons/1.png",
                "price":40,
                "sell_price":20,
                "equip":false
            },
            {
                "name":"Palice s hřebíky",
                "type":"weapon",
                "using":"attack",
                "value":3,
                "img_address":"assets/imgs/items/weapons/2.png",
                "price":50,
                "sell_price":25,
                "equip":false
            },

            {
                "name":"Dýka",
                "type":"weapon",
                "using":"attack",
                "value":6,
                "img_address":"assets/imgs/items/weapons/3.png",
                "price":90,
                "sell_price":45,
                "equip":false
            },

            {
                "name":"Soubojová šavle",
                "type":"weapon",
                "using":"attack",
                "value":10,
                "img_address":"assets/imgs/items/weapons/4.png",
                "price":160,
                "sell_price":80,
                "equip":false
            },

            {
                "name":"Šermířský rapír",
                "type":"weapon",
                "using":"attack",
                "value":14,
                "img_address":"assets/imgs/items/weapons/5.png",
                "price":220,
                "sell_price":110,
                "equip":false
            },

            {
                "name":"Sekera",
                "type":"weapon",
                "using":"attack",
                "value":18,
                "img_address":"assets/imgs/items/weapons/6.png",
                "price":270,
                "sell_price":135,
                "equip":false
            },

            {
                "name":"Rytířský meč",
                "type":"weapon",
                "using":"attack",
                "value":24,
                "img_address":"assets/imgs/items/weapons/7.png",
                "price":350,
                "sell_price":175,
                "equip":false
            },

            {
                "name":"Šlechtický meč",
                "type":"weapon",
                "using":"attack",
                "value":35,
                "img_address":"assets/imgs/items/weapons/8.png",
                "price":500,
                "sell_price":250,
                "equip":false
            },

            {
                "name":"Očarovaná sekera",
                "type":"weapon",
                "using":"attack",
                "value":42,
                "img_address":"assets/imgs/items/weapons/9.png",
                "price":600,
                "sell_price":300,
                "equip":false
            },

            {
                "name":"Očarovaný meč",
                "type":"weapon",
                "using":"attack",
                "value":60,
                "img_address":"assets/imgs/items/weapons/10.png",
                "price":900,
                "sell_price":450,
                "equip":false
            },

            {
                "name":"Dračí meč",
                "type":"weapon",
                "using":"attack",
                "value":80,
                "img_address":"assets/imgs/items/weapons/11.png",
                "price":1500,
                "sell_price":750,
                "equip":false
            },




            //helmy
            {
                "name":"Sedlácká čapka",
                "type":"helm",
                "using":"defence",
                "value":2,
                "img_address":"assets/imgs/items/helms/1.png",
                "price":48,
                "sell_price":24,
                "equip":false
            },


            {
                "name":"Železný klobouk",
                "type":"helm",
                "using":"defence",
                "value":6,
                "img_address":"assets/imgs/items/helms/2.png",
                "price":110,
                "sell_price":55,
                "equip":false
            },

            {
                "name":"Rytířská přilbice",
                "type":"helm",
                "using":"defence",
                "value":11,
                "img_address":"assets/imgs/items/helms/3.png",
                "price":210,
                "sell_price":105,
                "equip":false
            },

            {
                "name":"Kapitánská přilbice",
                "type":"helm",
                "using":"defence",
                "value":24,
                "img_address":"assets/imgs/items/helms/4.png",
                "price":350,
                "sell_price":175,
                "equip":false
            },

            {
                "name":"Přilbice šampionů",
                "type":"helm",
                "using":"defence",
                "value":38,
                "img_address":"assets/imgs/items/helms/5.png",
                "price":700,
                "sell_price":350,
                "equip":false
            },



            //Brneni
            {
                "name":"Košile",
                "type":"armor",
                "using":"defence",
                "value":3,
                "img_address":"assets/imgs/items/armors/1.png",
                "price":60,
                "sell_price":30,
                "equip":false
            },

            {
                "name":"Lehká měděná zbroj",
                "type":"armor",
                "using":"defence",
                "value":7,
                "img_address":"assets/imgs/items/armors/2.png",
                "price":120,
                "sell_price":60,
                "equip":false
            },

            {
                "name":"Rytířská zbroj",
                "type":"armor",
                "using":"defence",
                "value":13,
                "img_address":"assets/imgs/items/armors/3.png",
                "price":240,
                "sell_price":120,
                "equip":false
            },

            {
                "name":"Velitelská zbroj",
                "type":"armor",
                "using":"defence",
                "value":20,
                "img_address":"assets/imgs/items/armors/4.png",
                "price":300,
                "sell_price":150,
                "equip":false
            },

            {
                "name":"Kouzelná ocelová zbroj",
                "type":"armor",
                "using":"defence",
                "value":32,
                "img_address":"assets/imgs/items/armors/5.png",
                "price":600,
                "sell_price":300,
                "equip":false
            },

            {
                "name":"Nebeská zbroj z kouzelných kovů",
                "type":"armor",
                "using":"defence",
                "value":50,
                "img_address":"assets/imgs/items/armors/6.png",
                "price":1000,
                "sell_price":500,
                "equip":false
            },


        ],

    },



});
