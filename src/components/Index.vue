<template>
  <div id="nav">
    <ul>
      <li>首页</li>
      <li>沸点</li>
      <li>话题</li>
      <li>小册</li>
      <li>活动</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  ul{ list-style: none;}
  #nav{ height: 40px; line-height: 40px;}
  #nav ul{ display: flex; height: 40px;}
  #nav ul li{ flex:1;}
</style>
