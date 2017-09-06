<template>
  <div class="helloList">
    <p>criteria currency: {{ baseCurrency }}</p>
    <p>criteria date: {{ baseDate }}</p>
    <ul id="currency-list" class="list-group">
      <li class="list-group-item" v-for="(val, currency) in currencies">
        <b>{{ currency }}</b>
        {{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'helloList',
  data () {
    return {
      baseCurrency: 'USD',
      baseDate: '',
      currencies: []
    }
  },
  created: function () {
    // alert('list view')
    const baseURI = 'http://api.fixer.io'
    this.$http.get(`${baseURI}/latest?base=USD`)
      .then((result) => {
        console.log(result)
        this.currencies = result.data.rates
        this.baseCurrency = result.data.base
        this.baseDate = result.data.date
      })
  }
}
</script>
