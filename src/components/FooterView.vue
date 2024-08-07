<template>
  <div id="contact" class="footer--container">
    <div class="line"></div>
    <div class="social-icons">
      <a href="javascript:void(0)" @click="openProject('https://www.linkedin.com/in/othmane-aoubid-397417147/')" class="icon linkedin"><i class="fab fa-linkedin"></i></a>
      <a href="javascript:void(0)" @click="openProject('https://othmaneadportfolio.vercel.app/')" class="icon dribbble"><i class="fab fa-dribbble"></i></a>
    </div>
    <div class="copyright">© 2024 all rights reserved.</div>
  </div>
</template>

<script>
export default {
  methods: {
    openProject(url) {
      window.open(url, "_blank");
    },
  }
};
</script>

<style scoped>
.footer--container {
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px 0;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #333;
  margin-bottom: 20px;
}

.social-icons {
  margin-bottom: 10px;
}

.social-icons .icon {
  margin: 0 10px;
  color: #32cd32;
  text-decoration: none;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 2px solid #32cd32;
  border-radius: 50%;
  text-align: center;
}

.social-icons .icon i {
  font-size: 20px;
  vertical-align: middle;
}

.copyright {
  font-size: 14px;
}
</style>
