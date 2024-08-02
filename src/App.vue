<template>
  <div class="portfolio__container container">
    <HeaderVue />
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue';
export default {
  name: "App",
  components: {
    HeaderVue,
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  color: white;
}

body {
  margin: unset;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
button,
input,
textarea,
select {
  font: inherit;
}
img,
picture,
svg,
canvas {
  display: block;
  max-inline-size: 100%;
  block-size: auto;
}

.portfolio__container {
  box-sizing: border-box;
  background-color: #000000;
  color: #ffffff;
  padding: 0;
  margin: 0;

  --main--text--color: #32CD32;
  --icons--bg--color: #32CD32;
  --text--light--color: #A9A9A9;
  --text--background--gradiant: linear-gradient(
    90.54deg,
    #32cd32 0.46%,
    #ffffff 91.25%
  );
  --cards--background--gradiant: linear-gradient(121.9deg, rgba(28, 28, 28, 0.5) 0%, #050505 96.81%);
  --width--main--btn: Fixed (164px) px;
  --height--main--btn: Fixed (41px) px;
  --padding--main--btn: 10px 0px 0px 0px;
  --gap--main--btn: 10px;
  --border-radius--main--btn: 75px 0px 0px 0px;
  --border--main--btn: 1px 0px 0px 0px;
  --opacity--main--btn: 0px;

  --width--secondary--btn: Fixed (86px)px;
  --height--secondary--btn: Fixed (39px)px;
  --padding--secondary--btn: 10px 0px 0px 0px;
  --gap--secondary--btn: 10px;
  --border-radius--secondary--btn: 50px 0px 0px 0px;
  --border--secondary--btn: 1px 0px 0px 0px;
  --opacity--secondary--btn: 0px;
  --background--secondary--btn: #484E53;

  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
