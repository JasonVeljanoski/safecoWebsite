
<template>
  <div class="content">
    <div>
      <AppScrollTo id="header"/>
      <ContactBanner 
        title="ELV and Electronics Specialists" 
        description=""/>
    </div>
    <Landing />
  </div>
</template>

<script>
import Landing from '@/components/Sections/Landing'
import LandingBanner from '@/components/Utilities/LandingBanner'
import AppSpacer from '@/components/Utilities/AppSpacer'
import ContactBanner from '@/components/Banners/ContactBanner'
import AppScrollTo from '@/components/Utilities/AppScrollTo'

export default {
  components: {
    Landing,
    LandingBanner,
    AppSpacer,
    ContactBanner,
    AppScrollTo
  },
  layout: 'withoutnav'
}
</script>

<style scoped>
  .content {
    background-color: white;
  }
</style>
