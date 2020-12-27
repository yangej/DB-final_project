<template>
    <ve-chart
        :data="dataset"
        :legend-visible="false"
        :extend="chartSettings"
    ></ve-chart>
</template>

<script>
import VeChart from 'v-charts/lib/bar';

export default {
    name: 'ScoreBarChart',
    components: { VeChart },
    props: {
        dataset: Object,
    },
    data() {
        let self = this;
        return {
            students: '',
            chartSettings: {
                color: ['#5BC88F'],
                grid: {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            return self.students.data[params.dataIndex];
                        },
                    },
                },
                xAxis: {
                    interval: 1,
                },
                series(item) {
                    self.students = item[1];
                    return item;
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
