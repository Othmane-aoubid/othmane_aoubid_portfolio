<template>
  <div class="what--i--do what--i--do--container">
    <div class="what--i--do--section--content">
      <h3
        class="what--i--do--section--description"
        ref="description"
        :class="{
          'animate-in': descriptionVisible,
          'animate-out': !descriptionVisible,
        }"
      >
        {{ title }} <span class="glowing--effect">{{ subtitle }}</span>
      </h3>
      <div class="projects">
        <div
          class="project--content"
          ref="projectContent1"
          :class="{
            'animate-in': projectContent1Visible,
            'animate-out': !projectContent1Visible,
          }"
        >
          <div class="project--titles" style="color: #32cd32">
            <font-awesome-icon
              :icon="['fab', 'vuejs']"
              class="fontawesome"
              style="color: #32cd32"
            />
            Vue JS
          </div>
          <div class="project--titles" style="color: #32cd32">
            <font-awesome-icon
              :icon="['fab', 'python']"
              class="fontawesome"
              style="color: #32cd32"
            />Python
          </div>
        </div>
        <div
          class="project--content"
          ref="projectContent2"
          :class="{
            'animate-in': projectContent2Visible,
            'animate-out': !projectContent2Visible,
          }"
        >
          <div class="project--titles" style="color: #32cd32">
            <img class="img" src="../assets/next-js.svg" alt="next-js" />
            <span>Next JS</span>
          </div>
          <div class="project--titles" style="color: #32cd32">
            <font-awesome-icon
              :icon="['fab', 'react']"
              class="fontawesome"
            />React
          </div>
          <div class="project--titles" style="color: #32cd32">
            <img
              class="img"
              src="../assets/firebase_icon.svg"
              alt="firebase"
            />Firebase
          </div>
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
          title: "Predictive",
          description:
            "Predictive is a security and vulnerability scanning platform that identifies and predicts security threats before they happen.",
          technology:
            "Python, Firebase, Vuex, Vuejs, Firebase Cloud Function, Apexcharts, Chatgpt",
          link: "https://predictive.tisalabs.com/",
        },
        {
          image: require("../assets/offzone.png"),
          alt: "offzone",
          title: "Offzone Agency",
          description:
            "I Created a website for Offzone Agency, a predesigner website, with nextjs and material ui, responsive and user friendly.",
          technology: "Nextjs, Material UI,",
          link: "https://offzone.net/",
        },
        {
          image: require("../assets/trident.png"),
          alt: "trident",
          title: "trident",
          description:
            "DTIF Trident is an innovation action sanctioned by the government of ireland and given to projects that prove a level of innovation and forward thinking inline with objectives.",
          technology:
            "Python, Firebase, Vuex, Vuejs, Firebase Cloud Function, Apexcharts",
          link: "https://trident.tisalabs.com/auth/login",
        },
        {
          image: require("../assets/my_portfolio.png"),
          alt: "My Portfolio",
          title: "Portfolio",
          description:
            "This portfolio showcases my journey and expertise as a software engineer. It integrates Firebase for seamless data management, Vuex for state management, and Vue.js for creating a dynamic and responsive user interface. this highlights my ability to develop robust and scalable web applications. This project reflects my dedication, precision, and the comprehensive skill set.",
          technology: "Firebase, Vuex, Vue.js",
          link: "https://othmaneadportfolio.vercel.app/",
        },
      ],
    },
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      descriptionVisible: false,
      projectContent1Visible: false,
      projectContent2Visible: false,
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
    setupIntersectionObservers() {
      const options = {
        threshold: 0.1,
      };

      const descriptionObserver = new IntersectionObserver(
        this.handleVisibilityChange("descriptionVisible"),
        options
      );
      const projectContent1Observer = new IntersectionObserver(
        this.handleVisibilityChange("projectContent1Visible"),
        options
      );
      const projectContent2Observer = new IntersectionObserver(
        this.handleVisibilityChange("projectContent2Visible"),
        options
      );

      if (this.$refs.description)
        descriptionObserver.observe(this.$refs.description);
      if (this.$refs.projectContent1)
        projectContent1Observer.observe(this.$refs.projectContent1);
      if (this.$refs.projectContent2)
        projectContent2Observer.observe(this.$refs.projectContent2);
    },
    handleVisibilityChange(visibleProp) {
      return (entries) => {
        entries.forEach((entry) => {
          this[visibleProp] = entry.isIntersecting;
        });
      };
    },
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
    this.$nextTick(() => {
      this.setupIntersectionObservers();
    });
    this.startCarousel();
  },
  unmounted() {
    this.stopCarousel();
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
  outline: 1px solid#32cd32;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  color: #e1e1e1;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  width: 15px;
  margin-right: 0.5rem;
}
.fontawesome {
  margin-right: 0.5rem;
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
/* Smooth CSS animations for entry and exit */
.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.animate-out {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

/* Specific animations for different elements */
.what--i--do--section--description.animate-in {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0s; /* No delay for the description */
}

.what--i--do--section--description.animate-out {
  opacity: 0;
  transform: scale(0.9);
}

.project--content.animate-in {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.5s; /* Delay for project content */
}

.project--content.animate-out {
  opacity: 0;
  transform: translateX(-50px);
}

.project--content:nth-of-type(2).animate-in {
  transition-delay: 1s; /* Additional delay for the second project content */
}

.project--content:nth-of-type(2).animate-out {
  transition-delay: 1s; /* Same delay for the second project content on exit */
}

/* Adjustments to ensure smooth transitions */
.project--titles {
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
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
