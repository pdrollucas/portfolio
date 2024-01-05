<template>
  <div class="header-items">
    <button @click="changeLanguage('pt_BR')">
      <img src="@/assets/flag-brasil.png" alt="" />
    </button>
    <button @click="changeLanguage('EN')">
      <img src="@/assets/flag-usa.png" alt="" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style scoped>
img {
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease;
}

img:hover {
  opacity: 0.5;
}

img:active {
  opacity: 1;
}

button {
  margin: 0 0.5vw;
  color: black;
  text-decoration: none;
}

.header-items {
  display: flex;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}

button img {
  width: 100%;
  height: 5vh;
}

button:last-child {
  margin: 0;
}

@media only screen and (max-width: 600px) {
  button {
    margin: 0 1vw;
  }

  button img {
    width: 24px;
    height: 24px;
  }
}
</style>