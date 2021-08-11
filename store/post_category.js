// state
export const state = () => ({
  post_list: []
})

// mutations

export const mutations = {
  setPostListCategoryChild (state, posts) {
    console.log('mutation entered')

    state.post_list = posts

    console.log(state.post_list)
  }
}

// actions

export const actions = {
  async getPosts ({ commit }) {
    await this.$axios.$get('http://localhost:8080/api/post-api-all').then(res => commit('setPostList', res))
    // commit('setPostList', items)
    // console.log(items)
  },
  async getPostsByCategoryChild ({ commit }, data) {
    console.log(data)

    await this.$axios.$get(`http://localhost:8080/api/post-category-api-child-chain-post-list/${data.parent_category}/${data.limit}/${data.start}`).then(res => commit('setPostListCategoryChild', res))

    // commit('setPostList', items)
    // console.log(items)
  }
}
