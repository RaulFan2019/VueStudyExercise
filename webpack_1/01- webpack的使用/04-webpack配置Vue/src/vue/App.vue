<template>

  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="onBtnClick">按钮</button>
    <h2>{{name}}</h2>
  </div>

</template>

<script>
export default {
  name: "App",
  data(){
    return {
      message:'hello webpack',
      name: 'Raul'
    }
  },
  methods: {
    onBtnClick(){
      console.log("Click!")
    }
  }
}
</script>

<style scoped>

  .title {
    color: red;
  }

</style>