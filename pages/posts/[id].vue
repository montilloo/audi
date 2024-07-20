<script setup>
const route = useRoute();
</script>

<template>
  <div>路由参数: {{ route.params.id }} 学习不好怎么办？</div>
</template>

<style scoped>
div {
  font-family: 'Noto Sans SC', sans-serif;
  font-size: 24px;
}
</style>
