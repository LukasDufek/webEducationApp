import Vue from 'vue';
import VueRouter from 'vue-router';

//import indexScreen from "@/views/indexScreen";
//pro zaka
import welcomePage from "@/pages/loginPage";
import profileOverviewPage from "@/pages/profileOverviewPage";
import mathExamples from "@/pages/mathExamples";
import slovniUlohy from "@/pages/mathWordTasks";
import obchodPage from "@/gamePages/gameShop";

//pro ucitele
import slovniUlohyEdit from "@/pagesTeacher/editWordTask";
import zadatSlovniUlohu from "@/pagesTeacher/addWordTask";


Vue.use(VueRouter);

const routes = [
    {path:"/", component: welcomePage},
    {path:"/profileOverviewPage", component: profileOverviewPage},
    {path:"/mathExamples", component: mathExamples},
    {path:"/obchodPage", component: obchodPage},
    {path:"/zadatSlovniUlohu", component: zadatSlovniUlohu},
    {path:"/slovniUlohyEdit", component: slovniUlohyEdit},
    {path:"/slovniUlohy", component: slovniUlohy},


];

const router = new VueRouter({
    routes,
});

export default router;

