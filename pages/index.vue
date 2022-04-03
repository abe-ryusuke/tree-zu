<template>
  <div>
    <h1 id="pageTitle">
      <input v-model="title" type="text" class="textinput" placeholder="title">
    </h1>
    <div id="tree_container">
      <div>
        <TreeTemplate @uploaddata="template01Event" />
      </div>
      <div>
        <TreeLines />
      </div>
      <div>
        <TreeTemplate @uploaddata="template02Event" />
      </div>
      <div>
        <TreeLines />
      </div>
      <div>
        <TreeTemplate @uploaddata="template03Event" />
      </div>
      <div>
        <TreeLines />
      </div>
      <div>
        <TreeTemplate @uploaddata="template04Event" />
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
        tree01: '',
        tree02: '',
        tree03: '',
        tree04: ''
      }
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
  },
  methods: {
    template01Event (data) {
      this.insertData.tree01 = data
    },
    template02Event (data) {
      this.insertData.tree02 = data
    },
    template03Event (data) {
      this.insertData.tree03 = data
    },
    template04Event (data) {
      this.insertData.tree04 = data
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
  margin: 50px auto 40px auto;
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
