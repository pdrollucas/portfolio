<template>
  <div>
    <h2>
      {{ $t("skills.title.up") }} <br />
      {{ $t("skills.title.down") }}
    </h2>
    <p class="text-box">
      {{ $t("skills.text") }}
    </p>
  </div>
</template>

<script>
</script>

<style scoped>
h2 {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: inline-block;
  padding: 0.75vw 2vw 0.75vw 0.75vw;
  text-align: left;
  background-color: white;
  margin-bottom: 1vw;
  font-size: 1.25vw;
  width: 11vw;
}

.text-box {
  padding: 0.75vw 2vw 0.75vw 0.75vw;
  text-align: left;
  background-color: white;
  width: 25vw;
  border-radius: 8px;
  font-size: 1.25vw;
  text-align: justify;
}

@media only screen and (max-width: 600px) {
  h2 {
    font-size: 16px;
    width: 30vw;
    padding: 1.25vw 2vw 1.25vw 1.25vw;
    margin-bottom: 16px;
  }

  .text-box {
    padding: 2vw 3vw;
    font-size: 16px;
    width: 80vw;
    margin-bottom: 16px;
  }
}
</style>