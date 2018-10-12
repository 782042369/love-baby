<template>
  <div>
    <div v-for="(itme,key) in data" class="box">
      <div class="flex_Y-center" style="width:25%;border-right: 1px solid black;">{{key}}</div>
        <div class="flex_wrap" style="width:75%;">
          <div class="flex" v-for="itmes in itme">
            <div style="width:33.33%;">{{itmes.address}}</div>
            <div style="width:33.33%;">{{itmes.day_off}}</div>
            <div style="width:33.33%;">{{itmes.dept_name}}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'http://localhost:8080/#/flextable',
  data() {
    return {
      img: require('@/assets/collect.png'),
      data: []
    }
  },
  created() {
    document.title = '首页'
    this.$api.demo.yiju().then(response => {
      this.data = JSON.parse(response.jjk_result.product.checkSite)
    }, (error) => {
      console.log(error)
    })
  },
  methods: {
    go() {
      this.$loading.show()
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  width: 300px;
  height: 40px;
  border: none;
  margin: 50px auto;
  display: block;
  color: #fff;
}
.box {
  @include flex100;
  border: 1px solid black;
  justify-content: center;
}
.flex + .flex {
  border-top: 1px solid black;
}
.flex {
  justify-content: center;
  div {
    padding: 5px;
    display: flex;
    align-items: center;
  }
  div:nth-child(1) {
    border-right: 1px solid black;
  }
  div:nth-child(2) {
    border-right: 1px solid black;
  }
}
.box + .box {
  margin-top: 10px;
}
</style>
