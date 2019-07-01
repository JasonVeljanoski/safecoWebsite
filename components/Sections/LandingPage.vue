<template>
  <div>
    <LandingSection 
      theme="light"
      class="flex-container">
      <div class="small-section">
        <h2>See how you can save time managing your marketing campaigns in one place</h2>
        <p>HubSpot's all-in-one marketing software helps you optimize your website to get found by more prospects and convert more of them into leads and paying customers and ultimately grow better.</p>
      </div>
    </LandingSection>
  </div>
</template>

<script>
import LandingSection from '@/components/Utilities/LandingSection'

export default {
  name: "LandingPage",
  components: {
    LandingSection,
  }
}
</script>


<style scoped>
  .small-section {
    max-width: 700px;
    text-align: center;
  }
  .small-section p {
    text-align: center;
  }

  .flex-container {
    display: flex;           /* establish flex container */
    flex-direction: column;  /* make main axis vertical */
    justify-content: center; /* center items vertically, in this case */
    align-items: center;     /* center items horizontally, in this case */
  }
</style>


