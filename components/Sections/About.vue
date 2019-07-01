<template>
  <div class="wrapper">
    <!-- Full width banner -->

    <AboutBanner 
      title="Welcome to SAFECo." 
      description="We are SAFECo, a driven and innovative Australian company that places our clients needs first."/>

    <AppScrollTo id="bottom"/>
    <br><br>
    <div>

      <!-- COLUMN 1 GOES HERE -->
      <AppSection 
        title="About SAFECo."
        text="This is where you can learn a bit about us and our vision" />

      <div class="parent">
        <!-- Show Slider -->
        <section 
          v-if=" counter === 0 "
          class="item">

          <div class="title">
            <div 
              class="fa fa-angle-left parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="decrement()" />
            <div class="title-container"><h2 class="child-title parent">SAFECo Vision</h2></div>
            <div 
              class="fa fa-angle-right parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="increment()" />
          </div>

          <div class="col1">
            <p>Our company vision is to grow a fantastic Australian Research, Development and Manufacturing business in the commercial electronics healthcare communications sector by providing innovative, practical technologies to the client. We want to set a standard and an example that Australian business can be successful in developing and manufacturing electronics without the need to outsource offshore products protecting our children's employment and future.</p>
          </div>
        </section>
        <section 
          v-if = " counter === 1 "
          class="item">

          <div class="title">
            <div 
              class="fa fa-angle-left parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="decrement()" />
            <div class="title-container"><h2 class="child-title parent">About SAFECo</h2></div>
            <div 
              class="fa fa-angle-right parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="increment()" />
          </div>
          

          <div class="col1">
            <p>As an Australian manufacturer of healthcare communications, SAFECo removes the risk burdened on healthcare facilities by only providing quality assured products and services. SAFECo's suite of healthcare communications solutions all complies with stringent quality assurance testing, an essential attribute for any potential lifesaving function. In the spirit of SAFECo's mission to supply healthcare facilities with solutions they can trust, we have developed a range of options to suit all budgets, whilst never compromising on quality and reliability. Our exclusive commitment to the healthcare industry is a core value of SAFECO's operations. Whilst other communications manufacturers provide products to a variety of sectors, SAFECo only designs products and establishes service processes specific to the unique intricacies of hospitals and aged care providers.</p>
          </div>
        </section>
        <section 
          v-if=" counter === 2 "
          class="item">

          <div class="title">
            <div 
              class="fa fa-angle-left parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="decrement()" />
            <div class="title-container"><h2 class="child-title parent">Why Choose SAFECo?</h2></div>
            <div 
              class="fa fa-angle-right parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="increment()" />
          </div>

          <div class="col1">
            <p>
              <strong>Giving back to the community: </strong> SAFECO is an Autism-friendly company and employs in partnership with the Autism Association staff on the Autism Spectrum in production. We also offer work experience for High School students on the Autism Spectrum.
              <br><br>
              <strong>Low-risk investment: </strong> SAFECo is one of few Australian Manufacturers that Employs Electronics Engineers, Electronics Technicians, and Electronics Assemblers Locally
              <br><br>
              <strong>Intellectual Property: </strong>SAFECo owns all engineering designs, Tooling, cast dies and source code, meaning that we can support and customise our products to maximum possible capacity.
              <br><br>
              <strong>Registered Compliant Manufacturer: </strong>SAFECo has all its products tested by a third party testing house with detailed reports and certificates. As a responsible manufacturer, electronics products are required to be tested for noise and emissions that are generated when the product is operating. Those emissions must be below the threshold levels set out by the ACMA. This procedure is also known as EMC or Electromagnetic Compatibility testing. 
              <br><br>
              <strong>Research and Development: </strong>SAFECo invests heavily in  Research and Development to ensure the best quality and features are embedded into our products. 
              <br><br>
              <strong>Staff: </strong>SAFECo recruits the right people for the job. We currently employ five Australian apprentices who are specifically being trained in the healthcare electronics sector.
            </p>
          </div>
        </section>
        <section 
          v-if=" counter === 3 "
          class="item">

          <div class="title">
            <div 
              class="fa fa-angle-left parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="decrement()" />
            <div class="title-container"><h2 class="child-title parent">Our Steakholders</h2></div>
            <div 
              class="fa fa-angle-right parent child-title"
              style="font-size: 26pt; cursor: pointer;"
              @click="increment()" />
          </div>

          <div class="col1">
            <p>
              SAFECo's healthcare communications solutions provide significant benefits to key stakeholders in any healthcare facility. Due to the reliability of SAFECo's products and software, engineering staff will rarely need to attend to maintenance calls. However, like any product that is used frequently, the system will require some upkeep. To ensure that the majority of this can be carried out in-house to a high standard, SAFECo offers facility managers an opportunity to undertake a certification program run by SAFECo's most experienced technicians and engineers. The result of this being that the total cost of ownership for SAFECo's products is minimised through reduced external maintenance expenses. Where maintenance is required, our distributors can offer Service Level Agreements that guarantee a SAFECo certified technician will be on site within a negotiated time frame. Through ensuring the installation of a quality certified system; senior managers can significantly reduce the risk of patient/staff communication faults. Incidents where a communications platform faults in a life-threatening situation could significantly tarnish a healthcare facilities reputation.
              <br><br>
              Applications on offer from SAFECo such as Quick Pass Messenger provide managers with invaluable reporting information. This analysis can highlight response times, which can greatly assist with roster planning and increase productivity from existing personnel (<nuxt-link to="/SAFECo/software-integration">click here for more info</nuxt-link>). SAFECo's system architecture is completely modular, meaning healthcare facilities can install or upgrade platforms incrementally or as one project. This allows for minimal downtime and distribution to the daily operations of the healthcare organisation. Our systems are also backwards and forwards compatible. This allows healthcare facilities to utilise existing infrastructure to ensure projects are as cost-efficient as possible whilst catering for future requirements.
            </p>
          </div>
        </section>
      </div>
    </div>
    <!-- 
      
        Meet the team

    -->
    
    <AboutModal 
      v-if="active" 
      :fullname="selected.fullname"
      :jobtitle="selected.jobtitle"
      :imagelink=" require(`@/assets/images/profiles/${selected.imagelink}`) "
      :telephone="selected.telephone"
      :email="selected.email"
      @exitModal="active=false"
    >
      <section v-if="selected.id==='0'">
        <p>
          Jared Belsky is CEO of 360i, a top advertising agency in the U.S. that has helped its clients capitalize on industry changes. During his 10-year tenure Jared has lead the agency’s growth, guiding product development and overall strategic direction, in addition to overseeing 360i’s Media practice. Under Jared’s leadership, 360i has been named Adweek’s Breakthrough Media Agency of the year, repeatedly ranked among the best Lead Agencies and Search Agencies by Forrester Research and featured in Ad Age’s coveted A-List issue for eight consecutive years.
          <br>
          As CEO, Jared leverages his integrated vision to define what the modern agency model looks like and to drive innovation at scale on behalf of 360i’s client partners. Jared has spearheaded 360i’s industry-leading expertise in Voice, including the development of Voice Search Monitor (VSM) software that reverse-engineers algorithms used by the most prevalent Voice platforms to help brands stay top-of-mind in all forms of discovery. Before he was CEO, Jared served as the agency’s President for five years and cultivated a client-first organization, overseeing 360i's global Search, Analytics and Media (Display, Programmatic and Paid Social) practice.
          <br>
          Jared was named to Advertising Age’s “40 Under 40” in 2017, honored as “Executive of the Year” at the 2016 Bing Awards, on Adweek’s Media All-Star list in 2014, and has served as a trusted advisor to world-class brands like Capital One, H&R Block, Norwegian Cruise Lines and others.
          <br>
          Prior to joining 360i, Jared had over a decade of marketing experience, which includes the launch of a new CPG brand, managing marketing for Coca-Cola’s Fanta brand, and working in media buying and account roles as one of the first employees at Avenue A (now SapientRazorfish).
          <br>
          Jared received an M.B.A. from Emory University in Marketing & Management and a B.A. with Honors from the University of Pennsylvania.
        </p>
      </section>
      <section v-if="selected.id==='1'">
        this is the conent for id one
      </section>
      <section v-if="selected.id==='2'">
        this is the conent for id two
      </section>
      <!--<section v-if="selected.id==='3'">
        this is the conent for id three
      </section>
      <section v-if="selected.id==='4'">
        this is the conent for id four
      </section>
      <section v-if="selected.id==='5'">
        this is the conent for id five
      </section>
      <section v-if="selected.id==='6'">
        this is the conent for id six
      </section>
      <section v-if="selected.id==='7'">
        this is the conent for id seven
      </section>-->
    </AboutModal>

    <br>
    <AppSection 
      title="Meet The Team."
      text="Over 90 years combined technical experience including software and hardware design" />

    <div class="container">
      <div class="tile-container">
        <AboutTile
          v-for="item in items"
          :key="item.fullname"
          :fullname="item.fullname"
          :jobtitle="item.jobtitle" 
          :imagelink=" require(`@/assets/images/profiles/${item.imagelink}`) "
          @openModal="changeTab(item)"
        />
      </div>
    </div>
    <br>
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
// Functionality Components
import AppSpacer from '@/components/Utilities/AppSpacer'
import AboutTile from '@/components/Sections/About/AboutUsSlider/AboutTile'
import AboutModal from '@/components/Sections/About/AboutUsSlider/AboutModal'
import IconRack from '@/components/Sections/About/AboutIconRack/IconRack'
import ClientRack from '@/components/Sections/About/AboutIconRack/ClientRack'
import ImageBanner from '@/components/Sections/About/ImageBanner/ImageBanner'
import AppSlider from '@/components/Sliders/AppSlider'
import TheBanner from '@/components/Utilities/TheBanner'
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'
import AboutBanner from '@/components/Banners/AboutBanner'

