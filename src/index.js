import Vue from 'vue';
import NavBar from './components/nav';

const HEROES = [
    {name: 'Bob', age: 15, title:'dev'},
    {name: 'Jim', age: 15, title:'Tester'},
    {name: 'Benjamin', age: 15, title:'PM'},
    {name: 'Justin', age: 15, title:'Ops'}
]

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'You visit this one on ' + new Date().toLocaleString(),
        heroes: HEROES
    }
});

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
})