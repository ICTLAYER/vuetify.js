import nuxtStorage from 'nuxt-storage'

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
    if (nuxtStorage.localStorage.getData('localStoragePostListUpdatedAt')) {
    //   const localStoragePostListUpdatedAt = nuxtStorage.localStorage.getData('localStoragePostListUpdatedAt')

      const dataModifiedAt = await this.$axios.$get('http://localhost:3003/post_modified_at/1')
      const updatedAt = nuxtStorage.localStorage.getData('localStoragePostListUpdatedAt')
      if (dataModifiedAt !== updatedAt) {
        const postData = await this.$axios.$get('http://localhost:3003/posts')
        nuxtStorage.localStorage.setData('localStoragePostListUpdatedAt', dataModifiedAt)
        nuxtStorage.localStorage.setData('localStoragePostListContent', postData)
      }
    } else {
      const dataModifiedAt = await this.$axios.$get('http://localhost:3003/post_modified_at/1')
      const postData = await this.$axios.$get('http://localhost:3003/posts')
      nuxtStorage.localStorage.setData('localStoragePostListUpdatedAt', dataModifiedAt)
      nuxtStorage.localStorage.setData('localStoragePostListContent', postData)
      // console.log(postData)
    }
  }
}
