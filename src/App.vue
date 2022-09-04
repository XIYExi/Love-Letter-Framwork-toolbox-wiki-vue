<template>
  <a-layout>
    <wiki-header />
    <router-view />
    <wiki-footer />
  </a-layout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import WikiHeader from "@/components/wiki-header.vue";
import WikiFooter from "@/components/wiki-footer.vue";

export default defineComponent({
  name: 'app',
  components: {
    WikiHeader,
    WikiFooter
  }
})
</script>


<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
