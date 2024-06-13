<template>
  <i class="mk-icon" :style="customStyle" :class="{ [`er-icon--${type}`]: type }" v-bind="$attrs">
    <font-awesome-icon v-bind="filterProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineOptions({
  name: 'MkIcon',
  inheritAttrs: false,
})
import type { IconProps } from './type.ts'
const props = defineProps<IconProps>()
const filterProps = computed(() => {
  return omit(props, ["type", "color"])
})
const customStyle = computed(() => {
  return { color: props.color ?? void 0 }
})
</script>

<style scoped>
@import "./style.css";
</style>
