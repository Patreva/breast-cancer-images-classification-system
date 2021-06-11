import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        idcsystemprediction: null,
        idcpredictiondetail: null,
        metastaticprediction: null,
        metastaticpredictiondetail: null
    },
    getters: {},
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('typeofpaper')) {
                state.detailsform.typeofpaper = localStorage.getItem('typeofpaper');
              }
        },
    },
    actions: {},
});