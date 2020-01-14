<template>
  <i :class="`fa ${iconClass}`"/>
</template>

<script>
export default {
  props: {
    iconClass: {
      required: true,
      type: String
    }
  }
}
</script>