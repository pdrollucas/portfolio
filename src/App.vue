<template>
  <div class="main">
    <MyHeader />
    <Introduction/>
    <Skills/>
    <MyPath/>
    <Projects/>
    <About/>
    <MyFooter/>
  </div>
</template>

<script>
  import MyHeader from "./views/Header.vue";
  import Introduction from './views/Introduction.vue';
  import Skills from './views/Skills.vue';
  import MyPath from './views/Path.vue';
  import Projects from "./views/Projects.vue";
  import About from './views/About.vue';
  import MyFooter from './views/Footer.vue'


  export default{
    components: {
      MyHeader,
      Introduction,
      Skills,
      MyPath,
      Projects,
      About,
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
