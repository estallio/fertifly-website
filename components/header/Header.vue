<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up menuMaxHeight"
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
          <ClosingIcon class="ownIcon" style="width:20px"/>
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

      <div style="text-align: center">
      <font-awesome-icon icon="language" style="font-size: 25px;"/>

      <ul>
        <li
          v-for="locale in availableLocales"
          :key="locale.code"
          class="lang-switcher"
        >
          <nuxt-link :to="switchLocalePath(locale.code)" :style="locale.code === $i18n.locale ? 'color: #006C33' : 'color: inherit'">{{ locale.name }}</nuxt-link>
        </li>
      </ul>
      </div>
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
        <MenuIcon class="ownIcon" style="width:25px"/>
      </v-btn>

      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto">
        <nuxt-link v-for="item in items" :key="item.title" :to="localePath(item.to)" style="color: inherit">
          <v-btn :ripple="false" text link>
            {{ item.title }}
          </v-btn>
        </nuxt-link>

        <div class="language-selector" :class="languageSwitchOpen ? 'open' : ''">
          <button
            type="button"
            v-closable="{
              exclude: ['language-chooser-button', 'language-chooser-menu'],
              handler: 'onClose'
            }"
            ref="language-chooser-button"
            @click="languageSwitchOpen = !languageSwitchOpen"
          >
            <font-awesome-icon icon="language" />
            <font-awesome-icon style="margin-left:5px" :icon="languageSwitchOpen ? 'chevron-up' : 'chevron-down'" />
          </button>
          <ul ref="language-chooser-menu">
            <li v-for="locale in availableLocales"
                :key="locale.code">
              <nuxt-link
              :to="switchLocalePath(locale.code)"
              :style="locale.code === $i18n.locale ? 'color: #006C33' : 'color: inherit'">
                {{ locale.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
  import ClosingIcon from '../../assets/images/closing-icon.svg?inline'
  import MenuIcon from '../../assets/images/menu-icon.svg?inline'

  export default {
    computed: {
      availableLocales () {
        return this.$i18n.locales
      }
    },
    components: {
      ClosingIcon,
      MenuIcon
    },
    data () {
      return {
        languageSwitchOpen: false,
        drawer: false,
        items: this.$t('header.menu')
      }
    },
    methods: {
      onClose () {
        this.languageSwitchOpen = false
      }
    }
  }
</script>
<style>
  a:hover, a:hover button {
    color: #006C33 !important;
  }

  .ownIcon {
    fill: #444;
  }

  .v-navigation-drawer--is-mobile .v-list-item .v-list-item__title {
    color: #444;
  }

  .v-toolbar:not(.tab-toolbar) .v-btn--text {
    text-transform: none;
  }

  .lang-switcher {
    display: inline-block;
    padding-bottom: 80px;
  }

  .lang-switcher a:hover {
    color: #006C33 !important;
  }

  .lang-switcher::before {
    content: '/';
    color: #444;
    margin-left: 8px;
    margin-right: 8px;
  }

  .lang-switcher:first-child::before {
    display: none;
  }

  .menuMaxHeight {
    height: 100vh !important;
    overflow: scroll !important;
  }

  .language-selector {
    color: #444;
    font-size: 16px;
    min-width: 0;
    margin: 0 15px;
    padding: 0 5px;
    border: 1px solid rgba(68,68,68,0.4);
    border-radius: 4px;
    position: relative;
  }

  .language-selector.open {
    padding-bottom: 1px;
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .language-selector a:hover {
    color: #006C33 !important;
  }

  .language-selector li {
    list-style-type: none;
    color: inherit;
    font-size: inherit;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .language-selector ul {
    display: none;
    position: absolute;
    right: -1px;
    margin-top: 0;
    border: 1px solid rgba(68,68,68,0.4);
    border-radius: 5px 0 4px 5px;
    padding: 5px 20px;
  }

  .language-selector.open ul {
    display: block;
  }
</style>