export default {
    name: "About",
    components: {
      // Essential Components
      AppSection,
      AppScrollTo,
      // Functionality Components
      AppSpacer,
      AboutTile,
      AboutModal,
      IconRack,
      ImageBanner,
      ClientRack,
      AppSlider,
      TheBanner,
      AppFullWidthSection,
      AppColumns,
      AppColumn,
      AboutBanner
    },
    data() {
      return {
        active: false,
        selected: {
          id: '', fullname: '', jobtitle: '', imagelink:'', telephone: '', email: ''
        },
        items: [
          {id: "0", fullname: 'Jason Veljanoski', jobtitle: "Executive Vice President, He of Account Management", imagelink: "profile.01_01.webp", telephone: "+61 481 351 365", email: "name@email.com"},
          {id: "1", fullname: 'Jarad Barkley', jobtitle: "Executive Vice President, Head of count Management", imagelink: "profile.02_02.webp", telephone: "+61 481 351 364", email: "name1@email.com"},
          {id: "2", fullname: 'Bobba Fett', jobtitle: "Executive ice President, Head of Account Management", imagelink: "profile.03_03.webp", telephone: "+61 481 351 363", email: "name2@email.com"},
          //{id: "3", fullname: 'Shannon Noll', jobtitle: "Executie Vice President, Head of Account Management", imagelink: "https://d16w1lcoeot4ot.cloudfront.net/leadership/b08e2de6a4d6b2009fccaf60e987ad63.jpg", telephone: "+61 481 351 362", email: "name3@email.com"},
          //{id: "4", fullname: 'Jaz Pumpkin', jobtitle: "Exeutive Vice President, Head of Account Management", imagelink: "https://d16w1lcoeot4ot.cloudfront.net/leadership/a5905908e980709bd3d52b7e242e5ae4.jpg", telephone: "+61 481 351 361", email: "name4@email.com"},
          //{id: "5", fullname: 'Shark Amy', jobtitle: "Eecutive Vice President, Head of Account Management", imagelink: "https://d16w1lcoeot4ot.cloudfront.net/leadership/1af3fa9b78f84d270246afe7e704c9d2.jpg", telephone: "+61 481 351 360", email: "name5@email.com"},
          //{id: "6", fullname: 'Buzz LightYear', jobtitle: "xecutive Vice President, Head of Accoun Management", imagelink: "https://d16w1lcoeot4ot.cloudfront.net/leadership/914b80085b38956f482a648ad23fa7b0.jpg", telephone: "+61 481 351 355", email: "name6@email.com"},
          //{id: "7", fullname: 'Rick and Morty', jobtitle: "Executive Vice President, Head of count Management", imagelink: "https://d16w1lcoeot4ot.cloudfront.net/leadership/8624f812b0d41526c018efc93c9c43e8.jpg", telephone: "+61 481 351 345", email: "name7@email.com"}
        ],
        counter: 0
    }
  },
  methods: {
    changeTab(item) {
      this.selected.id = item.id
      this.selected.fullname = item.fullname
      this.selected.jobtitle = item.jobtitle
      this.selected.imagelink = item.imagelink
      this.selected.telephone = item.telephone
      this.selected.email = item.email

      this.active = true
      //console.log("selected: " + this.selected.fullname + "\ntag: " + this.selected.jobtitle + "\nactive: " + this.active) // for debug
    },
    // increment counter with wrap around.
    increment() {
      this.counter = ( this.counter + 1 ) % 4;
    },
    decrement() {
      this.counter = ( this.counter - 1 + 4 ) % 4;
    }
  }
}
</script>

