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
      <div class="cards card--container">
        <div v-for="(card, index) in cards" :key="index" class="card">
          <div class="card--image">
            <img :src="card.image" :alt="card.alt" />
          </div>
          <div class="card--content">
            <h3 class="card--title">{{ card.title }}</h3>
            <p class="card--description">{{ card.description }}</p>
            <p class="card--tech">{{ card.technology }}</p>
          </div>
          <div class="card--icon">
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
          image: require("../assets/cardsIcon.png"),
          alt: "lightbulb",
          title: "Data Analytics & Visualization",
          description: "From data inception to actionable insights...",
          technology: "Python, SQL, Tableau",
        },
        {
          image: require("../assets/cardsIcon.png"),
          alt: "lightbulb",
          title: "Predictive Analytics and Forecasting",
          description: "From data to foresight...",
          technology: "R, Excel, TensorFlow",
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
  background-color: #d9d9d9;
  border-radius: 8px;
  margin-bottom: 16px;
}
.card--image img{
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio while covering the entire container */
  object-position: center; /* Center the image within the container */
}
.card--content {
  flex-grow: 1;
}

.card--title {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 8px;
}

.card--description {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #d9d9d9;
  margin-bottom: 16px;
}

.card--tech {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #b3b3b3;
}

.card--icon {
  position: absolute;
  bottom: 16px;
  right: 16px;
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
</style>
