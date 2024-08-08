<template>
  <div id="about" class="hero hero--container">
    <div
      class="hero--section--image"
      ref="image"
      :class="{ 'animate-in': imageVisible, 'animate-out': !imageVisible }"
    >
      <img
        src="../assets/Code_editing_and_software_development_on_laptop.png"
        alt="Code_editing_and_software_development_on_laptop"
      />
    </div>
    <div class="hero--section--content">
      <h1
        class="hero--section--title"
        style="margin-bottom: 0"
        ref="title"
        :class="{ 'animate-in': titleVisible, 'animate-out': !titleVisible }"
      >
        Othmane Aoubid
      </h1>
      <h3
        class="hero--section--description"
        style="margin-top: 0"
        ref="description"
        :class="{
          'animate-in': descriptionVisible,
          'animate-out': !descriptionVisible,
        }"
      >
        Full Stack Developer, Data Analytics
      </h3>
      <p
        class="hero--section--paragraph"
        ref="paragraph"
        :class="{
          'animate-in': paragraphVisible,
          'animate-out': !paragraphVisible,
        }"
      >
        <span class="upper--case">I</span> am a full-stack developer with
        expertise in creating efficient, user-focused solutions. While my
        primary focus is on full-stack development, I also have experience in
        data analytics, which has enhanced my ability to work with complex data.
        With over two years of experience in software engineering, I specialize
        in leveraging advanced technologies to deliver scalable, high-quality
        applications tailored to diverse client needs. Committed to continuous
        learning, I excel in dynamic environments where I can apply my skills to
        tackle challenging projects and contribute to meaningful advancements in
        the field.
      </p>
      <div class="hero--section--btn--container">
        <button
          class="contact--me"
          style="color: white !important"
          @click.prevent="scrollToSection('contact')"
          ref="btn"
          :class="{ 'animate-in': btnVisible, 'animate-out': !btnVisible }"
        >
          Contact Me
        </button>
        <button
          class="download--resume"
          style="color: white !important"
          @click="downloadResume"
          ref="btn"
          :class="{ 'animate-in': btnVisible, 'animate-out': !btnVisible }"
        >
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
  data() {
    return {
      imageVisible: false,
      titleVisible: false,
      descriptionVisible: false,
      paragraphVisible: false,
      btnVisible: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.setupIntersectionObservers();
    });
  },
  methods: {
    setupIntersectionObservers() {
      const options = {
        threshold: 0.1,
      };

      const imageObserver = new IntersectionObserver(
        this.handleVisibilityChange("imageVisible"),
        options
      );
      const titleObserver = new IntersectionObserver(
        this.handleVisibilityChange("titleVisible"),
        options
      );
      const descriptionObserver = new IntersectionObserver(
        this.handleVisibilityChange("descriptionVisible"),
        options
      );
      const paragraphObserver = new IntersectionObserver(
        this.handleVisibilityChange("paragraphVisible"),
        options
      );
      const btnObserver = new IntersectionObserver(
        this.handleVisibilityChange("btnVisible"),
        options
      );

      if (this.$refs.image) imageObserver.observe(this.$refs.image);
      if (this.$refs.title) titleObserver.observe(this.$refs.title);
      if (this.$refs.description)
        descriptionObserver.observe(this.$refs.description);
      if (this.$refs.paragraph) paragraphObserver.observe(this.$refs.paragraph);
      if (this.$refs.btn) btnObserver.observe(this.$refs.btn);
    },
    handleVisibilityChange(visibleProp) {
      return (entries) => {
        entries.forEach((entry) => {
          this[visibleProp] = entry.isIntersecting;
        });
      };
    },
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
.hero--section--image.animate-in {
  transform: scale(1);
  transition-delay: 0s; /* No delay for the image */
}

.hero--section--image.animate-out {
  transform: scale(0.8);
}

.hero--section--title.animate-in {
  transform: translateY(0);
  transition-delay: 0.5s; /* Delay for title */
}

.hero--section--title.animate-out {
  transform: translateY(-50px);
}

.hero--section--description.animate-in {
  transform: translateX(0);
  transition-delay: 1s; /* Delay for description */
}

.hero--section--description.animate-out {
  transform: translateX(-50px);
}

.hero--section--paragraph.animate-in {
  transform: translateY(0);
  transition-delay: 1.5s; /* Delay for paragraph */
}

.hero--section--paragraph.animate-out {
  transform: translateY(50px);
}

.hero--section--btn--container .animate-in {
  transform: scale(1);
  transition-delay: 2s; /* Delay for buttons */
}

.hero--section--btn--container .animate-out {
  transform: scale(0.8);
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
