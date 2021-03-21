<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <nuxt-link
        class="text-right"
        to="/megatop/basket"
      >
      <div>
        <v-menu
          open-on-hover
          offset-y
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="myBtn"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Корзина {{ $store.state.cart.length }}
            </v-btn>
          </template>
          <v-list v-if="$store.state.cart.length > 0">
            <v-list-item
              v-for="(item, index) in $store.state.cart"
              :key="index"
            >
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-action>
                <v-btn
                  icon
                  @click="deleteItem(index)"
                >
                  <v-icon color="red lighten-1">mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      </nuxt-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      fixed: false,
    }
    },
  methods: {
    deleteItem (x) {
      this.$store.commit('deleteFromCard', this.$store.state.cart[x])
    }
  }
}
</script>

<style lang="scss">
.text-right {
  margin-left: auto;
}

.myBtn {
  background: #2d81d6;
  border-radius: 24px;
  opacity: 0.6;
}
</style>
