const cookieparser = process.server ? require('cookieparser') : null

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser(state, data) {
    state.user = data
  }
}

export const actions = {
  nuxtServeInit ({commit}, {req}) {
    let user = null
    try {
      if (req.header.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        user = JSON.parse(parsed.user)
      }
    } catch (error) {
      
    }
    commit('setUser', user)
  }
}