<template>
  <div class="boxes">
    <aboutBox />
    <aboutCards />
  </div>
</template>

<script>
import aboutCards from "@/components/About/about-cards.vue";
import aboutBox from "@/components/About/about-box.vue";

export default {
  components: {
    aboutBox,
    aboutCards,
  },
};
</script>

<style scoped>
.boxes {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6vw;
}

@media only screen and (max-width: 600px) {
  .boxes {
    gap: 0;
    justify-content: space-around;
    flex-direction: column;
  }
}
</style>