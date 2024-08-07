<template>
  <div class="portfolio__container container">
    <HeaderVue />
    <HeroVueVue />
    <WhatIdDoVue />
    <MyProjects />
    <GetInTouchVue />
    <FooterView />
  </div>
</template>

<script>
import HeaderVue from './components/HeaderVue.vue';
import HeroVueVue from './components/HeroVue.vue';
import WhatIdDoVue from './components/WhatIdDo.vue';
import MyProjects from './components/MyProjects.vue'; 
import GetInTouchVue from './components/GetInTouch.vue';
import FooterView from './components/FooterView.vue';
export default {
  name: "App",
  components: {
    HeaderVue,
    HeroVueVue,
    WhatIdDoVue,
    MyProjects,
    GetInTouchVue,
    FooterView
  },
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* For Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px !important; /* Set the width of the vertical scrollbar */
  height: 0 !important; /* Hide the horizontal scrollbar */
}

*::-webkit-scrollbar-track {
  background: #f1f1f1 !important; /* Background of the scrollbar track */
}

*::-webkit-scrollbar-thumb {
  background-color: #32CD32 !important; /* Color of the scrollbar thumb */
  border-radius: 10px !important; /* Rounded corners for the scrollbar thumb */
  border: 3px solid #f1f1f1 !important; /* Optional: Adds space around the thumb */
}

/* For Firefox */
* {
  scrollbar-width: thin !important; /* Sets the width of the vertical scrollbar */
  scrollbar-color: #32CD32 #f1f1f1 !important; /* Color of the scrollbar thumb and track */
}

body {
  margin: unset;
  overflow-x: hidden !important;
  overflow-y:scroll;
}
/* For Chrome, Edge, and Safari */
body::-webkit-scrollbar {
  width: 10px !important; /* Set the width of the scrollbar */
}

body::-webkit-scrollbar-track {
  background: #f1f1f1 !important; /* Background of the scrollbar track */
}

body::-webkit-scrollbar-thumb {
  background-color: #32CD32 !important; /* Color of the scrollbar thumb */
  border-radius: 10px !important; /* Rounded corners for the scrollbar thumb */
  border: 3px solid #f1f1f1 !important; /* Optional: Adds space around the thumb */
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
  --border-radius--main--btn: 75px;
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
  overflow-x: hidden;
}
.custom-icon {
  color: #32cd32 !important;
  font-size: 24px; /* Adjust the font size as needed */
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
