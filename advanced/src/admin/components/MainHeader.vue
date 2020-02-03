<template lang="pug">
  header.header
    .header__container.container
      .user
        .user__pic
          img(class="user__img" :src="imgUser")
        .user__name Денис Стрельцов
      .header__inner
        .subtitle Панель администрирования
        a(class="logout" href="#") Выйти
</template>

<script>
    import imgUser from "../../images/content/user.jpg";

    export default {
        name: "MainHeader",
        data() {
            return {
                imgUser
            }
        },
    }
</script>

<style scoped lang="postcss">
  .header {
    background-color: #414c63;
    color: #ffffff;
    padding: 17px 0;
    &__container {
      display: flex;
      align-content: center;
    }
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .user {
    display: flex;
    align-items: center;
    margin-right: 28px;
    &__pic {
      margin-right: 20px;
    }
    &__img {
      max-width: 45px;
      max-height: 45px;
      border-radius: 50%;
    }
    &__name {
      white-space: nowrap;
      font-size: 18px;
    }
  }
  .logout {
    display: flex;
  }
</style>