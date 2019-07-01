<template>
  <div class="card-carousel-wrapper">
    <div 
      :disabled="atHeadOfList"
      class="card-carousel--nav__left" 
      @click="moveCarousel(-1)" 
    />
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div 
          :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}"
          class="card-carousel-cards" 
        >
          <div 
            v-for="item in items"
            :key="item.name"
            class="card-carousel--card" 
            @click="changeTab(item)"
          >
            <img 
              alt="Profile"
              src="https://placehold.it/200x200" >
            <div class="card-carousel--card--footer">
              <p>{{ item.name }}</p>
              <p>{{ item.tag }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div 
      :disabled="atEndOfList"
      class="card-carousel--nav__right" 
      @click="moveCarousel(1)" 
    />



    <AboutModal 
      v-if="active" 
      :fullname="selected.name"
      :title="selected.tag"
      class="overlay"
      @exitModal="active=false"
    >
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
    </AboutModal>
  
  </div>
</template>


<script>
import AboutModal from '@/components/Sections/About/AboutUsSlider/AboutModal'

export default {
    name: "Carousel",
    components: {
      AboutModal
    },
    data() {
      return {
        active: false,
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
        selected: {
          name: '', tag: ''
        },
        items: [
          {name: 'Jarad Barckley', tag: "Executive Vice President, Head of Account Management"},
          {name: 'Harry Pavlic', tag: "HP"},
          {name: 'Milano', tag: "Pizza"},
          {name: 'Tsing Tao', tag: "Chinese"},
          {name: 'Frances', tag: "French"},
          {name: 'Burma Superstar', tag: "Burmese"},
          {name: 'Salt and Straw', tag: "Ice cream"}
        ]
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    changeTab(item) {
      this.selected.name = item.name
      this.selected.tag = item.tag

      this.active = true
      console.log("selected: " + this.selected.name + "\ntag: " + this.selected.tag + "\nactive: " + this.active) // for debug
    }
  },
}
</script>

<style scoped>
/* slider styles */
  /*body {
  background: #f8f8f8;
  color: #2c3e50;
  font-family: 'Source Sans Pro', sans-serif;
  min-height: 1000px;
  }*/
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: #666a73;
}
.card-carousel {
  display: flex;
  justify-content: center;
  width: 640px;
}
.card-carousel--overflow-container {
  overflow: hidden;
}
.card-carousel--nav__left, .card-carousel--nav__right {
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 2px solid #1171ba;
  border-right: 2px solid #1171ba;
  cursor: pointer;
  margin: 0 10px;
  transition: transform 150ms linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
  opacity: 0.2;
  border-color: black;
}
.card-carousel--nav__left {
  transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
  transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
  transform: rotate(45deg);
}
.card-carousel--nav__right:active {
  transform: rotate(45deg) scale(0.9);
}
.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

.card-carousel-cards .card-carousel--card {
  margin: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(40, 44, 53, .06), 0 2px 2px 0 rgba(40, 44, 53, .08);
  background-color: #fff;
  border-radius: 4px;
  z-index: 3;
  margin-bottom: 2px;
}
.card-carousel-cards .card-carousel--card:first-child {
  margin-left: 0;
}
.card-carousel-cards .card-carousel--card:last-child {
  margin-right: 0;
}
.card-carousel-cards .card-carousel--card img {
  vertical-align: bottom;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: opacity 150ms linear;
  user-select: none;
}
.card-carousel-cards .card-carousel--card img:hover {
  opacity: 0.5;
}
.card-carousel-cards .card-carousel--card--footer {
  border-top: 0;
  padding: 7px 15px;
}
.card-carousel-cards .card-carousel--card--footer p {
  padding: 3px 0;
  margin: 0;
  margin-bottom: 2px;
  font-size: 19px;
  font-weight: 500;
  color: #2c3e50;
  user-select: none;
}
.card-carousel-cards .card-carousel--card--footer p:nth-of-type(2) {
  font-size: 12px;
  font-weight: 300;
  padding: 6px;
  background: rgba(40, 44, 53, .06);
  display: inline-block;
  text-align: left;
  position: relative;
  margin-left: 4px;
  color: #666a73;
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: #666a73;
}
/* --- slider styles --- */
/* modal styles */

.overlay {
  z-index: 2000;
}

 /* --- modal styles --- */
</style>
