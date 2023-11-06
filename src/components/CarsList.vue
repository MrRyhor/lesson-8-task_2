<template>
    <div v-if = "carsData.length">
        <car-item v-for="car in carsData" :obj="car" :key="car.id" />
    </div>
    <div class="no-results" v-else>No Results</div>
</template>
<script>
import CarItem from './CarItem.vue'
export default {
    name: 'CarsList',
    components: {
        CarItem,
    },

    props: {
        carsData: {
            type: Array,
            default: () => [],
        },
    },
}
</script>
<style lang="scss" scoped>
    .no-results{
        text-transform: uppercase;
        font-weight: 700;
        margin: 0 auto;
        padding-top: 100px;
    }
</style>
