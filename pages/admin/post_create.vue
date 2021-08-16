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

        <!-- <v-select
          v-model="postCategoryData"
          :items="postCategoryDataOptions"
          :rules="[v => !!v || 'Post featured is required']"
          label="Post Category"
          required
        /> -->

        <treeselect v-model="postCategoryValue" :multiple="false" :options="postCategoryValueOptions" placeholder="Select Category" />
        <br>
        <v-file-input
          label="File input"
          outlined
          dense
        />
        <br>
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
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
// import postCategory from '../../content/postCategory/post_category.json' // for tree less options
import postCategoryTreeView from '../../content/postCategory/post_category_treeview.json'
export default {
  components: { Treeselect },
  data: () => ({
    postCategoryValue: null, // for treeselect
    postCategoryValueOptions: [], // for treeselect
    categoryTreeView: postCategoryTreeView, // for treeselect
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
    // category: postCategory,
    // postCategoryData: null,
    // postCategoryDataOptions: [

    // ],
    postContent: ''
  }),
  created () {
    this.$store.dispatch('posts/posts/getPosts')
    // for (const i in this.category.post_category) {
    //   this.postCategoryDataOptions.push(this.category.post_category[i].post_category_name)
    // }
    for (const i in this.categoryTreeView.post_category) {
      this.postCategoryValueOptions.push({
        id: this.categoryTreeView.post_category[i].id,
        label: this.categoryTreeView.post_category[i].label,
        children: this.categoryTreeView.post_category[i].children
      })
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
          postCategory: this.postCategoryValue
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
