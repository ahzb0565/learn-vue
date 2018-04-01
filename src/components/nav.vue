<template>
<div class="navbar">
    <a href="/">Learn Vue</a>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        brand: 'Learn Vue'
    })
}
</script>

<style scoped>
.navbar {
    position: absolute;
    margin: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color: grey;
    color: white;
}
</style>