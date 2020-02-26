export default {
  namespaced: true,
  state: {
    file: []
  },
  actions: {
    async addReview(store, review) {
      const  formData = new FormData();
      Object.keys(review).forEach(key => {
        const value = review[key];
        formData.append(key, value)
      });
      const response = await this.$axios.post('/reviews', formData);
      console.log(response)
    }
  }
}