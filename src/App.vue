<script setup lang="ts">
import TreeView from './components/app/Tree/TreeView.vue';
import { sampleData } from './components/app/Tree/data';
import { ref } from 'vue';

const treeData = ref(sampleData);
</script>

<template>
  <TreeView :items="treeData"/>
</template>

<style scoped>
</style>
