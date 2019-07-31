import { getCategories } from '../../api/category'

const state = {
    categories: []
}

const getters = {
    categories: (state) => {
        return state.categories
    }
}

const actions = {
    async init ({ commit }) {
        const result = await getCategories()
        if (result.data) {
            commit('setCategories', result.data)
            return true
        } else {
            return false
        }
    }
}

const mutations = {
    setCategories(state, categories) {
        state.categories = categories
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}