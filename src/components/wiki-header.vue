<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">首页</a-menu-item>
      <a-menu-item key="2">管理</a-menu-item>
      <a-menu-item key="3">关于</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: 'wiki-header'
})
</script>

