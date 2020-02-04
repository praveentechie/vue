<template>
  <!-- ### vue: style When you use the class attribute on a custom component, those classes will be added to the component’s root element -->
  <i class="fa c-icon" :disabled=iconDisabled :title=title></i>
</template>

<script>
export default {
  props: {
    iconDisabled: {
      required: false,
      type: Boolean
    },
    title: {
      required: false,
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.c-icon {
  cursor: pointer;

  &:disabled, &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
  }
}
</style>