<style scoped>

/* this is for scroll to work on IOS devices */

.wrapper {
  background-color: white;
  overflow: hidden;
}
.cover {
  background-color: white;
}

/* Three image containers (use 25% for four, and 50% for two, etc) */
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

.tile-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4px;
    padding: 0;
    Width: 90%;
}

.container {
  display: flex;
  justify-content: center;
}

.bar {
  width: 75%;
  height: 1px;
  border-bottom: 2px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.slot {
  text-align: center;
}

.parent {
    display: flex;
    justify-content: center;
    align-items: center;
}

.child {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    width: 100%;
    max-width: 88vw;
}

.col1 {
  padding: 20px;
  overflow-y: scroll;
   -webkit-overflow-scrolling: touch; /* touch scroll on IOS devices (e.g. iphone) */
  max-height:400px;
}

p .col1 {
  justify-content: center;
}

a:link {
  text-decoration: none;
}

a {
  color: rgb(130, 130, 130);
}

a:hover {
  color: #6699cc;
}

.flexbox {
  display: flex;
  flex-flow: row wrap;
}

.flex {
  flex: 1 1 300px;
}

.item {
  max-width: 900px;
}

.title {
  display: flex;
  flex-wrap: wrap;
}

.child-title {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 33%;
  text-align: center;
}

.fa-angle-left:hover, .fa-angle-right:hover {
  color: #1171ba;
}

.title-container {
  max-width: 100px;
  width: 100%;
}
  
</style>


