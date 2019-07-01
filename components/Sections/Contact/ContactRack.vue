<template>
  <div class="container">
    <div class="eqi-container">
      <ContactIcon 
        title="Request a Demo"
        message="Request a demonstration for any of our powerful products." 
        subject="Request a Demo"
      >
        <img 
          class="demo"
          alt="Request a Demo"
          src="@/assets/images/Contact/icon-request_a_demo2.svg">
      </ContactIcon>
      
      <ContactIcon 
        title="Sales Inquiry"
        message="Contact our sales team for immediate assistance with all sales related inquiries." 
        subject="Sales Inquiry"
      >
        <img 
          class="sales"
          alt="Sales Inquiry"
          src="@/assets/images/Contact/sales-inquiry.svg">
      </ContactIcon>
      
      <ContactIcon 
        title="Customer Support"
        message="Get in touch with customer support for assistance with any general queries or issues." 
        subject="Customer Support"
      >
        <img 
          class="support"
          alt="Customer Support"
          src="@/assets/images/Contact/customer-support-icon.svg">
      </ContactIcon>
    </div>
  </div>
</template>

<script>
import ContactIcon from '@/components/Sections/Contact/CustomerIcon'

export default {
    name: "IconRack",
    components: {
      ContactIcon
    }
}
</script>

<style scoped>

.demo {
  height: 200px;
}
.sales {
  height: 200px;
}
.support {
  height: 200px;
}

.container {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eqi-container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}

@media only screen and (max-width: 1050px) {
  .eqi-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
}

</style>
