<template>
  <div class="what--i--do what--i--do--container">
    <div class="what--i--do--section--content">
      <h3 class="what--i--do--section--description">
        {{ title }} <span class="glowing--effect">{{ subtitle }}</span>
      </h3>

      <div class="cards card--container">
        <div v-for="(card, index) in cards" :key="index" class="card">
          <div class="card--image">
            <img :src="card.image" :alt="card.alt" />
          </div>
          <div class="card--content">
            <h3 class="card--title">{{ card.title }}</h3>
            <p class="card--description">{{ card.description }}</p>
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
          image: require("../assets/cardsIcon.png"),
          alt: "lightbulb",
          title: "Data Analytics & Visualization",
          description:
            "From data inception to actionable insights, I design compelling analytics and visualization solutions that illuminate trends, empower decision-making, and drive your business forward.",
        },
        {
          image: require("../assets/cardsIcon.png"),
          alt: "lightbulb",
          title: "Predictive Analytics and Forecasting",
          description:
            "From data to foresight, I craft predictive analytics and forecasting solutions that steer your business with precision, empowering strategic decisions and ensuring future success.",
        },
        {
          image: require("../assets/cardsIcon.png"),
          alt: "lightbulb",
          title: "Natural Language Processing",
          description:
            "From text to insight, I craft Natural Language Processing solutions that decode language intricacies, revolutionizing data comprehension and empowering your business for success in the digital age.",
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
}
.card {
  width: 289px;
  gap: 0px;
  border-radius: 10px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  background: linear-gradient(
    121.9deg,
    rgba(28, 28, 28, 0.5) 0%,
    #050505 96.81%
  );
  border: 1px solid #2b2b2b;
  padding: 2rem;
}
.card--title {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
}
.card--description {
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #e1e1e1;
  width: 243px;
  height: 121px;
}

/* Media query for 1280px and larger screens */
@media (min-width: 1280px){
  .card--container {
    flex-direction: row;
  }
  .card {
    height: 300px;
  }
}
</style>
