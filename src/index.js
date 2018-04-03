import Vue from 'vue';
import NavBar from './components/Nav';
import HeroList from './components/heroes/HeroList';

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
});

new Vue({
    el: '#app',
    components: { HeroList },
    template: '<hero-list />'
});



