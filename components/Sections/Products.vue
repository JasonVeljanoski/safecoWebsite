<template>
  <div class="background">
    <!-- Full width banner -->
    <ProductsBanner 
      title="Our Products." 
      description="Our commitment to the research and development of communications systems for healthcare providers creates industry first solutions unrivalled by any other manufacturer."/>

    <AppScrollTo id="bottom"/>
    <br><br>
    <AppSection 
      title="Technology."
      text="SAFECo's highly experienced team of engineers continues to provide healthcare organizations
        with the most innovative products on the market, whilst ensuring maximum reliability and flexibility." />
    
    <div class="buffer"><AppProductsSlider /></div>
    <br><br>
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
import ProductsBanner from '@/components/Banners/ProductsBanner'
// Functionality Components
import AppProductsSlider from '@/components/Sliders/AppProductsSlider'
import AppSpacer from '@/components/Utilities/AppSpacer'
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import ProductBanner from '@/components/Sections/About/ImageBanner/ProductBanner'

export default {
    name: "ProductsSection",
    components: {
      // Essential Components
      AppSection,
      AppScrollTo,
      ProductsBanner,
      // Functionality Components
      AppProductsSlider,
      AppSpacer,
      AppFullWidthSection,
      ProductBanner
    }
}
</script>

<style scoped>

.content-des {
  padding: 20px;
}

.description {
  max-width: 700px;
}
.flexbox {
  display: flex;
  justify-content: center;
}
 
  .section {
    margin-top: -30px;
    padding-top: 10px;
  }

  .background {
    background-color: white;
  }

  .bigitem {
   /* This will be twice as */
   /* big as the small item. */
   flex: 2 0 300px;
}
.smallitem {
   flex: 1 0 100px;
}

.flexcontainer {
   display: flex;
   align-items: center;
   justify-content: center;
   /* You can set flex-wrap and
      flex-direction individually */
   flex-direction: row;
   flex-wrap: wrap;
   /* Or do it all in one line
     with flex flow */
   flex-flow: row wrap;
   /* tweak where items line
      up on the row
      valid values are: flex-start,
      flex-end, space-between,
      space-around, stretch */
   align-content: flex-end;
}

.buffer {
  margin: 10px 20px 10px 20px;
}
</style>
