import Vue from 'vue';
import VueRouter from 'vue-router';

//import indexScreen from "@/views/indexScreen";
import welcomePage from "@/pages/welcomePage";
import profileOverviewPage from "@/pages/profileOverviewPage";
import mathExamples from "@/pages/mathExamples";
import zadatSlovniUlohu from "@/components/zadatSlovniUlohu";
import slovniUlohy from "@/pages/slovniUlohy";


Vue.use(VueRouter);

const routes = [
    {path:"/", component: welcomePage},
    {path:"/profileOverviewPage", component: profileOverviewPage},
    {path:"/mathExamples", component: mathExamples},
    {path:"/zadatSlovniUlohu", component: zadatSlovniUlohu},
    {path:"/slovniUlohy", component: slovniUlohy},


];

const router = new VueRouter({
    routes,
});

export default router;

