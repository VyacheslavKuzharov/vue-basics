<template>
    <div>
        <h1>The User Page</h1>
        <hr>

        <p>ID: {{ id }}</p>
        <button @click="navigateToHome">Go home</button>
    </div>

</template>

<script>
    export default {
        methods: {
            navigateToHome(){
                this.$router.push({path: '/'});
            }
        }
    }
</script>