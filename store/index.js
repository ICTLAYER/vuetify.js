// state
export const state = () => ({
  post_list: [],
  post_list_pagination: [],
  pagination_start: 1,
  pagination_limit: 5
})

// mutations

export const mutations = {
  setPostList (state, posts) {
    console.log('mutation entered')

    state.post_list = posts

    console.log(state.post_list)
  },
  setPostListPagination (state, posts) {
    console.log('mutation entered')

    state.post_list_pagination = posts

    console.log(state.post_list_pagination)
  }
}

// actions

export const actions = {
  async getPosts ({ commit }) {
    await this.$axios.$get('http://localhost:8080/api/post-api-all').then(res => commit('setPostList', res))
    // commit('setPostList', items)
    // console.log(items)
  },
  async getPostsPagination ({ commit }, pagination) {
    console.log(pagination)

    await this.$axios.$get(`http://localhost:8080/api/post-api-pagination/${pagination.limit}/${pagination.start}`).then(res => commit('setPostListPagination', res))

    // commit('setPostList', items)
    // console.log(items)
  }
}
