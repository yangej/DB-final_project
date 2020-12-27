<template>
    <div class="pt-16">
        <main-card
            class="mx-auto"
            title="答題狀況"
            en-title="Answering Situation"
            img-src="/img/admin.svg"
        >
            <template>
                <div class="mt-n10 mb-n5 px-5">
                    <score-line-chart :data="chartData"></score-line-chart>
                </div>
                <div>
                    <button-row
                        :btn-infos="btnInfos"
                        :current-btn="currentCat"
                        @button-click="selectCat"
                    ></button-row>
                </div>
                <div class="pt-2">
                    <custom-table
                        :headers="headers"
                        :items="currentUnits"
                        :has-action="true"
                        @button-click="
                            goTo(`/teacher/question-answers/${$event.id}`)
                        "
                    ></custom-table>
                </div>
            </template>
        </main-card>
    </div>
</template>

<script>
import MainCard from '@/components/common/MainCard';
import CustomTable from '@/components/common/CustomTable';
import ScoreLineChart from '@/components/chart/ScoreLineChart';
import ButtonRow from '@/components/common/ButtonRow';
import { apiExecutor } from '@/api';

export default {
    name: 'StudentDetail',
    components: { MainCard, CustomTable, ScoreLineChart, ButtonRow },
    data() {
        return {
            allUnits: [],
            difficultUnits: [],
            middleUnits: [],
            easyUnits: [],
            chartData: {
                columns: ['unit', 'avg'],
                rows: [],
            },
            btnInfos: [
                {
                    text: '全部',
                    level: 'all',
                },
                {
                    text: '難',
                    level: 'difficult',
                },
                {
                    text: '中',
                    level: 'middle',
                },
                {
                    text: '易',
                    level: 'easy',
                },
            ],
            currentCat: 'all',
            headers: [
                { text: '單元', value: 'unit', sortable: false },
                { text: '單元名稱', value: 'name', sortable: false },
                { text: '平均分數', value: 'avg', sortable: false },
            ],
        };
    },
    computed: {
        currentUnits: {
            get() {
                switch (this.currentCat) {
                    case 'difficult':
                        return this.difficultUnits;
                    case 'middle':
                        return this.middleUnits;
                    case 'easy':
                        return this.easyUnits;
                    default:
                        return this.allUnits;
                }
            },
            set() {},
        },
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
        },
        categorizeUnits(response) {
            this.difficultUnits = this.modifyUnits(response.difficult);
            this.middleUnits = this.modifyUnits(response.middle);
            this.easyUnits = this.modifyUnits(response.easy);

            this.allUnits = this.sortUnits([
                ...this.difficultUnits,
                ...this.middleUnits,
                ...this.easyUnits,
            ]);
        },
        modifyUnits(units) {
            return units.map((unit) => {
                return {
                    ...unit,
                    unit: `Unit ${unit.id}`,
                    avg: Math.floor(unit.unitAvg),
                };
            });
        },
        transformChartData(dataset) {
            const sortedDataset = this.sortUnits(dataset);
            return {
                ...this.chartData,
                rows: this.modifyUnits(sortedDataset),
            };
        },
        selectCat(level) {
            this.currentCat = level;
        },
        sortUnits(dataset) {
            return [...dataset].sort((a, b) => {
                return a.id - b.id;
            });
        },
    },
    async mounted() {
        const response = await apiExecutor.getUnitOverview();
        this.categorizeUnits(response);
        this.currentUnits = this.allUnits;
        this.chartData = this.transformChartData(this.allUnits);
    },
};
</script>

<style lang="scss" scoped></style>
