<template>
  <div
    class="drawer-toggle"
    role="button"
    aria-label="toggle"
    @click="$emit('toggle')">
    <div class="bar" />
    <div class="bar" />
    <div class="bar" />
  </div>
</template>

<style scoped>
.drawer-toggle {
  margin-right: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
  padding: 5px;
}

@media (min-width: 1000px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: rgb(54, 54, 54);
}


.drawer-toggle:hover {
  background-color: #f4f5f7;
  cursor: pointer;
}

</style>
