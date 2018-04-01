import Vue from 'vue';
import NavBar from './components/nav';

Vue.component('hero-details', {
    props: ['hero'],
    template: '<li>Name: {{ hero.name }}, age: {{ hero.age }}</li>'
})

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        title: 'You visit this one on ' + new Date().toLocaleString(),
        heroes: [
            {id: 0, name: 'Bob', age: 15, title:'dev'},
            {id: 1, name: 'Jim', age: 15, title:'Tester'},
            {id: 2, name: 'Benjamin', age: 15, title:'PM'},
            {id: 3, name: 'Justin', age: 15, title:'Ops'}
        ],
        comments: ""
    }
});

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
});

