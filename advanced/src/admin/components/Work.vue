<template lang="pug">
  .work
    h2.title Блок «Работы»
    .work__group.desc
      h3.desc__title.title Редактирование работы
      .desc__inner
        .desc__column.desc__column_flex
          .desc__load-img
            button(type="button" class="btn desc__load-btn") Загрузить
        .desc__column
          .desc__field
            label(class="desc__label" for="workName") Название
            input(id="workName" class="desc__input" type="text")
          .desc__field
            label(class="desc__label" for="workLink") Ссылка
            input(id="workLink" class="desc__input" type="text")
          .desc__field
            label(class="desc__label" for="workDesc") Описание
            textarea(id="workDesc" class="desc__content")
          .desc__field
            label(class="desc__label" for="workTag") Добавление тэга
            input(id="workTag" class="desc__input" type="text")
          .desc__tag-list
            .desc__tag-item
              .desc__tag-content Html
              .modify
                button(type="button" class="modify__del modify__del_small" aria-label="Delete")
          .desc__btn-group
            button(type="button" class="btn desc__cancel-btn")  Отменить
            button(type="button" class="btn desc__save-btn") Сохранить
    .desc-mini
        .desc-mini__row.desc-mini__row_add
          button(type="button" class="modify__add modify__add_big")
          span Добавить работу
        .desc-mini__row
          .desc-mini__load-img
            img(class="desc-mini__img" :src="img")
            .desc__tag-list
              .desc__tag-item
                .desc__tag-content Html
          .desc-mini__inner
            h3.desc-mini__title Сайт школы образования
            .desc-mini__content Этот парень проходил обучение веб-разработке не где-то, а в Loftshool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a(class="desc-mini__link" href="#") http://loftschool.ru
            .modify
              .modify__inner
                span Править
                button(type="button" class="modify__pencil" aria-label="Edit")
              .modify__inner
                span Удалить
                button(type="button" class="modify__del modify__del_red")

</template>

<script>
  import img from "../../images/content/worksPreview/1.jpg"
    export default {
        name: "Work",
        data() {
            return {
                img
            }
        },
    }
</script>

<style  lang="postcss">
  @import "../../styles/mixins.pcss";
  @import "../styles/components/modify.pcss";
  @import "../styles/components/desc.pcss";
  @import "../styles/components/desc-mini.pcss";

  .work {
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
  }
</style>