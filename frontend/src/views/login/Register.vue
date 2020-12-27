<template>
    <div class="container d-flex justify-center align-center py-16">
        <register-card @register="register"></register-card>
    </div>
</template>

<script>
import { apiExecutor } from '../../api';
import RegisterCard from '@/components/login/RegisterCard.vue';

export default {
    name: 'Register',
    components: {
        RegisterCard,
    },
    methods: {
        async register(values) {
            await apiExecutor.register(values);
            await this.$router.push('/login');
        },
    },
};
</script>
