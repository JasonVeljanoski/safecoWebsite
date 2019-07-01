<template>
  <div>    
    <LandingSection 
      theme="light"
      class="flex-container">
      <div class="small-section">
        <h2>We are ELV and Electronics Specialists</h2>
        <AppScrollTo id="bottom"/>
        <p>With over 90 years combined technical experience including Electronics Hardware and software design you can be sure we have a solution for your facility. We divide our services into two separate companies. These are SAFECo Pty Ltd and SAFE Integrated Systems Pty Ltd. More information is provided below where you can also be redirected to the appropriate website.</p>
      </div>
    </LandingSection>
    <LandingSection theme="light">
      <div class="flexbox">
        <div class="spacer" />
        <div class="logo"><div>
          <div class="">
            <img 
              src="@/assets/images/SAFElogo.webp"
              alt="SAFE logo"></div>
        </div>
          <div>
            <h5 class="large">SAFE Integrated Systems Pty Ltd</h5>
            <span><h5 class="small">SAFE</h5></span>
          </div>
        </div>
        <div class="spacer" />
        <div class="logo"><div>
          <div class="safeco_logo">
            <img 
              src="@/assets/images/Logos/logo2.svg"
              alt="SAFECo"></div><div><h5 class="large">SAFECo Pty Ltd</h5><span><h5 class="small">SAFECo</h5></span></div></div>
        </div>
        <div class="spacer" />
      </div>
    </LandingSection>

    <div class="land-section">
      <AppSpacer offset="50px" />
      <div class="row">
        <div class="col flex-container">
          <div 
            class="tile safeco"
            onclick=""
            @mouseover="activeB = true" 
            @mouseleave="activeB = false">
            <div class="img img1">
              <div
                v-show="activeB" 
                class="clickme">Comming Soon...</div>
            </div>  
            <div class="description">
              <h2>SAFE Integrated Systems Pty Ltd</h2>
              <p>SAFE Integrated Systems is a well-established commercial ELV (Extra Low Voltage) one stop shop specialist in Nurse Call systems, Paging systems, RFID, Fire Detection and Emergency Warning Intercom Systems (EWIS), Audio Visual Systems, SMATV systems, Automation systems, Intercom systems, CCTV, Access control and Security.</p>
              <div class="button-container"><div class="button">visit our SAFE Systems website</div></div>
            </div>
          </div>
        </div>
        <div class="cover">
          <div class="col flex-container">
            <div class="safecotile">
              <div 
                class="tile safe"
                onclick="location.href='SAFECo';"
                @mouseover="activeA = true" 
                @mouseleave="activeA = false">
                <div class="img img2">
                  <div
                    v-show="activeA" 
                    class="clickme cometext">Click to visit site</div>
                </div>
                <div class="description comesoon">
                  <h2>SAFECo Pty Ltd</h2>
                  <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  <div class="button-container"><div class="button">visit our SAFECo website</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppSpacer offset="50px" />
    </div>

    <AppSection 
      class="contact"
      title="Have any Questions?"
      text="Please select the purpose for your inquiry.">
      <ContactLandingRack />
    </AppSection>
    
    <!--<AppForm class="backimg" />-->

  </div>
</template>

<script>
import AppSection from '@/components/Utilities/AppSection'
import LandingSection from '@/components/Utilities/LandingSection'
import AppSpacer from '@/components/Utilities/AppSpacer'
import AppForm from '@/components/Utilities/AppForm'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
import ContactLandingRack from '@/components/Sections/Contact/ContactLandingRack'

export default {
  components: {
    AppSection,
    LandingSection,
    AppSpacer,
    AppForm,
    AppScrollTo,
    ContactLandingRack
  },
  data() { 
    return {
      activeA: false,
      activeB: false,
    }
  }
}
</script>

<style scoped>
h5 {
  text-align: center;
}

.safeco_logo {
  max-width: 100%;
}

.small {
  display: none;
}
@media only screen and (max-width: 430px) {
  .small {
    display: block;
  }
  .large {
    display: none;
  }
}
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.spacer {
  width: 100px;
}

.logo {
  width: 250px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.contact {
  border-top: solid 1px #efefef;
}

.land-section {
  background-color: rgb(255,249,249);
}

img {
  width: 100%;
  height: auto;
}

.flex-container {
  display: flex;  /* establish flex container */
  flex-direction: row;  /* make main axis vertical */
  width: 100%;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  overflow: hidden;
  /* padding-top: 50px; */
}

.col {
  float: left;
  width: 50%;
  overflow: hidden;
  /*padding-top: 50px;*/
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.textbox {
    padding: 0  100px 0 100px;
}

.text {
  padding: 20px;
}


  .small-section {
    max-width: 700px;
    text-align: center;
  }
  .small-section p {
    text-align: center;
  }

  .left {
    align-self: flex-start;
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .tile {
    border: 1px solid #efefef;
    max-width: 550px;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    margin: 10px;
  }

  .description {
    padding: 0 50px 50px 50px;
  }

  .img {
    height: 200px;
    overflow: hidden;
  }

  .img1 {
    background-image: url("https://via.placeholder.com/550x200");
    background-position: center center;
    background-repeat: no-repeat;
  }

  .img2 {
    background-image: url("https://via.placeholder.com/550x200");
    background-position: center center;
    background-repeat: no-repeat;

  }

  .safeco:hover {
    cursor: pointer;
  }

  .safe:hover {
    cursor: pointer;
  }


  .imageOne {
    /*background-image: url("../../assets/images/Banners/Page-5-Image-23.webp");*/
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
  }

    .imageTwo {
    /*background-image: url("../../assets/images/Banners/Page-5-Image-23.webp");*/
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
  }

    .backimg {
    background-image: url("../../assets/images/Home/cover_dark.webp");
    background-size: cover;
    background-repeat: no-repeat;
  }


  /* On screens that are 950px or less, set the background color to blue */
@media screen and (max-width: 950px) {
  .column {
    width: 100%;
  }
  .imageOne, .imageTwo {
    display: none;
  }
  .col {
    width: 100%;
  }
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
    width: 230px;
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

.button-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.clickme {
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  background-color: rgba(57,57,57,0.7);
  color: white;
  font-weight: bold;
  font-size: 9pt;
}

/* Overlay COMING SOON */

#overlay {
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  background-color: rgba(57,57,57,0.7);
  color: white;
  font-weight: bold;
  font-size: 9pt;
}

</style>


