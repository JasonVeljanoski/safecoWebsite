<!--
  **********************************************************************************
  
  IF YOU SEEK TO CHANGE THE IMAGES ON THE SLIDER, GO TO THE data OBJECT IN THE <script> SECTION
  
  Note: these images must exist in the '@/assets/images/Products/' directory

  *********************************************************************************
-->

<template>
  <div class="tab-container">
    <h1 class="titles">
      Portfolio.
    </h1>
    <p class="titles">
      Our commitment to the research and development of communications systems for healthcare providers creates industry first solutions
      unrivalled by any other manufacturer. A recent example of this includes releasing the <strong>only</strong> dual core processor nurse call system in the world.
    </p>
    <div class="tab-nav">
      <ul class="tab-list">
        <li
          v-for="tabItem in tabItems"
          :key="tabItem.title"
          :class="{'tab-item-active': selected.title === tabItem.title }"
          class="tab-item"
          @click="changeTab(tabItem)"
        >
          {{ tabItem.title }}
        </li>
      </ul>
    </div>
    <br><br>
    <AppColumns>
      <AppColumn
        class="col2"
        align="center"
      >
        <!-- COLUMN 2 GOES HERE -->
        <h1 style="background-color: white;">
          {{ selected.title }}
        </h1>
        <div class="description">
          <!--<section slot="content"> {{ selected.content }} </section>-->
          <section v-show="selected.id==1">
            <p>
              Our versatile range of call stations has proven to be a useful asset to any hospital or aged care provider.
              <br><br>
              You can press the <strong>call button</strong> in green to <strong>call for a nurse</strong>. Other variations exist with <strong>staff assist</strong> in yellow and emergency in red which supports for different applications.
              <br><br>
              Each button will trigger a repeating tone of different priority depending on the urgency of the situation. Messages will display on the annunciator to describe the situation.
              <br><br>
              A variety of sockets are available for different needs. A socket can be provided to connect a <strong>pendant</strong> or a <strong>handset</strong>. An <strong>OOB (Out Of Bed)</strong> socket exists for the connection of a bed mat which can accurately detect when a patient is out of bed. A <strong>BW (Beam Wire)</strong> socket can also be implemented for bed wet situations.
              <br><br>
              Each call station can come in a <strong>wet area</strong> or <strong>dry area</strong> variation.
            </p>
          </section>
          <section v-show="selected.id==2">
            <p>
              The Unicall series dome light has the provision for or segment LEDs. <strong>Five</strong> LED colours are available.
              <ul>
                <li>Cool white</li>
                <li>Amber</li>
                <li>Red</li>
                <li>Blue</li>
                <li>Green</li>
              </ul>
              The white translucent dome cover clips to the moulded base and illuminates with the colour of the selected LED. Available in <strong>standard</strong>, <strong>intelligent</strong> and <strong>dementia</strong> versions.
            </p>
          </section>

          <section v-show="selected.id==3">
            <p>
              <strong>Pendants</strong> can be implemented into any <strong>call station</strong> by the addition of a pendant socket.
              <br><br>
              <strong>Pendants</strong> have up to two options for the patient. A <strong>green</strong> pushbutton can be used for <strong>nurse call</strong> and a <strong>yellow bed light button</strong> can also be implemented.
            </p>
          </section>
          <section v-show="selected.id==4">
            description 4
          </section>
          <section v-show="selected.id==5">
            <p>
              SAFECo Annunciators are available in both LED <span class="numbers">13</span> character dot matrix displays and as <span class="numbers">24" - 65"</span>
              monitors. 
              <br><br>
              The LED dot matrix annunciator is tri-colour and can be read from distances as far as <span class="numbers">30</span> metres away, ideal for ward corridors. 
              <br><br>
              When an active call is present on the system the annunciator will display the highest priority call, alternating between multiple calls of
              the same priority at <span class="numbers">2</span> second intervals. <strong>Nurse calls</strong> will display in <strong>green</strong>, <strong>ensuite calls</strong> in <strong>amber</strong>,
              <strong>assist</strong> in <strong>yellow</strong> and <strong>emergency</strong> in <strong>red</strong>.
            </p>
          </section>
          <section v-show="selected.id==6">
            <p>
              The <strong>SAFECo</strong> entertainment handset provides patients with nurse call, light switch and a built-in
              torch. The entertainment control buttons interface to all modern hardwired television systems.
              <br><br>
              An inbuilt speaker provides the patient with clear audio without disturbing other patients. For
              further privacy, an earphone socket allows patients to use modern audio headsets. 
              <br><br>
              A light switch allows the patient to control the overbed light and is backlit to assist in its location at night. 
              <br><br>
              The integrated nurse call button is readily located by its prominent position, and a soft green light
              identifies the button at night. When the nurse call button is pressed, the green light changes to
              red, acknowledging that the patient has pressed the button. 
              <br><br>
              The handset bracket provides secure mounting when the handset is not being used.
            </p>
          </section>
          <section v-show="selected.id==7">
            <p>
              The <strong>SAFECo waterproof pager</strong> is a combination of reliable <strong>POCSAG</strong> technology with a practical
              modern design applied. The pager is small and lighter weight than traditional pagers, is sealed and
              rechargeable. 
              <br><br>
              Charging stations are available as a single charger or <span class="numbers">10</span> way multi dock. Once fully
              charged typical battery time before requiring recharge is <span class="numbers">5</span> days.
            </p>
          </section>
          <section
            v-show="selected.id==7.5"
          >
            <h3>Our new Staff tracking and Patient Wandering Solution</h3>
            <p>
              SAFECo has a range of Positional Duress, Staff tracking and Patient Wandering Solutions available tailored to your facilities requirements. The system can locate with scalable accuracy from general area to room location by utilising state of the art dual RF and Ultrasonic technology to ensure assistance is on the way when it is needed most. 
              <br><br>
              Location information can be integrated into wireless messaging as well as the aid of a graphical display which can be distributed via a thin client on Local Area Network workstation PCs. Fixed annunciators in designated areas can also display location information. 
              <br><br>
              This technology is incorporated within our Unicall Nurse call stations to dramatically reduce the TCO (Total Cost of Ownership) for healthcare facilities. Facilities can now be confident that staff, residents and patients have peace of mind that safety and care is a priority.
            </p>
          </section>
          <section v-show="selected.id==8">
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
          </section>
          <section v-show="selected.id==9">
            <p>
              The <strong>SAFECo dementia keypad</strong> and <strong>dementia dome</strong> are intelligent expansion units to the Unicall
              system <strong>controllers</strong>. The units provide additional automation and unobtrusive monitoring of a resident within a room. 
              With reed switches, motion sensors, bed mats and floor mats, staff can
              arm and disarm the system via the keypad installed outside the room. 
              <br><br>
              The system can monitor if a resident gets out of bed at night to automatically turn on the light in the bathroom, and
              generate an alarm if the resident doesn't return to bed within a predefined time. 
              <br><br>
              Alternatively, if the resident doesn't go to the bathroom the system will generate a wandering alarm. 
              <br><br>
              If the motion sensor is triggered while the resident is still in bed, an intruder alarm will be triggered.
            </p>
          </section>
          <br>
          <div class="parent">
            <div class="button child">
              <nuxt-link to="/SAFECo/products">
                Click for more detail
              </nuxt-link>
            </div>
          </div>
        </div>
      </AppColumn>
      <AppColumn
        class="col1"
        align="start"
      >
        <!-- COLUMN 1 GOES HERE -->
        <div class="tab-carousel-container">
          <section v-if="selected.id == 1">
            <carousel
              v-if="buttonOne"
              :navigation-enabled="true"
              :pagination-enabled="false"
              :loop="true"
              :per-page="1"
              class="slider"
            >
              <slide
                v-for="images in Buttons.MomentaryButtonsImg"
                :key="images"
                class="tab-image"
              >
                <div>
                  <img
                    :src=" require('@/assets/images/Products/' + images) "
                    class="responsive"
                    alt="Momentary Buttons"
                  >
                </div>
              </slide>
            </carousel>
            <carousel
              v-if="buttonTwo"
              :navigation-enabled="true"
              :pagination-enabled="false"
              :loop="true"
              :per-page="1"
              class="slider"
            >
              <slide
                v-for="images in Buttons.LatchingButtonsImg"
                :key="images"
                class="tab-image"
              >
                <div>
                  <img
                    :src=" require('@/assets/images/Products/' + images) "
                    class="responsive"
                    alt="Latching Buttons"
                  >
                </div>
              </slide>
            </carousel>
            <carousel
              v-if="buttonThree"
              :navigation-enabled="true"
              :pagination-enabled="false"
              :loop="true"
              :per-page="1"
              class="slider"
            >
              <slide
                v-for="images in Buttons.IntelligentButtonsImg"
                :key="images"
                class="tab-image"
              >
                <div>
                  <img
                    :src=" require('@/assets/images/Products/' + images) "
                    class="responsive"
                    alt="Intelligent Buttons"
                  >
                </div>
              </slide>
            </carousel>
            <carousel
              v-if="buttonFour"
              :navigation-enabled="true"
              :pagination-enabled="false"
              :loop="true"
              :per-page="1"
              class="slider"
            >
              <slide
                v-for="images in Buttons.WetAreaButtonsImg"
                :key="images"
                class="tab-image"
              >
                <div>
                  <img
                    :src=" require('@/assets/images/Products/' + images) "
                    class="responsive"
                    alt="Wet Area Buttons"
                  >
                </div>
              </slide>
            </carousel>
            <carousel
              v-if="buttonFive"
              :navigation-enabled="true"
              :pagination-enabled="false"
              :loop="true"
              :per-page="1"
              class="slider"
            >
              <slide
                v-for="images in Buttons.WirelessButtonsImg"
                :key="images"
                class="tab-image"
              >
                <div>
                  <img
                    :src=" require('@/assets/images/Products/' + images) "
                    class="responsive"
                    alt="Wireless Buttons"
                  >
                </div>
              </slide>
            </carousel>
          </section>
          <carousel
            v-else
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1"
            class="slider"
          >
            <slide
              v-for="images in selected.images"
              :key="images"
              class="tab-image"
            >
              <div class="">
                <img
                  :src=" require('@/assets/images/Products/' + images) "
                  class="responsive"
                  alt="Selected Image"
                >
              </div>
            </slide>
          </carousel>
        </div>
      </AppColumn>
    </AppColumns>

    <section class="flexbox">
      <!-- COLUMN 1 GOES HERE -->
      <div class="tab-carousel-container column1">
        <section v-if="selected.id == 1">
          <carousel
            v-if="buttonOne"
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1"
            class="slider"
          >
            <slide
              v-for="images in Buttons.MomentaryButtonsImg"
              :key="images"
              class="tab-image"
            >
              <div>
                <img
                  :src=" require('@/assets/images/Products/' + images) "
                  class="responsive"
                  alt="Momentary Buttons"
                >
              </div>
            </slide>
          </carousel>
          <carousel
            v-if="buttonTwo"
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1"
            class="slider"
          >
            <slide
              v-for="images in Buttons.LatchingButtonsImg"
              :key="images"
              class="tab-image"
            >
              <div>
                <img
                  :src=" require('@/assets/images/Products/' + images) "
                  class="responsive"
                  alt="Latching Buttons"
                >
              </div>
            </slide>
          </carousel>
          <carousel
            v-if="buttonThree"
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1"
            class="slider"
          >
            <slide
              v-for="images in Buttons.IntelligentButtonsImg"
              :key="images"
              class="tab-image"
            >
              <div>
                <img
                  :src=" require('@/assets/images/Products/' + images) "
                  class="responsive"
                  alt="Intelligent Buttons"
                >
              </div>
            </slide>
          </carousel>
          <carousel
            v-if="buttonFour"
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1"
            class="slider"
          >
            <slide
              v-for="images in Buttons.WetAreaButtonsImg"
              :key="images"
              class="tab-image"
            >
              <div>
                <img
                  :src=" require('@/assets/images/Products/' + images) "
                  class="responsive"
                  alt="Wet Area Buttons"
                >
              </div>
            </slide>
          </carousel>
          <carousel
            v-if="buttonFive"
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1"
            class="slider"
          >
            <slide
              v-for="images in Buttons.WirelessButtonsImg"
              :key="images"
              class="tab-image"
            >
              <div>
                <img
                  :src=" require('@/assets/images/Products/' + images) "
                  class="responsive"
                  alt="Wireless Buttons"
                >
              </div>
            </slide>
          </carousel>
        </section>
        <carousel
          v-else
          :navigation-enabled="true"
          :pagination-enabled="false"
          :loop="true"
          :per-page="1"
          class="slider"
        >
          <slide
            v-for="images in selected.images"
            :key="images"
            class="tab-image"
          >
            <div class="">
              <img
                :src=" require('@/assets/images/Products/' + images) "
                class="responsive"
                alt="Selected Image"
              >
            </div>
          </slide>
        </carousel>
      </div>
    </section>
  </div>
