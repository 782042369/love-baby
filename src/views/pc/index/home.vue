<template>
  <div>

    <button @click="go">pc点击开始加载动画demo</button>
    <img src="../../../assets/collect.png" alt="">
  </div>
</template>

<script>
// import { Toast } from 'vant'
export default {
  name: 'home',
  created() {
    document.title = '首页'
  },
  methods: {
    go() {
      this.$loading.show()
    }
  }
}
</script>
<style lang="scss" scoped>
button{
  width: 500px;
  height: 100px;
  border: none;
  margin: 50px auto;
  display: block;
  background: yellowgreen;
  color: #fff;
}
</style>
