
<template>
  <div 
    id="header"
    class="header-container"
  >
    <header class="the-header">
      <div class="logo">          
        <nuxt-link to="/" >
          <img 
            alt="safeco logo"
            src="@/static/icons/safecoLogo.svg" >
        </nuxt-link>
      </div>
      <div class="logo-box">
        <div class="logo-small">          
          <nuxt-link to="/" >
            <img 
              alt="safe logo"
              src="@/assets/images/Logos/logo2.svg">
          </nuxt-link>
        </div>
      </div>

      <div class="spacer" />
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/SAFECo" >Home</nuxt-link>
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
      </div>
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    </header>
    <div class="logo-container">
      <TheGlobe
        :animation="true"
        duration="8s"
      /> 
    </div>
    <div 
      class="header-background"
      @click.stop/>
    <TheIndicator />
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle"
import TheBanner from "@/components/Utilities/TheBanner"
import TheGlobe from "@/components/Logo/TheGlobe"
import TheIndicator from '@/components/Navigation/TheIndicator'

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    TheBanner,
    TheGlobe,
    TheIndicator
  }
};
</script>


<style scoped>
.header-container {
  height: 70px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  z-index: 6;
}

.logo {
  max-width: 150px;
  width: 100%;
  z-index: 4;
  cursor: pointer;
}

.logo a {
  text-decoration: none;
  color: black;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 1000px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

/* Stylig and Animating nav-items */
.nav-item a {
  z-index: 1000;
  text-decoration: none;
  color: rgb(54, 54, 54);
}

.nav-item {
    margin: 0 10px;
    display: inline-block;
    text-decoration: none;
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

.logo-container {
  position: fixed;
  left: -46px;
  margin-top: 2px;
  z-index: 4;
  max-width: 276px;
  width: 100%;
}

.header-background {
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 3;
  border-bottom: 1px solid #e5e5e5;
}

.nav-item:active .nuxt-link-active {
  border-bottom: 0px solid white;
}

.logo .nuxt-link-exact-active {
  border-bottom: 3px solid white
}

.nuxt-link-exact-active {
  border-bottom: 3px solid #1171ba;
}

.logo-small img {
  max-width:100%;
  height: auto;
}
.logo-box {
  display: none;
  width: 150px;
}

/* unlikely anyone will be viewing this size. but lets make it look good anyway */
  @media only screen and (max-width: 275px) {
  .logo {
    display: none;
  }
  .logo-box {
    display: block;
  }
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     /* IE10+ CSS styles go here */
  .logo {
    display: none;
  }
  .logo-box {
    display: block;
  }
  .logo-container {
    display: none;
  }
}
</style>
