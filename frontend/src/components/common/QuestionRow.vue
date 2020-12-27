<template>
    <v-card max-width="800" class="shadow mb-7">
        <div class="pa-5 pb-0">
            <p class="font-weight-medium">{{ question }}</p>
            <v-radio-group v-model="selection" @change="changeValue">
                <v-radio
                    v-for="(option, index) in options"
                    :key="`option-${index}`"
                    :label="option"
                    :value="optionValue[index]"
                    :readonly="readonly"
                ></v-radio>
            </v-radio-group>
        </div>
        <slot></slot>
    </v-card>
</template>

<script>
export default {
    name: 'QuestionRow',
    data() {
        return {
            optionValue: ['A', 'B', 'C', 'D'],
            selection: '',
        };
    },
    props: {
        readonly: { type: Boolean, default: false },
        tagText: String,
        question: String,
        answer: String,
        options: Array,
        analysis: String,
    },
    methods: {
        changeValue() {
            this.$emit('update-value', this.selection);
        },
    },
    mounted() {
        this.selection = this.readonly || this.answer ? this.answer : '';
    },
};
</script>
