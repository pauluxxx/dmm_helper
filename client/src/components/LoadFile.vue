<template>
    <div class="mt-4">
        <vue-transmit
                tag="section"
                v-bind="options"
                upload-area-classes="bg-faded"
                ref="uploader"
                @added-file="callback"
        >
            <b-button variant="primary">Upload Files</b-button>
            <!-- Scoped slot -->
            <template slot="files" scope="props">
                <div v-for="(file, i) in props.files" :key="file.id" :class="{'mt-5': i === 0}">
                    <div class="media">
                        <img :src="file.dataUrl" class="img-fluid d-flex mr-3">
                        <div class="media-body">
                            <h3>{{ file.name }}</h3>
                            <div class="progress" style="width: 50vw;">
                                <div class="progress-bar bg-success"
                                     :style="{width: file.upload.progress + '%'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </vue-transmit>
    </div>
</template>

<script>
    export default {
        name: "LoadFile",
        props: {
            msg: String
        },
        data() {
            return {
                options: {
                    acceptedFileTypes: ['image/*'],
                    url: './api/upload2',
                    clickable:true
                }
            }
        },
        methods: {
            callback() {
            console.log('calback');
            }
        },
        filters: {
            json(value) {
                return JSON.stringify(value, null, 2)
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .v-transmit__upload-area {
        min-height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed cornflowerblue;
        border-radius: 5px;
    }
</style>
