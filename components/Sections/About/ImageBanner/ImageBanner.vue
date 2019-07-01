<template>
  <div class="banner flexbox">
    <div class="flexbox box">
      <div style="color: white;font-size:32pt;font-weight:bolder;">Contact Us</div>
      <div style="color: white;width:400px;text-align:center;"> 
        SAFECo is here to provide you with more information and answer any further questions that you may have. Let's create a dialogue.
      </div>
      <div class="button"><nuxt-link to="/SAFECo/contact">Contact Us</nuxt-link></div>
      <AppSpacer />
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/Utilities/AppButton'
import AppSpacer from '@/components/Utilities/AppSpacer'

export default {
    name: "ImageBanner",
    components: {
      AppButton,
      AppSpacer
    }
}
</script>


<style scoped>
.box {
  max-width: 500px;
}

.flexbox {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

/* 
 * Responsive Full Background Image Using CSS
 * Tutorial URL: http://sixrevisions.com/css/responsive-background-image/
*/
.banner {
  /* Location of the image */
  background-image: url("../../../../assets/images/Banners/ContactBanner.webp");
  
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Image doesn't repeat */
  background-repeat: no-repeat;
  
  /* Makes the image fixed in the viewport so that it doesn't move when 
     the content height is greater than the image height */
  background-attachment: fixed;
  
  /* This is what makes the background image rescale based on its container's size */
  background-size: cover;
  
  /* Pick a solid background color that will be displayed while the background image is loading */
  background-color:#464646;

    /* Pick a solid background color that will be displayed while the background image is loading */
  background-color:#464646;

  height: 70vh;  
}








/* Button css */
/* Button style */

 .button {
    margin: 0 20px;
    padding: 10px 20px 10px 20px;
    font-size: 14px;
    /*text-transform: uppercase;*/
    color: #1171ba;
    cursor: pointer;
    background-color: white;
    border: solid 1px #1171ba;
    border-radius: 30px;
    transition: background-color 0.2s ease;
    text-align: center;
  }

.button:hover {
    background-color: #1171ba;
    border: solid 1px #1171ba;
    color: white;
  }

  a:link {
  text-decoration: none;
}

a {
  color: #1171ba;
  font-weight: bold;
}

.button:hover a {
  color: white;
}

</style>

