<script setup lang="ts">
import TreeNodeRec from './TreeNodeRec.vue'
import { NodeData } from './types';

interface Props {
  items: Array<NodeData>
}

defineProps<Props>();
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <TreeNodeRec :item="item" :indent="0" @check="(e) => (item.checked = e)" />
    </li>
  </ul>
</template>
