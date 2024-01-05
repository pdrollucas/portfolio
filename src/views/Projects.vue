<template>
  <section class="projects" id="projects">
    <div>
      <h2>
        {{ $t("projects.title.up") }} <br />
        {{ $t("projects.title.down") }}
      </h2>
    </div>

    <Swiper
      :slidesPerView="'auto'"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      class="boxes"
      v-if="isMobile"
    >
      <swiper-slide
        v-for="project in swiperTextBase"
        :key="project.id"
        class="box"
        :class="{ flipped: project.isFlipped }"
      >
        <div class="flip-card-inner">
          <div class="box-front">
            <!-- Conteúdo da frente da caixa -->
            <div class="box-title">
              <h3>{{ project.title }}</h3>
              <img :src="project.icon" alt="" />
            </div>
            <div class="box-img">
              <img :src="project.image" alt="" />
            </div>
            <div class="box-links">
              <a :href="project.github" target="_blank">
                <img src="@/assets/github.svg" alt="" />
              </a>
              <a :href="project.deployLink" target="_blank">
                <img src="@/assets/mdi_cellphone-link.svg" alt="" />
              </a>
              <button @click="flipBox(project.id)">
                <img src="@/assets/mdi_rotate-360.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="box-back">
            <!-- Conteúdo do verso da caixa -->
            <div class="box-title">
              <h3>{{ project.title }}</h3>
              <img :src="project.icon" alt="" />
            </div>
            <div class="box-txt">
              <p>{{ project.description }}</p>
            </div>
            <div class="box-links">
              <a :href="project.github">
                <img src="@/assets/github.svg" alt="" />
              </a>
              <a :href="project.deployLink">
                <img src="@/assets/mdi_cellphone-link.svg" alt="" />
              </a>
              <button @click="flipBox(project.id)">
                <img src="@/assets/mdi_rotate-360.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </Swiper>

    <div class="boxes" v-else>
      <div
        v-for="project in swiperTextBase"
        :key="project.id"
        class="box"
        :class="{ flipped: project.isFlipped }"
      >
        <div class="flip-card-inner">
          <div class="box-front">
            <!-- Conteúdo da frente da caixa -->
            <div class="box-title">
              <h3>{{ project.title }}</h3>
              <img :src="project.icon" alt="" />
            </div>
            <div class="box-img">
              <img :src="project.image" alt="" />
            </div>
            <div class="box-links">
              <a :href="project.github" target="_blank">
                <img src="@/assets/github.svg" alt="" />
              </a>
              <a :href="project.deployLink" target="_blank">
                <img src="@/assets/mdi_cellphone-link.svg" alt="" />
              </a>
              <button @click="flipBox(project.id)">
                <img src="@/assets/mdi_rotate-360.svg" alt="" />
              </button>
            </div>
          </div>
          <div class="box-back">
            <!-- Conteúdo do verso da caixa -->
            <div class="box-title">
              <h3>{{ project.title }}</h3>
              <img :src="project.icon" alt="" />
            </div>
            <div class="box-txt">
              <p>{{ project.description }}</p>
            </div>
            <div class="box-links">
              <a :href="project.github">
                <img src="@/assets/github.svg" alt="" />
              </a>
              <a :href="project.deployLink">
                <img src="@/assets/mdi_cellphone-link.svg" alt="" />
              </a>
              <button @click="flipBox(project.id)">
                <img src="@/assets/mdi_rotate-360.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
