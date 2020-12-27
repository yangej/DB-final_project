import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: {
                    lighten1: '#F0FAF5',
                    base: '#5BC88F',
                    darken1: '#3A885F',
                },
                accent: '#efefef',
                warning: '#E55151',
            },
        },
    },
});
