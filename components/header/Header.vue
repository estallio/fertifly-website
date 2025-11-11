<template>
  <div>
    <v-navigation-drawer
      class="mobile_menu menuMaxHeight"
      v-model="drawer"
      absolute
      temporary
      width="320"
    >
      <v-list-item class="pa-5">
        <div class="logo">
          <img
            style="max-width: 80%; height: auto"
            src="../../assets/images/logo/logo-white.svg"
            alt="Ecofly Logo"
            width="319"
            height="126"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="close-icon"
          icon
          @click="drawer = !drawer"
        >
          <ClosingIcon class="ownIcon" style="width:20px"/>
        </v-btn>
      </v-list-item>

      <v-list>

        <v-list-item
          :ripple="false"
          v-for="(navItem, i) in navList"
          :key="i"
          link
        >
          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link :to="localePath(navItem)" style="color: inherit">{{ $t(`header.navigation.${navItem}`) }}</nuxt-link>
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
      <nuxt-link :alt="this.$t('header.toHomepage')" :to="localePath('/')" class="logo">
        <img
          style="max-height: 100%; width: auto"
          src="../../assets/images/logo/logo-white.svg"
          alt="Ecofly Logo"
          width="319"
          height="126"
        />
      </nuxt-link>

      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-0 pa-0 menu_button"
        @click="drawer = !drawer"
        name="Menu Button"
        aria-label="Menu Button"
      >
        <MenuIcon class="ownIcon" style="width:25px"/>
      </v-btn>

      <v-toolbar-items class="menu_items height-auto">
        <nuxt-link v-for="(navItem, i) in navList" :key="i" :to="localePath(navItem)" style="color: inherit">
          <v-btn :ripple="false" text link>
            {{ $t(`header.navigation.${navItem}`) }}
          </v-btn>
        </nuxt-link>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
  import ClosingIcon from '../../assets/images/closing-icon.svg?inline'
  import MenuIcon from '../../assets/images/menu-icon.svg?inline'

  export default {
    components: {
      ClosingIcon,
      MenuIcon
    },
    data () {
      return {
        drawer: false,
        navList: [
          "index",
          "production",
          "applications",
          "about",
          "downloads",
          "contact"
        ]
      }
    },
  }
</script>

<style scoped>
  ul, ol {
    padding-left: 0;
  }

  a:hover, a:hover button {
    color: #FFFEF3 !important;
  }

  .ownIcon {
    fill: #FFFEF3;
  }

  .v-navigation-drawer--is-mobile .v-list-item .v-list-item__title {
    color: #3F3732;
  }

  .v-toolbar:not(.tab-toolbar) .v-btn--text {
    text-transform: none;
  }

  .v-toolbar .menu_items .v-btn {
    color: #FFFEF3 !important;
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  .v-toolbar .menu_items .v-btn::before{
    display: block;
    opacity: initial;
    content:"";
    position:absolute;
    z-index: -1;

    overflow: visible;
    inset: -10px;
    backdrop-filter: blur(14px) saturate(120%);
    background: rgba(255,255,255, 0);
    border-radius: 100px;
    mask-image: radial-gradient(80% 50% at 50% 50%, #000 50%, transparent 80%);
  }

  .v-toolbar .menu_items .v-btn:hover::before{
    mask-image: radial-gradient(80% 50% at 50% 50%, #FFF 50%, transparent 80%);
  }

  .menuMaxHeight {
    height: 101vh !important;
    overflow: scroll !important;
  }

  .svg-inline--fa.fa-w-20 {
    width: 1.25em;
  }

  .svg-inline--fa.fa-w-14 {
    width: 0.875em;
  }
</style>
