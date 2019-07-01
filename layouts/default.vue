<template>
  <div class="content">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    

    <TheSidenav 
      :show="displaySidenav"
      @close="displaySidenav = false"
    />

    <nuxt/>

    <TheFooter />

  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheBanner from '@/components/Utilities/TheBanner'
import TheFooter from '@/components/Navigation/TheFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheBanner,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>


<style>

html
{
  font-family: 'Nunito', SansSerif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: white;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

body {
  font-weight: 400;
  line-height: 1.45;
  color: #333;
}

p {
  margin-bottom: 1.3em;
  text-align: justify;
  color: rgb(37, 37, 37);
}

h1, h2, h3, h4 {
  margin: 1.414em 0 0.5em;
  font-weight: inherit;
  line-height: 1.2;
  color: rgb(54, 54, 54);
}

h1 {
  margin-top: 0;
  font-size: 2.441em;
}

h2 {font-size: 1.953em;}

h3 {font-size: 1.563em;}

h4 {font-size: 1.25em;}

h5 {font-size: 1em;}

small {font-size: 0.8em;}

.main {
  /*margin-top: 60px;*/
  background-color: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  flex-flow: row nowrap;
  border-top: 1px solid #e5e5e5;
}

.content {
  flex: 1 1 auto;
  height: 100%;
  background-color: #f4f5f7;
}

.nuxt {
  padding: 0 20px 60px 20px;
}

  .numbers {
    font-family: 'Crimson Text', serif;
    font-size: 17px;
  }

</style>
