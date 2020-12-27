<template>
    <v-app>
        <v-main class="accent">
            <popup
                :show-popup="popup.showPopup"
                :img-src="popup.imgSrc"
                :popup-text="popup.popupText"
                @close-popup="closePopup"
            ></popup>
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </v-main>
    </v-app>
</template>

<script>
import Popup from '@/components/common/Popup';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'App',
    components: { Popup },
    computed: {
        ...mapGetters({
            popup: 'popup/options',
        }),
    },
    methods: {
        ...mapActions({
            closePopup: 'popup/closePopup',
        }),
    },
};
</script>

<style lang="scss">
* {
    transition: 0.25s;
    letter-spacing: 0.1rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.shadow {
    box-shadow: rgba(191, 191, 191, 0.5) 0px 0px 10px !important;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none;
}

.icon {
    width: 126px;
    height: 126px;
}
</style>
