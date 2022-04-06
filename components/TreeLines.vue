<template>
  <div id="treelines">
    <div v-for="line in lines" :key="line.id" :class="line.value">
      <p @click="changeLine(line)">
        <template v-if="line.value === 'none'">
          <span class="none" />
        </template>
        <template v-else-if="line.value === 'line'">
          <span class="line">─────</span>
        </template>
        <template v-else-if="line.value === 'under'">
          <span class="under">   │<br>   │<br>   │<br>   └──</span>
        </template>
        <template v-else-if="line.value === 'vertical'">
          <span class="vertical">   │<br>   │<br>   │<br>   │<br>   </span>
        </template>
        <template v-else>
          <span class="none" />
        </template>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TreeLines',
  props: {
    lines: {
      type: Array,
      // default: () => ({})
      default: () => [
        {
          id: 1,
          value: 'none'
        },
        {
          id: 2,
          value: 'none'
        },
        {
          id: 3,
          value: 'none'
        },
        {
          id: 4,
          value: 'none'
        },
        {
          id: 5,
          value: 'none'
        },
        {
          id: 6,
          value: 'none'
        },
        {
          id: 7,
          value: 'none'
        },
        {
          id: 8,
          value: 'none'
        },
        {
          id: 9,
          value: 'none'
        },
        {
          id: 10,
          value: 'none'
        }]
    }
  },
  data () {
    return {
      treesPoint: [
        {
          id: 1,
          value: 'none'
        },
        {
          id: 2,
          value: 'none'
        },
        {
          id: 3,
          value: 'none'
        },
        {
          id: 4,
          value: 'none'
        },
        {
          id: 5,
          value: 'none'
        },
        {
          id: 6,
          value: 'none'
        },
        {
          id: 7,
          value: 'none'
        },
        {
          id: 8,
          value: 'none'
        },
        {
          id: 9,
          value: 'none'
        },
        {
          id: 10,
          value: 'none'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    changeLine (value) {
      if (value.value === 'line') {
        value.value = 'under'
      } else if (value.value === 'under') {
        value.value = 'vertical'
      } else if (value.value === 'vertical') {
        value.value = 'none'
      } else if (value.value === 'none') {
        value.value = 'line'
      }
      this.$emit('uploadline', this.lines)
    }
  }
}
</script>
<style lang='scss' scoped>
div#treelines {
  > div {
  margin: 0 0 20px 0px;
  position: relative;
  width: 79px;
  height: 36px;
    > p {
      > span {
        position: absolute;
        display: block;
        cursor: pointer;
      }
      > span.none {
        position: absolute;
        width:80px;
        height: 38px;
      }
      > span.line {
        position: absolute;
        top: 8px;
        left: -5px;
      }
      > span.under {
        position: absolute;
        top: -37px;
        left: 27px;
        line-height: 99%;
      }
      > span.vertical {
        position: absolute;
        top: -37px;
        left: 27px;
        line-height: 99%;
      }
      > span:hover {
        background-color: #ffe0e0;
      }
    }
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
.dataIn {
    display:block;
    padding: 5px;
    border:1px solid #333;
}
</style>
