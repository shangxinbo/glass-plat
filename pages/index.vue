<template>
  <div class="container">
    <van-nav-bar
      title="眼睛店-客户管理"
      right-text="添加"
      @click-right="onClickRight"
    />
    <!-- <div class="table">
      <el-table :data="data" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="tel" label="电话" width="180"> </el-table-column>
        <el-table-column prop="vocation" label="职业"> </el-table-column>
        <el-table-column prop="lens" label="镜片"> </el-table-column>
        <el-table-column prop="frame" label="镜架"> </el-table-column>
        <el-table-column prop="lefteye" label="左眼"> </el-table-column>
        <el-table-column prop="righteye" label="右眼"> </el-table-column>
        <el-table-column prop="distance" label="瞳距"> </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        <el-table-column prop="date" label="日期"> </el-table-column>
        <el-table-column prop="mark" label="备注"> </el-table-column>
      </el-table>
    </div> -->
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
      url: '/api/consumer/add',
      method: 'post',
      data: JSON.stringify({
        name: 123,
      }),
    }).then((res) => {
      // this.data = res.data
    })
  },
  methods: {
    onClickRight() {
      console.log(123)
    },
  },
})
</script>
