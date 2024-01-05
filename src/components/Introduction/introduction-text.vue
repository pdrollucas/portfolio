<template>
  <div class="box-text">
    <h2>{{ $t("introduction.hello") }}</h2>
    <p>
      {{ $t("introduction.name") }}<br />
      {{ $t("introduction.text") }}
    </p>
  </div>
</template>

<script>
</script>

<style>
.box-text {
  border: 0.2vw solid black;
  border-radius: 8px;
  padding: 1vw;
  font-size: 1.5vw;
  width: 20vw;
  /* width: 25vw; */
  background-color: #91eaff;
  margin-bottom: 1vw;
}

@media only screen and (max-width: 600px) {
  .box-text {
    padding: 2vw;
    font-size: 4vw;
    width: 70%;
    background-color: #91eaff;
    margin-bottom: 1vh;
  }
}
</style>