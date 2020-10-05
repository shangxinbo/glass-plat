<template>
  <div>{{ title }}</div>
</template>
<script lang="ts">
export default {
  props: {
    title: {
      required: true,
      type: String,
      default: '',
    },
  },
}
</script>
