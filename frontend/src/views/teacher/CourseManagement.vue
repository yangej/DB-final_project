<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="課程管理"
            en-title="Course Management"
            img-src="/img/spreadsheet.svg"
        >
            <template>
                <div class="px-5">
                    <item-row
                        v-for="(course, index) in courses"
                        :key="`course-${index}`"
                        :tag-text="course.unit"
                        :title="course.name"
                        action-text="管理問題"
                        @click-button="
                            goTo(`/teacher/question-management/${course.id}`)
                        "
                    ></item-row>
                </div>
            </template>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import ItemRow from '@/components/common/ItemRow';
import { apiExecutor } from '../../api';

export default {
    name: 'CourseManagement',
    components: { MainCard, ItemRow },
    data() {
        return {
            courses: [],
        };
    },
    methods: {
        goTo(path) {
            this.$router.push({ path });
        },
        formatCourse(response) {
            return response.map((unit) => {
                return { ...unit, unit: 'Unit ' + unit.id };
            });
        },
    },
    async created() {
        const response = await apiExecutor.getAllUnits();
        this.courses = this.formatCourse(response);
    },
};
</script>

<style lang="scss" scoped></style>
