<template>
  <div class="container">
    <van-nav-bar title="添加客户" left-arrow @back="back" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="姓名"
        label="姓名"
        placeholder="姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field v-model="tel" name="电话" label="电话" placeholder="电话" />
      <van-field
        v-model="vocation"
        name="职业"
        label="职业"
        placeholder="职业"
      />
      <van-field v-model="lens" name="镜片" label="镜片" placeholder="镜片" />
      <van-field v-model="frame" name="镜架" label="镜架" placeholder="镜架" />
      <van-field
        v-model="lefteye"
        name="左眼"
        label="左眼"
        placeholder="左眼"
      />
      <van-field
        v-model="righteye"
        name="右眼"
        label="右眼"
        placeholder="右眼"
      />
      <van-field
        v-model="distance"
        name="瞳距"
        label="瞳距"
        placeholder="瞳距"
      />
      <van-field v-model="price" name="价格" label="价格" placeholder="价格" />
      <van-field v-model="date" name="日期" label="日期" placeholder="日期" />
      <van-field v-model="mark" name="备注" label="备注" placeholder="备注" />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data() {
    return {
      name: '',
      tel: '',
      vocation: '',
      lens: '',
      frame: '',
      lefteye: '',
      righteye: '',
      distance: '',
      price: '',
      date: '',
      mark: '',
    }
  },
  methods: {
    back() {
      this.$router.replace('/')
    },
    onSubmit() {
      if (this.name) {
        this.$axios({
          url: '/api/consumer/add',
          method: 'post',
          data: JSON.stringify({
            name: this.name,
            tel: this.tel,
            vocation: this.vocation,
            lens: this.lens,
            frame: this.frame,
            lefteye: this.lefteye,
            righteye: this.righteye,
            distance: this.distance,
            price: this.price,
            date: this.date,
            mark: this.mark,
          }),
        }).then((res) => {
          if (res.data.code === 0) {
            Toast.success('添加成功')
            this.$router.replace('/')
          }
        })
      }
    },
  },
}
</script>
