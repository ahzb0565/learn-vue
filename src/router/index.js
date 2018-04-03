import Router from 'vue-router';
import Vue from 'vue';
import Welcome from '../components/Welcome';
import HeroList from '../components/heroes/HeroList';

Vue.use(Router);

export default new Router ({
    routes: [{
        path: '/',
        component: Welcome
    },{
        path: '/heroes',
        component: HeroList
    }]
})