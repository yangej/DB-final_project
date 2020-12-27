import Vuex from 'vuex';
import VuexPersistence from 'vuex-persistedstate';
import { popup } from '../store/modules/popup';
import { user } from '../store/modules/user';

export const createStore = () => {
    const localStorage = new VuexPersistence({
        storage: window.localStorage,
        paths: ['user'],
    });

    return new Vuex.Store({
        modules: { popup, user },
        plugins: [localStorage],
    });
};
