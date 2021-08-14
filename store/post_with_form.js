// state
export const state = () => ({
  post_list: []
})

// mutations

export const mutations = {
  setPostList (state, posts) {
    console.log('mutation entered')

    state.post_list = posts

    console.log(state.post_list)
  }
}

// actions

export const actions = {
  async getPosts ({ commit }) {
    await this.$axios.$get('http://localhost:3003/posts').then(res => commit('setPostList', res))
    // commit('setPostList', items)
    // console.log(items)
  }
}
