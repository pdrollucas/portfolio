<template>
  <div class="skills-items">
    <div v-for="(skill, index) in skills" :key="index" class="skill-item">
      <img :src="skill.logo" :alt="skill.name + ' Logo'" />
      <div>
        <h3>{{ skill.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import logoJS from "@/assets/logos_javascript.svg";
import logoVue from "@/assets/logos_vue.svg";
import logoFigma from "@/assets/logos_figma.svg";
import logoReact from "@/assets/logos_react.svg";

export default {
  data() {
    return {
      skills: [
        { name: "JavaScript", logo: logoJS },
        { name: "Vue.js", logo: logoVue },
        { name: "Figma", logo: logoFigma },
        { name: "React", logo: logoReact },
      ],
    };
  },
};
</script>

<style scoped>
.skills-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2vw;
  gap: 0.5vw;
  margin-right: 6vw;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: white;
  font-size: 1.25vw;
  border-radius: 1vw;
  width: 15vw;
  height: 5vw;
}

.skill-item img {
  background-color: #f2f2f2;
  width: 25%;
  height: 60%;
  border-radius: 100%;
  padding: 0.5vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.skill-item div {
  padding: 0.5vw 0vw 0.5vw 0.75vw;
}

.skill-item h3 {
  margin-bottom: 0.25vw;
  font-size: 1vw;
}

@media only screen and (max-width: 600px) {
  .skills-items {
    place-items: center;
  }

  .skill-item {
    font-size: 14px;
    border-radius: 8px;
    width: 35vw;
    margin-top: 2vw;
    height: auto;
  }

  .skill-item h3 {
    font-size: 14px;
  }

  .skill-item div {
    padding: 10px;
  }

  .skill-item p {
    display: none;
  }

  .skill-item img {
    width: 40px;
    height: 40px;
    padding: 6px;
  }
}
</style>