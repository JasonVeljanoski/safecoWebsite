<template>
  <div class="banner flexbox">
    <div class="flexbox box">
      <div style="color: white;font-size:32pt;font-weight:bolder;">Contact Us</div>
      <div style="color: white;width:400px;text-align:center;"> 
        SAFECo is here to provide you with more information and answer any further questions that you may have. Let's create a dialogue.
      </div>
      <AppSpacer />
    </div>
  </div>
</template>

<script>
import AppSpacer from '@/components/Utilities/AppSpacer'

export default {
    name: "ImageBanner",
    components: {
      AppSpacer
    }
}
</script>


<style scoped>
.box {
  max-width: 500px;
  overflow: scroll;
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
  background-image: url("https://d16w1lcoeot4ot.cloudfront.net/static/12112018000450/images/inline/doing_good.jpg");
  
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

  height: 70vh;
  
  /* SHORTHAND CSS NOTATION
   * background: url(background-photo.jpg) center center cover no-repeat fixed;
   */
  
  margin-bottom: -160px;
  margin-top: -40px;
}

/* For mobile devices */
@media only screen and (max-width: 767px) {
  .banner {
    /* The file size of this background image is 93% smaller
     * to improve page load speed on mobile internet connections */
    background-image: url("https://d16w1lcoeot4ot.cloudfront.net/static/12112018000450/images/inline/doing_good.jpg");
  }
}

</style>

