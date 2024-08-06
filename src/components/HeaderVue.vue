<template>
  <div class="header--container">
    <div class="logo logo--container">
      <img src="../assets/othmane_aoubid.png" alt="Othmane Aoubid" />
    </div>
    <div class="hamburger--menu" @click="toggleMenu">
      <div :class="{ line: true, line1: true, active: isActive }"></div>
      <div :class="{ line: true, line2: true, active: isActive }"></div>
      <div :class="{ line: true, line3: true, active: isActive }"></div>
    </div>

    <div :class="{ 'menu menu--container': true, active: isActive }">
      <ul>
        <li>
          <a
            href="#about"
            class="about"
            :class="{ active: activeSection === 'about' }"
            @click.prevent="scrollToSection('about')"
            >About me</a
          >
        </li>
        <li class="contact">
          <a
            href="#contact"
            :class="{ active: activeSection === 'contact' }"
            @click.prevent="scrollToSection('contact')"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      activeSection: "about", // Set About me as active by default
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
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
.header--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
}

.hamburger--menu {
  width: 30px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.line {
  height: 3px;
  transition: all 0.3s ease;
  border: 1.98px solid;
  border-radius: 10px;
}

.line1 {
  width: 30px;
  background-color: #ffffff;
}

.line2 {
  width: 28px;
  background-color: #99ff99;
  margin-left: auto;
}

.line3 {
  width: 18px;
  background-color: #00cc00;
  margin-left: auto;
}

.line1.active {
  transform: translateY(15px) rotate(45deg);
  background-color: #ffffff;
}

.line2.active {
  opacity: 0;
}

.line3.active {
  transform: translateY(-6px) rotate(-45deg);
  width: 30px;
  background-color: #00cc00;
}

.menu {
  position: absolute;
  top: 50px;
  right: -100%;
  width: 250px;
  height: 100px;
  background-color: #000000;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-sizing: border-box;
  display: none;
  transition: all 0.3s ease;
}

.menu.active {
  right: 0;
  display: inline-block;
  z-index: 9999 !important;
}

.close-btn {
  display: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.menu--container ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu--container li {
  margin: 1rem 0;
}

.menu--container a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
}

.menu--container a.active {
  color: var(--main--text--color) !important;
  border-radius: 8.8px;
  border: 0.88px solid;
  border: linear-gradient(90deg, #32cd32 0%, #ffffff 100%);
  padding: 0.5rem 1rem;
}

/* Media query for small screens */
@media (max-width: 600px) {
  .menu {
    height: auto;
    top: 100%;
    right: -100%;
  }
  .close-btn {
    display: block;
  }
}

/* Media query for 1280px and larger screens */
@media (min-width: 1280px) {
  .hamburger--menu {
    display: none; /* Hide hamburger menu on large screens */
  }
  .logo {
    width: 100px !important;
    height: 50px;
    padding: 0 !important;
  }
  .logo img {
    max-width: 100%; /* Ensure the image doesn't exceed the container's width */
    max-height: 100%; /* Ensure the image doesn't exceed the container's height */
    width: 100%; /* Maintain aspect ratio */
    height: auto; /* Maintain aspect ratio */
    object-fit: contain; /* Ensure the entire image is visible */
    object-position: center; /* Center the image within the container */
  }
  .menu {
    display: flex; /* Always display menu on large screens */
    position: static; /* Remove absolute positioning */
    width: auto; /* Adjust width as needed */
    height: auto; /* Adjust height as needed */
    top: auto; /* Remove top positioning */
    right: auto; /* Remove right positioning */
    background-color: transparent; /* Adjust background color */
    flex-direction: row; /* Arrange items horizontally */
  }
  .menu--container ul {
    flex-direction: row; /* Arrange menu items horizontally */
  }
  .menu--container li {
    margin: 0 1rem; /* Adjust margin for horizontal layout */
  }
}
</style>
