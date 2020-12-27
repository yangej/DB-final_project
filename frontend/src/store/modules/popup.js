import { initialPopupState } from '../initialState/initialPopupState';

const state = () => initialPopupState();
const getters = {
    options: (state) => state.options,
};
const mutations = {
    UPDATE_POPUP(state, payload) {
        state.options = { ...state.popup, ...payload };
    },
};
const actions = {
    updatePopup: ({ commit }, options) => {
        commit('UPDATE_POPUP', { showPopup: true, ...options });
    },
    closePopup: ({ commit }) => {
        commit('UPDATE_POPUP', { showPopup: false });
    },
};

export const popup = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
