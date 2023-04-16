<script setup lang="ts">
import TreeView from './components/Tree/TreeView.vue'
import { sampleData } from './components/Tree/data';
import { ref } from 'vue';
const treeData = ref(sampleData)
</script>

<template>
  <TreeView :items="treeData"/>
</template>

<style scoped>
</style>
