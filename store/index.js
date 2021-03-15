export const state = () => ({
  cart: []
})

export const mutations = {
  addToCart (state, item) {
    state.cart.push(item)
  }
}
