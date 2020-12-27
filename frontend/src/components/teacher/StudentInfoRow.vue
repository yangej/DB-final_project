<template>
    <v-row>
        <v-col cols="9" class="d-flex justify-space-between pr-9 align-center">
            <div class="px-9">
                <h5 class="caption mb-2">學號</h5>
                <p class="body-1 font-weight-medium">{{ infos.id }}</p>
            </div>
            <div class="px-9">
                <h5 class="caption mb-2">姓名</h5>
                <p class="body-1 font-weight-medium">
                    {{ infos.name }}
                </p>
            </div>
            <div class="px-9">
                <h5 class="caption mb-2">系所</h5>
                <p class="body-1 font-weight-medium">
                    {{ infos.department }}
                </p>
            </div>
        </v-col>
        <v-col cols="3" class="pl-16 border-left">
            <h5 class="caption mb-2">平均分數</h5>
            <p class="display-3 font-weight-medium primary--text">
                {{ infos.average }}
            </p>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'StudentInfoRow',
    props: {
        infos: Object,
    },
};
</script>
<style lang="scss" scoped>
.border-left {
    border-left: 1px solid #efefef;
}
</style>
