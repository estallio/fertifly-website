<template>
  <v-row align="start" class="row--35">
    <v-col lg="6" md="6" sm="12" cols="12" order="2" order-md="1">
      <div class="section-title text-left mb--50 mb_sm--30 mb_md--30">
        <h2 class="heading-title">{{ $t('contact.form.heading') }}</h2>
        <p class="description">{{ $t('contact.form.description') }}</p>
      </div>
      <div class="form-wrapper">
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <ValidationProvider
              :name="$t('contact.form.name')"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="name"
                  v-model="formData.name"
                  :placeholder="$t('contact.form.namePlacehoder') + ' *'"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.email')"
              rules="required|email"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="email"
                  rules="required|email"
                  v-model="formData.email"
                  :placeholder="$t('contact.form.emailPlaceholder') + ' *'"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.subject')"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <input
                  type="text"
                  name="subject"
                  v-model="formData.subject"
                  :placeholder="$t('contact.form.subjectPlaceholder') + ' *'"
                />
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <ValidationProvider
              :name="$t('contact.form.message')"
              rules="required"
              v-slot="{ errors }"
            >
              <label>
                <textarea
                  name="message"
                  v-model="formData.message"
                  :placeholder="$t('contact.form.messagePlaceholder') + ' *'"
                ></textarea>
                <span class="inpur-error">{{ errors[0] }}</span>
              </label>
            </ValidationProvider>

            <button
              class="rn-button-style--2 btn_solid"
              type="submit"
              value="submit"
            >
              {{ $t('contact.form.submitLabel') }}
            </button>
          </form>
        </ValidationObserver>
      </div>
    </v-col>
    <v-col lg="6" md="6" sm="12" cols="12" order="1" order-md="2">
      <div class="thumbnail mb_md--40 mb_sm--40">
        <img src="../../assets/images/about/hermetia.jpg" alt="trydo" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      };
    },
    methods: {
      onSubmit() {
        console.log(this.formData);
      },
    },
  };
</script>
