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

    <AppColumns>
      <AppColumn
        class="col2"
        align="start"
      >
        <!-- COLUMN 2 GOES HERE -->
        <h2>
          {{ selected.title }}
          <span v-show="buttonOne && selected.id==1">: Momentary Buttons</span>
          <span v-show="buttonTwo && selected.id==1">: Latching Buttons</span>
          <span v-show="buttonThree && selected.id==1">: Intelligent Buttons</span>
          <span v-show="buttonFour && selected.id==1">: Wet Area Buttons</span>
          <span v-show="buttonFive && selected.id==1">: Wireless Buttons</span>
        </h2>
        <section v-show="selected.id==1">
          <div class="tab-nav buttonlist">
            <ul class="tab-list">
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'one' }"
                class="tab-item"
                @click="changeButtonOne()"
              >
                Momentary Buttons
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'two' }"
                class="tab-item"
                @click="changeButtonTwo()"
              >
                Latching Buttons
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'four' }"
                class="tab-item"
                @click="changeButtonFour()"
              >
                Wet Area Buttons
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'five' }"
                class="tab-item"
                @click="changeButtonFive()"
              >
                Wireless Buttons
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'three' }"
                class="tab-item"
                @click="changeButtonThree()"
              >
                Multifunction Buttons
              </li>
            </ul>
          </div>

          <div class="tab-nav smallbuttonlist">
            <ul class="tab-list">
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'one' }"
                class="tab-item"
                @click="changeButtonOne()"
              >
                MB
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'two' }"
                class="tab-item"
                @click="changeButtonTwo()"
              >
                LB
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'four' }"
                class="tab-item"
                @click="changeButtonFour()"
              >
                WAB
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'five' }"
                class="tab-item"
                @click="changeButtonFive()"
              >
                WB
              </li>
              <li
                :class="{'tab-item-active': ButtonSelect.title === 'three' }"
                class="tab-item"
                @click="changeButtonThree()"
              >
                MF
              </li>
            </ul>
          </div>
        </section>
        <div class="description">
          <!--<section slot="content"> {{ selected.content }} </section>-->

          <section
            v-show="selected.id==1"
            class="description-button"
          >
            <section v-show="buttonOne">
              <h3>Details</h3>
              <p class="text">
                The <strong>momentary</strong> call/cancel station provides independent call and cancel buttons, in addition to a
                pendant socket for a variety of patient call requirements. An air pendant may also be connected
                for special applications. 
                <br><br>
                The standard range is available in a variety of call button colours and
                membrane descriptions. The cancel button and text background are always grey. Modules are
                assembled on a one gang plastic plate (complete with blank surround) for wall mounting. 
                <br><br>
                A call can be made by pressing the button on the <strong>call station</strong> or on a <strong>pendant</strong> connected to the station.
                When a call is made, a <strong>red</strong> reassurance LED below the call button illuminates. This provides a local
                indication that the system has received the call and guides the attending staff member to the call
                location. Pressing the <strong>cancel</strong> button will reset the call and extinguish the LED. This call station is ideal for patient rooms.
                <br><br>
                The call station is available with screw terminals or <span class="numbers">RJ45</span> connectors.
              </p>
              <h3>Main Features</h3>
              <ul>
                <li>Independent call and cancel buttons</li>
                <li><span class="numbers">6.5mm</span> passive socket for a pendant (optional)</li>
                <li>Inbuilt audible indication (optional)</li>
                <li>Integrated LED reassurance light to provide positive reassurance to the patient</li>
                <li>Robust construction for durability and reliability</li>
                <li>Assembly will fit any standard flat wall plate or service duct</li>
                <li>Easy to press button, easily activated from almost any angle</li>
              </ul>
            </section>

            <section v-show="buttonTwo">
              <h3>Details</h3>

              <p class="text">
                The <strong>latching</strong> call/cancel station provides independent call and cancel buttons, in addition to a
                pendant socket for a variety of patient call requirements. An air pendant may also be connected
                for special applications. 
                <br><br>
                The standard range is available in a variety of call button colours and
                membrane descriptions. The cancel button and text background are always grey. Modules are
                assembled on a one gang plastic plate (complete with blank surround) for wall mounting. 
                <br><br>
                A call can be made by pressing the button on the <strong>call station</strong> or on a <strong>pendant</strong> connected to the station.
                When a call is made, a <strong>red</strong> reassurance LED below the call button illuminates. This provides a local
                indication that the system has received the call and guides the attending staff member to the call
                location. Pressing the <strong>cancel</strong> button will reset the call and extinguish the LED. This call station is ideal for patient rooms.
                <br><br>
                The call station is available with screw terminals or <span class="numbers">RJ45</span> connectors.
              </p>
              <h3>Main Features</h3>
              <ul>
                <li>Independent call and cancel buttons</li>
                <li><span class="numbers">6.5mm</span> passive socket for a pendant (optional)</li>
                <li>Inbuilt audible indication (optional)</li>
                <li>Integrated LED reassurance light to provide positive reassurance to the patient</li>
                <li>Robust construction for durability and reliability</li>
                <li>Assembly will fit any standard flat wall plate or service duct</li>
                <li>Easy to press button, easily activated from almost any angle</li>
              </ul>
            </section>

            <section v-show="buttonThree">
              <h3>Details</h3>
              <p>
                The starsmart and loopsmart multifunction station provides independent call, assist and cancel
                buttons, in addition to auxiliary sockets for a variety of patient/resident requirements.
                <br><br>
                The ability to connect a <strong>pendant</strong>, <strong>bed mat</strong>, <strong>floor mat</strong>, <strong>beam wand</strong>, <strong>bed wet sensor</strong> is readily
                available within this compact call station. 
                <br><br>
                The standard range is available in a variety of call
                button colours and membrane descriptions. The cancel button and text background is always
                grey. Modules are assembled in a one gang plastic plate (complete with blank surround) for wall
                mounting. 
                <br><br>
                A call can be made by pressing the button on the <strong>call station</strong> or on a <strong>pendant</strong>
                connected to the station. When a call is made, a <strong>red</strong> reassurance LED below the call button
                illuminates. This provides a local indication that the system has received the call and guides the
                attending staff member to the call location. Pressing the cancel button will reset the call and
                extinguish the LED. This call station is ideal for patient rooms. 
                <br><br>
                The call station is only available with <span class="numbers">RJ45</span> connectors.
              </p>
              <h3>Main Features</h3>
              <ul>
                <li>independent call, assist and cancel buttons</li>
                <li><span class="numbers">3</span>qty <span class="numbers">6.5mm</span> auxiliary sockets (optional)</li>
                <li>Reading light relay contact or volt DC</li>
                <li>Integrated LED reassurance light to provide positive reassurance to the patient</li>
                <li>Robust construction for durability and reliability</li>
                <li>Assembly will fit any standard flat wall plate or service duct</li>
                <li>Easy to press button</li>
                <li><strong>RTLS</strong> dual technology receivers (optional)</li>
              </ul>
            </section>

            <section v-show="buttonFour">
              <h3>Details</h3>
              <p>
                <strong>Wet area</strong> call stations are designed for wet applications.
                <br><br>
                A moulded hood exists as physical protection. The electronics are filled with a resin and the screws are stainless steel to prevent rusting.
                <br><br>
                The entire build is <strong>waterproof</strong> and <strong>flame retardant</strong>.
              </p>
              <h3>Main Features</h3>
              <ul>
                <li>Moulded hood to splash proof button area</li>
                <li>Resin filled electronics</li>
                <li>Flame retardant material</li>
                <li>Supplied with stainless steel screws to prevent rusting</li>
                <li>Gasket to seal wall cavity</li>
                <li>Gel filled crimp connectors</li>
                <li>Screw caps</li>
              </ul>
            </section>

            <section v-show="buttonFive">
              <h3>Details</h3>
              <p>
                The <strong>SAFair Wireless</strong> call station is available in both <strong>wet</strong> and <strong>dry area</strong> styles. 
                <br><br>
                SAFair is suitable where cabling pathways may not be possible. Flexible configurations are available where the
                wireless station can be paired with either a <strong>receiver call station</strong>, <strong>receiver unit</strong> or a <strong>Unicall controller</strong>
                with built-in receiver. 
                <br><br>
                The station supports fault monitoring and comes supplied with a <strong>lithium battery</strong>.
              </p>
              <h3>Main Features</h3>
              <ul>
                <li>LED reassurance light to provide positive reassurance to the patient</li>
                <li>Off line and low batter monitoring</li>
                <li>Robust construction for durability and reliability</li>
                <li>Designed to meet IP66 requirements for wet areas</li>
                <li>Dry area version available</li>
                <li><span class="numbers">2</span> year battery life</li>
              </ul>
            </section>
          </section>

          <section
            v-show="selected.id==2"
            class="description-other"
          >
            <h3>Details</h3>
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
            <h3>Main Features</h3>
            <ul>
              <li>High luminosity</li>
              <li><span class="numbers">RJ45</span> sockets allows one <span class="numbers">CAT5/6</span> cable to be daisy chained to more than one over door LED light</li>
              <li>Screw terminal allows easy activation of inputs for <span class="numbers">non-CAT5/6</span> installations</li>
              <li>Up to <span class="numbers">4</span> outputs available with various colours available per output</li>
              <li>Structured <span class="numbers">CAT5e</span> provides seamless integration into Unicall controller</li>
              <li>Output Selection, the installer can select which output line on the <span class="numbers">CAT5/6</span> cable will activate on</li>
            </ul>
          </section>

          <section
            v-show="selected.id==3"
            class="description-other"
          >
            <h3>Details</h3>
            <p>
              <strong>Pendants</strong> can be implemented into any <strong>call station</strong> by the addition of a pendant socket.
              <br><br>
              <strong>Pendants</strong> have up to two options for the patient. A <strong>green</strong> pushbutton can be used for <strong>nurse call</strong> and a <strong>yellow bed light button</strong> can also be implemented.
            </p>
            <h3>Main Features</h3>
            <ul>
              <li>White plastic housing</li>
              <li>Fits comfortably in hand</li>
              <li>Green Pushbutton</li>
              <li>Optional Yellow bed light button</li>
              <li><span class="numbers">6.35mm TRS</span> jack</li>
            </ul>
          </section>

          <section
            v-show="selected.id==4"
            class="description-other"
          >
            <h3>Details</h3>
            <p>A breif description on what the HANDSETS does. Write what a viewer of the page wants to know (not spec and implementation details).</p>
            <h3>Main Features</h3>
            <ul>
              <li>Slim ergonomic design</li>
              <li>Shaped to fit comfortably in the hand</li>
              <li><span class="numbers">3.5ml</span> earphone socket</li>
              <li>Nurse call button</li>
              <li>Built in torch</li>
              <li>Button which enables bed light</li>
              <li><strong>Volume</strong> up/down buttons</li>
              <li><strong>Channel</strong> up/down buttons</li>
            </ul>
          </section>

          <section
            v-show="selected.id==5"
            class="description-other"
          >
            <h3>Details</h3>
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
            <h3>Main Features</h3>
            <ul>
              <li>Visible from up to <span class="numbers">30m</span></li>
              <li>Robust construction for durability and reliability</li>
              <li>Can display the time when no active calls exist</li>
              <li>White housing</li>
            </ul>
          </section>

          <section
            v-show="selected.id==6"
            class="description-other"
          >
            <h3>Details</h3>
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
            <h3>Main Features</h3>
            <ul>
              <li>Handset housing shaped to fit comfortably in the hand</li>
              <li>Robust construction for durability and reliability</li>
              <li>Custom cradle provides secure storage when not in use</li>
              <li>White housing with <span class="numbers">2.5M</span> cable and <span class="numbers">18</span> pin plug</li>
              <li>Waterproof speaker</li>
              <li>Earphone socket</li>
              <li>Nurse call button</li>
              <li>Reading light and torch button</li>
            </ul>
          </section>

          <section
            v-show="selected.id==7"
            class="description-other"
          >
            <h3>Details</h3>
            <p>
              The <strong>SAFECo waterproof pager</strong> is a combination of reliable <strong>POCSAG</strong> technology with a practical
              modern design applied. The pager is small and lighter weight than traditional pagers, is sealed and
              rechargeable. 
              <br><br>
              Charging stations are available as a single charger or <span class="numbers">10</span> way multi dock. Once fully
              charged typical battery time before requiring recharge is <span class="numbers">5</span> days.
            </p>
            <h3>Main Features</h3>
            <ul>
              <li>Sleek Modern Design</li>
              <li>Supplied with Belt Clip</li>
              <li>No Need to replace battery, rechargeable</li>
              <li>Compatible with existing paging systems</li>
              <li>Hand programmable</li>
              <li>Thinnest Pocsag Pager in the <strong>world</strong></li>
              <li>Anti-Bacterial plastic suitable for hospital use</li>
              <li>Up to <span class="numbers">8</span> paging addresses (capcodes)</li>
              <li>Battery Charge indicator</li>
              <li><span class="numbers">8</span> different melody alerts</li>
              <li>Built-in vibrator for vibration alert</li>
              <li>Multi-Language support</li>
              <li><span class="numbers">20</span> characters <span class="numbers">4</span> or <span class="numbers">8</span> line mode</li>
            </ul>
          </section>

          <section
            v-show="selected.id==7.5"
            class="description-other"
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

          <section
            v-show="selected.id==8"
            class="description-other"
          >
            <h3>Details</h3>
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

          <section
            v-show="selected.id==9"
            class="description-other"
          >
            <h3>Details</h3>
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
            <h3>Main Features</h3>
            <ul>
              <li><span class="numbers">4</span> predefined profiles</li>
              <li>Arm/disarm from the keypad</li>
              <li>Alarm status indicators</li>
              <li>Auxiliary output for switching ensuite light</li>
              <li>Accept reed switch and motion sensors</li>
              <li><span class="numbers">2</span> press arming to stop residents from tampering with system operation</li>
            </ul>
          </section>
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
              <div>
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

    <section class="column1">
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
            <div>
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
          'Dry_Area_Call_Station_EMERGENCY.webp'
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
          title: 'Dementia Products',
          images: [
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp',
            'dome_light_on.webp'
          ],
          id: '9',
          preview: 'This is DEMENTIA PRODUCT product Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          content: 'This is DEMENTIA PRODUCT product Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ],
      ButtonSelect: {
        title: 'one'
      },
      Buttons: {
        MomentaryButtonsImg: [
          'Dry_Area_Call_Station_CALL.webp',
          'Dry_Area_Call_Station_STAFF.webp',
          'Dry_Area_Call_Station_EMERGENCY.webp'
        ],
        LatchingButtonsImg: [
          'Dry_Area_Call_Station_CALL.webp',
          'Dry_Area_Call_Station_STAFF.webp',
          'Dry_Area_Call_Station_EMERGENCY.webp'
        ],
        IntelligentButtonsImg: [
          'Call_Station_pendant_BW_OOB.webp'
        ],
        WetAreaButtonsImg: [
          'Wet_Area_CALL.webp',
          'Wet_Area_STAFF.webp',
          'Wet_Area_EMERGENCY.webp'
        ],
        WirelessButtonsImg: [
          'Dry_Area_Call_Station_CALL.webp',
          'Dry_Area_Call_Station_STAFF.webp',
          'Dry_Area_Call_Station_EMERGENCY.webp',
          'Wet_Area_CALL.webp',
          'Wet_Area_STAFF.webp',
          'Wet_Area_EMERGENCY.webp'
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

.slider {
  width: 100%;
}

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
  width: 100%
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
    /*display: flex;
    justify-content: center;*/

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

.column1 {
  display: none;
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
