<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link v-if="results" to="/results">Results</router-link>
    </div>
</template>
<script>
    export default {
        name: "Base-Navigation",
        props: {
            msg: String
        },

        computed: {
            results() {
                console.log(this.$store.getters.results);
                return this.$store.getters.results;
            }
        },
    };
</script>
