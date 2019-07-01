<template>
  <div class="background">
    <!-- Full width banner -->

    <SIBanner
      title="Software and Integration."
      description="The new Quickpass logging and paging system is the latest in nurse call integration technology"
    />

    <AppScrollTo id="bottom" />
    <br><br>
    <AppSection
      title="Software and Apps - Quick Pass Messenger"
      text="Our Logging and Paging System."
    >
      <p>
        The new <strong>Quickpass</strong> logging and paging system is the latest in nurse call integration technology,
        utilising the popular Microsoft SQL database, options for exporting and extracting data is
        completely user customisable, while keeping simplicity of use in mind. The logging system is capable for site linking, so if your facility has multiple sites, the history and data can be combined
        for comparison.
        <br><br>
        The system is designed to support the latest operating systems and is compatible with multiple systems.
        For example, it can log BMS alarms (Honneywell/ Schnieder/ TAC), Nurse call alarms (Smartlink,
        Sedco, Austco, Questek, Raulands and Careplus), fire alarms and generic party systems.
        <br><br>
        Should a custom interface be required, we can program event strings on the fly to match your
        equipment. We can also implement client specified advertising on the software such as company
        logo, canteen lunch menus or community events that can be broadcasted on multiple monitors
        throughout the facility.
      </p>

      <div class="cover">
        <div class="img-container parent">
          <img
            class="center"
            alt="Quickpass Messenger App"
            src="@/assets/images/QuickpassUI/QP.png"
          >
        </div>
      </div>
    </AppSection>

    <AppSection title="">
      <h1 style="text-align: center;">
        Check Out our Quickpass App.
      </h1>
      <p style="text-align: center;">
        The interactive below demonstrates how the quickpass user interface can <strong>log</strong> and <strong>report</strong> statistical data. Give it a try!
      </p>
    </AppSection>

    <AppSection
      title=""
      class="background-UI"
    >
      <div class="coverUI">
        <div class="parent UI">
          <div class="child">
            <div class="flex-container-strip">
              <div class="flex-item-strip buttonA center">
                <span class="buttonAT">Export</span>
              </div>
              <div class="flex-item-strip buttonB center">
                <span class="buttonAT">Help Hints</span>
              </div>
              <div
                class="flex-item-strip spacer center"
              >
                <div
                  style="max-height:50px;"
                >
                  <span class="banner-text"> Quickpass Messenger Auto Report Client Graph Reports</span><span class="banner-text-small"> Quickpass Messenger</span><span class="banner-text-smallest"> QP</span>
                </div>
              </div>
              <div class="flex-item-strip squareA center">
                &#9660;
              </div>
              <div class="flex-item-strip squareB center">
                &#10005;
              </div>
            </div>
            <div class="flex-container-strip">
              <div
                class="flex-item button"
                @click="changeButtonOne"
              >
                Average Amount of Calls
              </div>
              <div
                class="flex-item button"
                @click="changeButtonTwo"
              >
                Peak Call Activity
              </div>
              <div
                class="flex-item button"
                @click="changeButtonThree"
              >
                Average Call Response Times
              </div>
              <div
                class="flex-item button"
                @click="changeButtonFour"
              >
                Peak Call Response Times
              </div>
              <div
                class="flex-item button"
                @click="changeButtonFive"
              >
                General Information
              </div>
              <div
                class="flex-item button"
                @click="changeButtonSix"
              >
                Search Result Spreadsheet
              </div>
            </div>

            <div class="inner-content">
              <div class="flex-container-strip banner">
                <div class="flex-item logo qp">
                  <img
                    alt="Quickpass Messenger App"
                    src="@/assets/images/QuickpassUI/QPLogo1.webp"
                  >
                </div>

                <div
                  v-show="button1"
                  class="flex-item center"
                >
                  <div style="font-size: 13px;">
                    <span class="item">
                      Daily Average Amount Of Outputs Bar Graph Report
                      <br>
                      Generated, 14:49, 16/09/2015</span>
                  </div>
                </div>
                <div
                  v-show="button2"
                  class="flex-item center"
                >
                  <div style="font-size: 13px;">
                    <span class="item">
                      Daily Average Amount Of Outputs Bar Graph Report
                      <br>
                      Generated, 14:49, 16/09/2015</span>
                  </div>
                </div>
                <div
                  v-show="button3"
                  class="flex-item center"
                >
                  <div style="font-size: 13px;">
                    <span class="item">
                      Daily Average Amount Of Outputs Bar Graph Report
                      <br>
                      Generated, 14:49, 16/09/2015</span>
                  </div>
                </div>
                <div
                  v-show="button4"
                  class="flex-item center"
                >
                  <div style="font-size: 13px;">
                    <span class="item">
                      Daily Average Amount Of Outputs Bar Graph Report
                      <br>
                      Generated, 14:49, 16/09/2015</span>
                  </div>
                </div>
                <div
                  v-show="button5"
                  class="flex-item center"
                >
                  <div style="font-size: 13px;">
                    <span class="item">
                      Daily Average Amount Of Outputs Bar Graph Report
                      <br>
                      Generated, 14:49, 16/09/2015</span>
                  </div>
                </div>
                <div
                  v-show="button6"
                  class="flex-item center"
                >
                  <div style="font-size: 13px;">
                    <span class="item">
                      Daily Average Amount Of Outputs Bar Graph Report
                      <br>
                      Generated, 14:49, 16/09/2015</span>
                  </div>
                </div>

                <div class="flex-item logo">
                  <img
                    alt="Quickpass Messenger App"
                    src="@/assets/images/Logos/logo2.svg"
                  >
                </div>
              </div>
              <div class="history center">
                History Filters Set: Date. '15/09/2015'. Time. 'All Day'.
              </div>
              <img
                v-show="button1"
                alt="Quickpass Messenger App"
                src="../../assets/images/QuickpassUI/AvAmountOut.webp"
              >
              <img
                v-show="button2"
                alt="Quickpass Messenger App"
                src="../../assets/images/QuickpassUI/AvCallResponse.webp"
              >
              <img
                v-show="button3"
                alt="Quickpass Messenger App"
                src="../../assets/images/QuickpassUI/peakcalls.webp"
              >
              <img
                v-show="button4"
                alt="Quickpass Messenger App"
                src="../../assets/images/QuickpassUI/AvAmountOut.webp"
              >
              <img
                v-show="button5"
                alt="Quickpass Messenger App"
                src="../../assets/images/QuickpassUI/AvCallResponse.webp"
              >
              <img
                v-show="button6"
                alt="Quickpass Messenger App"
                src="../../assets/images/QuickpassUI/peakcalls.webp"
              >
            </div>
          </div>
        </div>
      </div>
      <AppSpacer offset="70px" />
    </AppSection>
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
// Functionality Components
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import SIBanner from '@/components/Banners/SIBanner'
import ContactRack from '@/components/Sections/Contact/ContactRack'
import AppSpacer from '@/components/Utilities/AppSpacer'
import ContactBlock from '@/components/Sections/Contact/ContactBlocks'
import TheGlobe2 from '@/components/Logo/TheGlobe2'

