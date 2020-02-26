<template lang="pug">
  .reg
    .reg__content
      h2.title Аворизация
      form(
        @submit.prevent="login"
        ).form
        div(class="form__field")
          label(for="name" class="form__label") Логин
          .form__wrap
            input(
            v-model="user.name"
              type="text"
              id="name"
              name="name"
              class="form__input"
              required
              aria-label="Имя"
            )
            .form__error Ошибка
        div(class="form__field")
          label(for="password" class="form__label") Пароль
          .form__wrap.form__wrap_svg
            input(
            v-model="user.password"
              type="password"
              id="password"
              name="password"
              class="form__input"
              required
              aria-label="пароль"
            )
            .form__error Ошибка
        .form__row
          button(type="submit" class="btn form__btn-submit") Отправить
</template>

<script>
  import $axios from "../request";

  export default {
      name: "reg",
      data() {
        return {
          user: {
            name: "",
            password: ""
          }
        }
    },
    methods: {
      async login() {
        try {
          const response = await $axios.post('/login', this.user);
          const token = response.data.token;

          localStorage.setItem('token', token);

          $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
          this.$route.replace("/");

        } catch (error) {

        }
      }
    }
  }
</script>

<style  lang="postcss" scoped>
  @import "../../styles/mixins.pcss";
  @import "../../styles/blocks/components/feedback-form.pcss";
  .reg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 100;
    background-color: rgba(65, 76, 99, .9);

    &__content {
      position: relative;
      background-color: #fff;
      padding-top: 60px;
      padding-bottom: 60px;
      max-width: 560px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 95%;
      @include phones {
        width: 100vw;
        height: 100vh;

      }
    }
  }
  .title {
    color: #414c63;
  }
  .form__btn-submit {
    border-radius: 50px 5px 50px 5px;
    background-image: linear-gradient(90deg,#9300e8,#4a00ed);
    padding: 30px 120px;
    @include tablets {
      padding: 20px 90px;
      border-radius: 40px 5px 40px 5px;
    }
    @include phones {
      padding: 20px 75px;
      border-radius: 40px 5px 40px 5px;
      max-width: 260px;
    }

  }
  .form {
    max-width: 480px;
    width: 100%;

    &__row {
      display: flex;
      justify-content: center;
    }
    &__field {
      margin: 0 auto;
    }
    &__wrap {
      &::before {
        content: "";
        width: 25px;
        height: 25px;
        background-image: svg-load("user.svg", "fill=#414c63");
        background-size: cover;
        margin-bottom: 15px;
      }
      &_svg {
        &::before {
          background-image: svg-load("key.svg", "fill=#414c63");
        }
      }
    }
    &__label {
      margin-left: 35px;
    }
    &__input {
      padding-left: 10px;
    }
}
</style>