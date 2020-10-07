<template>
  <div>
    <h1>{{ msg }}</h1>
    <van-list
      v-model="loading"
      :finished="finished"
      loading-text="拼命加载中"
      finished-text="没有更多评价了"
      @load="onloading"
    >
      <van-cell
        clickabke
        center
        size="large"
        v-for="(v, i) in list"
        :key="i"
        :title="v.username"
        :value="v.content"
        :label="v.time"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'ratings',
  data () {
    return {
      msg: '评价页面',
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    onloading () {
      this.$axios.post('/api/ratings/list').then(res => {
        const { code, data } = res.data
        if (code === 200 && data) {
          data.forEach(v => {
            this.list.push(v)
          })
          this.loading = false
        }
        if (this.list.length >= 100) {
          this.finished = true
        }
      }).catch(err => {
        console.log(`调用失败：' ${err}`)
      })
    }
  }
}
</script>

<style  scoped>
</style>
