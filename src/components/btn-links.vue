<template>
  <div class="box-links">
    <button class="btn-cv">{{ $t("links.btn-cv") }}</button>
    <button><img src="@/assets/linkedin.svg" alt="" /></button>
    <button><img src="@/assets/github.svg" alt="" /></button>
  </div>
</template>

<style scoped>
button {
  background-color: #c3baff;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.25),
    1px 1px 2px 0px rgba(0, 0, 0, 0.25);
  border: 0.1vw solid black;
  opacity: 1;
  transition: opacity 0.2s ease;
}

button:hover {
  opacity: 0.7;
}

button:active {
  opacity: 1.5;
}

.box-links {
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-links button {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25vw 1vw;
  margin: 0 0.5vw;
  width: 15%;
}
.box-links button:first-child {
  border-radius: 16px;
  padding: 0.75vw 0.5vw;
  font-weight: bold;
  width: 50%;
  font-size: 1vw;
}

.box-links button img {
  width: 2vw;
  border-radius: 50%;
}

@media only screen and (max-width: 600px) {
  .box-links button {
    border-radius: 100%;
    padding: 8px;
    margin: 0 0.5vw;
  }
  .box-links button:first-child {
    border-radius: 16px;
    padding: 0.75vw 0;
    font-weight: bold;
    font-size: 12px;
  }

  .box-links button img {
    width: 100%;
    border-radius: 50%;
  }
}
</style>