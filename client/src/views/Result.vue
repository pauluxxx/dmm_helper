<template>

    <div class="results">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <h2>Results of computing is : </h2>
                    <b-table striped hover :items="computedResults"></b-table>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    // @ is an alias to /src why?
    import LoadFile from "@/components/LoadFile.vue";
    import ChartResult from "@/components/ChartResult.vue";
    import PrepareData from "@/components/PrepareData.vue";

    export default {
        name: "Result",
        computed: {
            computedResults() {
                return this.$store.getters.results;
            },
        },
    };
</script>
