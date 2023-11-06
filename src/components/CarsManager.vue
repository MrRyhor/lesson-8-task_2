<template>
    <div class="manager">
        <cars-filter />
        <cars-list :cars-data="getFilteredByYearsValCarsList" />
    </div>
</template>
<script>
import CarsFilter from './CarsFilter.vue'
import CarsList from './CarsList.vue'
import { cars } from '../constants/data'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CarsManager',
    components: {
        CarsFilter,
        CarsList,
    },
    computed: {
        ...mapGetters(['getFilteredByYearsValCarsList']),
    },

    methods: {
        ...mapActions(['setCarsList']),
    },
    created() {
        this.setCarsList(cars)
    },
}
</script>
<style lang="scss" scoped>
.manager {
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 10px;
   padding: 20px;
}
</style>
