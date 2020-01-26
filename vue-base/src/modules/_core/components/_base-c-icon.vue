<template>
  <i :class="`fa ${iconClass} c-icon`" :disabled=iconDisabled></i>
</template>

<script>
export default {
  props: {
    iconClass: {
      required: true,
      type: String
    },
    iconDisabled: {
      required: false,
      type: Boolean
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