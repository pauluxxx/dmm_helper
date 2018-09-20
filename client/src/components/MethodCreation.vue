<template>
    <div class="mt-4" v-if="currentMethod">
        <b-row>
            <b-col cols="12">
                <h1>Name</h1>
                <b-form-input type="text" placeholder="Method name"
                              v-model="name"></b-form-input>
            </b-col>
            <b-col cols="12" class="mt-4">
                <h3>Classes Table</h3>
            </b-col>
            <b-col cols="12" class="mt-4">
                <b-btn v-b-modal.class_instanceTable><i class="fas fa-plus"></i>Add new row</b-btn>
                <b-table striped hover :items="method_classes"></b-table>
                <!-- the modal -->
                <b-modal id="class_instanceTable"
                         ref="modal"
                         title="Submit Classes"
                         @ok="handleOkClasses"
                         @shown="clearClasses">
                    <form @submit.stop.prevent="handleClasseSubmit">
                        <b-row>
                            <b-form-input type="number"
                                          v-model="class_instance.id" hidden></b-form-input>
                            <b-col>
                                <label for="">name</label>
                                <b-form-input type="text"
                                              v-model="class_instance.name"></b-form-input>
                            </b-col>
                            <b-col>
                                <label for="">stp</label>
                                <b-form-input type="number"
                                              v-model="class_instance.stp"></b-form-input>
                            </b-col>
                            <b-col>
                                <label for="">ctp</label>
                                <b-form-input type="number"
                                              v-model="class_instance.ctp"></b-form-input>
                            </b-col>
                            <b-col>
                                <label for="">fp</label>
                                <b-form-input type="number"
                                              v-model="class_instance.fp"></b-form-input>
                            </b-col>
                        </b-row>
                    </form>
                </b-modal>
            </b-col>
            <b-row>
                <b-col cols="12">
                    <h1>Relationships</h1>
                </b-col>
                <b-col>
                    <label for="">association</label>
                    <b-form-input type="number"
                                  v-model="relations.association"></b-form-input>
                </b-col>
                <b-col>
                    <label for="">aggregation</label>
                    <b-form-input type="number"
                                  v-model="relations.aggregation"></b-form-input>
                </b-col>
                <b-col>
                    <label for="">composition</label>
                    <b-form-input type="number"
                                  v-model="relations.composition"></b-form-input>
                </b-col>
                <b-col>
                    <label for="">inheritance</label>
                    <b-form-input type="number"
                                  v-model="relations.inheritance"></b-form-input>
                </b-col>
            </b-row>
            <b-col cols="12" class="mt-4">
                <b-button variation="primary" @click="saveMethod">Save</b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    // import method_Classes from '@/store/module'
    const init_class_instance = {
        id: 0,
        name: '',
        stp: 0,
        ctp: 0,
        fp: 0,
    };
    const init_relations = {
        association: 0,
        aggregation: 0,
        composition: 0,
        inheritance: 0
    }

    export default {
        name: "MethodCreation",
        computed: {
            currentMethod() {
                return this.$store.getters.currentMethod;
            }
        },
        data() {
            return {
                name: '',
                relations: init_relations,
                method_classes: [],
                class_instance: init_class_instance
            }
        },
        methods: {
            clearClasses() {
                this.class_instance = JSON.parse(JSON.stringify(init_class_instance));
                this.class_instance.id = this.method_classes.length + 1;
            },
            handleOkClasses: function (evt) {
                evt.preventDefault()
                this.handleClasseSubmit()
            },
            handleClasseSubmit() {
                this.method_classes.push(this.class_instance);
                this.clearClasses()
                this.$refs.modal.hide()
            },
            saveMethod() {
                this.$store.dispatch('CREATE_METHOD', JSON.parse(JSON.stringify({
                        Name: this.name,
                        Classes: this.method_classes,
                        Relationships: this.relations,
                    }
                )))
                this.relations = {
                    association: 0,
                    aggregation: 0,
                    composition: 0,
                    inheritance: 0
                }
                this.class_instance = {
                    id: 0,
                    name: '',
                    stp: 0,
                    ctp: 0,
                    fp: 0,
                };
                this.name = ''
                this.method_classes = [];
                this.$router.push({path: '/'})
            }
        },
        created: function () {
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
