<template>
  <v-app>
    <!-- Left Nav Sart -->
    <!-- Left nav for desktop start  -->
    <v-navigation-drawer
      v-if="$device.isDesktop"
      v-model="drawer"
      :mini-variant="true"
      :clipped="clipped"
      color="warning"
      fixed
      app
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-btn
          icon
        >
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list
        nav
        dense
      >
        <NuxtLink to="/inspire">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
        </NuxtLink>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-switch
            v-model="$vuetify.theme.dark"
            block
            inset
            title="Switch Dark or Ligh"
          />
        </div>
      </template>
    </v-navigation-drawer>
    <!-- Left nav for desktop end  -->
    <!-- Left nav for mobile start  -->
    <v-navigation-drawer
      v-if="$device.isMobile"
      v-model="drawer"
      :mini-variant="false"
      :clipped="clipped"
      color="yellow"
      app
    >
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
        </v-list-item-avatar>
        <v-list-item-title>John Leider</v-list-item-title>
        <v-btn
          icon
        >
          <v-icon>mdi-logout-variant</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list
        nav
        dense
      >
        <NuxtLink to="/inspire">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Files</v-list-item-title>
          </v-list-item>
        </NuxtLink>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn large block rounded>
            Light
            <v-switch
              v-model="$vuetify.theme.dark"
              block
              class="pl-3 pt-2"
              inset
              title="Switch Dark or Ligh"
            /> Dark
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <!-- Left nav for mobile end  -->
    <!-- Left Nav End -->
    <v-app-bar :clipped-left="clipped" color="gray" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <NuxtLink v-if="$device.isDesktop" to="/">
        <img v-toolbar-title src="/v.png" width="20px">
      </NuxtLink> -->
      <v-spacer />
      <SearchBox />
      <v-spacer />
      <v-menu transition="slide-x-transition" offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            icon
            color="pink"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn color="black" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-bell-alert-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <!-- right drawer start -->
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      app
      clipped
      temporary
      fixed
    >
      <v-app-bar>
        <v-toolbar-title>Notification</v-toolbar-title>
        <v-spacer />
      </v-app-bar>
      <Notification />
    </v-navigation-drawer>
    <!-- right drawer end -->
    <FooterNav />
  </v-app>
</template>

<script>
import FooterNav from '~/components/FooterNav.vue'
import Notification from '~/components/Notification.vue'
import SearchBox from '~/components/SearchBox.vue'
export default {
  components: {
    FooterNav,
    Notification,
    SearchBox
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Grid',
          to: '/grid'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'List',
          to: '/list'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Post List',
          to: '/postlist'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Infinity List',
          to: '/infinitylist'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'API Post List',
          to: '/api_post'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'API Post List New',
          to: '/api_post_new_two'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'API Post List By Category ',
          to: '/api_post_category_post_list'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'API Fetch with Store ',
          to: '/api_fetch_with_store'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Tailwindui List',
          to: '/tailwindui'
        }
      ],
      right: true,
      rightDrawer: false,
      title: 'ICT Layer'
    }
  },
  head () {
    // return this.$nuxtI18nHead()
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  created () {
    console.log('created')

    this.$store.dispatch('getPosts')
    // const posts = this.$store.post_list

    // console.log(posts)
  }
}
</script>
