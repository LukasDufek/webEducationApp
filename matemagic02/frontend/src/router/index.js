import Vue from 'vue';
import VueRouter from 'vue-router';

//import indexScreen from "@/views/indexScreen";
//pro zaka

import profileOverviewPage from "@/pages/profileOverviewPage";
import mathExamples from "@/pages/mathExamples";
import mathWordTasks from "@/pages/mathWordTasks";
import finalExam from "@/pages/finalExam";

import loginPage from "@/pages/loginPage";
import registerPage from "@/pages/registerPage";

//pro ucitele
import addWordTask from "@/pagesTeacher/addWordTask";
import manageWordTask from "@/pagesTeacher/manageWordTask";

//pro hru
import gameShop from "@/gamePages/gameShop";
import gameHeader from "@/gamePages/gameHeader";
import characterOverview from "@/gamePages/characterOverview";
import fightingStory from "@/gamePages/fightingStory";
import tranningAbilities from "@/gamePages/tranningAbilities";
import store from "@/store/store";

Vue.use(VueRouter);



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

    {
        path:"/registerPage", component: registerPage,
        meta: {
            requiresGuest: true
        }
    },
    {
        path:"/", component: loginPage,
        meta: {
            requiresGuest: true
        }
    },


    {
        path:"/profileOverviewPage", component: profileOverviewPage,
        meta: {
            requiresStudent: true
        }
    },

    {
        path:"/mathExamples", component: mathExamples,
        meta: {
            requiresStudent: true
        }
    },

    {
        path:"/mathWordTasks", component: mathWordTasks,
        meta: {
            requiresStudent: true
        }
    },

    {
        path:"/finalExam", component: finalExam,
        meta: {
            requiresStudent: true
        }
    },

    {
        path:"/gameShop", component: gameShop,
        meta: {
            requiresStudent: true
        }
    },
    {
        path:"/gameHeader", component: gameHeader,
        meta: {
            requiresStudent: true
        }
    },
    {
        path:"/characterOverview", component: characterOverview,
        meta: {
            requiresStudent: true
        }
    },
    {
        path:"/fightingStory", component: fightingStory,
        meta: {
            requiresStudent: true
        }
    },
    {path:"/tranningAbilities", component: tranningAbilities,
        meta: {
            requiresStudent: true
        }
    },

    {
        path:"/addWordTask", component: addWordTask,
        meta: {
            requiresStudent: true
        }
    },
    {
        path:"/manageWordTask", component: manageWordTask,
        meta: {
            requiresStudent: true
    }
    },
]

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresStudent)) {
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

