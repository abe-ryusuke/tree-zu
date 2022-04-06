<template>
  <div>
    <h1 id="pageTitle">
      <input v-model="title" type="text" class="textinput" placeholder="title">
    </h1>
    <div id="tree_container">
      <div>
        <TreeTemplate :trees="insertData.tree01" @uploaddata="template01Event" />
      </div>
      <div>
        <TreeLines />
      </div>
      <div>
        <TreeTemplate :trees="insertData.tree02" @uploaddata="template02Event" />
      </div>
      <div>
        <TreeLines />
      </div>
      <div>
        <TreeTemplate :trees="insertData.tree03" @uploaddata="template03Event" />
      </div>
      <div>
        <TreeLines />
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
      insertData: {
        tree01: [],
        tree02: [],
        tree03: [],
        tree04: []
      }
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    /*
    insertData: {
      get () {
        return this.$store.state.trees
      },
      set () {
        this.$store.dispatch('saveTrees')
      }
    }
    */
  },
  mounted () {
    const getjson = localStorage.getItem('trees')
    this.insertData = JSON.parse(getjson)
  },
  methods: {
    template01Event (data) {
      console.log(data)
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
    savestrage () {
      // this.$store.commit('saveTrees', this.insertData)
      const setjson = JSON.stringify(this.insertData)
      localStorage.setItem('trees', setjson)
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
