import { initialUserState } from '../initialState/initialUserState';

const state = () => initialUserState();

const getters = {
    token: (state) => state.token,
    role: (state) => state.role,
};

const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload;
    },
    SET_ROLE(state, payload) {
        state.role = payload;
    },
    REMOVE_TOKEN(state) {
        state.token = null;
    },
    REMOVE_ROLE(state) {
        state.role = null;
    },
};

const actions = {
    login: ({ commit }, { token, role }) => {
        commit('SET_TOKEN', token);
        commit('SET_ROLE', role);
    },
    logout: ({ commit }) => {
        commit('REMOVE_TOKEN');
        commit('REMOVE_ROLE');
    },
};

export const user = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
