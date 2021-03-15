<template>
  <div>
    <h2>Каталог товаров</h2>
    <v-divider
      class="mb-2 mt-2"
    />
    <v-row>
      <v-col
        v-for="(prod, prodKey) in dataNew"
        :key="prodKey"
        cols="3"
      >
        <v-card
          class="mx-auto"
          max-width="227"
          shaped
          elevation="5"
          outlined
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="prod.images[0]"
          >
          </v-img>

          <v-card-subtitle class="pb-0">
            {{ prod.name }}
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ prod.price }} BYN</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              class="ml-6 mb-2"
              elevation="5"
              outlined
              color="primary"
              dark
              rounded
              @click="addCart(prodKey)"
            >
              В корзину
              <v-icon
                dark
                right
              >
                mdi-cart-plus
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dataNew: []
    }
  },
  async created () {
    const response = await this.$axios.get('https://api.megatop.by/api/v1/catalog/category?url=/muzhchiny/obuv&limit=40&device=desktop')
    this.dataNew = response.data.data
    console.log(this.dataNew);
  },
  methods: {
    addCart (index){
      console.log(index);
      console.log(this.dataNew[index]);
      this.$store.commit('addToCart', this.dataNew[index])
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
