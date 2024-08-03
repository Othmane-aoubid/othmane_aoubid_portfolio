<template>
  <div class="footer--container">
    <div class="line"></div>
    <div class="social-icons">
      <a href="#" class="icon linkedin"><i class="fab fa-linkedin"></i></a>
      <a href="#" class="icon dribbble"><i class="fab fa-dribbble"></i></a>
      <a href="#" class="icon facebook"><i class="fab fa-facebook"></i></a>
      <a href="#" class="icon instagram"><i class="fab fa-instagram"></i></a>
      <a href="#" class="icon twitter"><i class="fab fa-twitter"></i></a>
    </div>
    <div class="copyright">© 2023 all rights reserved.</div>
  </div>
</template>

<script>
export default {};
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
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border: 2px solid white;
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
