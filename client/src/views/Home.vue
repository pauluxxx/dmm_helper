<template>
    <div class="home">
        <b-container class="bv-example-row" v-if="!currentMethod">
            <b-row>
                <b-col>
                    <img alt="Puls" src="../assets/puls.png">
                    <LoadFile></LoadFile>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <PrepareData></PrepareData>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-button variant="primary" v-if="allMethods.length >= 1" @click="processData" class="mt-4">Process Data</b-button>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <router-view/>
        </b-container>

    </div>
</template>

<script>
    // @ is an alias to /src why?
    import LoadFile from "@/components/LoadFile.vue";
    import ChartResult from "@/components/ChartResult.vue";
    import PrepareData from "@/components/PrepareData.vue";

    export default {
        name: "home",
        computed: {
            currentMethod() {
                return this.$store.getters.currentMethod;
            },
            allMethods() {
                return this.$store.getters.allMethods;
            },

        },
        methods:{
            processData(){
                this.$store.dispatch('PROCESS_DATA',{"methods":this.allMethods})
            }
        },
        components: {
            LoadFile,
            ChartResult,
            PrepareData,
        }
    };
</script>
