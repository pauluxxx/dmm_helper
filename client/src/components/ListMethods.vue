<template>
    <div class="mt-4" v-if="allMethods.length>=1">
        <h2>
            All methods ready to process:
        </h2>
        <div v-for="method ,index in allMethods">
            {{index}}-{{method.Name}}
        </div>
    </div>
</template>
<script>

    export default {
        name: "ListMethods",
        props: {
            msg: String
        },
        computed: {
            allMethods() {
                return this.$store.getters.allMethods;
            },
        },
        methods: {
            editMethod(e) {
                console.log(e.target);
            }
        },
    };
</script>
<style lang="scss">
</style>
