<template>
  <div class="wrapper">
    <!-- Full width banner -->

    <CustomersBanner 
      title="Our Customers." 
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>


    <AppScrollTo id="bottom"/>
    <br><br>
    <AppSection title="">
      <CustomersSlider />
    </AppSection>
    <br>
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
// Functionality Components
import CustomersSlider from '@/components/Sliders/CustomersSlider'
import AppSpacer from '@/components/Utilities/AppSpacer'
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import CustomersBanner from '@/components/Banners/CustomersBanner'

export default {
    name: "ProductsSection",
    components: {
      // Essential Components
      AppSection,
      AppScrollTo,
      // Functionality Components
      CustomersSlider,
      AppSpacer,
      AppFullWidthSection,
      CustomersBanner
    }
}
</script>

<style scoped>
  .wrapper {
    background-color: white;
  }

</style>
