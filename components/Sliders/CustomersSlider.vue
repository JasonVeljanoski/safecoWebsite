
<template>
  <div class="tab-container">
    <h1>Customers.</h1>
    <p>Our products have benefited many buisnesses.</p>
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
        <h2>{{ selected.title }}</h2>
        <div class="description">

          <section v-show="selected.id == 1">
            this is content for id 1
          </section>
          <section v-show="selected.id == 2">
            this is content for id 2
          </section>
          <section v-show="selected.id == 3">
            this is content for id 3
          </section>
          <section v-show="selected.id == 4">
            this is content for id 4
          </section>
          <section v-show="selected.id == 5">
            this is content for id 5
          </section>
          <section v-show="selected.id == 6">
            this is content for id 6
          </section>
          <section v-show="selected.id == 7">
            this is content for id 7
          </section>
          <section v-show="selected.id == 8">
            this is content for id 8
          </section>
          <section v-show="selected.id == 9">
            this is content for id 9
          </section>
          <section v-show="selected.id == 10">
            this is content for id 10
          </section>
          <section v-show="selected.id == 11">
            this is content for id 11
          </section>
          <section v-show="selected.id == 12">
            this is content for id 12
          </section>
          <section v-show="selected.id == 13">
            this is content for id 13
          </section>
          <section v-show="selected.id == 14">
            this is content for id 14
          </section>
          <section v-show="selected.id == 15">
            this is content for id 15
          </section>
          <section v-show="selected.id == 16">
            this is content for id 16
          </section>
          <section v-show="selected.id == 17">
            this is content for id 17
          </section>
        </div>
      </AppColumn>
      <AppColumn
        class="col1"
        align="start"
      >
        <!-- COLUMN 1 GOES HERE -->
        <div class="tab-carousel-container">
          <carousel
            :navigation-enabled="true"
            :pagination-enabled="false"
            :loop="true"
            :per-page="1">
            <slide
              v-for="images in selected.images"
              :key="images"
              class="tab-image"
            >
              <img 
                :src=" require('@/assets/img/' + images) "
                alt="Selected Image" >
            </slide>
          </carousel>
        </div>
      </AppColumn>
    </AppColumns>  

  </div>
</template>

<script>
import AppShowMoreBox from '@/components/Utilities/AppShowMoreBox'
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'
import AppSpacer from '@/components/Utilities/AppSpacer'

export default {
  name: "AppTabs",
  components: {
    AppShowMoreBox,
    AppColumns,
    AppColumn,
    AppSpacer
  },
  data() {
    return {
      selected: {
        title: 'Royal Perth Hospital',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg'
        ],
        id: '1'
      },
      tabItems: [ 
      {
        title: 'Royal Perth Hospital',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg'
        ],
        id: '1',
      },
      {
        title:'Fremantle Hospital',
        images: [
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '2'
      },
      {
        title:'St. John of God',
        images: [
          'sample.02.jpeg',
          'sample.03.jpeg',
        ],
        id: '3' 
        },
      {
        title:'Healthscope',
        images: [
          'sample.01.jpeg',
          'sample.03.jpeg',
        ],
        id: '4'
      },
      {
        title:'Geraldtion Regional Hospital',
        images: [
          'sample.02.jpeg',
          'sample.04.jpeg'
        ],
        id: '5'
      },
      {
        title:'Sisters of Nazareth',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '6'
      },
      {
        title:'Southern Cross Care',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '7'
      },
      {
        title:'The Richardson',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '8'
      },
      {
        title:'Estia Health',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '9'
      },
      {
        title:'Tasmanian Health',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '10',
      },
      {
        title:'Italian Aged Care',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '11'
      },
      {
        title:'Marie Stopes International',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '12'
      },
      {
        title:'Ramsay Health Care',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '13'
      },
      {
        title:'Perth Childrens Hospital',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '14'
      },
      {
        title:'Kalgoorlie Hospital',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '15'
      },
      {
        title:'Perth Eye Hospital',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '16'
      },
      {
        title:'SKG',
        images: [
          'sample.01.jpeg',
          'sample.02.jpeg',
          'sample.03.jpeg',
          'sample.04.jpeg'
        ],
        id: '17'
      }
    ]
  }
},
  methods: {
    changeTab(tabItem) {
      this.selected.title = tabItem.title
      this.selected.images = tabItem.images
      this.selected.id = tabItem.id
    },
  }
}
</script>


<style scoped>

  .col1 {
      width: 300px;
  }
  .col2 {
      width: 500px;
  }
  .tab-container {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: visible;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px 20px 10px 20px;
  }
  .tab-container h1,
  .tab-container p {
  text-align: center;
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
  height: 400px;
  width: 100%;
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
  }

  .description {
    padding: 20px;
    border-top: solid 1px #e4e4e4;
    overflow: scroll;
    max-height: calc(100vh - 380px);
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