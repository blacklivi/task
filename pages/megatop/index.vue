<template>
  <div>
    <h2>Каталог товаров</h2>
<!--    <v-notification-->
<!--      :messages="messages"-->
<!--    />-->
    <v-divider
      class="mb-2 mt-2"
    />
    <v-row>
      <v-col
        v-for="(prod, prodKey) in dataNew"
        :key="prodKey"
        cols="3"
      >
        <product-card
        :prod="prod"
        @add-item="addCart(prodKey)"
        />
      </v-col>
      <v-snackbar
        :timeout="2000"
        v-model="snackbar"
        outlined
        color="blue darken-1"
        rounded="pill"
        max-width="150px"
      >
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn
            text
            width="50px"
            v-bind="attrs"
            @click="snackbar = false, deleteFromCart(prodKey)"
          >
            <v-icon
              right
            >
              mdi-close
            </v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </div>
</template>

<script>
import vNotification from '~/components/notifications/v-notification'
import ProductCard from "@/components/cards/ProductCard";
export default {
  components: {
    vNotification,
    ProductCard
  },
  data() {
    return {
      snackbar: false,
      text: `Товар добавлен в корзину`,
      dataNew: [],
      messages: [
        {
          name: 'Товар добавлен',
          id: Date.now().toLocaleString()
        }
      ]
    }
  },
  async created() {
    const response = await this.$axios.get('https://api.megatop.by/api/v1/catalog/category?url=/muzhchiny/obuv&limit=40&device=desktop')
    this.dataNew = response.data.data
    console.log(this.dataNew);
  },
  methods: {
    up(snackbar) {
      return false
    },
    addCart(index) {
      console.log(index);
      console.log(this.dataNew[index]);
      this.$store.commit('addToCart', this.dataNew[index])
      this.snackbar = true
    }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
