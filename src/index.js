import Vue from 'vue';
import NavBar from './components/Nav';
import router from './router';
import App from './app';

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
});

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App />'
});



