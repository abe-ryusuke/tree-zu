<template>
  <div id="treetemplate">
    <div v-for="tree in trees" :key="tree.id">
      <template v-if="tree.value === ''">
        <span><input v-model="tree.value" class="textinput" @change="changeTree"></span>
      </template>
      <template v-else>
        <span class="dataIn"><input v-model="tree.value" class="textinput" @change="changeTree"></span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TreeTemplate',
  props: {
    trees: {
      type: Array,
      // default: () => ({})
      default: () => [
        {
          id: 1,
          value: 'pagetitle'
        },
        {
          id: 2,
          value: ''
        },
        {
          id: 3,
          value: ''
        },
        {
          id: 4,
          value: ''
        },
        {
          id: 5,
          value: ''
        },
        {
          id: 6,
          value: ''
        },
        {
          id: 7,
          value: ''
        },
        {
          id: 8,
          value: ''
        },
        {
          id: 9,
          value: ''
        },
        {
          id: 10,
          value: ''
        }]
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    changeTree () {
      this.$emit('uploaddata', this.trees)
    }
  }
}
</script>
<style lang='scss'>

div#treetemplate {
   > div {
    margin: 0 0 26px 0px;
    position: relative;
    height: 30px;
   }
}

input.textinput {
    width: 100%;
    z-index: 10;
    font-size: 0.8rem;
    background-color: #fff;
    line-height: 180%;
    padding: 2px;
    border: none;
    resize: none;
    height: auto;
    box-shadow:none;
}
input.textinput:focus {
    background-color: #ffe0e0;
}

input.textinput:hover {
    background-color: #ffe0e0;
}
span.dataIn {
    display:block;
    padding: 5px;
    border:1px solid #333;
}
span {
    display:block;
    padding: 5px;
}
</style>
