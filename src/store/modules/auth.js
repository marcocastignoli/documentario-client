import { login } from '../../api/auth'

const state = {
    logged: null
}

const getters = {
    user: (state) => {
        return state.logged
    }
}

const actions = {
    async login({ commit }, { email, password }) {
        const result = await login({ email, password })
        if (result.success) {
            commit('setLoggedUser', {
                username: result.user.username,
                role: result.user.role,
                email: result.user.email,
                id: result.user.id,
                token: result.token
            })
            return true
        } else {
            return false
        }
    },

    logout({ commit }) {
        commit('setLoggedUser', null)
    }
}

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