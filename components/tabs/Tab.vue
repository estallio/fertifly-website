<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabContent" :key="item.id">
          <div class="single-tab-content">
            <p>
              {{ item.desc }}
            </p>
            <div class="list0style-inner mt--30">
              <h4>Lorem ipsum dolor sit.</h4>
              <ul class="list-style--1">
                <li class="d-flex" v-for="(list, i) in listOne" :key="i">
                  <i v-html="iconSvg(list.icon)"></i>
                  {{ list.desc }}
                </li>
              </ul>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
  import feather from "feather-icons";
  export default {
    data() {
      return {
        tab: null,
        items: [
          {
            id: 1,
            name: "Our history",
          },
          {
            id: 2,
            name: "Our mission",
          },
          {
            id: 3,
            name: "Friendly support",
          },
        ],
        tabContent: [
          {
            id: 1,
            desc: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              laudantium neque cumque, magni, modi aut a dolores deleniti
              recusandae dolor quod aliquid aperiam. Delectus voluptate quam
              deserunt expedita temporibus ab! `,
            content: [{}],
          },
          {
            id: 2,
            desc: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              laudantium neque cumque, magni, modi aut a dolores deleniti
              recusandae dolor quod aliquid aperiam. Delectus voluptate quam
              deserunt expedita temporibus ab!`,
            content: [{}],
          },
          {
            id: 3,
            desc: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              laudantium neque cumque, magni, modi aut a dolores deleniti
              recusandae dolor quod aliquid aperiam. Delectus voluptate quam
              deserunt expedita temporibus ab!`,
            content: [{}],
          },
        ],
        listOne: [
          {
            icon: "check",
            desc: `The Philosophy Of business analytics`,
          },
          {
            icon: "check",
            desc: ` Fast-Track Your business`,
          },
          {
            icon: "check",
            desc: `Lies And Damn Lies About business`,
          },
          {
            icon: "check",
            desc: `The Ultimate Deal On business`,
          },
        ],
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
