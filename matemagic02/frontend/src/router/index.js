import Vue from 'vue';
import VueRouter from 'vue-router';

//import indexScreen from "@/views/indexScreen";
//pro zaka

import profileOverviewPage from "@/pages/profileOverviewPage";
import mathExamples from "@/pages/mathExamples";
import mathWordTasks from "@/pages/mathWordTasks";
import finalExam from "@/pages/finalExam";
import controlComponent from "@/components/controlComponent";

import loginPage from "@/pages/loginPage";
import registerPage from "@/pages/registerPage";
import helpTutorial from "@/components/helpTutorial";

//pro ucitele
import addWordTask from "@/pagesTeacher/addWordTask";
import manageWordTask from "@/pagesTeacher/manageWordTask";

//pro hru
import gameShop from "@/gamePages/gameShop";
import gameHeader from "@/gamePages/gameHeader";
import characterOverview from "@/gamePages/characterOverview";
import fightingStory from "@/gamePages/fightingStory";
import tranningAbilities from "@/gamePages/tranningAbilities";
import fightComponent from "@/components/fightComponent";


import store from "@/store/store";

Vue.use(VueRouter);


export const routes = [

    {
        path:"/registerPage", component: registerPage,
        meta: {
            requiresGuest: true,

        }
    },

    {
        path:"/", component: loginPage,
        meta: {
            requiresGuest: true
        }
    },


    {
        path:"/helpTutorial", component: helpTutorial,
        meta: {
            requiresUser: true,

        }
    },

    //cesty studenta - aplikace

    {
        path:"/profileOverviewPage", component: profileOverviewPage,
        title: "Profil",
        inGame:false,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/mathExamples", component: mathExamples,
        title: "Procvičování",
        inGame:false,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/mathWordTasks", component: mathWordTasks,
        title: "Slovní úlohy",
        inGame:false,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/finalExam", component: finalExam,
        title: "Závěrečný test",
        inGame:false,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },


    {
        path:"/control", component: controlComponent,
        title: "Kontrola před testem",
        meta: {
            requiresUser: true
        }
    },


    //cesty studenta - hra

    {
        path:"/gameHeader", component: gameHeader,
        meta: {
            requiresUser: true
        }
    },
    {
        path:"/characterOverview", component: characterOverview,
        title: "Přehled",
        inGame:true,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/tranningAbilities", component: tranningAbilities,
        title: "Cvičiště",
        inGame:true,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/gameShop", component: gameShop,
        title: "Obchod",
        inGame:true,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/fightingStory", component: fightingStory,
        title: "Příběh",
        inGame:true,
        roles: ["student"],
        meta: {
            requiresUser: true
        }
    },

    {
        path:"/fight", component: fightComponent,
        title: "Souboj",
        meta: {
            requiresUser: true
        }
    },


    //cesty ucitele

    {
        path:"/addWordTask", component: addWordTask,
        title: "Přidat úlohu",
        inGame:false,
        roles: ["teacher"],
        meta: {
            requiresUser: true
        }
    },
    {
        path:"/manageWordTask", component: manageWordTask,
        title: "Spravovat úlohy",
        inGame:false,
        roles: ["teacher"],
        meta: {
            requiresUser: true
        }
    },
]

export const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes

});


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresUser)) {
        if (!store.getters.isLoggedIn) {
            // Redirect to the Login Page
            next('./');
        } else {
            next();
        }

    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (store.getters.isLoggedIn) {

            next('./profileOverviewPage');

            // Redirect to the Login Page
        }else {
            next();
        }
    } else {
        next()
    }
});


export default router;