import IconReact from "@/assets/logos_react.svg";
import ImgStarWars from "@/assets/starwars 1.png";
import IconJS from "@/assets/logos_javascript.svg";
import ImgTravelBackpack from "@/assets/travelbackpack 1.png";
import ImgCineNow from "@/assets/cinenow 1.png";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperTextBase = ref([
      {
        id: 1,
        title: "StarWars API",
        icon: IconReact,
        image: ImgStarWars,
        github: "https://github.com/pdrollucas/StarWarsAPI",
        deployLink: "https://star-wars-api-fawn.vercel.app/",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
        isFlipped: false,
      },
      {
        id: 2,
        title: "Travel Backpack",
        icon: IconJS,
        image: ImgTravelBackpack,
        github: "https://github.com/pdrollucas/travel-backpack",
        deployLink: "https://travel-backpack.vercel.app/",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
        isFlipped: false,
      },
      {
        id: 3,
        title: "CineNow API",
        icon: IconReact,
        image: ImgCineNow,
        github: "https://github.com/pdrollucas/cineNow",
        deployLink: "https://cinenow.netlify.app/",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit...",
        isFlipped: false,
      },
    ]);
    const isMobile = ref(false);

    onMounted(() => {
      isMobile.value = window.innerWidth <= 600;
    });

    // Atualiza a variável isMobile quando a janela for redimensionada
    window.addEventListener("resize", () => {
      isMobile.value = window.innerWidth <= 600;
    });

    return { modules: [Pagination], isMobile, swiperTextBase };
  },
  methods: {
    flipBox(projectId) {
      const project = this.swiperTextBase.find((p) => p.id === projectId);
      if (project) {
        project.isFlipped = !project.isFlipped;
      }
    },
  },
};
</script>

<style scoped>
.projects {
  z-index: 999; /* para não ficar por cima do header */
  background-color: white;
  padding: 2vw 10vw;
}

h2 {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: inline-block;
  padding: 0.75vw 2vw 0.75vw 0.75vw;
  text-align: left;
  background-color: #f2f2f2;
  font-size: 1.25vw;
  width: 11vw;
  border-left: 3px solid #dddada;
}

.boxes {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
}

.box {
  width: 20vw;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 1vw 2vw;
}

.box-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vw;
  /* background-color: #91EAFF; */
  background-color: #c3baff;
  font-size: 1vw;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.box-title img {
  width: 2vw;
}

.box-img {
  border-left: 1px solid #dddada;
  border-right: 1px solid #dddada;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1vw;
}

.box-img img {
  width: 90%;
  height: 15vw;
}

.box-links {
  width: 100%;
  padding: 1vw;
  background-color: #c3baff;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.box-links img,
.box-links button {
  width: 2.5vw;
}

.box-txt {
  font-size: 1.25vw;
  width: 100%;
  height: 100%;
  padding: 1.5vw;
  text-align: justify;
  background-color: #f2f2f2;
  border-left: 1px solid #dddada;
  border-right: 1px solid #dddada;
}

a img,
button img {
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.25),
    1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  padding: 0.5vw;
  opacity: 1;
  transition: opacity 0.2s ease;
  background-color: #f2f2f2;
}

a img:hover,
button img:hover {
  opacity: 0.5;
}

a img:active,
button img:active {
  opacity: 1;
}

/* Efeito de virar a carta */

.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.box.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.box-front,
.box-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
}

.box-back {
  transform: rotateY(180deg);
}

@media only screen and (max-width: 600px) {
  .projects {
    padding: 3vh 10vw;
  }

  h2 {
    font-size: 16px;
    width: 30vw;
    padding: 1.25vw 2vw 1.25vw 1.25vw;
    margin-bottom: 16px;
  }

  .box {
    width: 40vw;
    height: 35vh;
    margin: 0 4vw;
  }

  .box-txt {
    font-size: 14px;
    padding: 8px;
    width: 99%;
  }

  .box-img {
    padding: 8px;
    width: 99%;
  }

  .box-img img {
    height: 20vh;
  }

  .box-title {
    font-size: 12px;
    padding: 8px;
  }

  .box-links img,
  .box-links button {
    width: 16px;
  }

  .box-links {
    padding: 1vh;
    padding-bottom: 0.5vh;
    width: 100%;
  }

  .box-title img {
    width: 16px;
  }
}
</style>