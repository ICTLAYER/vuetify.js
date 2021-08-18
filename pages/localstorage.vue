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
    valid: false,
    postTitle: '',
    postDescription: '',
    nameRules: [
      v => !!v || 'required',
      v => v.length <= 30 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    posts () {
      return nuxtStorage.localStorage.getData('localStoragePostList')
    }
  },
  created () {
    console.log('localStorage')

    console.log(nuxtStorage.localStorage.getData('localStoragePostList'))

    this.$store.dispatch('post_with_form/getPosts')
  },
  methods: {
    submitForm () {
    //   this.$axios.$get('http://localhost:3000/api/posts').then(res => console.log(res))

      //   const lastIndex = this.posts.length
      //   const incrementedId = this.posts[lastIndex - 1].id + 1

    //   const posts = {
    //     id: incrementedId,
    //     title: this.postTitle,
    //     description: this.postDescription,
    //     email: this.email
    //   }
    //   this.$axios.$post('http://localhost:3003/posts', posts)
    //   this.$store.dispatch('post_with_form/getPosts')
    //   window.location.reload()
    }
  }
}
</script>
