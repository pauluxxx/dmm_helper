<template>
    <div class="home">
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <img alt="Puls" src="../assets/puls.png">
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <LoadFile></LoadFile>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <ChartResult></ChartResult>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    // @ is an alias to /src why?
    import LoadFile from "@/components/LoadFile.vue";
    import ChartResult from "@/components/ChartResult.vue";

    export default {
        name: "home",
        components: {
            LoadFile,
            ChartResult
        }
    };
</script>
