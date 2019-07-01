<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')" 
    />
    <transition name="slide-side">
      <div
        v-if="show"
        class="sidenav"
      >
        <div class="title">
          <nuxt-link 
            to="/"
            @click="$emit('close')">
            <img 
              alt="safe logo"
              src="@/assets/images/Logos/logo2.svg" >
          </nuxt-link>
        </div>
        <ul
          class="nav-list"
          @click="$emit('close')"
        >
          <li class="nav-item">
            <nuxt-link to="/SAFECo">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/SAFECo/about">About Us</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/SAFECo/products">Products</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/SAFECo/software-integration">Software/Integration</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/SAFECo/contact">Contact</nuxt-link>
          </li>
        </ul>
        
        <div class="bar" />

      </div>
    </transition>
  </div>
</template>

<script>
import TheFooter from '@/components/Utilities/TheFooter'
import TheGlobe from '@/components/Logo/TheGlobe'

export default {
  name: "TheSidenav",
  components: {
    TheFooter,
    TheGlobe
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  right: 0;
  box-sizing: border-box;
  overflow: scroll;
}

.sidenav ul {
  padding: 0 30px 0 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Stylig and Animating nav-items */
.nav-item {
  margin: 20px 0;
  border-bottom: 3px solid white;
}

.nav-item a {
  text-decoration: none;
  color: rgb(54, 54, 54);
  font-size: 1.2rem;
}

.nav-item:hover {
  cursor: pointer;
}

.nav-item::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #1171ba;
    transition: width .3s;
}

.nav-item:hover::after {
  width: 100%;
}

/* ----- nav-items ------ */

.title {
  flex: 1 1 auto;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

.title img {
  max-width: 150px;
  width: 100%;
  z-index: 1;
  cursor: pointer;
}

.bar {
  border-bottom: 1px solid #e5e5e5;
}

</style>
