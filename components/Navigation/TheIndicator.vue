<template>
  <div class="indicator" />
</template>

<script>
export default {
    mounted() {
    var vm = this
    window.addEventListener('scroll', function(e) {
      var scrollPos = window.scrollY
      var winHeight = window.innerHeight
      var docHeight = document.documentElement.scrollHeight // instead document.body.clientHeight
      var perc = 100 * scrollPos / (docHeight - winHeight)
      vm.$el.style.width = perc + '%'
    })
  }
}
</script>

<style scoped>
.indicator {
  position: fixed;
  top:0;
  left:0;
  margin-top: 70px;
  height: 5px;
  background-color: #1171ba;
  z-index: 3;
}
</style>


