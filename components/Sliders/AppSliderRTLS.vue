
<template>
  <div class="">

    <AppColumns>
      <AppColumn 
        class=""
        align="start"
      >

        <div class="description">
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </AppColumn>
      <AppColumn
        class="col1"
        align="start"
      >
        <!-- COLUMN 1 GOES HERE -->
        <div class="tab-carousel-container">
          <section>
            <carousel
              :navigation-enabled="true"
              :pagination-enabled="false"
              :loop="true"
              :per-page="1">
              <slide
                v-for="i in images"
                :key="i"
                class="tab-image"
              >
                <img 
                  :src=" require('@/assets/images/RTLS/' + i) "
                  alt="Real Time Locating System" >
              </slide>
            </carousel>
          </section>
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
      images: [
        'rtls.01.png',
        'rtls.02.png'
      ],
    }
  }
}
</script>


<style scoped>

  .titles {
      text-align: center;
  }

  .col1 {
      width: 300px;
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
    height: 400px;
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
    overflow: scroll;
  }

  .description-button {
    height: 250px;
  }

  .description-other {
    max-height: 350px;
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