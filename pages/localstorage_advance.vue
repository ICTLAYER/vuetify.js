<template>
  <div>
    <v-row dense>
      <ul>
        <li v-for="post in posts" :key="post.id">
          id : {{ post.post_id }} =>
          <br>
          title: {{ post.post_title }}==
          <br>
          description: {{ post.post_contents }} ==
          <!-- <client-only>
            <quill-editor
              ref="editor"
              v-model="post.postContent"
            />
          </client-only> -->
          <br>
          postSeoUrl: {{ post.post_url }}
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
    // category: postCategory,

  }),
  computed: {
    posts () {
      return nuxtStorage.localStorage.getData('localStoragePostList')
    }
  },
  created () {
    this.$store.dispatch('post_with_form/getPosts')
  },
  methods: {
    submitForm () {

    }
  }
}
</script>
