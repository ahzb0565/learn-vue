import Vue from 'vue';
import NavBar from './components/nav';

Vue.component('hero-details', {
    props: ['hero'],
    template: '<li>Name: {{ hero.name }}, age: {{ hero.age }} <button v-on:click="remove">remove</button></li>',
    methods: {
        remove: function(even){
            this.$emit('remove');
        }
    }
})

var app = new Vue({
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
        newPerson: {
            name: '',
            age: 0
        },
        comments: "",
    },
    created: function(){
        console.log(`The comments is "${this.comments}" by default`);
    },
    methods: {
        addPerson: function(){
            this.heroes.push({
                id: this.heroes.length,
                name: this.newPerson.name,
                age: this.newPerson.age,
                title: 'new one'
            });
            this.newPerson = {name: '', age: 0};
        },
        removePerson: function(id){
            let hero = this.heroes.filter(person => person.id == id);
            if (hero.length != 1){
                console.error('Error, hero not found with id ' + id);
                return
            };
            console.log('Remove hero: '+ hero[0].name);
            this.heroes.splice(this.heroes.indexOf(hero[0]), 1);
        }
    }
});

app.$watch('comments', function(oldVar, newVar){
    console.log(`Comments updated ${oldVar} -> ${newVar}`);
});
app.$watch('heroes', function(oldVar, newVar){
    let heroesPrev = oldVar.map(hero => hero.name);
    let heroesNew = newVar.map(hero => hero.name);
    console.log(`heroes updated ${heroesPrev} -> ${heroesNew}`);  // TODO: fix me, incorrect
})

new Vue({
    el: '#navbar',
    components: { NavBar },
    template: '<NavBar />' // This can't be <Nav />, because <nav> is known tag in html
});

