import Vue from 'vue';
import NavBar from './components/nav';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
})