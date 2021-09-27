export default {
  title: 'Home',
  introductionSection: {
    heading: 'Insects as feed',
    subheading: 'An environmentally friendly and sustainable alternative.',
    content:
      'The use of insects opens up completely new perspectives for efficient and sustainable food production. In particular, the production of innovative feed for species-appropriate and environmentally compatible livestock farming with the help of insects holds immense potential. In the wild, fish, chickens and pigs feed to a considerable extent on flies, beetles and worms. So why should we deprive our livestock and pets of their natural food source?',
  },
  globalWarmingSection: {
    heading: 'Insects against global warming',
    subheading: 'An environmental thought.',
    content:
      'Conventional feed production is currently mostly limited to cost estimates and operates purely for profit. This type of production is neither sustainable, nor does it make full use of resources. The resulting costs and pollution of our planet can be avoided with the help of innovative and modern feed production. Another reason for switching to modern feeds is the high impact on the environment. In the fight against climate change, we must work together to find ways to promote savings and optimization in one of the most important areas, food production.',
  },
  factsAndFiguresHeading: 'Facts and figures',
  environmentCounterUpNumbers: [
    {
      endVal: 20,
      unit: 'Mt',
      desc: `of fish are processed into fish meal every year.`,
    },
    {
      endVal: 19,
      unit: '%',
      desc: `of all dogs suffer from protein-induced feed intolerance.`,
    },
    {
      endVal: 60,
      unit: '%',
      desc: `of the natural diet of trout consists of insects.`,
    },
  ],
  solutionSection: {
    heading: 'Our solution',
    subheading: 'Hermetia Illucens',
    content:
      'Our solution to counteract this is based on a small fly called Hermetia Illucens (soldier fly). This fly offers fast growth and efficient biomass conversion of waste. This way we eliminate two problems at once and can revolutionize the problems of feed production at once.',
    advantages: 'Benefits',
    bulletPoints: ['Small', 'Efficient', 'Cost effective'],
  },
  hermetiaCounterUpNumbers: [
    {
      endVal: 90,
      unit: '%',
      desc: `of the proteins in their feed can be converted to biomass by Hermetia illucens.`,
    },
    {
      endVal: 1000,
      unit: 'kg',
      desc: `Insect meal we can produce on one m² per year.`,
    },
    {
      endVal: 200,
      unit: 'M$',
      desc: `have been invested worldwide in the development of insect breeding technologies over the past 5 years.`,
    },
  ],
  processSection: {
    heading: 'Our process',
    subheading:
      'Insect protein production is a multi-step process and requires great care in each step.',
    content:
      'We use the larva of the black soldier fly (lat. Hermetia Illucens, BSF) for the targeted "upcycling" of proteins into a high-quality feed. Our fly larvae are fed exclusively with by-products from the food industry that are approved as animal feed. This allows us to guarantee a stable process and exclude the introduction of harmful substances. Furthermore, we do not need an additional heat source for the production of our fly larvae. The use of land for breeding the black soldier fly is extremely efficient. Up to one ton of insect protein can be produced per year on one m².',
  },
  productSection: {
    heading: 'Our products',
    subheading:
      'You can find out how we can create which products from this process on our product page.',
    linkText: 'To products',
  },
  testimonialSection: {
    // content of src is relative to an limited to subitems of the folder 'assets/images/client/...'
    content: [
      {
        id: 1,
        imageName: 'testimonial-1.jpg',
        content: [
          {
            name: 'Tips',
            description:
              'With potential droughts, the issue of food production is becoming increasingly important and Ecofly is well on its way to solving the problem.',
            designation: 'CEO, Firma Bla Bla, INC.',
          },
        ],
      },
      {
        id: 2,
        imageName: 'testimonial-2.jpg',
        content: [
          {
            name: 'FATIMA ASRAFY',
            description:
              'We have worked with Ecofly for a long time and believe that their products will soon be available everywhere.',
            designation: ' COO, AMERIMAR ENTERPRISES, INC.',
          },
        ],
      },
      {
        id: 3,
        imageName: 'testimonial-3.jpg',
        content: [
          {
            name: 'JANNAT TUMPA',
            description:
              'Ecofly has the potential to be the next big startup and we are excited to work with them.',
            designation: ' COO, AMERIMAR ENTERPRISES, INC.',
          },
        ],
      },
    ],
  },
  slider: [
    // content of src is relative to an limited to subitems of the folder 'assets/images/bg/...'
    // ready images with pattern were smaller in size, but maybe a version with pattern overlay with pseudo-elements like ::before makes more sense here
    {
      src: 'wiese-und-tiere.jpeg',
      title: 'Innovative feed',
      desc: 'for species-appropriate and environmentally compatible livestock farming',
    },
    {
      src: 'haustiere.jpg',
      title: 'Natural food source',
      desc: 'compatible feed for livestock and pets',
    },
    {
      src: 'hand-in-futtermittel.jpg',
      title: 'Sustainable food production',
      desc: 'completely new perspectives for the production of innovative feeds',
    },
  ],
}
