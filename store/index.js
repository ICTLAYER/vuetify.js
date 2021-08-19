import nuxtStorage from 'nuxt-storage'
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

    nuxtStorage.localStorage.setData('localStoragePostList', state.post_list)

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
  async getPostsLocalStorage ({ commit }) {
    if (nuxtStorage.localStorage.getData('localStoragePostListEtag')) {
      const localStoragePostListEtag = {
        localStoragePostListEtag: nuxtStorage.localStorage.getData('localStoragePostListEtag')
      }
      const data = this.$axios.$post('http://localhost:8080/api/post-api-all', localStoragePostListEtag)
      if (data.length > 0) {
        console.log('updated')

        nuxtStorage.localStorage.setData('localStoragePostList', data)
      }
      // console.log(data)
    } else {
      const postData = await this.$axios.$get('http://localhost:8080/api/post-api-all')
      const etag = postData.pop()
      nuxtStorage.localStorage.setData('localStoragePostListEtag', etag)
      nuxtStorage.localStorage.setData('localStoragePostList', postData)
      // console.log(postData)
    }

    // commit('setPostList', items)
    // console.log(etag)
  },
  async getPostsPagination ({ commit }, pagination) {
    console.log(pagination)

    await this.$axios.$get(`http://localhost:8080/api/post-api-pagination/${pagination.limit}/${pagination.start}`).then(res => commit('setPostListPagination', res))

    // commit('setPostList', items)
    // console.log(items)
  }
}
