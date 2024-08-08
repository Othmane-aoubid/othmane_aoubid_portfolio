<template>
  <div class="get--in-touch--form--container">
    <h3
      ref="heading"
      :class="{ 'animate-in': headingVisible, 'animate-out': !headingVisible }"
    >
      Get In Touch <span class="glowing--effect">Let's work together</span>
    </h3>
    <form
      class="form"
      @submit.prevent="validateForm"
      ref="form"
      :class="{ 'animate-in': formVisible, 'animate-out': !formVisible }"
    >
      <div class="input-group">
        <input
          type="text"
          v-model="form.lastName"
          placeholder="Last Name"
          ref="lastNameInput"
          :class="{
            'animate-in': lastNameInputVisible,
            'animate-out': !lastNameInputVisible,
          }"
        />
        <input
          type="text"
          v-model="form.firstName"
          placeholder="First Name"
          ref="firstNameInput"
          :class="{
            'animate-in': firstNameInputVisible,
            'animate-out': !firstNameInputVisible,
          }"
        />
      </div>
      <div class="input-group">
        <input
          type="email"
          v-model="form.email"
          placeholder="Email"
          ref="emailInput"
          :class="{
            'animate-in': emailInputVisible,
            'animate-out': !emailInputVisible,
          }"
        />
      </div>
      <div class="input-group">
        <input
          type="tel"
          v-model="form.phoneNumber"
          placeholder="Phone Number"
          ref="phoneInput"
          :class="{
            'animate-in': phoneInputVisible,
            'animate-out': !phoneInputVisible,
          }"
        />
      </div>
      <div class="input-group">
        <textarea
          v-model="form.message"
          placeholder="Message"
          ref="messageTextarea"
          :class="{
            'animate-in': messageTextareaVisible,
            'animate-out': !messageTextareaVisible,
          }"
        ></textarea>
      </div>
      <button
        type="submit"
        :class="{ 'animate-in': buttonVisible, 'animate-out': !buttonVisible }"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { useToast } from "vue-toastification";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/index";

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
      emailJsConfig: {}, // Change to an object
      headingVisible: false,
      formVisible: false,
      lastNameInputVisible: false,
      firstNameInputVisible: false,
      emailInputVisible: false,
      phoneInputVisible: false,
      messageTextareaVisible: false,
      buttonVisible: false,
    };
  },
  setup() {
    const toast = useToast();
    return {
      toast,
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

      const observers = [
        { ref: 'heading', prop: 'headingVisible' },
        { ref: 'form', prop: 'formVisible' },
        { ref: 'lastNameInput', prop: 'lastNameInputVisible' },
        { ref: 'firstNameInput', prop: 'firstNameInputVisible' },
        { ref: 'emailInput', prop: 'emailInputVisible' },
        { ref: 'phoneInput', prop: 'phoneInputVisible' },
        { ref: 'messageTextarea', prop: 'messageTextareaVisible' },
        { ref: null, prop: 'buttonVisible' }, // Special case for button
      ];

      observers.forEach(({ ref, prop }) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            this[prop] = entry.isIntersecting;
          });
        }, options);

        if (ref) {
          const element = this.$refs[ref];
          if (element) observer.observe(element);
        } else {
          // Handle button visibility separately
          this.buttonVisible = true;
        }
      });
    },
    validateForm() {
      if (
        !this.form.lastName ||
        !this.form.firstName ||
        !this.form.email ||
        !this.form.phoneNumber ||
        !this.form.message
      ) {
        this.showToast("Please fill out all fields.", "error");
        return;
      }

      if (!this.validateEmail(this.form.email)) {
        this.showToast("Please enter a valid email address.", "error");
        return;
      }

      this.sendEmail();
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    async sendEmail() {
      const collectionRef = collection(db, "emailJsConfigue");
      const querySnapshot = await getDocs(collectionRef);
      try {
        if (!querySnapshot.empty) {
          // Assuming there's only one document in the collection
          querySnapshot.forEach((doc) => {
            this.emailJsConfig = doc.data(); // Directly assign the first document's data
            const serviceID = this.emailJsConfig.serviceID; // Use the value from emailJsConfig
            const templateID = this.emailJsConfig.templateID; // Use the value from emailJsConfig
            const userID = this.emailJsConfig.userID; // Use the value from emailJsConfig

            const templateParams = {
              lastName: this.form.lastName,
              firstName: this.form.firstName,
              email: this.form.email,
              phoneNumber: this.form.phoneNumber,
              message: this.form.message,
            };

            emailjs
              .send(serviceID, templateID, templateParams, userID)
              .then(() => {
                this.showToast("Your email was sent successfully!", "success");
                this.resetForm();
              })
              .catch(() => {
                this.showToast(
                  "There was an error sending your email.",
                  "error"
                );
              });
          });
        } else {
          console.log("No documents found in the collection!");
        }
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    },
    resetForm() {
      this.form.lastName = "";
      this.form.firstName = "";
      this.form.email = "";
      this.form.phoneNumber = "";
      this.form.message = "";
    },
    showToast(message, type) {
      const toastOptions = {
        type,
        timeout: 5000,
        position: "top-right",
      };
      if (type === "success") {
        this.toast.success(message, toastOptions);
      } else {
        this.toast.error(message, toastOptions);
      }
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
  padding: 1rem;
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
  background-color: #32cd32; /* Green color for button */
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

.successMessage {
  color: green;
  text-align: center;
}
/* Smooth CSS animations for entry and exit */
.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.animate-out {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

/* Specific animations for different elements */
h3.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0s; /* No delay for the heading */
}

h3.animate-out {
  opacity: 0;
  transform: translateY(-20px);
}

.form.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.5s; /* Delay for the form */
}

.form.animate-out {
  opacity: 0;
  transform: translateY(20px);
}

.input-group input.animate-in,
.input-group textarea.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

.input-group input.animate-out,
.input-group textarea.animate-out {
  opacity: 0;
  transform: translateY(20px);
}

button.animate-in {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 1s; /* Additional delay for the button */
}

button.animate-out {
  opacity: 0;
  transform: translateY(20px);
}
@media (min-width: 1280px) {
  .form {
    width: 80%;
    margin-inline: auto;
  }
}
</style>
