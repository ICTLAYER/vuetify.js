<template>
  <div>
    <v-row dense>
      <ul>
        <li v-for="post in posts" :key="post.id">
          id : {{ post.id }} =>
          <br>
          title: {{ post.postTitle }}==

          description: <div v-html="post.postContent" /> ==
          <!-- <client-only>
            <quill-editor
              ref="editor"
              v-model="post.postContent"
            />
          </client-only> -->
          <br>
          postSeoUrl: {{ post.postSeoUrl }}
          <img :src="post.postImage" width="100px" alt="">
          ================================================================================================================
        </li>
      </ul>
    </v-row>
  </div>
</template>
<script>
import nuxtStorage from 'nuxt-storage'

export default {
  data: () => ({

  }),
  computed: {
    posts () {
      return nuxtStorage.localStorage.getData('localStoragePostListContent')
    }
  },
  created () {
    this.$store.dispatch('localstorage/localstorage_content/getPosts')
  },
  methods: {
    submitForm () {
      const lastIndex = this.posts.length
      const incrementedId = this.posts[lastIndex - 1].id + 1

      const posts = {
        id: incrementedId,
        title: this.postTitle,
        description: this.postDescription,
        email: this.email
      }
      this.$axios.$post('http://localhost:3003/posts', posts)
      this.$store.dispatch('post_with_form/getPosts')
      window.location.reload()
    }
  }
}
</script>
