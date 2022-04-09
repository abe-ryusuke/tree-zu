<template>
  <div>
    <GlobalHeader />
    <h1 id="pageTitle">
      <input v-model="title" type="text" class="textinput" placeholder="title" @change="changeTitle">
    </h1>
    <div id="tree_container">
      <div>
        <TreeTemplate :trees="insertData.tree01" @uploaddata="template01Event" />
      </div>
      <div>
        <TreeLines :lines="insertData.line01" @uploadline="line01Event" />
      </div>
      <div>
        <TreeTemplate :trees="insertData.tree02" @uploaddata="template02Event" />
      </div>
      <div>
        <TreeLines :lines="insertData.line02" @uploadline="line02Event" />
      </div>
      <div>
        <TreeTemplate :trees="insertData.tree03" @uploaddata="template03Event" />
      </div>
      <div>
        <TreeLines :lines="insertData.line03" @uploadline="line03Event" />
      </div>
      <div>
        <TreeTemplate :trees="insertData.tree04" @uploaddata="template04Event" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      title: '',
      insertData: {}
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
  },
  mounted () {
    this.loadstrage()
  },
  methods: {
    changeTitle () {
      this.insertData.title = this.title
      this.savestrage()
    },
    template01Event (data) {
      this.insertData.tree01 = data
      this.savestrage()
    },
    template02Event (data) {
      this.insertData.tree02 = data
      this.savestrage()
    },
    template03Event (data) {
      this.insertData.tree03 = data
      this.savestrage()
    },
    template04Event (data) {
      this.insertData.tree04 = data
      this.savestrage()
    },
    line01Event (data) {
      this.insertData.line01 = data
      this.savestrage()
    },
    line02Event (data) {
      this.insertData.line02 = data
      this.savestrage()
    },
    line03Event (data) {
      this.insertData.line03 = data
      this.savestrage()
    },
    savestrage () {
      const setjson = JSON.stringify(this.insertData)
      localStorage.setItem('trees', setjson)
      // const getjson = localStorage.getItem('trees')
      // this.insertData = JSON.parse(getjson)
    },
    loadstrage () {
      const getjson = localStorage.getItem('trees')
      if (getjson) {
        this.insertData = JSON.parse(getjson)
      }
      /*
      if (!this.insertData) {
        if (this.insertData.tree01 == null) {
          this.template01Event()
        }
        if (!this.insertData.tree02) {
          this.template02Event()
        }
        if (!this.insertData.tree03) {
          this.template03Event()
        }
        if (!this.insertData.tree04) {
          this.template04Event()
        }
      }
       */
    }
  }
}
</script>
<style lang='scss'>

#tree_container {
  position: relative;
  display: flex;
  width: 980px;
  margin: 0px auto 0px auto;
}
#pageTitle {
  width: 980px;
  margin: 50px auto 30px auto;
  > input {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
  > input.textinput:focus {
      background-color: #ffe0e0;
  }

  > input.textinput:hover {
      background-color: #ffe0e0;
  }
}
</style>
