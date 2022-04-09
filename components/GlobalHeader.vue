<template>
  <div v-if="headerView" id="header" @click="changeView">
    <div>
      <h1>WEBサイト ツリー図作成</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GlobalHeader',
  data () {
    return {
      headerView: true
    }
  },
  methods: {
    changeView () {
      this.headerView = false
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
      margin: 0px 0px 0px 0px;
    }
    > ul {
      margin: 0px 0px 30px 0px;
      li {
        line-height: 160%;
        color: #fff;
        list-style: disc;
        font-size: 14px;
        a {
          color: #fff;
        }
      }
    }
    > p {
      line-height: 160%;
      color: #fff;
      text-align: center;
    }
  }

}
</style>
