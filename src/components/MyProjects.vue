<template>
  <div class="what--i--do what--i--do--container">
    <div class="what--i--do--section--content">
      <h3 class="what--i--do--section--description">
        {{ title }} <span class="glowing--effect">{{ subtitle }}</span>
      </h3>
      <div class="projects">
        <div class="project--content">
          <div class="project--titles">Machine learning</div>
          <div class="project--titles">Vue JS</div>
          <div class="project--titles">SQL</div>
        </div>
        <div class="project--content">
          <div class="project--titles">Next JS</div>
          <div class="project--titles">Python</div>
          <div class="project--titles">Firebase</div>
        </div>
      </div>
      <div class="carousel">
        <button @click="prev" class="nav-button left-button">‹</button>
        <div class="carousel-wrapper">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="carousel-item"
            :class="{
              active: index === currentIndex,
              prev: index === prevIndex,
              next: index === nextIndex,
            }"
          >
            <div class="card--image">
              <img :src="card.image" :alt="card.alt" />
            </div>
            <div class="card--content">
              <h3 class="card--title">{{ card.title }}</h3>
              <p class="card--description">{{ card.description }}</p>
              <p class="card--tech">{{ card.technology }}</p>
            </div>
            <div class="card--icon" @click="openProject(card.link)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="white"
              >
                <path
                  transform="rotate(45, 12, 12)"
                  d="M4 10l1.41 1.41L11 5.83v12.34h2V5.83l5.59 5.58L20 10l-8-8-8 8z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
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
      default: "Projects",
    },
    subtitle: {
      type: String,
      default: "Some of my Work",
    },
    cards: {
      type: Array,
      default: () => [
        {
          image: require("../assets/predective2.png"),
          alt: "predictive",
          title: "About Predictive",
          description:
            "Predictive is a security and vulnerability scanning platform that identifies and predicts security threats before they happen.",
          technology: "Python, Firebase, Vuex, Vuejs, Firebase Cloud Function, Apexcharts",
          link: "https://predictive.tisalabs.com/",
        },
        {
          image: require("../assets/offzone.png"),
          alt: "offzone",
          title: "Offzone Agency",
          description: "I Created a website for Offzone Agency, a predesigner website, with nextjs and material ui, responsive and user friendly.",
          technology: "Nextjs, Material UI,",
          link: "https://offzone.net/",
        },
        {
          image: require("../assets/cardsIcon.png"),
          alt: "lightbulb",
          title: "Natural Language Processing",
          description: "From text to insight...",
          technology: "Python, NLTK, spaCy",
        },
      ],
    },
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
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
    openProject(url) {
      window.open(url, "_blank");
    },
    prev() {
      this.currentIndex = this.prevIndex;
    },
    next() {
      this.currentIndex = this.nextIndex;
    },
    startCarousel() {
      this.intervalId = setInterval(this.next, 25000); // Switch every 25 seconds
    },
    stopCarousel() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    },
  },
  mounted() {
    // this.startCarousel();
  },
  unmounted() {
    // this.stopCarousel();
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
.card--container {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  background-color: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.card--image {
  width: 100%;
  height: 150px;
  border-radius: 8px;
  object-fit: cover; /* Maintain aspect ratio while covering the entire container */
  object-position: center; /* Center the image within the container */
}
.card--image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio while covering the entire container */
  object-position: center; /* Center the image within the container */
}
.card--content {
  flex-grow: 1;
  padding-inline: 0.5rem;
}

.card--title,
.card--description {
  font-family: Roboto;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem; /* Increase the font size */
}

.card--title {
  font-size: 1.1rem; /* Adjust font size */
  font-weight: 700; /* Increase font weight for better readability */
  margin: 0;
}

.card--description {
  font-size: 0.8em; /* Adjust font size */
  font-weight: 400; /* Maintain regular font weight */
  height: 63px;
  overflow-y: scroll;
}

.card--tech {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #b3b3b3;
}

.card--icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px; /* Slightly increased to give more room for the arrow */
  height: 36px;
  background-color: #32cd32; /* Bright green */
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
}

.project--content {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.project--titles {
  background: #484e53;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  color: #e1e1e1;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
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
  width: 100%;
  height: 100%;
  position: relative;
}
.carousel-item {
  position: absolute;
  width: 300px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0;
  border: 1px solid #2b2b2b;
}
.carousel-item.active {
  opacity: 1;
  transform: translateX(0) scale(1.09);
}
.carousel-item.prev {
  opacity: 0.5;
  transform: translateX(-300px) scale(0.8);
}
.carousel-item.next {
  opacity: 0.5;
  transform: translateX(300px) scale(0.8);
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

@media (min-width: 1280px) {
  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
