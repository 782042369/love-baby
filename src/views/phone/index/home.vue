<template>
  <div>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-notice-bar
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      :left-icon="img"
    />
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <van-steps direction="vertical" :active="0" active-color="#f44">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
    <van-button type="primary" @click="go">点击开始加载动画demo</van-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      img: require('@/assets/collect.png')
    }
  },
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
  width: 300px;
  height: 40px;
  border: none;
  margin: 50px auto;
  display: block;
  color: #fff;
}
</style>
