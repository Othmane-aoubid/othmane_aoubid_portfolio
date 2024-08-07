<template>
  <div id="about" class="hero hero--container">
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
        <span class="upper--case">A</span>s a passionate data scientist with
        expertise in machine learning, AI, and data analytics, I thrive on the
        challenges of exploring complex data landscapes and uncovering
        meaningful patterns that drive innovation. Additionally, as a software
        engineer with over two years of hands-on experience, I am dedicated to
        creating innovative and efficient solutions that enhance user
        experiences and drive progress. My journey in the tech industry has
        equipped me with a robust skill set in software development,
        problem-solving, and collaboration. I excel in leveraging cutting-edge
        technologies to deliver high-quality, scalable applications that meet
        diverse client needs. Committed to continuous learning and professional
        growth, I flourish in dynamic environments where I can apply my
        expertise to tackle challenging projects and contribute to meaningful
        advancements in the field.
      </p>
      <div class="hero--section--btn--container">
        <button class="contact--me" style="color: white !important;" @click.prevent="scrollToSection('contact')">
          Contact Me
        </button>
        <button class="download--resume" style="color: white !important;" @click="downloadResume">
          Download Resume
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { storage, ref, getDownloadURL } from "../firebase/index.js";
export default {
  methods: {
    async downloadResume() {
      try {
        const resumeRef = ref(storage, "/resume1/othmaneaoubid-cv.pdf"); // Path to your resume file
        const url = await getDownloadURL(resumeRef);

        // Fetch the file using Axios
        const response = await axios.get(url, { responseType: "blob" });
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        const fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", "OthmaneAoubid.pdf"); // Set the file name
        document.body.appendChild(fileLink);

        fileLink.click();
        document.body.removeChild(fileLink);
      } catch (error) {
        console.error("Error downloading the resume:", error);
      }
    },
    scrollToSection(section) {
      this.isActive = false;
      this.activeSection = section;
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
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
  align-items: center;
  gap: 0.8rem;
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
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.contact--me:hover,
.download--resume:hover {
  background-color: #32cd32;
  color: #000000;
}

.upper--case {
  color: #32cd32;
  font-size: 52px;
  display: inline-block;
  font-weight: 600;
  margin-right: 0.2rem;
}
/* Media query for 1280px and larger screens */
@media (min-width: 1280px) {
  .hero--section--paragraph {
    width: 80%;
    margin-inline: auto;
    text-align: justify;
  }
  .hero--section--btn--container {
    display: flex;
    flex-direction: row;
  }
}
</style>
