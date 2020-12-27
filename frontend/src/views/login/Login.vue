<template>
    <div class="container d-flex justify-center align-center py-16">
        <login-card @login="login"></login-card>
    </div>
</template>

<script>
import LoginCard from '@/components/login/LoginCard.vue';
import { apiExecutor } from '../../api';

export default {
    name: 'Login',
    components: {
        LoginCard,
    },
    methods: {
        async login(values) {
            await apiExecutor.login(values);
        },
    },
};
</script>
