<template>
  <div id="header">
    <div>
      <h1>555</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GlobalHeader',
  data () {
    return {
      veiw: ''
    }
  },
  methods: {
    changeLine () {
    }
  }
}
</script>
<style lang='scss' scoped>
#header {
  background-color: #000;
  padding: 50px 0px;
  > div {
    width: 980px;
    margin: 0px auto 0px auto;
    > h1 {
      color: #fff;
      font-size: 20px;
      text-align:center;
      font-weight: bold;
    }
  }

}
</style>
