<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<button type="button" class="btn btn-primary" v-on:click="calc">Inc number</button>
	<input type="text" v-model="num" />
	<p>exp results : {{ num * num }}</p>
	<router-link to="/list" class="btn btn-warning">Go to List</router-link>
	<router-link :to="{ path: '/currencies' }" replace class="btn btn-info">Go to currencies No History</router-link>
	<a v-bind:href="list">list</a>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App2',
      num: 1,
      list: '/list'
    }
  },
  methods: {
    calc: function (event) {
      this.num = parseInt(this.num) + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
