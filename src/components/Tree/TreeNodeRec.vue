<script setup lang="ts">
import { computed, watch } from 'vue';
import { NodeData } from './types';

interface Props {
  item: NodeData;
  indent: number
}

interface Emits {
  (e: 'check', value: boolean): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const indentWidth = 16;

/**
 * Check state of tree node
 */
const checkedComputed = computed({
  get: () => props.item.checked,
  set: (newState) => {
    emits('check', newState)
  }
})

/**
 * Determine check state of descendants
 */
function isAllChildrenChecked(item: NodeData): boolean {
  if (item.children.length === 0) {
    return false;
  }

  const isAllChecked = item.children.every((child) => {
    return child.checked
  })

  return isAllChecked;
}

function isSomeDescendantsChecked(item: NodeData): boolean {
  for (const child of item.children) {
    if (child.checked) {
      return true
    }

    if (isSomeDescendantsChecked(child)) {
      return true
    }
  }

  return false
}


/**
 * Event handler
 */
const onChange = () => {
  if (childrenAllChecked.value) {
    updateCheckStateOfDescendants(props.item, false);
    return;
  }

  if (someDescendantsChecked.value) {
    updateCheckStateOfDescendants(props.item, true)
    return;
  }

  updateCheckStateOfDescendants(props.item, true)
}

/**
 * Update check state of descendants recursively
 */
function updateCheckStateOfDescendants(item: NodeData, value: boolean) {
  for (const child of item.children) {
    child.checked = value;
    updateCheckStateOfDescendants(child, value)
  }
}

/**
 * Observe children check state
 */
const childrenAllChecked = computed(() => {
  return isAllChildrenChecked(props.item);
})

const someDescendantsChecked = computed(() => {
  return isSomeDescendantsChecked(props.item);
})

const indeterminate = computed(() => {
  return someDescendantsChecked.value && !childrenAllChecked.value
})

watch([someDescendantsChecked, childrenAllChecked], () => {
  if (!someDescendantsChecked.value) {
    emits('check', false);
  } else {
    emits('check', childrenAllChecked.value ? true : false);
  }
})

</script>

<template>
  <!-- Tree item contents -->
  <div class="flex items-center">

    <!-- Indent -->
    <div :style="{ width: indent * indentWidth + 'px' }"></div>

    <!-- Contents -->
    <input type="checkbox" v-model="checkedComputed" @change="onChange" :indeterminate="indeterminate" class="w-4 h-4 rounded focus:ring-2 hover:cursor-pointer
        text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500
        dark:bg-gray-700 dark:border-gray-600
        dark:focus:ring-blue-600 dark:ring-offset-gray-800" :class="indeterminate ? 'text-blue-600 ' : ''" />
    <label class="ml-1">
      {{ item.name }}
    </label>
  </div>

  <!-- Children node -->
  <ul v-if="item.children.length !== 0 && item.opened">
    <li v-for="child in item.children" :key="child.id">
      <TreeNodeRec :item="child" :indent="indent + 1" @check="(e) => (child.checked = e)" />
    </li>
  </ul>
</template>
