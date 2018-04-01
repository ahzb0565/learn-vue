import Vue from 'vue';
import NavBar from './components/nav';

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'You visit this one on ' + new Date().toLocaleString()
    }
});

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
})