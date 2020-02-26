<template lang="pug">
  li.skills__item(v-if="editMode === false")
    .skills__item-value {{skill.title}}
    .percent {{skill.percent}}
    .modify
      button(
        @click="editMode = true"
        type="button"
        class="modify__pencil"
        aria-label="Edit"
      )
      button(
        @click="removeExistedSkill"
        type="button"
        class="modify__trash"
        aria-label="Delete"
      )
  li.skills__item(v-else="editMode === true")
    input(
      v-model="editedSkill.title"
      type="text"
      class="skills__field-value edit-string"
    )
    .skills__field_inner
      input(type="text" class="percent edit-string" v-model="editedSkill.percent")
      .percent
    .modify
      button(
        @click="editExistedSkill"
        type="button"
        class="modify__tick"
        aria-label="Edit"
      )
      button(
        @click="editMode = false"
        type="button"
        class="modify__del modify__del_red"
        aria-label="Delete"
      )
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    name: "skill-item",
    data() {
      return {
        editMode: false,
        editedSkill: {...this.skill}
      }
    },
    props: {
      skill: {
        type: Object,
        default: () => {},
        required: true
      }
    },
    methods: {
      ...mapActions("skills", ["removeSkill", "editSkill"]),
      async removeExistedSkill() {
        try {
          await this.removeSkill(this.skill);
        } catch (error) {}
      },
      async editExistedSkill() {
        try {
          await this.editSkill(this.editedSkill);
          this.editMode = false;
        } catch (error) {}
      }
    },
  }
</script>

<style lang="postcss" scoped>
  @import "../styles/components/modify.pcss";
  @import "../styles/components/percent.pcss";
  @import "../../styles/mixins.pcss";

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
</style>