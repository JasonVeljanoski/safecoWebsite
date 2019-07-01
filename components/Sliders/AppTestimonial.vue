<template>
  <div class="testimonial-container">
    <slot/>
  </div>
</template>

<script>
export default {
name: "AppTestimonial"
}
</script>

<style scoped>
.testimonial-container {
  background-color: white;
  padding: 40px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>