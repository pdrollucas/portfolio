<template>
  <div class="box-principal">
    <h3>{{ $t("about.box-principal.title") }}</h3>
    <p>
      {{ $t("about.box-principal.text") }}
    </p>
  </div>
</template>

<script>
</script>

<style scoped>
.box-principal {
  width: 40%;
  text-align: center;
}
.box-principal h3 {
  font-size: 1.25vw;
  padding: 1vw;
  background-color: #91eaff;
  display: inline-block;
  border-top-left-radius: 1vw;
  border-top-right-radius: 1vw;
}

.box-principal p {
  font-size: 1.2vw;
  text-align: justify;
  border-radius: 1vw;
  background-color: white;
  padding: 1vw;
}

@media only screen and (max-width: 600px) {
  .box-principal {
    margin: 2vw 0;
    width: 100%;
  }

  .box-principal h3 {
    font-size: 16px;
    width: 40vw;
  }

  .box-principal p {
    font-size: 16px;
    padding: 16px;
  }
}
</style>