<template>
    <div style="padding-top: 100px; padding-bottom: 100px">
        <custom-navbar :nav-items="navItems" :role="userRole"></custom-navbar>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script lang="ts">
import CustomNavbar from '../components/common/CustomNavbar.vue';

export default {
    name: 'StudentLayout',
    components: { CustomNavbar },
    data() {
        return {
            navItems: [{ name: '課程列表', path: '/student/course-list' }],
            userRole: 'student',
        };
    },
};
</script>

<style lang="scss" scoped></style>
