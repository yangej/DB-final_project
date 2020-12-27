<template>
    <v-card min-width="400" class="card shadow py-16 px-10">
        <div class="d-flex flex-column align-center mb-5">
            <div
                class="logo primary d-flex justify-center align-center rounded-circle mb-5"
            >
                <img src="/img/logo.svg" alt="logo" />
            </div>
            <h3 class="display-1 mb-3 font-weight-medium primary--text">
                PaTrack
            </h3>
        </div>
        <div>
            <v-select
                v-model="department"
                :items="departments"
                placeholder="請選擇您的系所"
                class="mb-4"
                hide-details
                outlined
            ></v-select>
            <v-text-field
                v-model="name"
                label="Outlined"
                hide-details
                single-line
                outlined
                class="mb-4"
                placeholder="請輸入您的姓名"
            ></v-text-field>
            <v-text-field
                v-model="account"
                label="Outlined"
                hide-details
                single-line
                outlined
                class="mb-4"
                placeholder="請輸入您的學號"
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Outlined"
                hide-details
                type="password"
                single-line
                outlined
                class="mb-10"
                placeholder="請輸入您的密碼"
            ></v-text-field>
            <custom-button
                width="100%"
                text="註冊"
                @click="register"
            ></custom-button>
        </div>
    </v-card>
</template>

<script>
import CustomButton from '@/components/common/CustomButton';
export default {
    name: 'RegisterCard',
    components: { CustomButton },
    data() {
        return {
            name: '',
            departments: ['DTC', 'IM', 'CS'],
            department: '',
            account: '',
            password: '',
        };
    },
    methods: {
        register() {
            this.$emit('register', {
                name: this.name,
                department: this.department,
                account: this.account,
                password: this.password,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep fieldset {
    border: none !important;
    background-color: #efefef;
}
.logo {
    width: 100px;
    height: 100px;

    img {
        width: 64px;
        height: 64px;
    }
}
</style>
