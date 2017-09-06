<template>
  <div class="currency">
    <p>criteria currency: {{ baseCurrency }}</p>
    <p>criteria date: {{ baseDate }}</p>
    <input type="text" v-model="baseValue" />
    <ul id="currency-list" class="list-group">
      <li class="list-group-item" v-for="(val, currency) in computedCurrencies">
        <b>{{ currency }}</b>
        {{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'currency',
  data () {
    return {
      baseCurrency: 'USD',
      baseDate: '',
      currencies: [],
      baseValue: 1
    }
  },
  computed: {
    computedCurrencies: function () {
      console.log('baseValue:' + this.baseValue)
      console.log('count:' + Object.keys(this.currencies).length)
      var keys = Object.keys(this.currencies)
      var computedCurrencies = {}
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        computedCurrencies[key] = parseFloat(this.baseValue) * parseFloat(this.currencies[key])
        var str = computedCurrencies[key] + ''
        var formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: key,
          minimumFractionDigits: 2
        })
        computedCurrencies[key] = formatter.format(str)
      }
      return computedCurrencies
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
