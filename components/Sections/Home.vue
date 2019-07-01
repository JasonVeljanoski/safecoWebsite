<template>
  <div class="cover">
    <TheBanner />
    <AppScrollTo id="start"/>
    <!-- 
        About
    -->
    <br><br>
    <AppSection 
      title="We Are SAFECo."
      text="Below are some details on what we are all about." />

    <!-- 
      icon rack here  
    -->
    <IconRack />

    <!-- Full width banner -->
    <ImageBanner />
    <!--  
        Our Products here
    -->
    <AppScrollTo id="products"/>
    <br>
    <br>
    <AppSection 
      title="Our Products."
      text="Our products are all manufactured here in Australia." />
    
    <div class="buffer"><AppProductsSlider /></div>

    <!-- 
        Meet the team
    -->
    <AppScrollTo id="team"/>
    <br>
    <br>
    <AppSection 
      title="Our Team."
      text="We are led by a team motivated by problem solving, technology and innovation." />

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
      <section v-if="selected.id==='3'">
        this is the conent for id three
      </section>
      <!--<section v-if="selected.id==='4'">
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

    <!-- 
      Our Clients
    --> 
    <AppScrollTo id="clients"/>
    <br><br>
    <AppSection 
      title="Our Clients."
      text="We provide our services to many big names. See for yourself." />
    <ClientRack />
    <br><br>    
    <p style="font-weight:bold;text-align:center;">And to name a few more...</p>
    <div class="list">
      <ul>
        <li>Fremantle Hospital</li>
        <li>Sisters of Nazareth</li>
        <li>Southern Cross Care</li>
        <li>The Richardson</li>
        <li>Estia Health</li>
        <li>Tasmanian Health</li>
        <li>Italian Aged Care</li>
        <li>Healthscope</li>
        <li>Ramsay Health Care</li>
        <li>Kalgoorlie Hospital</li>
        <li>Perth Eye Hospital</li>
        <li>Marie Stopes International</li>
        <li>Geraldton Regional Hospital</li>
      </ul>
    </div>
    <br><br>
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
import AppProductsSlider from '@/components/Sliders/AppProductsSlider'
import TheBanner from '@/components/Utilities/TheBanner'

export default {
    name: "About",
    components: {
      // Essential Components
      AppSection,
      AppFullWidthSection,
      AppScrollTo,
      // Functionality Components
      AppSpacer,
      AboutTile,
      AboutModal,
      IconRack,
      ImageBanner,
      ClientRack,
      AppProductsSlider,
      TheBanner
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
        ]
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
    }
  }
}
</script>


<style scoped>
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

.list {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

li {
  list-style: none;
}

li:hover {
  color: #6699cc;
  list-style: circle;
  font-size: 120%
}

.buffer {
  margin: 10px 20px 10px 20px;
}
</style>
