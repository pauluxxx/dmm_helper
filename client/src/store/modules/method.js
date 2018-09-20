import axios from 'axios';

const state = {
    currentMethod: undefined,
    allMethods: []
};
export const method_classes = {
    id: {},
    name: {},
    stp: {},
    ctp: {},
    fp: {},
}
export const method_relations = {
    association: {},
    aggregation: {},
    composition: {},
    inheritance: {}
}
export const method = {
    Name: '',
    Classes: method_classes,
    Relationships: method_relations,
}

// getters
const getters = {
    currentMethod(state) {
        return state.currentMethod;
    },
    allMethods(state) {
        return state.allMethods;
    }
};

// actions
const actions = {
    PROCESS_DATA(context, payload) {
        axios.post('/api/process', payload)
            .then((res) => {
                console.log(res);
            }).catch(e => {
            console.log(e);
        })
    },
    CREATE_METHOD(context, payload) {
        let new_method = JSON.parse(JSON.stringify(method));
        if (payload) {
            new_method = payload;
            context.commit('SET_CURRENT_METHOD', undefined);
        } else {
            context.commit('SET_CURRENT_METHOD', new_method);
        }
        context.commit('CREATE_METHOD', new_method);

    }
};
// mutations
const mutations = {
    CREATE_METHOD(state, payload) {
        state.allMethods.push(payload)
    },
    SET_CURRENT_METHOD(state, payload) {
        state.currentMethod = payload;
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
