<template lang="pug">
  .skills
    .skills__block
      .skills__row
        input(type="text" placeholder="Название новой группы" class="skills__value edit-string" disabled)
        .modify
          button(type="button" class="modify__tick")
            span.visually-hidden Done
          button(type="button" class="modify__del modify__del_red")
            span.visually-hidden Delete
      ul.skills__list
        li.skills__item
          .skills__item-value Html
          .percent 50
          .modify
            button(type="button" class="modify__pencil")
              span.visually-hidden Delete
      .skills__add
        .skills__field
          input(type="text" class="skills__field-value edit-string" placeholder="Новый навык")
          .percent.edit-string 0
          .modify
            button(type="button" class="modify__add")
              span.visually-hidden Добавить
    .skills__block
      .skills__row
        input(type="text" placeholder="Название новой группы" class="skills__value edit-string" value="Frontend" disabled)
        .modify
          button(type="button" class="modify__edit") Edit
      ul.skills__list
        li.skills__item
          .skills__item-value Html
          .percent 50
          .modify
            button(type="button" class="modify__edit") Edit
            button(type="button" class="modify__trash")
              span.visually-hidden Delete
        li.skills__item
          .skills__item-value.edit-string Html
          .percent.edit-string 50
          .modify
            button(type="button" class="modify__done") Done
            button(type="button" class="modify__del modify__del_red")
              span.visually-hidden Delete
      .skills__add
        .skills__field
          input(type="text" class="skills__field-value edit-string" placeholder="Новый навык")
          .percent.edit-string 0
          .modify
            button(type="button" class="modify__add")
              span.visually-hidden Добавить
</template>

<script>
    export default {
        name: "skills"
    }
</script>

<style scoped lang="postcss">
  @import "../styles/components/modify.pcss";
  @import "../styles/components/percent.pcss";

  .skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &__block {
      max-width: 525px;
      width: 100%;
      background-color: #fff;
      margin-bottom: 30px;
      padding: 0 20px;
      box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
    }
    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-bottom: 1px solid rgba(31, 35, 45, .15);
      height: 74px;
      padding-left: 5px;
      margin-bottom: 30px;
    }
    &__value {
      padding-bottom: 10px;
      max-width: 270px;
      width: 100%;

    }
    &__title {
      color: #414c63;
      max-width: 270px;
      width: 100%;
    }
    &__list {
      display: flex;
      flex-direction: column;
      margin-bottom: 50px;
    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: nowrap;
      margin-bottom: 15px;
      &-inner {
        display: flex;
        max-width: 15%;
        width: 100%;
        justify-content: space-between;
        padding: 0 10px;
        padding-bottom: 7px;
      }
      &-value {
        max-width: 57%;
        width: 100%;
        padding-bottom: 7px;
      }
    }
    &__add {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
    &__field {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      max-width: 355px;
      width: 100%;
      &-value {
        max-width: 45%;
        width: 100%;
        padding-bottom: 7px;
      }
    }
  }


</style>