<template>
  <div class="background">
    <!-- Full width banner -->
    <RTLSBanner
      title="Real Time Locating System."
      description="Our new Staff tracking and Patient Wandering Solution"
    />

    <AppScrollTo id="bottom" />
    <br><br>
    <AppSection
      title="Real Time Locating System (RTLS)"
      text="Our new Staff tracking and Patient Wandering Solution"
    >

      <div class="flex-box">
        <div class="content">
          <p>
            SAFECo has a range of <strong>Positional Duress</strong>, <strong>Staff tracking</strong> and <strong>Patient Wandering</strong> Solutions available tailored to your facilities requirements. The system can locate with scalable accuracy from <strong>general area</strong> to <strong>room location</strong> by utilising state of the art <strong>dual RF</strong> and <strong>Ultrasonic technology</strong> to ensure assistance is on the way when it is needed most. 
            <br><br>
            <strong>Location information</strong> can be integrated into <strong>wireless messaging</strong> as well as the aid of a <strong>graphical display</strong> which can be distributed via a thin client on Local Area Network workstation PCs. 
            Fixed <strong>annunciators</strong> in designated areas can also display location information. 
            <br><br>
            This technology is incorporated within our Unicall Nurse call stations to dramatically reduce the TCO (Total Cost of Ownership) for healthcare facilities. Facilities can now be confident that <strong>staff</strong>, <strong>residents</strong> and <strong>patients</strong> have peace of mind that safety and care is a priority.
          </p>
        </div>
      </div>

      <div class="img_cover">
        <img
          class="responsive"
          src="@/assets/images/RTLS/rtsl.webp" 
          alt="RTLS"
          width="1200"
          height="600">
      </div>
      
    </AppSection>
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
// Functionality Components
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import RTLSBanner from '@/components/Banners/RTLSBanner'
import ContactRack from '@/components/Sections/Contact/ContactRack'
import AppSpacer from '@/components/Utilities/AppSpacer'
import ContactBlock from '@/components/Sections/Contact/ContactBlocks'
import AppColumn from '@/components/Utilities/AppColumn'
import AppColumns from '@/components/Utilities/AppColumns'
import AppSliderRTLS from '@/components/Sliders/AppSliderRTLS'

export default {
  name: 'ProductsSection',
  components: {
    // Essential Components
    AppSection,
    AppScrollTo,
    // Functionality Components
    AppFullWidthSection,
    RTLSBanner,
    ContactRack,
    AppSpacer,
    ContactBlock,
    AppColumn,
    AppColumns,
    AppSliderRTLS
  },
  data() {
    return {
      rtls: [
        'rtls.01.png',
        'rtls.01.png'
      ],
      animate: false,
      restart: false,
      emergency: true,
      cancel: false
    }
  },
  computed: {
    _animate: function () {
      console.log(this.animate)
      if (this.animate) {
        return ''
      }
      return {
        '-webkit-animation': 'none',
        '-moz-animation': 'none',
        'animation': 'none'
      }
    }
  },
  methods: {
    toggleOn() {
      this.animate = true
      this.emergency = false
      this.cancel = true
    },
    toggleOff() {
      this.animate = false
      this.cancel = false
      this.restart = true
    },
    toggleDone() {
      this.emergency = true
      this.restart = false
    }
  }
}
</script>

<style scoped>

.content {
  max-width: 1000px;
  padding: 5px;
}

.flex-box {
  display: flex;
  justify-content: center;
  width: 100%;
}


.background {
  background-color: white;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: space-between;
  max-width: 850px;
}

@media only screen and (max-width: 800px) {
  .flex-container {
    justify-content: center;
  }
}

.responsive {
  max-width: 100%;
  height: auto;
}

.img_cover {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}



/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  overflow: hidden;
  /* padding-top: 50px; */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

 .tab-carousel-container {
    width: 100%;
  }

    .tab-image {
  height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    background-color: #f6f6f6;
  }
  .tab-image img {
    flex-shrink: 0;
    min-height: 100%;
  }

/*
*  Table
*/
.tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-fzdr{border-color:#c0c0c0;text-align:center;vertical-align:top}
.tg .tg-amwm{font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}
</style>
