import Vue from 'vue';
import VueRouter from 'vue-router';

//import indexScreen from "@/views/indexScreen";
//pro zaka
import welcomePage from "@/pages/loginPage";
import profileOverviewPage from "@/pages/profileOverviewPage";
import mathExamples from "@/pages/mathExamples";
import mathWordTasks from "@/pages/mathWordTasks";

//pro ucitele
import addWordTask from "@/pagesTeacher/addWordTask";
import editWordTask from "@/pagesTeacher/editWordTask";

//pro hru
import gameShop from "@/gamePages/gameShop";
import gameHeader from "@/gamePages/gameHeader";
import characterOverview from "@/gamePages/characterOverview";
import fightingStory from "@/gamePages/fightingStory";
import tranningAbilities from "@/gamePages/tranningAbilities";

Vue.use(VueRouter);

const routes = [
    {path:"/", component: welcomePage},
    {path:"/profileOverviewPage", component: profileOverviewPage},
    {path:"/mathExamples", component: mathExamples},
    {path:"/slovniUlohy", component: mathWordTasks},

    {path:"/zadatSlovniUlohu", component: addWordTask},
    {path:"/slovniUlohyEdit", component: editWordTask},

    {path:"/gameShop", component: gameShop},
    {path:"/gameHeader", component: gameHeader},
    {path:"/characterOverview", component: characterOverview},
    {path:"/fightingStory", component: fightingStory},
    {path:"/tranningAbilities", component: tranningAbilities},


];

const router = new VueRouter({
    routes,
});

export default router;

