<template lang="pug">
  nav.nav
    ul.nav__list.container
      li.nav__item(v-for="link in navLinks")
        router-link(
          :to="link.href"
        ).nav__link {{link.title}}
</template>

<script>
  export default {
    name: "NavMenu",
    data() {
      return {
        navLinks: [
          {title: "Обо мне", href: "/"},
          {title: "Работы", href: "/work"},
          {title: "Отзывы", href: "/reviews"},
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

    &__list {
      height: 100%;
      display: flex;
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
  .router-link-active {
  }
</style>
