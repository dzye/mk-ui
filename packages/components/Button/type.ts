import type { Component, Ref } from "vue";

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NativeType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'default' | 'small';

export interface ButtonProps {
  tag?: string|Component;
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  nativeType?: NativeType;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void
}

export interface ButtonInstance {
 ref: Ref<HTMLButtonElement | void>;
}
