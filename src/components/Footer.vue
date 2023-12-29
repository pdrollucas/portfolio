<template>
  <div class="box-links">
    <button>Baixar CV</button>
    <button><img src="../imgs/linkedin.svg" alt="" /></button>
    <button><img src="../imgs/github.svg" alt="" /></button>
  </div>
</template>

<script>
</script>

<style scoped>
.box-links {
  width: 100%;
  padding: 4vw 10vw;
  background-color: #bef3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid black;
  border-top-left-radius: 16px;
    border-top-right-radius: 16px;
}

button {
  background-color: #c3baff;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.25),
    1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  border: 0.1vw solid black;
}

.box-links button {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25vw 1vw;
  margin: 0 0.5vw;
  width: 2.5vw;
}
.box-links button:first-child {
  border-radius: 16px;
  padding: 0.75vw 0.5vw;
  font-weight: bold;
  width: 8vw;
  font-size: 1vw;
}

.box-links button img {
  width: 2vw;
  border-radius: 50%;
}
</style>