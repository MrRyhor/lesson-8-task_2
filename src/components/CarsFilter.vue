<template>
    <div class="filter-container">
        <div class="category">
            <span>Car category:</span>
            <select v-model="choosenCategory">
                <option v-for="cat in categoriesList" :value="cat" :key="cat">{{ cat }}</option>
            </select>
        </div>
        <div class="body-type">
            <span>Body Type:</span>
            <label v-for="body in bodyTypesList" :key="body"
                >
                <input type="checkbox" :value="body" v-model="choosenBodyType" />
                {{ body }}
            </label>
        </div>
        <div class="brand">
            <span>Brand:</span>
            <select v-model="choosenBrand">
                <option v-for="brand in brandsList" :value="brand" :key="brand">{{ brand }}</option>
            </select>
        </div>
        <div class="model">
            <span>Model:</span>
            <select v-model="choosenModel">
                <option v-for="model in modelsList" :value="model" :key="model">{{ model }}</option>
            </select>
        </div>
        <div class="years">
            <span>Years:</span>
            <div class="years-container">
                <label
                    >Up:
                    <select v-model="choosenUpYear">
                        <option v-for="year in yearsList" :value="year" :key="year">{{ year }}</option>
                    </select>
                </label>
                <label
                    >To:
                    <select v-model="choosenToYear">
                        <option v-for="year in yearsList" :value="year" :key="year">{{ year }}</option>
                    </select>
                </label>
            </div>
        </div>
    </div>
</template>
<script>
import { categories, years, bodyTypes, brands, models } from '../constants/data'
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CarsFilter',

    computed: {
        ...mapGetters([
            'getCategoryVal',
            'getBodyTypeVal',
            'getBrandVal',
            'getModelVal',
            'getYearUpVal',
            'getYearToVal',
        ]),
        categoriesList() {
            return categories
        },
        yearsList() {
            return years
        },
        bodyTypesList() {
            return bodyTypes
        },
        brandsList() {
            return brands
        },
        modelsList() {
            return models
        },

        choosenCategory: {
            get() {
                return this.getCategoryVal
            },
            set(val) {
                return this.setCategoryVal(val)
            },
        },
        choosenBodyType: {
            get() {
                return this.getBodyTypeVal
            },
            set(val) {
                return this.setBodyTypeVal(val)
            },
        },
        choosenBrand: {
            get() {
                return this.getBrandVal
            },
            set(val) {
                return this.setBrandVal(val)
            },
        },
        choosenModel: {
            get() {
                return this.getModelVal
            },
            set(val) {
                return this.setModelVal(val)
            },
        },
        choosenUpYear: {
            get() {
                return this.getYearUpVal
            },
            set(val) {
                return this.setYearUpVal(val)
            },
        },
        choosenToYear: {
            get() {
                return this.getYearToVal
            },
            set(val) {
                return this.setYearToVal(val)
            },
        },
    },
    methods: {
        ...mapActions([
            'setCategoryVal',
            'setBodyTypeVal',
            'setBrandVal',
            'setModelVal',
            'setYearUpVal',
            'setYearToVal',
        ]),
    },
}
</script>
<style lang="scss" scoped>
.filter-container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    background-color: rgb(168, 165, 165);

    & .category,
    .body-type,
    .brand,
    .model,
    .years {
        padding: 10px;
        display: flex;
        flex-direction: column;               
        span {
            font-weight: 700;
        }
    }
    .years-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>
