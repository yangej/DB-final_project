<template>
    <v-data-table
        :headers="tableHeaders"
        :items="items"
        class="shadow"
        hide-default-footer
    >
        <template v-slot:item.action="{ item }">
            <v-btn text @click="onClick(item)">
                <span class="font-weight-medium body-1">查看狀況</span>
                <v-icon class="primary--text ml-2">mdi-chevron-right</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
export default {
    name: 'CustomTable',
    props: {
        headers: Array,
        items: Array,
        hasAction: { default: false, type: Boolean },
    },
    computed: {
        tableHeaders() {
            return this.hasAction
                ? [
                      ...this.headers,
                      { text: '操作', value: 'action', sortable: false },
                  ]
                : this.headers;
        },
    },
    methods: {
        onClick(item) {
            this.$emit('button-click', item);
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep table {
    border-top-left-radius: 5px !important;
    border-top-right-radius: 5px !important;
    overflow: hidden;
}

::v-deep .v-data-table-header {
    background-color: #5bc88f;

    th {
        padding: 16px 30px !important;
        border-bottom: 1px solid #efefef !important;
        span {
            font-size: 16px;
            color: white !important;
        }
    }
}

::v-deep td {
    border-bottom: 1px solid #efefef !important;
    padding: 16px 30px !important;
    font-size: 16px !important;
}
</style>
