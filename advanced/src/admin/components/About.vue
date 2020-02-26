<template lang="pug">
  .about
    .about__inner
      h2.about__title.title Блок «Обо мне»
    .about__group
      form(
        @submit.prevent="addNewGategory"
      ).about__form
        .about__row
          input(
            v-model="title"
            type="text"
            placeholder="Название новой группы"
            class="about__value edit-string"
            )
          .modify
            button(
              type="submit"
              class="modify__add"
              aria-label="Done"
            )
    .about__group
      skills-group(
        v-for="category in categories"
        :key="category.id"
        :category="category"
      )
</template>

<script>
  import {mapActions, mapState} from 'vuex';
  export default {
    name: "About",
    components: {
      skillsGroup: () => import("./Skills")
    },
    data() {
        return {
            title: ""
        }
    },
    computed: {
      ...mapState("categories", {
        categories: state => state.categories
      })
    },
    created() {
      this.fetchGategories();
    },
    methods: {
      ...mapActions("categories", ["addGategory", "fetchGategories"]),
      async addNewGategory() {
          try {
            await this.addGategory(this.title);
          } catch (error) {}
      }
    }
  }
</script>

<style lang="postcss" scoped>
  @import "../../../node_modules/normalize.css/normalize.css";
  @import "../../styles/mixins.pcss";
  @import "../../styles/layout/base.pcss";
  @import "../styles/components/modify.pcss";

  .about {
    &__inner {
      display: flex;
      margin-bottom: 60px;
      align-items: center;
    }
    &__title {
      margin-right: 50px;
      margin-bottom: 0;
    }
    &__modify {
      display: flex;
      max-width: unset;
      width: auto;
      align-items: center;
      span {
        color: #383bcf;
        margin-left: 15px;
      }
    }
    &__group {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__form {
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
    }
    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      /*border-bottom: 1px solid rgba(31, 35, 45, .15);*/
      height: 74px;
      padding-left: 5px;
      /*margin-bottom: 30px;*/
    }
    &__value {
      padding-bottom: 10px;
      max-width: 270px;
      width: 100%;
    }
  }
</style>