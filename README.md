# SAFECO Web App

This web app is created using the `nuxt.js` framework.

Search <https://nuxtjs.org/guide/installation> for guidlines on what installations are required and how to run a development environment  (`npm run dev`)

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Project Structure

###Pages

This project has a `pages` directory. This contains the code for all the pages that exist in the web app. For example you will see `about`, `contact`,  `products` and more nested folders. These nested folders will have an `index.vue` file which contains the code for that particular page (written in `vue.js`).

Suppose you navigate to `pages/SAFECo/products/index.vue`. You will find the following code ($3^{rd}​$ May 2019):

```vue
<template>
  <div>
    <Products />
  </div>
</template>

<script>
// Scripts for each separate section
import Products from '@/components/Sections/Products'

export default {
  components: {
    Products
  }
}
</script>

<style scoped>
	/* no css used here */
</style>

```

You should see a **custom tag** `<Products />`. 

This is called a **component** and is imported via.

```js
import Products from '@/components/Sections/Products'
```

and made available via

```js
export default {
  components: {
    Products
  }
}
```

in the `script` part of the code.

### Components

**The entire project consists of nested components to abstract away from all implementation details.**

Let us look closer into how `<Products />` is implemented.

Lets navigate to the component directory via `components/Sections/Products.vue` as described in the `import` statement above.

You will find the following:

```vue
<template>
  <div class="background">
    <!-- Full width banner -->
    <ProductsBanner 
      title="Our Products." 
      description="Our commitment to the research and development of communications systems for healthcare providers creates industry first solutions unrivalled by any other manufacturer."/>

    <AppScrollTo id="bottom"/>
    <br><br>
    <AppSection 
      title="Technology."
      text="SAFECo's highly experienced team of engineers continues to provide healthcare organizations
        with the most innovative products on the market, whilst ensuring maximum reliability and flexibility." />
    
    <div class="buffer"><AppProductsSlider /></div>
    <br><br>
  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
import ProductsBanner from '@/components/Banners/ProductsBanner'
// Functionality Components
import AppProductsSlider from '@/components/Sliders/AppProductsSlider'
import AppSpacer from '@/components/Utilities/AppSpacer'
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import ProductBanner from '@/components/Sections/About/ImageBanner/ProductBanner'

export default {
    name: "ProductsSection",
    components: {
      // Essential Components
      AppSection,
      AppScrollTo,
      ProductsBanner,
      // Functionality Components
      AppProductsSlider,
      AppSpacer,
      AppFullWidthSection,
      ProductBanner
    }
}
</script>

<style scoped>

.content-des {
  padding: 20px;
}

.description {
  max-width: 700px;
}
.flexbox {
  display: flex;
  justify-content: center;
}
    
/* other css ommitted for space */
</style>

```

You can see here a couple more custom **components** like:

- `<AppProductsSlider />`
- `<ProductsBanner title="Our Products." description="Our commitment..."/>` (which takes in arguments)
- `<AppScrollTo id="bottom"/>`

We can dive deeper and deeper to view further implementation details as required.

**Remember: You must `import` a component and list it in the `components` object before using it.**

### Layouts

In order to get consistent styling and structure for every web page, we can wrap the `pages` within a `default layout`.

Let us navigate to `layouts/default.vue`. You will find the following:

```vue
<template>
  <div class="content">
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    

    <TheSidenav 
      :show="displaySidenav"
      @close="displaySidenav = false"
    />

    <nuxt/>

    <TheFooter />

  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheBanner from '@/components/Utilities/TheBanner'
import TheFooter from '@/components/Navigation/TheFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheBanner,
    TheFooter
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>


<style>

html
{
  font-family: 'Nunito', SansSerif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: white;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

body {
  font-weight: 400;
  line-height: 1.45;
  color: #333;
}

/* other css ommitted for space */

</style>
```

You can see a couble of components that implement the `TheHeader`, `TheSidenav` and `TheFooter`. The `<nuxt/>` tag is a reserved component that tells `nuxt` where to dynamically load the `pages` from the `pages` directory.

Ultimately, this `default` layout gives a generalised structure and style surrounding every `page`. Note: this is also where you would include all your global styling like as you would have a `main.css` file in a general website (notice that `<style>` is used instead of `<style scoped>`). 

### Assets

The assets directory contains all images that are referenced throughout the project.

## Backend and Hosting

The website has no backend functionality as it is not required. 

However it is hosted using `firebase`. 

Note: You may need to install firebase in order to use the following terminal commands.

### Login

To **Login**:

```bash
# login to firebase
firebase login
```

You will be forwarded to a website that will ask for login details:

**username:** veljanoskijason@gmail.com

**password:** ask upon request

**two-factor authentication:** disabled (I will be sent a text with a sequence of numbers)

###Deploying app

In order to **deploy**:

```bash
# deploy web app
npm run deploy
```

The app will be deployed and the `url` will be displayed. As of  ($3^{rd}$ May 2019):

https://safeco-9e324.firebaseapp.com

# Do you wish to change the images on the sliders?

There are two sliders that display the products at **safeco**. These are in the following directories:

- `components/Sliders/AppProductsSlider.vue`
- `components/Sliders/AppSlider.vue`

If you wish to change any of the images, follow as per the below:

- Go to the `data` object in the `script` section of the component
- You will see a number of image names in an array like structure
- Add your disired images in the `@/assets/images/Products/` directory
- Change the image names in the `data` object 

Note: you may need to clear your **cashe** or **re-run** your developement environment for the images to update.

