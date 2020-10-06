<template>
  <div class="container">
    <van-nav-bar title="添加客户" left-arrow @click-left="back" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="name"
        name="姓名"
        label="姓名"
        placeholder="请输入姓名"
        :rules="[{ required: true, message: '请填写姓名' }]"
      />
      <van-field
        v-model="tel"
        name="电话"
        label="电话"
        placeholder="请输入电话"
      />
      <van-field
        v-model="lens"
        name="镜片"
        label="镜片"
        placeholder="请输入镜片价格"
      />
      <van-field
        v-model="frame"
        name="镜架"
        label="镜架"
        placeholder="请输入镜架价格"
      />
      <van-field
        v-model="righteye"
        name="右眼"
        label="右眼"
        placeholder="请输入右眼值"
      />
      <van-field
        v-model="lefteye"
        name="左眼"
        label="左眼"
        placeholder="请输入左眼值"
      />
      <van-field
        v-model="distance"
        name="瞳距"
        label="瞳距"
        placeholder="请输入瞳距"
      />
      <van-field
        v-model="price"
        name="价格"
        label="价格"
        placeholder="请输入价格"
      />
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
      lens: '',
      frame: '',
      lefteye: '',
      righteye: '',
      distance: '',
      price: '',
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
            lens: this.lens,
            frame: this.frame,
            lefteye: this.lefteye,
            righteye: this.righteye,
            distance: this.distance,
            price: this.price,
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
