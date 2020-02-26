<template lang="pug">
  .skills
    .skills__row
      .skills__title {{category.category}}
      .modify
        button(type="button" class="modify__pencil" aria-label="Edit")
        button(type="button" class="modify__trash")
    ul.skills__list
      skill-item(
        v-for="skill in category.skills"
        :key="skill.id"
        :skill="skill"
      )
    .skills__add
      form(
        @submit.prevent="addNewSkill"
        :class={blocked: loading}
      ).skills__field
        input(
          v-model="skill.title"
          type="text"
          class="skills__field-value edit-string"
          placeholder="Новый навык"
        )
        .skills__field_inner
          input(type="text" class="percent edit-string" v-model="skill.percent")
          .percent
        .modify
          button(
            type="submit"
            class="modify__add"
            aria-label="Add"
          :disabled="loading"
          )
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "skills",
    components: {
      SkillItem: () => import("./skill-item")
    },
    props: {
      category: {
        type: Object,
        default: () => {},
        required: true
      }
    },
    data() {
      return {
        loading: false,
        skill: {
          title: "",
          percent: 0,
          category: this.category.id,
        }
      }
    },
    methods: {
      ...mapActions("skills", ["addSkill"]),
      async addNewSkill() {
        this.loading = true;
        try {
          await this.addSkill(this.skill);
          this.skill.title = "";
          this.skill.percent = "";
        } catch (error) {

        } finally {
          this.loading = false
        }
      }
    }
  }
</script>

<style scoped lang="postcss">
  @import "../../styles/mixins.pcss";
  @import "../styles/components/modify.pcss";
  @import "../styles/components/percent.pcss";
  @import "../../styles/layout/base.pcss";

  .skills {
    flex-basis: 525px;
    background-color: #fff;
    margin-bottom: 30px;
    padding: 0 20px;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
    @include tablets {
      flex-basis: 340px;
    }
    @include phones {
      flex-basis: 100%;
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
      &_inner {
        display: flex;
        max-width: 15%;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
  .skills__field.blocked {
    opacity: .5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
  }
</style>

<!--
      .skills__block
      .skills__row
        input(type="text" placeholder="Название новой группы" class="skills__value edit-string" value="Frontend" disabled)
        .modify
          button(type="button" class="modify__pencil" aria-label="Edit")
      ul.skills__list
        li.skills__item
          .skills__item-value Html
          .percent 50
          .modify
            button(type="button" class="modify__pencil" aria-label="Edit")
            button(type="button" class="modify__trash")
              span.visually-hidden Delete
        li.skills__item
          .skills__item-value.edit-string Html
          .percent.edit-string 50
          .modify
            button(type="button" class="modify__tick" aria-label="Done")
            button(type="button" class="modify__del modify__del_red" aria-label="Delete")
      .skills__add
        .skills__field
          input(type="text" class="skills__field-value edit-string" placeholder="Новый навык")
          .percent.edit-string 0
          .modify
            button(type="button" class="modify__add")
              span.visually-hidden Добавить
      li.skills__item(
        v-for="skill in category.skills"
        :key="skill.id"
        :category="category"
      )
        .skills__item-value {{skill.title}}
        .percent {{skill.percent}}
        .modify
          button(type="button" class="modify__pencil" aria-label="Edit")
          button(type="button" class="modify__trash" aria-label="Delete")

-->
