<template lang="pug">
  div
    main-header
    nav-menu
    section.section
      .container
        .about
          .about__inner
            h2.about__title.title Блок «Обо мне»
            .about__modify.modify
              button(type="button" class="modify__add modify__add_small" aria-label="Add")
              span Добавить группу
          .about__skills
            Skills
    section.section
      .container
        Work
    section.section
      .container
        Reviews
    reg
</template>

<style lang="postcss">
  @import "../../node_modules/normalize.css/normalize.css";
  @import "../styles/mixins.pcss";
  @import "./styles/layout/base.pcss";
  .about {
    &__inner {
      display: flex;
      margin-bottom: 60px;
      align-items: center;
    }
    &__title {
      margin-right: 50px;
      margin-bottom: 0;
    }
    &__modify {
      display: flex;
      max-width: unset;
      width: auto;
      align-items: center;
      span {
        color: #383bcf;
        margin-left: 15px;
      }
    }
  }
</style>

<script>
  import MainHeader from "./components/MainHeader";
  import NavMenu from "./components/NavMenu";
  import Skills from "./components/Skills";
  import Work from "./components/Work";
  import Reviews from "./components/Reviews";
  import reg from "./components/reg";
  import variables from "../styles/variables"

  export default {
      components: {Reviews, Work, Skills, NavMenu, MainHeader, reg},
      data() {
          return {
              variables
          }
      }
  }
</script>

