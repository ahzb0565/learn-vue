<template>
    <div>
        <span v-bind:title="title">{{ message }}</span><br>Reversed: <span>{{ reverseMessage }}</span>
        <p v-if="!heroes">No heroes here</p>
        <div v-else-if="heroes">
            <p>Heroes as below</p>
            <ul>
                <hero-details v-for="hero in heroes" v-bind:hero="hero" v-bind:key="hero.id" v-on:remove="removePerson(hero.id)"></hero-details>
            </ul>
            </div>
        Your name: <input v-model="newPerson.name">, age: <input v-model="newPerson.age">
        <button v-on:click="addPerson">Add</button>
    </div>
</template>

<script>
import HeroDetails from "./HeroDetails";
export default {
    name: "heroes-list",
    data: () => ({
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
    }),
    components: { HeroDetails },
    created: function(){
        console.log(`The comments is "${this.comments}" by default`);
    },
    watch: {
        // observe properties and react to the properties changes
        comments: function(oldVar, newVar){
            console.log(`Comments updated ${oldVar} -> ${newVar}`);
        },
        heroes: function(oldVar, newVar){
            let heroesPrev = oldVar.map(hero => hero.name);
            let heroesNew = newVar.map(hero => hero.name);
            console.log(`heroes updated ${heroesPrev} -> ${heroesNew}`);  // TODO: fix me, incorrect
        }
    },
    computed: {
        // computed properties cached base on their dependencies 
        reverseMessage: function(){
            return this.message.split('').reverse().join('');
        }
        /*
        computed caching can use arrow function as below:
        reverseMessage: vm => ({  // Of cause it can't use 'this', but it can use Vue instande as the first argument
            vm.reversedMessage = xxxx
        }) 
         */
    },
    methods: {
        // can't use arrow functions in methods
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
}
</script>