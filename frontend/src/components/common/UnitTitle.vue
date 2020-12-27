<template>
    <div>
        <p class="primary--text font-weight-bold ma-0">{{ unit }}</p>
        <h3 class="headline font-weight-medium mb-7">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'UnitTitle',
    props: {
        unit: String,
        title: String,
    },
};
</script>

<style lang="scss" scoped></style>
