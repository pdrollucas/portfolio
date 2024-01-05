<template>
  <div class="box">
    <introductionText />
    <BtnLinks />
  </div>
</template>

<script>
import introductionText from "@/components/Introduction/introduction-text.vue";
import BtnLinks from "@/components/btn-links.vue";

export default {
  components: {
    introductionText,
    BtnLinks,
  },
};
</script>

<style>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2vw;
}

@media only screen and (max-width: 600px) {
  .box {
    order: 1;
    margin: 0;
  }
}
</style>