<template>
    <v-row>
        <v-col v-for="btnInfo in btnInfos">
            <custom-button
                :class="{ focus: btnInfo.level === focusBtn }"
                :text="btnInfo.text"
                width="100%"
                @click="onClick(btnInfo.level)"
            ></custom-button>
        </v-col>
    </v-row>
</template>

<script>
import CustomButton from './CustomButton';
export default {
    name: 'ButtonRow',
    components: { CustomButton },
    data() {
        return {
            focusBtn: '',
        };
    },
    props: {
        btnInfos: Array,
        currentBtn: String,
    },
    methods: {
        onClick(level) {
            this.$emit('button-click', level);
        },
    },
    watch: {
        currentBtn: {
            handler: function (newVal) {
                this.focusBtn = newVal;
            },
        },
    },
    mounted() {
        this.focusBtn = this.currentBtn;
    },
};
</script>

<style lang="scss" scoped>
.focus {
    background-color: #3a885f !important;
}
</style>
