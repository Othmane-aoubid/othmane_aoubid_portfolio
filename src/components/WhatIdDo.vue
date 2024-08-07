<template>
  <div class="what--i--do what--i--do--container">
    <div class="what--i--do--section--content">
      <h3 class="what--i--do--section--description">
        {{ title }} <span class="glowing--effect">{{ subtitle }}</span>
      </h3>

      <div class="carousel">
        <button @click="prev" class="nav-button left-button">‹</button>
        <div class="carousel-wrapper">
          <div
            class="carousel-item"
            v-for="(card, index) in cards"
            :key="index"
            :class="{
              active: index === currentIndex,
              prev: index === prevIndex,
              next: index === nextIndex,
            }"
          >
            <div class="card--image">
              <font-awesome-icon
                v-if="card.icon"
                :icon="card.icon"
                class="custom-icon"
              />
              <img v-else :src="card.image" :alt="card.alt" />
            </div>
            <div class="card--content">
              <h3 class="card--title">{{ card.title }}</h3>
              <p class="card--description">{{ card.description }}</p>
            </div>
          </div>
        </div>
        <button @click="next" class="nav-button right-button">›</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "What I do",
    },
    subtitle: {
      type: String,
      default: "My Services",
    },
    cards: {
      type: Array,
      default: () => [
        {
          icon: ["fas", "desktop"],
          title: "Software Development",
          description:
            "Experienced in both functional and OOP: Python, Java, JavaScript, vuejs, next, react",
        },
        {
          icon: ["fab", "react"],
          title: "Frontend Dev React, NextJS",
          description:
            "Experienced in crafting dynamic web applications with React and NextJS, with a keen eye for UI/UX design. Proficient in HTML, CSS, JS, and MaterialUI.",
        },
        {
          icon: ["fab", "vuejs"],
          title: "Frontend Dev VueJS",
          description:
            "Skilled in building interactive interfaces using VueJS, with a strong focus on user experience and responsive design. Well-versed in HTML, CSS, and JS.",
        },
        {
          image: require("../assets/firebase_icon.svg"),
          alt: "firebase",
          title: "Firebase",
          description:
            "I use Firebase to elevate my projects with its seamless integration and powerful features. I rely on Firebase for secure authentication, reliable hosting, and efficient database management. Its storage solutions also ensure my assets are well-protected and easily accessible. Firebase is more than just a tool—it's an essential partner in my development process, enabling me to build, innovate, and scale with confidence and efficiency.",
        },
        {
          icon: ["fab", "python"],
          title: "Python",
          description:
            "I work extensively with Python to develop APIs, leveraging its powerful libraries and frameworks to create robust and scalable solutions. Additionally, I utilize Python for data analytics, enabling insightful data visualization and decision-making processes. My expertise also extends to AI and machine learning, where I build intelligent models and applications to solve complex problems and drive innovation.",
        },
      ],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    prevIndex() {
      return (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    },
    nextIndex() {
      return (this.currentIndex + 1) % this.cards.length;
    },
  },
  methods: {
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    },
    startTimer() {
      this.timer = setInterval(this.next, 25000);
    },
    resetTimer() {
      clearInterval(this.timer);
      this.startTimer();
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.what--i--do--section--description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 800;
  line-height: 28.13px;
  letter-spacing: -0.03em;
  text-align: left;
}
.glowing--effect {
  background: -webkit-linear-gradient(90deg, #32cd32 0%, #f5f5f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.41px;
  letter-spacing: -0.03em;
}
.carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
  height: 400px;
}
.carousel-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform-style: preserve-3d; */
  width: 100%;
  height: 100%;
  position: relative;
}
.carousel-item {
  position: absolute;
  width: 200px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0;
  width: 289px;
  gap: 0;
  border-radius: 10px 0 0 0;
  border: 1px 0 0 0;
  background: linear-gradient(121.9deg, rgba(28, 28, 28, 0.5), #050505 96.81%);
  border: 1px solid #2b2b2b;
  padding: 1rem;
}
.carousel-item.active {
  opacity: 1;
  transform: translateX(0) scale(1.09) translateZ(300px);
}
.carousel-item.prev {
  opacity: 0.5;
  transform: translateX(-300px) scale(0.8) translateZ(200px);
}
.carousel-item.next {
  opacity: 0.5;
  transform: translateX(300px) scale(0.8) translateZ(200px);
}
.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1;
}
.left-button {
  left: 10px;
}
.right-button {
  right: 10px;
}
.card--image {
  width: 30px;
}
.card--image img {
  width: 100%;
}
.card--title {
  font-family: Roboto;
  font-size: 1.1em;
  font-weight: 600;
  line-height: 18px;
  width: max-content;
}
.card--description {
  font-family: Roboto;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 21px;
  color: #e1e1e1;
  width: 243px;
}
.card--title,
.card--description {
  font-family: Roboto;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.card--content {
  transform: translateZ(0);
}
/* Media query for 1280px and larger screens */
@media (min-width: 1280px) {
  .card--container {
    flex-direction: row;
  }
  .card {
    height: 300px;
  }
}
</style>
