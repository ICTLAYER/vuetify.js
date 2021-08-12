<template>
  <div>
    <v-row>
      first install: npm i json-server
      <br>
      then create: server.js file with code
      <br>
      in package.json file: "jsonapi": "json-server -p 3003 ./db.json",
      <br>
      run "npm run jsonapi" first... then on different console "npm run dev"
      <br>
    </v-row>
    <v-row>
      <!-- <ul>
        <li v-for="article in articles" :key="article.id">
          {{ article.body }}
        </li>
      </ul> -->
      <v-btn class="ml-2 mt-5" outlined rounded small @click="post_to_json()">
        POST To Json
      </v-btn>
      <nuxt-content :document="page" />
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('db').fetch()
    console.log(page)

    return {
      page
    }
  },
  methods: {
    post_to_json () {
      this.$axios.$post('http://localhost:3003/comments', { id: 200, body: 'some content 200', postId: 6 })
    }
  }
}
</script>
