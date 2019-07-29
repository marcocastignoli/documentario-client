// initial state
const state = {
    logged: null
}

// getters
const getters = {
    user: (state) => {
        return state.logged
    }
}

// actions
const actions = {
    login({ commit }, user) {
        commit('setLoggedUser', user)
    },

    logout({ commit }) {
        commit('setLoggedUser', null)
    }
}

// mutations
const mutations = {
    setLoggedUser(state, user) {
        state.logged = user
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}