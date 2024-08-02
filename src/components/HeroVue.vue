<template>
  <div class="hero hero--container">
    <div class="hero--section--image">
      <img
        src="../assets/Code_editing_and_software_development_on_laptop.png"
        alt="Code_editing_and_software_development_on_laptop"
      />
    </div>
    <div class="hero--section--content">
      <h1 class="hero--section--title">Othmane Aoubid</h1>
      <h3 class="hero--section--description">Full Stack Developper</h3>
      <p class="hero--section--paragraph">
        As a passionate data scientist, with expertise in machine learning, AI,
        and data analytics, I thrive on the challenges of exploring complex data
        landscapes and uncovering meaningful patterns that drive innovation
      </p>
      <div class="hero--section--btn--container">
        <button class="contact--me">Contact Me</button>
        <button class="download--resume">Download Resume</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero--container {
  width: 90%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero--section--image,
.hero--section--btn--container {
  display: flex;
  justify-content: center;
}
.hero--section--btn--container {
  flex-direction: column;
  justify-content: center;
  align-items: center ;
  gap: .8rem;
}
.hero--section--title,
.hero--section--description {
  text-align: center;
}
.hero--section--description {
  background: -webkit-linear-gradient(90.54deg, #32cd32 0.46%, #ffffff 91.25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero--section--paragraph {
  color: #e1e1e1;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
}
.contact--me,
.download--resume {
  width: 164px;
  border: 1px solid #32cd32;
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  line-height: 15.23px;
  background-color: #000000;
  border-radius: var(--border-radius--main--btn);
  padding: .5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact--me:hover,
.download--resume:hover {
  background-color: #32cd32;
  color: #000000 ;
}
</style>