export default {
  name: 'ProductsSection',
  components: {
    // Essential Components
    AppSection,
    AppScrollTo,
    // Functionality Components
    AppFullWidthSection,
    SIBanner,
    ContactRack,
    AppSpacer,
    ContactBlock,
    TheGlobe2
  },
  data() {
    return {
      button1: true,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
      button6: false
    }
  },
  methods: {
    changeButtonOne() {
      this.button1 = true
      this.button2 = false
      this.button3 = false
      this.button4 = false
      this.button5 = false
      this.button6 = false
    },
    changeButtonTwo() {
      this.button1 = false
      this.button2 = true
      this.button3 = false
      this.button4 = false
      this.button5 = false
      this.button6 = false
    },
    changeButtonThree() {
      this.button1 = false
      this.button2 = false
      this.button3 = true
      this.button4 = false
      this.button5 = false
      this.button6 = false
    },
    changeButtonFour() {
      this.button1 = false
      this.button2 = false
      this.button3 = false
      this.button4 = true
      this.button5 = false
      this.button6 = false
    },
    changeButtonFive() {
      this.button1 = false
      this.button2 = false
      this.button3 = false
      this.button4 = false
      this.button5 = true
      this.button6 = false
    },
    changeButtonSix() {
      this.button1 = false
      this.button2 = false
      this.button3 = false
      this.button4 = false
      this.button5 = false
      this.button6 = true
    }
  }
}
</script>

