<template>
    <v-dialog v-model="showPopup" width="360">
        <v-card class="px-9 py-7">
            <img
                class="d-block mt-10 mb-5 mx-auto icon"
                :src="imgSrc"
                alt="icon"
            />
            <h3 class="headline font-weight-bold text-center mb-5">
                {{ popupText }}
            </h3>

            <v-card-actions>
                <slot name="button-area">
                    <custom-button
                        width="100%"
                        text="關閉"
                        color="primary"
                        @click="closePopup"
                    ></custom-button>
                </slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import CustomButton from '@/components/common/CustomButton';
export default {
    name: 'Popup',
    components: { CustomButton },
    props: {
        imgSrc: String,
        popupText: String,
        showPopup: Boolean,
    },
    methods: {
        closePopup() {
            this.$emit('close-popup');
        },
    },
};
</script>

<style lang="scss" scoped>
.icon {
    width: 185px;
    height: 185px;
}
</style>
