<template>
    <div style="padding-top: 100px; padding-bottom: 100px">
        <v-app-bar absolute color="primary" elevate-on-scroll class="px-16">
            <router-link class="d-flex align-center" :to="`/`">
                <img src="/img/logo.svg" alt="logo" style="height: 40px" />
                <v-toolbar-title class="white--text font-weight-medium ml-4"
                    >PaTrack</v-toolbar-title
                >
            </router-link>
            <v-spacer />
            <router-link
                v-for="(item, index) in navItems"
                :key="`nav-${index}`"
                class="white--text"
                :to="item.path"
            >
                {{ item.name }}
            </router-link>
            <v-btn icon class="ml-10 white--text">
                <v-icon>mdi-logout</v-icon>
            </v-btn>
        </v-app-bar>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DevLayout',
    data() {
        return {
            navItems: [
                { name: '課程管理', path: '/' },
                { name: '學生列表', path: '/' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped></style>
