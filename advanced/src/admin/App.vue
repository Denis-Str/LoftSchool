<template lang="pug">
  div
    main-header
    nav-menu
    section.section
      .container
        router-view
</template>

<style lang="postcss">
  @import "../../node_modules/normalize.css/normalize.css";
  @import "../styles/mixins.pcss";
  @import "./styles/layout/base.pcss";
</style>

<script>
  import variables from "../styles/variables"

  export default {
      components: {
        NavMenu: () => import("./components/NavMenu"),
        MainHeader: () => import("./components/MainHeader")
      },
      data() {
          return {
              variables
          }
      }
  }
</script>