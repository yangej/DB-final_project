<template>
    <ve-chart
        :data="data"
        :legend-visible="false"
        :extend="chartSettings"
    ></ve-chart>
</template>

<script>
import VeChart from 'v-charts/lib/histogram';

export default {
    name: 'ScoreHistogram',
    components: { VeChart },
    props: {
        data: Object,
    },
    data() {
        return {
            chartSettings: {
                color: ['#5BC88F'],
                yAxis: {
                    min: 0,
                    max: 100,
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped></style>
