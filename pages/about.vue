<script setup>
definePageMeta({
  middleware: 'auth',
});
</script>

<template>
  <div>
    <h1>关于页面</h1>
    <NuxtLink to="/">首页</NuxtLink>
  </div>
</template>

<style scoped></style>