</template>

<script>
import AppShowMoreBox from '@/components/Utilities/AppShowMoreBox'
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'
import AppSpacer from '@/components/Utilities/AppSpacer'

export default {
  name: 'AppTabs',
  components: {
    AppShowMoreBox,
    AppColumns,
    AppColumn,
    AppSpacer
  },
  data() {
    return {
      buttonOne: true,
      buttonTwo: false,
      buttonThree: false,
      buttonFour: false,
      buttonFive: false,

      /*
        *********************************************************************************


        Below, the names of the images used in the products slider must be mentioned
        Note: these images must exist in the '@/assets/images/Products/' directory


        *********************************************************************************
      */

      selected: {
        title: 'Buttons',
        images: [
          'Dry_Area_Call_Station_CALL.webp',
          'Dry_Area_Call_Station_STAFF.webp',
          'Dry_Area_Call_Station_EMERGENCY.webp',
          'Wet_Area_CALL.webp',
          'Wet_Area_STAFF.webp',
          'Wet_Area_EMERGENCY.webp'
        ],
        id: '1',
        preview: 'this is the ',
        content: 'this is the DEFAULT'
      },
      tabItems: [
        {
          title: 'Buttons',
          images: [
            'Dry_Area_Call_Station_CALL.webp',
            'Dry_Area_Call_Station_STAFF.webp',
            'Dry_Area_Call_Station_EMERGENCY.webp',
            'Wet_Area_CALL.webp',
            'Wet_Area_STAFF.webp',
            'Wet_Area_EMERGENCY.webp'
          ],
          id: '1',
          preview: 'this is the ',
          content: 'this is the DEFAULT'
        },
        {
          title: 'Dome Lights',
          images: [
            'dome_light_on.webp',
            'dome_light_off.webp',
            'dome_light_display.webp'
          ],
          id: '2',
          preview: 'This is a DOME LIGHT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is a DOME LIGHT Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Pendants',
          images: [
            'pendant_black.webp',
            'pendant_blue.webp'
          ],
          id: '3',
          preview: 'This is PENDANTS product Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is PENDANTS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Handsets',
          images: [
            'dome_light_on.webp',
            'dome_light_on.webp'
          ],
          id: '4',
          preview: 'This is HANDSETS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is HANDSETS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Annunciators',
          images: [
            'dome_light_on.webp',
            'dome_light_on.webp'
          ],
          id: '5',
          preview: 'This is ANNUNCTIATORS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is ANNUNCTIATORS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Controllers',
          images: [
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp'
          ],
          id: '6',
          preview: 'This is CONTROLLERS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is CONTROLLERS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Pagers',
          images: [
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp'
          ],
          id: '7',
          preview: 'This is PAGERS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is PAGERS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Real Time Locating System (RTLS)',
          images: [
            'rtls.01_01.webp',
            'rtls.02_02.webp',
            'rtsl.webp',
            'rtls.01_01.webp'
          ],
          id: '7.5',
          preview: 'This is PAGERS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is PAGERS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Mobile Messaging App',
          images: [
            'qp.01_01.webp',
            'qp.02_02.webp',
            'qp.03_03.webp',
            'qp.04_04.webp'
          ],
          id: '8',
          preview: 'This is MOBILE APP Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is MOBILE APP Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'Dimentia Products',
          images: [
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp'
          ],
          id: '9',
          preview: 'This is DIMENTIA PRODUCT product Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is DIMENTIA PRODUCT product Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ],
      ButtonSelect: {
        title: 'one'
      },
      Buttons: {
        MomentaryButtonsImg: [
          'Dry_Area_Call_Station_CALL.webp',
          'Dry_Area_Call_Station_STAFF.webp',
          'Dry_Area_Call_Station_EMERGENCY.webp',
          'Wet_Area_CALL.webp',
          'Wet_Area_STAFF.webp',
          'Wet_Area_EMERGENCY.webp',
          'Dry_Area_with_pendant20_n.webp',
          'Call_Station_pendant_BW_OOB.webp',
          'buttons_display.webp'
        ],
        LatchingButtonsImg: [
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp'
        ],
        IntelligentButtonsImg: [
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp'
        ],
        WetAreaButtonsImg: [
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp'
        ],
        WirelessButtonsImg: [
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp',
          'dome_light_on.webp'
        ]
      }
    }
  },
  methods: {
    changeTab(tabItem) {
      this.selected.title = tabItem.title
      this.selected.images = tabItem.images
      this.selected.preview = tabItem.preview
      this.selected.content = tabItem.content
      this.selected.id = tabItem.id
    },
    changeButtonOne() {
      this.buttonOne = true
      this.buttonTwo = false
      this.buttonThree = false
      this.buttonFour = false
      this.buttonFive = false
      this.ButtonSelect.title = 'one'
    },
    changeButtonTwo() {
      this.buttonOne = false
      this.buttonTwo = true
      this.buttonThree = false
      this.buttonFour = false
      this.buttonFive = false
      this.ButtonSelect.title = 'two'
    },
    changeButtonThree() {
      this.buttonOne = false
      this.buttonTwo = false
      this.buttonThree = true
      this.buttonFour = false
      this.buttonFive = false
      this.ButtonSelect.title = 'three'
    },
    changeButtonFour() {
      this.buttonOne = false
      this.buttonTwo = false
      this.buttonThree = false
      this.buttonFour = true
      this.buttonFive = false
      this.ButtonSelect.title = 'four'
    },
    changeButtonFive() {
      this.buttonOne = false
      this.buttonTwo = false
      this.buttonThree = false
      this.buttonFour = false
      this.buttonFive = true
      this.ButtonSelect.title = 'five'
    }
  }
}
</script>

<style scoped>

  .titles {
      text-align: center;
  }

  .col1 {
      max-width: 40vw;
      display: flex;
      justify-content: center;
  }
  .col2 {
      width: 500px;
      margin-top: -50px;
  }
  .tab-container {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: visible;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 10px 10px 10px;
  width: 100%;
  overflow: hidden;
  }
  .tab-container h1,
  .tab-container p {
  justify-content: center;
  padding: 5px 20px;
  margin: 0;
  width: 100%;
  background-color: #f3f3f3;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  }
  .tab-nav {
  padding: 20px;
  }
  .tab-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  }
  .tab-item {
  font-weight: 800;
  padding: 5px 10px;
  margin: 5px;
  background-color: #f3f3f3;
  border-radius: 5px;
  transition: background-color 0.4s;
  }
  .tab-item-active {
  color: #f3f3f3 !important;
  background-color: #454545 !important;
  }
  .tab-item:hover,
  .tab-item:hover {
  cursor: pointer;
  background-color: #e4e4e4;
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
  .tab-carousel-container {
  width: 100%;
  margin-top: 20px;

  }

  .description {
    padding: 20px;
    border-top: solid 1px #e4e4e4;
    overflow-y: scroll;
   -webkit-overflow-scrolling: touch;
   height:100%; /*A value other than height:auto needs to be set*/
  }

  .description-button {
    height: 250px;
  }

  .description-other {
    max-height: 350px;
  }

/* change buttons to smaller ones when width < 850px */
  .smallbuttonlist {
    display: none;
  }

  @media only screen and (max-width: 850px) {
  .buttonlist {
    display: none;
  }
  .smallbuttonlist {
    display: block;
  }
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

  /* Button css */
/* Button style */
 .parent {
   display: flex;
   justify-content: center;
 }
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
    width: 200px;
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

.slider {
  width: 100%;
}

@media only screen and (max-width: 670px) {
  .col1 {
  max-width: 80vw;
}
}

/* unlikely anyone will be viewing this size. but lets make it look good anyway */
  @media only screen and (max-width: 380px) {
  .col1 {
    display: none;
  }
}

.column1 {
  display: none;
  width: 90%;
}

  @media only screen and (max-width: 600px) {
  .col1 {
    display: none;
  }
  .column1 {
    display: block;
  }
}

@media only screen and (max-width: 250px) {
  .column1 {
    display: none;
  }
}

/* unlikely anyone will be viewing this size. but lets make it look good anyway */
  @media only screen and (max-width: 380px) {
  .col1 {
    display: none;
  }
}
.responsive {
  max-width: 100%;
  height: auto;
}

img {
  max-height: 480px;
}

.flexbox {
  display: flex;
  justify-content: center;
}
</style>
