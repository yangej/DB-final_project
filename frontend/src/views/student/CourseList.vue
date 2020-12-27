<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="課堂回答"
            en-title="Questions in Class"
            img-src="/img/navigate.svg"
        >
            <template>
                <item-row
                    v-for="(course, index) in courses"
                    :key="`course-${index}`"
                    :tag-text="course.unit"
                    :title="course.name"
                    action-text="查看問題"
                    @click-button="goTo(course.id)"
                ></item-row>
            </template>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import ItemRow from '@/components/common/ItemRow';
import { apiExecutor } from '../../api';

export default {
    name: 'CourseList',
    components: { MainCard, ItemRow },
    data() {
        return {
            courses: [],
        };
    },
    methods: {
        goTo(id) {
            this.$router.push({ path: `/student/questions/${id}` });
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
