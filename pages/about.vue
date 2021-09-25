<template>
  <div>

    <!-- Start Breadcrump Area  -->
    <div class='breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--pattern'>
      <v-container>
        <v-row>
          <v-col lg='12'>
            <div class='breadcrumb-inner pt--100 pt_sm--40 pt_md--50'>
              <h1 class='heading-title'>{{ $t('about.title') }}</h1>
              <ul class='page-list'>
                <li v-for='(item, i) in breadcrumbs' :key='i'>
                  <nuxt-link :to='localePath(item.to)'>{{ item.text }}</nuxt-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div>
      <v-container>

    <v-row class="mt_sm--70 mt_md--90 mt--120">
      <v-col lg="12">
        <div class="section-title section-title--3 text-center">
          <h2 class="heading-title">{{ $t('about.vision.heading') }}</h2>
          <p>{{ $t('about.vision.subheading') }}</p>
        </div>
      </v-col>
    </v-row>

    <!-- Start Blog Details Area  -->
        <v-row>
          <v-col cols='12'>
            <div class='inner-wrapper'>
              <div class='inner'>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                </p>
                <div class='thumbnail'>
                  <img
                    src='../assets/images/about/hermetia.jpg'
                    alt='Blog Images'
                  />
                </div>
                <p class='mt--40'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                </p>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lo rem
                  Ipsum available, but the majority have suffered alteration in
                  some form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
                <blockquote class='rn-blog-quote'>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </blockquote>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
                <div class='blog-single-list-wrapper d-flex flex-wrap'>
                  <div class='thumbnail'>
                    <img
                      class='w-100'
                      src='../assets/images/about/hermetia.jpg'
                      alt='BLog Images'
                    /><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                  </span>
                  </div>
                  <div class='content'>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo .
                    </p>
                    <h4 class='title'>Ordered &amp; Unordered Lists.</h4>
                    <ul class='list-style'>
                      <li>Yet this above sewed flirted opened ouch</li>
                      <li>Goldfinch realistic sporadic ingenuous</li>
                      <li>
                        Abominable this abidin far successfully then like piquan
                      </li>
                      <li>Risus commodo viverra</li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </li>
                    </ul>
                    <h4 class='title'>Ordered &amp; Unordered Lists.</h4>
                    <ul class='list-style'>
                      <li>Yet this above sewed flirted opened ouch</li>
                      <li>Goldfinch realistic sporadic ingenuous</li>
                      <li>
                        Abominable this abidin far successfully then like piquan
                      </li>
                      <li>Risus commodo viverra</li>
                    </ul>
                  </div>
                </div>
                <p class='mt--25 mt_sm--5'>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
    <!-- End Blog Details Area  -->

      </v-container>
      </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: this.$t('index.title'),
          to: '/',
          disabled: false
        },
        {
          text: this.$t('about.title'),
          to: '',
          disabled: true
        }
      ]
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  nuxtI18n: {
    paths: {
      en: '/about-us',
      de: '/ueber-uns'
    }
  }
}
</script>
