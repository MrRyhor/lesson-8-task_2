import { createStore } from 'vuex'

export default createStore({
    state: {
        categoryVal: null,
        bodyTypeVal: [],
        brandVal: null,
        modelVal: null,
        yearUpVal: null,
        yearToVal: null,
        carsList: [],
    },
    getters: {
        getCategoryVal: ({ categoryVal }) => categoryVal,
        getBodyTypeVal: ({ bodyTypeVal }) => bodyTypeVal,
        getBrandVal: ({ brandVal }) => brandVal,
        getModelVal: ({ modelVal }) => modelVal,
        getYearUpVal: ({ yearUpVal }) => yearUpVal,
        getYearToVal: ({ yearToVal }) => yearToVal,
        getCarsList: ({ carsList }) => carsList,
        getFilteredByCategoryCarsList: ({ carsList, categoryVal }) => {
            if (!categoryVal) return carsList
            return carsList.filter((car) => car.category === categoryVal)
        },
        getFilteredByBodyTypeCarsList: (state, getters) => {
            const list = getters.getFilteredByCategoryCarsList
            if (!state.bodyTypeVal.length) return list
            return list.filter((car) => state.bodyTypeVal.includes(car.bodyType))
        },
        getFilteredByBrandCarsList: (state, getters) => {
            const list = getters.getFilteredByBodyTypeCarsList
            if (!state.brandVal) return list
            return list.filter((el) => el.make === state.brandVal)
        },
        getFilteredByModelValCarsList: (state, getters) => {
            const list = getters.getFilteredByBrandCarsList
            if (!state.modelVal) return list
            return list.filter((el) => el.model === state.modelVal)
        },
        getFilteredByYearsValCarsList: (state, getters) => {
            const list = getters.getFilteredByModelValCarsList
            if (!state.yearUpVal && !state.yearToVal) return list
            else if (state.yearUpVal && !state.yearToVal) return list.filter((el) => el.year === state.yearUpVal)
            else if (!state.yearUpVal && state.yearToVal) return list.filter((el) => el.year === state.yearToVal)
            else return list.filter((el) => el.year >= state.yearUpVal && el.year <= state.yearToVal)
        },
    },
    mutations: {
        setCategoryVal(state, val) {
            state.categoryVal = val
        },
        setBodyTypeVal(state, val) {
            state.bodyTypeVal = val
        },
        setBrandVal(state, val) {
            state.brandVal = val
        },
        setModelVal(state, val) {
            state.modelVal = val
        },
        setYearUpVal(state, val) {
            state.yearUpVal = val
        },
        setYearToVal(state, val) {
            state.yearToVal = val
        },
        setCarsList(state, cars) {
            state.carsList = cars
        },
    },
    actions: {
        setCategoryVal({ commit }, val) {
            commit('setCategoryVal', val)
        },
        setBodyTypeVal({ commit }, val) {
            commit('setBodyTypeVal', val)
        },
        setBrandVal({ commit }, val) {
            commit('setBrandVal', val)
        },
        setModelVal({ commit }, val) {
            commit('setModelVal', val)
        },
        setYearUpVal({ commit }, val) {
            commit('setYearUpVal', val)
        },
        setYearToVal({ commit }, val) {
            commit('setYearToVal', val)
        },
        setCarsList({ commit }, cars) {
            commit('setCarsList', cars)
        },
    },
    modules: {},
})
