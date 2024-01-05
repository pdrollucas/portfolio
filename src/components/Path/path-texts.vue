<template>
  <div class="texts">
    <div class="box">
      <h2>{{ $t("path.titles.first") }}</h2>
      <p>{{ $t("path.texts.first") }}</p>
    </div>
    <div class="box">
      <h2>{{ $t("path.titles.second") }}</h2>
      <p>{{ $t("path.texts.second") }}</p>
    </div>
    <div class="box">
      <h2>{{ $t("path.titles.third") }}</h2>
      <p>{{ $t("path.texts.third") }}</p>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.texts {
  display: flex;
  align-items: center;
}

.box {
  width: 20vw;
  height: 15vw;
  padding: 1vw 2vw;
  background-color: white;
  margin: 1vw 2vw;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

h2 {
  margin-bottom: 0.5vw;
  text-align: center;
  font-size: 1.25vw;
}

p {
  text-align: justify;
  font-size: 1.2vw;
}

@media only screen and (max-width: 600px) {
  .texts {
    flex-direction: column;
  }

  .box {
    width: 100%;
    height: auto;
    padding: 8px;
    border-radius: 0 8px 8px 0;
  }

  h2,
  p {
    font-size: 16px;
  }
}
</style>