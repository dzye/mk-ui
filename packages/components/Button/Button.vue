<template>
  <component :is="tag" ref="_ref" :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" class="mk-button" :autofocus="autofocus" :class="{
      [`mk-button--${type}`]: type,
      [`mk-button--${size}`]: size,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle
    }" @click="(e: MouseEvent) => { useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e) }">
    <template v-if="loading">
      <slot name="loading">
        <mk-icon class="loading-icon" :icon="loadingIcon ?? 'spinner'" spin :style="iconStyle" size="1x" />
      </slot>
    </template>
    <mk-icon v-if="icon && !loading" :icon="icon" :style="iconStyle" size="1x"></mk-icon>
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ButtonProps, ButtonEmits, ButtonInstance } from './type.ts'
import { throttle } from 'lodash-es';
import MkIcon from '../Icon/Icon.vue';
defineOptions({
  name: 'MkButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
  tag: 'button',
  throttleDuration: 500,
  useThrottle: true
})
const _ref = ref<HTMLButtonElement>()
const slots = defineSlots();
const emits = defineEmits<ButtonEmits>()
const handleBtnClick = (e: MouseEvent) => {
  emits('click', e)
}
const iconStyle = computed(() => {
  return { marginRight: slots.default ? '6px' : '0px' }
})
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration)
defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<style scoped>
@import './style.css';
</style>
