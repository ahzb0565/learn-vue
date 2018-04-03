<template>
    <div>
        <div>
            <router-link to="/">Go to Welcome</router-link>
            <router-link to="/heroes">Go to Heroes</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>