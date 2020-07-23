import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.pink.darken1, // #D81B60
                secondary: colors.pink.lighten4, // #F8BBD0
                accent: colors.green.base, // #4CAF50
                text: colors.grey.base,
            },
        },
    },
});
