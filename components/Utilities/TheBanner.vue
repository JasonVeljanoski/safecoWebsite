<template>
  <div class="fullscreen-banner flexbox">
    <div class="flexbox container">
      <div class="flexbox box">
        <img 
          src="@/assets/images/Logos/logo2-white.svg"
          alt="safeco">
        <div style="color: white; font-size:42pt; font-weight:bolder;">Welcome to SAFECo</div>
        <div style="color: white; width:400px; text-align:center; font-weight:bold; font-size:20pt;">Health and Aged Care Communications</div>
      </div>
    </div>
    <div 
      v-scroll-to="'#start'"
      class="bar"
    >
      <div class="click_me">Click to scroll.</div>
    </div>
  </div>
</template>

<style scoped>
  /* Bar */
.bar {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  max-width: 200px;
  margin-bottom: 50px;
  
  background-color: white;
  align-self: flex-end;
}

.bar:hover {
  background-color: white;
  cursor: pointer;
}

.click_me {
  margin-top: -30px;
  text-align: center;
  color: white;
}

.fullscreen-banner {
position: relative;
z-index: 2;
height: 100vh;
width: 100%;
margin-top: -70px;

display: flex;
justify-content: center;



/* Location of the image */
  background-image: url("../../assets/images/Home/cover_dark.webp");
  
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Image doesn't repeat */
  background-repeat: no-repeat;
  
  /* Makes the image fixed in the viewport so that it doesn't move when 
     the content height is greater than the image height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;
}


.box {
  max-width: 600px;
  margin-top: 100px;
  z-index: 1;
  text-align: center;
}

.flexbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.container {
  width: 100vw;
}

img {
  width: 400px;
}
</style>

