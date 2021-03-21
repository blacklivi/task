export const state = () => ({
  cart: []
})

export const mutations = {
  addToCart (state, item) {
    state.cart.push(item)
  },
  deleteFromCard (state, item) {
    console.log(item);
    console.log(item._id);
    console.log(state.cart);
    for (let i = 0; i < state.cart.length; i++) {
      console.log(state.cart[i]);
      // state.cart[i].splice(0, 1)
    }
  }
}
