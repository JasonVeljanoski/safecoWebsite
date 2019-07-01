<template>
  <div class="icon">
    <slot />
    <div class="title"><h3>{{ title }}</h3></div>
    <div class="message">{{ message }}</div>
    <AppSpacer offset="20px" />
    <div class="button"><a :href = " 'mailto:company@email.com?subject=' + subject ">{{ title }}</a></div>
  </div>
</template>

<script>
import AppSpacer from '@/components/Utilities/AppSpacer'

export default {
    name: "Icon",
    components: {
      AppSpacer
    },
    props: {
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      subject: {
          type: String,
          required: true
      }
    }
}
</script>

<style scoped>
  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 60px 20px 60px;
  }

  .title {
    font-weight: bolder;
    text-align: center;
  }

  .message {
    max-width: 200px;
    text-align: center;
    color: #4F4F4F;
  }

  img {
    margin: 10px;
    width: 150px;
    height: auto;
  }





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
</style>


