<template>
  <h3>
    <slot/>
  </h3>
</template>

<script>
export default {
  name: "AppSubtitle"
}
</script>

<style scoped>
  h3 {
    border-bottom: 3px solid rgb(88, 139, 248);
    width: 300px;
  }
</style>