<style scoped>

.qp {
  display:flex;
  justify-content: center;
  align-items: center;
}

.qp img {
  width: 100px;
}

.cover {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.img-container {
  max-width: 500px;
  width: 100%;
}

img {
  width: 100%;
  overflow: hidden;
}

.history {
  background-color: #fcf4a3;
  font-size: 13px;
}

  .inner-content {
    margin: 10px;
    background-color: white;
    border: solid 2px #e4e4e4;
  }

  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .child {
    border: solid 1px #e4e4e4;
    background-color: white;
  }

  .buttonA {
    text-align: center;
    background-color: #727272;
    font-weight: lighter;
    color: white;
    padding: 5px;
  }

  .buttonB {
    text-align: center;
    background-color: #C5B358;
    font-weight: lighter;
    color: white;
    padding: 5px;
  }

.flexcontainer {
   display: flex;
}

.center {
  justify-content: center;
    align-items: center;
}

.squareA {
  color: white;
  background-color: #C5B358;
  text-align: center;
  font-weight: bold;
  width: 40px;
}
.squareB {
  color: white;
  background-color: #c63023;
  text-align: center;
  font-weight: bold;
  width: 40px;
}

.button {
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  border-right: solid 1px #efefef;
  border-bottom: solid 1px #efefef;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
}

.button:hover {
  background-color: #d7d7d7;
  cursor: pointer;
}

.spacer {
  flex: 1;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-container-strip {
  display: flex;
  flex-flow: row wrap;
  background-color: #efefef;
  border-bottom: solid 1px #efefef;
}
.flex-item-strip {
  /*flex: 1 1 100px;*/
  text-align: center;
}

.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.flex-container::before {
  content: "";
}

.flex-container::after {
  content: "";
}

/* non-essential decorative styles */
.flex-container {
  padding: 5px 0;
  background-color: white;
}
.flex-item {
  height: 50px;
  flex: 1 1 100px;
  text-align: center;
}

.banner {
  background-color: white;
  border-bottom: 2px solid #e4e4e4;
}

.logo {
  max-width: 150px;
  width: 100%;
  margin: 10px;
}

.logo1 {
  max-width: 250px;
  width: 100%;
  margin: 10px;
}

.background {
  background-color: white;
}

@media only screen and (max-width: 900px) {
  .item {
    display: none;
  }
}

.banner-text-small {
  display: none;
}

@media only screen and (max-width: 750px) {
  .banner-text {
    display: none;
  }
  .banner-text-small {
    display: block;
  }
}

  .banner-text-smallest {
    display: none;
  }

@media only screen and (max-width: 480px) {
  .banner-text {
    display: none;
  }
  .banner-text-small {
    display: none;
  }
  .banner-text-smallest {
    display: block;
  }
}

.UI {
  min-width: 400px;
  padding: 5px;
}

.coverUI {
  display: flex;
  justify-content: center;
}

.background-UI {
  background-color: rgb(255,249,249);
  border-top: solid 1px #efefef;
  border-bottom: solid 1px #efefef;
}

@media only screen and (max-width: 400px) {
  .UI {
    overflow: hidden;
  }
}
</style>
