<template>
  <div class="container">
    <van-nav-bar
      title="眼睛店-客户管理"
      right-text="添加"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-cell v-for="item in data" :key="item.id">
        <template #title>
          <span>{{ item.name }}</span>
          <van-tag type="danger">{{ item.vocation }}</van-tag>
        </template>
        <template #label>
          <span class="info-item"
            >镜片：{{ item.lens }} / 镜架：{{ item.frame }}</span
          >
          <span class="info-item"
            >左眼：{{ item.lefteye }} / 右眼：{{ item.righteye }} / 瞳距：{{
              item.distance
            }}</span
          >
          <span v-if="item.mark" class="info-item">备注：{{ item.mark }}</span>
        </template>
        <template #default>
          <span class="info-item">{{ item.tel }}</span>
          <span v-if="item.price" class="info-item">{{ item.price }}元</span>
          <span v-if="item.date" class="info-item">{{ item.date }}</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => {
    return {
      data: [],
    }
  },
  mounted() {
    this.$axios({
      url: '/api/consumer/get',
      method: 'get',
      data: JSON.stringify({
        name: 123,
      }),
    }).then((res) => {
      this.data = res.data
    })
  },
  methods: {
    onClickRight() {
      console.log(123)
    },
  },
})
</script>
<style>
.info-item {
  display: block;
}
</style>
