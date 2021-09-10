<template>
  <div>
    <v-row class="row--35" align="center">
      <v-col lg="6" md="6" cols="12" order="2" order-md="1">
        <div class="about-inner inner">
          <div class="section-title">
            <h2 class="heading-title">About</h2>
            <p class="description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.
            </p>
          </div>
          <div class="mt--30">
            <h4>Lorem ipsum dolor sit.</h4>
            <ul class="list-style--1">
              <li v-for="list in listOne" :key="list.id">
                <i v-html="iconSvg(list.icon)"></i>
                {{ list.desc }}
              </li>
            </ul>
          </div>
          <div class="mt--30">
            <h4>Lorem ipsum dolor sit.</h4>
            <ul class="list-style--1">
              <li v-for="list in listTwo" :key="list.id">
                <i v-html="iconSvg(list.icon)"></i>
                {{ list.desc }}
              </li>
            </ul>
          </div>
        </div>
      </v-col>
      <v-col lg="6" md="6" cols="12" order-md="2" order="1">
        <div class="thumbnail position-relative">
          <CoolLightBox :items="items" :index="index" @close="index = null">
          </CoolLightBox>

          <div class="thumbnail position-relative">
            <div v-for="(image, imageIndex) in items" :key="imageIndex">
              <img class="w-100" :src="image.thumb" alt="About Images" />
              <a
                @click="index = imageIndex"
                class="video-popup position-top-center theme-color play__btn"
                ><span class="play-icon"></span
              ></a>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        listOne: [
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
        listTwo: [
          {
            id: 1,
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            id: 2,
            icon: "check",
            desc: `Fast-Track Your business`,
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
        items: [
          {
            thumb: require("../../assets/images/about/about-3.png"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
