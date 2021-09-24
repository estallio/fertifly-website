<template>
  <ul class="brand-style-2">
    <li v-for="(brand, i) in brandImages" :key="i" :class="brand.size ? 'two' : ''">
      <a :href="brand.url">
        <img :src="brand.src" alt="Logo Images" />
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        brandImages: [
          {
            src: "https://ecofly.at/img/ipiff.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/pbi.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/ffg.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/tech2b.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/baw.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/global2000.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/boku.png",
            url: "#",
          },
          {
            src: "https://ecofly.at/img/Logos-BMNT-LE1420-EU.jpg",
            url: "#",
            size: true,
          },
        ],
      };
    },
  };
</script>
