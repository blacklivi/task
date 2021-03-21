<template>
  <div class="v-notification">
    <div
      v-for="message in messages"
      :key="message.id"
      class="v-notification_content"
    >
      <div class="content_text">
        <span>{{ message.name }}</span>
        <v-icon
          dark
          right
        >
          mdi-cart-plus
        </v-icon>
      </div>
      <div class="content_buttons">
        <button v-if="rightButton.length">{{ rightButton }}</button>
        <button v-if="leftButton.length">{{ leftButton }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-notification",
  props: {
    messages: {
      type: Array,
      default: () => {
        return []
      }
    },
    rightButton: {
      type: String,
      default: ''
    },
    leftButton: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.v-notification {
  position: fixed;
  top: 80px;
  right: 16px;
  z-index: 10;
  background: #2d81d6;
  border-radius: 24px;
  opacity: 0.6;
}

.v-notification_content {
  padding: 16px;
  border-radius: 4px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}

.content_text {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
