<template>
  <div class="footer">
    <btnLinks/>
  </div>
</template>

<script>
import btnLinks from '@/components/btn-links.vue';

export default{
  components: {
    btnLinks
  }
}

</script>

<style scoped>
.footer {
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

@media only screen and (max-width: 600px) {
  .footer{
    border: 1px solid black;
  }

}
</style>