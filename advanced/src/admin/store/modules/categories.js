export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_GATEGORIES: (state, data) => state.categories = data,
    ADD_GATEGORY: (state, category) => state.categories.push(category),
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.category
        );
      };
      state.categories = state.categories.map(category => {
        if (category.id === deletedSkill.category) {
          removeSkillCategory(category)
        }
        return category;
      })
    },
    EDIT_SKILL: (state, editedSkill) => {
      const editedSkillCategory = category => {
        category.skills = category.skills.map(
          skill => {
            return skill.id === editedSkill.id ? editedSkill : skill;
          }
        );
      };
      state.categories = state.categories.map(category => {
        if (category.id === editedSkill.category) {
          editedSkillCategory(category)
        }
        return category;
      })
    }
  },
  actions: {
    async addGategory({commit}, title) {
      try {
        const {data} = await this.$axios.post("/categories", {title});
        commit("ADD_GATEGORY", data)
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
    },
    async fetchGategories({commit}) {
      try {
        const user = await this.$axios.get('/user');
        console.log(user)
        const {data} = await this.$axios.get(`categories/${user.data.user.id}`);
        commit("SET_GATEGORIES", data);
      } catch (error) {}
    }
  }
}