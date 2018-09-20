<template>
    <div class="mt-4 prepare">
        <router-link to="/data"><b-button variant="secondary" @click="addMethod" v-if="newMethodCreating">AddMethod</b-button></router-link>
        <ListMethods></ListMethods>
    </div>
</template>
<script>
    import MethodCreation from "@/components/MethodCreation.vue";
    import ListMethods from "@/components/ListMethods.vue";

    export default {
        name: "PrepareData",
        props: {
            msg: String
        },
        data() {
            return {
                options: {
                    acceptedFileTypes: ['image/*'],
                    url: './api/upload2',
                    clickable: true
                }
            }
        },
        computed: {
            newMethodCreating() {
                return !this.$store.getters.currentMethod;
            }
        },
        methods: {
            addMethod() {
                this.$store.dispatch('CREATE_METHOD');
            }
        },
        components: {
            MethodCreation,
            ListMethods,
        }
    };
</script>
<style lang="scss" >
    .prepare .btn a{
        color: white !important;
    }
</style>
