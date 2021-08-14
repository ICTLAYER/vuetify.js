<template>
  <div>
    <v-row dense>
      <ul>
        <li v-for="post in posts" :key="post.id">
          id : {{ post.id }} =>
          title: {{ post.title }}==
          description: {{ post.description }} ==
          email: {{ post.email }}
        </li>
      </ul>
    </v-row>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="postTitle"
              :rules="nameRules"
              :counter="10"
              label="Post title"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="postDescription"
              :rules="nameRules"
              :counter="10"
              label="Post Description"
              required
            />
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            />
          </v-col>
        </v-row>
      </v-container>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submitForm"
      >
        Submit
      </v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
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
      return this.$store.state.post_with_form.post_list
    }
  },
  created () {
    this.$store.dispatch('post_with_form/getPosts')
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
    }
  }
}
</script>
