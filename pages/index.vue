<template>
  <div class="container">
    <van-nav-bar title="眼睛店-客户管理" />
    <van-nav-bar
      title="眼睛店-客户管理"
      right-text="添加"
      fixed
      @click-right="toAdd"
    />
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词(姓名或手机号)"
      @search="getData"
    />
    <van-cell-group v-if="data.length > 0">
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
            >左眼：{{ item.lefteye }} / 右眼：{{ item.righteye }}</span
          >
          <span v-if="item.distance" class="info-item"
            >瞳距：{{ item.distance }}</span
          >
          <span v-if="item.mark" class="info-item">备注：{{ item.mark }}</span>
        </template>
        <template #default>
          <span class="info-item">{{ item.tel }}</span>
          <span v-if="item.price" class="info-item">{{ item.price }}元</span>
          <span v-if="item.date" class="info-item">{{ item.date }}</span>
        </template>
      </van-cell>
      <div style="text-align: center; height: 4rem; line-height: 4rem">
        <van-loading type="spinner">加载中...</van-loading>
      </div>
    </van-cell-group>
    <van-empty v-else description="未找到匹配记录" />
  </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant'

export default Vue.extend({
  data: () => {
    return {
      data: [],
      keyword: '',
      page: 1,
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    toAdd() {
      this.$router.replace('/add')
    },
    getData() {
      this.$axios({
        url: `/api/consumer/get?page=${this.page}&keyword=${this.keyword}`,
        method: 'get',
      }).then((res) => {
        if (res.data.code === 0) {
          this.data = res.data.data
        } else {
          Toast.fail(res.data.message)
        }
      })
    },
  },
})
</script>
<style>
.container {
  width: 100vw;
  height: 100vh;
}
.info-item {
  display: block;
  word-break: keep-all;
}
</style>
