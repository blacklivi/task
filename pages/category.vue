<template>
  <div>
    <Card
    :subjects="subjects"
    />
  </div>
</template>

<script>
import Card from '@/components/card'

export default {
  components: {
    Card
  },
  data() {
    return {
      subjects: [
        {
          type: 'car',
          name: 'BMW'
        },
        {
          type: 'car',
          name: 'Audi'
        },
        {
          type: 'car',
          name: 'Citroen'
        },
        {
          type: 'fruit',
          name: 'apple'
        },
        {
          type: 'fruit',
          name: 'melissa'
        },
        {
          type: 'fruit',
          name: 'banana'
        },
        {
          type: 'animals',
          name: 'cat'
        },
        {
          type: 'animals',
          name: 'dog'
        },
        {
          type: 'animals',
          name: 'elephant'
        }
      ]
    }
  },
}
</script>

<!--<style scoped>-->

<!--</style>-->
