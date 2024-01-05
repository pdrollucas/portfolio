<template>
  <div class="imgs">
    <img src="@/assets/noto-v1_hatching-chick.svg" alt="" />
    <div class="line"></div>
    <img src="@/assets/emojione_baby-chick.svg" alt="" />
    <div class="line"></div>
    <img src="@/assets/twemoji_bird.svg" alt="" />
  </div>
</template>

<script>
</script>

<style scoped>
.imgs {
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 5vw;
  padding: 1vw;
  background-color: #91eaff;
  border-radius: 100%;
}

.line {
  width: 15vw;
  height: 0.35vw;
  background-color: #b967ff;
}

@media only screen and (max-width: 600px) {
  .imgs {
    flex-direction: column;
    gap: 56px;
  }

  img {
    width: 15vw;
  }

  .line {
    transform: rotate(90deg);
    height: 0.5vw;
    width: 12vh;
  }
}
</style>