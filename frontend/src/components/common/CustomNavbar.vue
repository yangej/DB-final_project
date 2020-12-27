<template>
    <v-app-bar absolute color="primary" elevate-on-scroll class="px-16">
        <router-link class="d-flex align-center" :to="`/${userRole}`">
            <img src="/img/logo.svg" alt="logo" style="height: 40px" />
            <v-toolbar-title class="white--text font-weight-medium ml-4"
                >PaTrack</v-toolbar-title
            >
        </router-link>
        <v-spacer />
        <router-link
            v-for="(item, index) in navItems"
            :key="`nav-${index}`"
            class="white--text ml-15"
            :to="item.path"
        >
            {{ item.name }}
        </router-link>
        <v-btn icon class="ml-10 white--text" @click="logoutUser">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CustomNavbar',
    props: {
        navItems: Array,
        userRole: String || null,
    },
    methods: {
        logoutUser() {
            this.logout();
            this.goToLogin();
        },
        goToLogin() {
            this.$router.push({ path: '/login' });
        },
        ...mapActions({
            closePopup: 'popup/closePopup',
            logout: 'user/logout',
        }),
    },
};
</script>
