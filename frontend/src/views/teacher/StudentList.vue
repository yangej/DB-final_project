<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="學生列表"
            en-title="Student List"
            img-src="/img/search.svg"
        >
            <template>
                <div class="px-5">
                    <v-data-table
                        :headers="headers"
                        :items="students"
                        :sort-by="'average'"
                        :sort-desc="false"
                        multi-sort
                        class="shadow"
                        hide-default-footer
                        :page.sync="page"
                        :items-per-page="itemsPerPage"
                        @page-count="pageCount = $event"
                    >
                        <template v-slot:header.action="{ header }">
                            <span class="pl-4">{{ header.text }}</span>
                        </template>
                        <template v-slot:item.action="{ item }">
                            <v-btn text @click="onClick(item.id, item.uid)">
                                <span class="font-weight-medium body-1"
                                    >查看狀況</span
                                >
                                <v-icon class="primary--text ml-2"
                                    >mdi-chevron-right</v-icon
                                >
                            </v-btn>
                        </template>
                    </v-data-table>
                </div>
            </template>
            <v-pagination
                v-model="page"
                class="mt-6"
                :length="pageCount"
            ></v-pagination>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import { apiExecutor } from '../../api';

export default {
    name: 'StudentList',
    components: { MainCard },
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 5,
            headers: [
                { text: '學號', value: 'id' },
                { text: '姓名', value: 'name', sortable: false },
                { text: '系所', value: 'department', sortable: false },
                { text: '平均分數', value: 'average' },
                { text: '操作', value: 'action', sortable: false },
            ],
            students: [],
        };
    },
    methods: {
        onClick(id, uid) {
            this.$router.push({
                path: `/teacher/student-detail/${uid}`,
                params: { id },
            });
        },
        transformKeys(students) {
            return students.map((student) => {
                return {
                    uid: student.user_id,
                    id: student.studentID,
                    name: student.name,
                    department: student.department,
                    average: Math.floor(student.averageScore),
                };
            });
        },
    },
    async created() {
        const response = await apiExecutor.getAllStudents();
        this.students = this.transformKeys(response);
    },
};
</script>

<style lang="scss" scoped>
::v-deep .v-pagination {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;

    button {
        box-shadow: rgba(191, 191, 191, 0.7) 0px 3px 6px !important;
    }
}

::v-deep table {
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
    overflow: hidden;
}

::v-deep .v-data-table-header {
    background-color: #5bc88f;

    th {
        padding: 16px 20px !important;
        border-bottom: 1px solid #efefef !important;
        span,
        i {
            font-size: 16px;
            color: white !important;
        }
    }

    i {
        margin: 0 4px;
    }
}

::v-deep td {
    border-bottom: 1px solid #efefef !important;
    padding: 16px 20px !important;
    font-size: 16px !important;
}
</style>
