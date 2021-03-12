<template>
  <div>

    <div
      v-for="(item, key) in subjects"
      :key="key"
    >
      <a :href="'/category?type=' + item.type">
        {{ item.name }} : {{ item.type }}
      </a>
    </div>
    <v-divider/>
    <br/>

    <div
      v-for="(item, key) in subjects"
      :key="key"
    >
      <div
        v-if="item.type === type"
      >
        {{ item.name }}
      </div>
    </div>

    <v-text-field
      placeholder="name"
      v-model="search"
    >

    </v-text-field>

    <ul>
      <li v-for="(i, key) in filterTwo" :key="key">
        {{ i.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['subjects'],
  data() {
    return {
      type: '',
      search: ''
    }
  },
  computed: {
    filter() {
      if (!this.type) {
        return []
      } else {
        return this.subjects.filter(obj => {
          return obj.type === this.type
        })
      }
    },
    filterTwo() {
      if (this.filter.length === 0) {
        return []
      } else if (this.search === '') {
        return this.filter
      } else {
        return this.filter.filter(obj => {
            return obj.name.toLowerCase() === this.search.toLowerCase()
          }
        )
      }
    }
  },
  created() {
    console.log(this.subjects);
    console.log(this.$route);
    this.type = this.$route.query.type
  }
}
</script>

<style scoped>
.myText {
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 1rem;
}
</style>
