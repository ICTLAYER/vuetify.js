<template>
  <div>
    <v-row>
      first install: npm i json-server
      <br>
      in package.json file: "jsonapi": "json-server -p 3003 ./db.json",
      <br>
      run "npm run jsonapi" first... then on different console "npm run dev"
      <br>
    </v-row>
    <v-row>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
        </li>
      </ul>
      <v-btn class="ml-2 mt-5" outlined rounded small @click="post_to_json()">
        POST To Json
      </v-btn>
      <posts>
        {{ posts.title }}
        <nuxt-content :document="posts" />
      </posts>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('db').only('posts').fetch()
    // console.log(posts)
    // const posts = await $content('index').fetch()

    return {
      posts
    }
  },
  methods: {
    post_to_json () {
      this.$axios.$post('http://localhost:3003/comments', { id: 3000, body: 'some content 3000', postId: 6 })
    }
  }
}
</script>
