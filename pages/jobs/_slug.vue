<template>
  <div>


    <!-- Start List Style  -->
    <div class="rn-list-style rn-section-gap bg_color--1">
      <v-container>
        <v-row>
          <!-- Start Single List Style  -->
          <v-col
            cols="12"
            v-for="(singleList, i) in listItemContent"
            :key="i"
            :class="singleList.class"
          >
            <div class="list-style-inner">
              <h3 class="fontWeight500">{{ singleList.title }}</h3>
              <p>
                {{ singleList.desc }}
              </p>
              <ul class="list-style--1">
                <li v-for="list in singleList.listContent" :key="list.id">
                  <i v-html="iconSvg(list.icon)"></i>
                  {{ list.desc }}
                </li>
              </ul>
            </div>
          </v-col>
          <!-- End Single List Style  -->
        </v-row>
      </v-container>
    </div>
    <!-- End List Style  -->

  </div>
</template>

<script>
export default {
  computed: {
    listItemContent: [
      {
        class: "",
        title: "List Style Default",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                totam.`,
        listContent: [
          {
            id: 1,
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            id: 2,
            icon: "check",
            desc: ` Fast-Track Your business`,
          },
          {
            id: 3,
            icon: "check",
            desc: `Lies And Damn Lies About business`,
          },
          {
            id: 4,
            icon: "check",
            desc: `The Ultimate Deal On business`,
          },
        ],
      },
      {
        class: "mt_sm--30",
        title: "List Style Default",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                totam.`,
        listContent: [
          {
            id: 1,
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            id: 2,
            icon: "check",
            desc: ` Fast-Track Your business`,
          },
          {
            id: 3,
            icon: "check",
            desc: `Lies And Damn Lies About business`,
          },
          {
            id: 4,
            icon: "check",
            desc: `The Ultimate Deal On business`,
          },
        ],
      },
      {
        class: "mt_sm--30 mt_md--30",
        title: "List Style Default",
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
                totam.`,
        listContent: [
          {
            id: 1,
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            id: 2,
            icon: "check",
            desc: ` Fast-Track Your business`,
          },
          {
            id: 3,
            icon: "check",
            desc: `Lies And Damn Lies About business`,
          },
          {
            id: 4,
            icon: "check",
            desc: `The Ultimate Deal On business`,
          },
        ],
      },
    ],
  },
  async asyncData ({ app, params, store, payload }) {
    console.log('asyncData', params, payload);

    if (payload?.routeParams) {
      await store.dispatch('i18n/setRouteParams', payload.routeParams);
    }

    return payload
  },
  head() {
    // TODO: tooltip bei englisch, dass diese seite nur in deutsch verfügbar ist
    return {
      link: [
        {
          rel: 'canonical',
          href: config.hostname + '/de/jobs'
        }
      ]
    }
  },
  nuxtI18n: {
    paths: {
      en: '/jobs/:slug',
      de: '/jobs/:slug'
    }
  }
}
</script>
