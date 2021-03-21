<template>
  <v-card
    class="mx-auto"
    max-width="227"
    shaped
    elevation="5"
    outlined
  >
    <v-img
      class="white--text align-end"
      height="250px"
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
        rounded
        @click="addItem()"
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
</template>

<script>
export default {
props:["prod"],
  methods: {
  addItem() {
    this.$emit('add-item')
  }
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
