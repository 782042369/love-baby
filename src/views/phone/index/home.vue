<template>
  <div>
    phone
    <button @click="go">点击开始加载动画demo</button>
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
div{
  height: 5000px;
}
button{
  width: 300px;
  height: 40px;
  border: none;
  margin: 50px auto;
  display: block;
  background: yellowgreen;
  color: #fff;
}
</style>
