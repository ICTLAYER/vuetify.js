<template>
  <v-row>
    <v-col offset-md="3" md="4">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="postTitle"
          :counter="60"
          :rules="postTitleRules"
          label="Post Title"
          required
        />

        <v-text-field
          v-model="postTitleOtherLang"
          :rules="postTitleOtherLangRules"
          label="Post Title Other Lang"
          required
        />
        <v-text-field
          v-model="postSeoUrl"
          :rules="postSeoUrlRules"
          label="Post Seo URL"
          required
        />

        <v-textarea
          v-model="postContent"
          background-color="amber lighten-4"
          color="orange orange-darken-4"
          label="Post content"
        />

        <v-select
          v-model="postFeatured"
          :items="postFeaturedOptions"
          :rules="[v => !!v || 'Post featured is required']"
          label="Post Featured"
          required
        />

        <v-select
          v-model="postCategoryData"
          :items="postCategoryDataOptions"
          :rules="[v => !!v || 'Post featured is required']"
          label="Post Category"
          required
        />

        <v-select
          v-model="items"
          :items="items"
          :rules="[v => !!v || 'Post featured is required']"
          label="Post Category"
          required
        />

        <v-treeview :items="items" />

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Submit
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>
<script>
import postCategory from '../../content/postCategory/post_category.json'
export default {
  data: () => ({
    // --------------------------------------
    items: [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' }
        ]
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'bootstrap : ts' }
                ]
              }
            ]
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' }
        ]
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' }
            ]
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' }
        ]
      }
    ],
    // --------------------------------------
    category: postCategory,
    valid: false,
    postTitle: '',
    postTitleRules: [
      v => !!v || 'Post Title is required',
      v => (v && v.length <= 60) || 'Post title must be less than 60 characters'
    ],
    postTitleOtherLang: '',
    postTitleOtherLangRules: [
      v => !!v || 'Post Title is required',
      v => (v && v.length <= 60) || 'Post title must be less than 60 characters'
    ],
    postSeoUrl: '',
    postSeoUrlRules: [
      v => !!v || 'Post SEO URL is required',
      v => (v && v.length <= 60) || 'Post SEO URL must be less than 60 characters'
    ],
    postFeatured: null,
    postFeaturedOptions: [
      'Yes',
      'No'
    ],
    postCategoryData: null,
    postCategoryDataOptions: [

    ],
    postContent: ''
  }),
  created () {
    this.$store.dispatch('posts/posts/getPosts')
    for (const i in this.category.post_category) {
      this.postCategoryDataOptions.push(this.category.post_category[i].post_category_name)
    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
      const validForm = this.$refs.form.validate()
      if (validForm) {
        const lastIndex = this.$store.state.posts.posts.post_list.length
        let incrementedId = 0
        if (lastIndex === 0) {
          incrementedId = 0
        } else {
          incrementedId = this.$store.state.posts.posts.post_list[lastIndex - 1].id + 1
        }

        const posts = {
          id: incrementedId,
          postTitle: this.postTitle,
          postTitleOtherLang: this.postTitleOtherLang,
          postSeoUrl: this.postSeoUrl,
          postFeatured: this.postFeatured,
          postContent: this.postContent,
          postCategory: this.postCategoryData
        }
        this.$axios.$post('http://localhost:3003/posts', posts)
        window.location.reload()
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
