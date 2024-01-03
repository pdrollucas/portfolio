<template>
  <div class="main">
    <MyHeader />
    <Introduction/>
    <Skills/>
    <MyPath/>
    <Projects/>
    <WhoIAm/>
    <MyFooter/>
  </div>
</template>

<script>
  import MyHeader from "../components/Header.vue";
  import Introduction from '../components/Introduction.vue';
  import Skills from '../components/Skills.vue';
  import MyPath from '../components/Path.vue';
  import Projects from "@/components/Projects.vue";
  import WhoIAm from '../components/WhoAmI.vue';
  import MyFooter from '../components/Footer.vue'


  export default{
    components: {
      MyHeader,
      Introduction,
      Skills,
      MyPath,
      Projects,
      WhoIAm,
      MyFooter
    }
  }
</script>

<style>
  .main{
    background-color: #dddada;
    font-family: 'Baloo 2', sans-serif;
  }
</style>
