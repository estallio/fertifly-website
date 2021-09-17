<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up"
      v-model="drawer"
      absolute
      temporary
      width="320"
    >
      <v-list-item class="pa-5">
        <div class="logo">
          <img
            style="max-width: 80%"
            src="../../assets/images/logo/logo.png"
            alt="Creative Agency Logo"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="close-icon"
          icon
          @click="drawer = !drawer"
        >
          <ClosingIcon class="ownIcon" style="width:20px" />
        </v-btn>
      </v-list-item>

      <v-list>

        <v-list-item
          :ripple="false"
          v-for="item in items"
          :key="item.title"
          link
        >
            <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link :to="localePath(item.to)" style="color: inherit">{{ item.title }}</nuxt-link>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      dark
      elevation="0"
      color="transparent"
      absolute
      class="default-header"
    >
      <nuxt-link :to="localePath('/')" class="logo">
        <img style="max-height: 100%;" src="../../assets/images/logo/logo.png"/>
      </nuxt-link>

      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-0 pa-0 hidden-md-and-up"
        @click="drawer = !drawer"
      >
        <MenuIcon class="ownIcon" style="width:25px" />
      </v-btn>

      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto">
        <nuxt-link v-for="item in items" :key="item.title" :to="localePath(item.to)" style="color: inherit">
          <v-btn :ripple="false" text link>
            {{ item.title }}
          </v-btn>
        </nuxt-link>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
  import ClosingIcon from '../../assets/images/closing-icon.svg?inline';
  import MenuIcon from '../../assets/images/menu-icon.svg?inline';

  export default {
    components: {
      ClosingIcon,
      MenuIcon
    },
    data () {
      return {
        drawer: false,
        items: this.$t('header.menu')
      }
    }
  }
</script>
<style>
  .ownIcon {
    fill: #444;
  }
  .v-navigation-drawer--is-mobile .v-list-item .v-list-item__title {
    color: #444;
  }
</style>
