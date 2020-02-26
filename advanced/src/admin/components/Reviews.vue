<template lang="pug">
  .reviews
    h2.title Блок «Отзывы»
    .reviews__group.desc
      h3.desc__title.title Новый отзыв
      .desc__inner
        .desc__column.desc__column-user
          .desc__load-img(
            :class="{filled: renderedPhoto.length}"
            :style="{backgroundImage: `url(${renderedPhoto})`}"
            :src="user"
          )
            .desc-mini__img
          label.desc__load-label.desc__load-btn_padding Добавить фото
            input(
              type="file"
              class="btn desc__load-btn"
              @change="handleFile"
            )
        .desc__column
          .desc__field-wrap
            .desc__field
              label(class="desc__label" for="workName") Имя автора
              input(v-model="review.author" id="workName" class="desc__input" type="text")
            .desc__field
              label(class="desc__label" for="workLink") Титул автора
              input(v-model="review.occ" id="workLink" class="desc__input" type="text")
          .desc__field
            label(class="desc__label" for="workDesc") Отзыв
            textarea(v-model="review.text" id="workDesc" class="desc__content")
          .desc__btn-group
            button(type="button" class="btn desc__cancel-btn")  Отменить
            button(type="button" class="btn desc__save-btn" @click="send") Сохранить
    .desc-mini
      .desc-mini__row.desc-mini__row_add
        button(type="button" class="modify__add modify__add_big")
        span Добавить работу
      .desc-mini__row(:review="review")
        pre {{review}}
        .desc-mini__inner
          .user.desc-mini__user
            .user__pic
              img(class="user__img" :src="avatar")
            .user__info
              .user__name Владимир Сабанцев
              .user__profession Преподаватель
          .desc-mini__content Этот парень проходил обучение веб-разработке не где-то, а в Loftshool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .modify
            .modify__inner
              span Править
              button(type="button" class="modify__pencil" aria-label="Edit")
            .modify__inner
              span Удалить
              button(type="button" class="modify__del modify__del_red")
</template>

<script>
  import user from "../../images/content/user-default.png"
  import avatar from "../../images/content/avatar.jpg"
  import {mapActions} from "vuex";
  export default {
    name: "Reviews",
    data() {
      return {
        user,
        avatar,
        renderedPhoto: "",
        review: {
          photo: {},
          author: "",
          occ: "",
          text: ""
        }
      }
    },
    methods: {
      ...mapActions("addFile", ["addReview"]),
      handleFile(e) {
        const file = e.target.files[0];
        this.review.photo = file;
        this.renderImageFile(file);
      },
      renderImageFile(file) {
        const reader = new FileReader();
        try {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
            this.renderedPhoto =  reader.result;
          }
        } catch (error) {
          throw new Error("Ошибка при чтении файла")
        }
      },
      send() {
       this.addReview(this.review)
      }
    }
  }
</script>

<style scoped lang="postcss">
  @import "../../styles/mixins.pcss";
  @import "../styles/components/user.pcss";
  .reviews {
    &__group {
      padding: 0 20px ;
      padding-top: 25px;
      margin-bottom: 30px;
    }
    &__title {
      border-bottom: 1px solid rgba(65, 75, 99, .15);
      padding-bottom: 25px;
      margin-bottom: 50px;
    }
    .desc {
      &__column {
        /*flex: unset;*/
        &:last-child {
          max-width: 613px;
          width: 100%;
        }
        &-user {
          max-width: 200px;
          flex-grow: 2;
        }
        &_flex {
          flex: 3;
        }
      }
      &__inner {
        align-items: center;
      }

      &__load-img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 25px;
        border: none;
        &::before {
          content: none;
        }
      }
      &__field-wrap {
        display: flex;
      }
      &__field {
        flex: 1;
        &:first-child {
          margin-right: 30px;
        }
      }
      .desc__load-label {
        background-image: none;
        color: #383bcf;
        text-transform: unset;
        text-align: center;
      }
      .desc__load-btn {
        position: absolute;
        top: 0;
        left: -9999px;
      }
    }
    .desc__load-img {
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      &__row {
        height: 380px;
      }
      .desc-mini__img {
        background-image: svg-load("user.svg", fill="#fff");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
