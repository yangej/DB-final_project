<template>
    <v-card max-width="800" class="shadow">
        <div class="border py-5 px-8">
            <v-btn text @click="onClick">
                <v-icon class="primary--text mr-2">mdi-chevron-left</v-icon>
                <span class="font-weight-medium body-1">{{ actionText }}</span>
            </v-btn>
        </div>
        <slot></slot>
    </v-card>
</template>

<script>
export default {
    name: 'BackCard',
    props: {
        actionText: String,
    },
    methods: {
        onClick() {
            this.$emit('button-click');
        },
    },
};
</script>
<style lang="scss" scoped>
.border {
    border-bottom: 1px solid #efefef;
}
</style>
