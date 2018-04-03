<template>
    <li>
        Name: {{ hero.name }}, age: {{ hero.age }} <button v-on:click="remove">remove</button>
    </li>
</template>

<script>
export default {
    name: 'hero-details',
    props: ['hero'],
    methods: {
        remove: function(even){
            this.$emit('remove');  // From parent to child : props, from child to parent: $emit
        }
    }
}

</script>
