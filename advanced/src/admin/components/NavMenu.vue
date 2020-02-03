<template lang="pug">
  nav.nav
    .nav__container.container
      ul.nav__list
        li.nav__item(v-for="link in navLinks")
          a(class="nav__link" :href="link.href").nav__link {{link.title}}
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        navLinks: [
          {title: "Обо мне", href: "#"},
          {title: "Работы", href: "#"},
          {title: "Отзывы", href: "#"},
        ]
      }
    }
  }
</script>

<style scoped lang="postcss">
  .nav {
    height: 77px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    /*padding: 32px 0;*/
    &__container {

    }
    &__list {
      height: 100%;
      display: flex;
      /*max-width: 330px;*/
      /*justify-content: space-between;*/
      align-items: center;
    }
    &__item {
      height: 100%;
      padding: 0 30px;
      display: flex;
      align-items: center;
      transition: .4s;
      border-bottom: solid transparent;
      border-bottom-width: 3px;
      &:hover {
        color: #383bcf;
        border-bottom: 3px solid $links-hover;
      }
    }
  }
</style>