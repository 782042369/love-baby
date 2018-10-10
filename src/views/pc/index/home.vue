<template>
  <div>
    <button @click="go" class="middle_X">pc点击开始加载动画demo</button>
    <!-- <img src="../../../assets/collect.png" alt=""> -->
    <!-- <div class="g-container text-overflow opacity">
      <div class="g-queue" v-for="(i,key) in 4" :key="key">
        <div class="g-item" v-for="(j,index1) in 10" :key="index1"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
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
div {
  height: 5000px;
}
button {
  width: 500px;
  height: 100px;
  border: none;
  display: block;
  background: yellowgreen;
  color: #fff;
  @include line-height(30, 42);
}
.text-overflow {
  @include singleline-ellipsis;
}
.flex1 {
  @include flex100(20);
}
.opacity {
  @include opacity(65);
}
.g-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.g-queue {
  display: flex;
  flex-direction: column;
  flex-basis: 24vw;
}

.g-item {
  position: relative;
  width: 24vw;
  margin: 0.5vw 0;
}

@for $i from 1 to $lineCount + 1 {
  .g-queue:nth-child(#{$i}) {
    @for $j from 1 to $count + 1 {
      .g-item:nth-child(#{$j}) {
        height: #{randomNum(300, 50)}px;
        background: randomColor();
        &::after {
          content: '#{$j}';
          position: absolute;
          color: #fff;
          font-size: 2vw;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
