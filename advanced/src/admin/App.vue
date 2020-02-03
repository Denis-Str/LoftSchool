<template lang="pug">
  div
    main-header
    nav-menu
    section.section
      .container
        .about
          h2.title Блок «Обо мне»
          .about__skills
            Skills
    section.section
      .container
        Work
    section.section
      .container
        Reviews
</template>

<style lang="postcss">
  @import "../../node_modules/normalize.css/normalize.css";
  @import "../styles/mixins.pcss";
  @import "./styles/layout/base.pcss";
</style>

<script>
  import MainHeader from "./components/MainHeader";
  import NavMenu from "./components/NavMenu";
  import Skills from "./components/Skills";
  import Work from "./components/Work";
  import Reviews from "./components/Reviews";

  import variables from "../styles/variables"
  export default {
      components: {Reviews, Work, Skills, NavMenu, MainHeader},
      data() {
          return {
              variables
          }
      }
  }
</script>

