<template>
  <div class="box-cards">
    <div class="card">
      <img src="@/assets/beer.png" alt="" />
      <p>{{ $t("about.cards.first") }}</p>
    </div>
    <div class="card">
      <img src="@/assets/gym.png" alt="" />
      <p>{{ $t("about.cards.second") }}</p>
    </div>
    <div class="card">
      <img src="@/assets/book.png" alt="" />
      <p>{{ $t("about.cards.third") }}</p>
    </div>
  </div>
</template>

<style scoped>
.box-cards {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1vw;
}

.card {
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: white;
  width: 16vw;
  border-radius: 8px;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  padding: 0.5vw;
}

.card img {
  border-radius: 50%;
  padding: 0.25vw;
  background-color: #91eaff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4vw;
}

.card p {
  font-size: 1.2vw;
  background-color: white;
  padding: 0.5vw 0.5vw 0.5vw 1vw;
}

@media only screen and (max-width: 600px) {
  .box-cards {
    display: none;
  }
}
</style>