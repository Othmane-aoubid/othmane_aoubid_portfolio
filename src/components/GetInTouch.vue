<template>
  <div class="get--in-touch--form--container">
    <h3>Get In Touch <span class="glowing--effect">Lets work together</span></h3>
    <form @submit.prevent="validateForm">
      <div class="input-group">
        <input type="text" v-model="form.lastName" placeholder="Last Name" />
        <input type="text" v-model="form.firstName" placeholder="First Name" />
      </div>
      <div class="input-group">
        <input type="email" v-model="form.email" placeholder="Email" />
      </div>
      <div class="input-group">
        <input
          type="tel"
          v-model="form.phoneNumber"
          placeholder="Phone Number"
        />
      </div>
      <div class="input-group">
        <textarea v-model="form.message" placeholder="Message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        email: "",
        phoneNumber: "",
        message: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    validateForm() {
      if (
        !this.form.lastName ||
        !this.form.firstName ||
        !this.form.email ||
        !this.form.phoneNumber ||
        !this.form.message
      ) {
        this.errorMessage = "Please fill out all fields.";
        return;
      }

      if (!this.validateEmail(this.form.email)) {
        this.errorMessage = "Please enter a valid email address.";
        return;
      }

      this.errorMessage = "";
      // Process form submission
      console.log("Form submitted", this.form);
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.get--in-touch--form--container {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  color: white;
}

.get--in-touch--form--container h3 {
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

.form {
  display: flex;
  flex-direction: column;
  background-color: #222;
}

.input-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  background-color: #333;
  border: 1px solid #444;
  color: white;
  border-radius: 5px;
}

.input-group input:last-child,
.input-group textarea:last-child {
  margin-right: 0;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #32CD32; /* Green color for button */
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #00cc00;
}

.errorMessage {
  color: red;
  text-align: center;
}
</style>
