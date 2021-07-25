<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="yellow"
      fixed
      app
    >
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
        <v-list-item-action color="blue" icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-list-item-action>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" color="gray" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <NuxtLink v-if="$device.isDesktop" to="/">
        <img v-toolbar-title src="/v.png" width="20px">
      </NuxtLink>
      <v-spacer />
      <SearchBox />
      <v-spacer />
      <nuxt-link :to="switchLocalePath('en')">
        EN |
      </nuxt-link>
      <nuxt-link :to="switchLocalePath('bn')">
        | BN
      </nuxt-link>
      <v-btn color="black" icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-dialpad</v-icon>
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
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Swiper',
          to: '/swiper'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'ICT Layer'
    }
  },
  head () {
    return this.$nuxtI18nHead()
  }
}
</script>
