import Vue from 'vue';
import Vuex from 'vuex';
import { createStore } from '../plugins/store';

Vue.use(Vuex);

const store = createStore();
export default store;
