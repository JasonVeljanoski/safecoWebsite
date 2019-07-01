<template>
  <div class="background">
    <!-- Full width banner -->
    <ContactBanner 
      title="Contact Us." 
      description="SAFECo is here to provide you with more information and answer any further questions that you may have. Let's create a dialogue."/>
    <AppScrollTo id="bottom"/>
    <br><br>
    <!-- 
      
      Contact rack here 
        
    -->
    <AppSection 
      title="Reason for Inquiry"
      text="Please select the purpose for your inquiry.">
      <ContactRack />
    </AppSection>

    <br><br><br>
    <SAFEBanner />
    <br><br><br>

    <div class="parent">
      <div class="child1 parent">
        <div class="block">
          <h4><strong>Company Location</strong></h4> 
          <a 
            target="_blank" 
            href = "https://www.google.com/maps/place/3%2F20+Prindiville+Dr,+Wangara+WA+6065/@-31.7916451,115.8155121,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32ad088e2061bf:0x5bcfc826984ed60e!8m2!3d-31.7916451!4d115.8177008"><p class="email"><i class="fa fa-map-marker" /> 3/20 Prindiville Dr<br>
              Wangara WA 6065</p> <br><br></a>
        </div>
        <div class="block">
          <h4><strong>General Contact</strong></h4> 
          Phone: 0412 345 678 <br>
          email: 
          <a
            class="email" 
            href = "mailto:office@email.com">offic@email.com</a> <br>
          Fax: 123-456-6789
        </div>
        <div class="block">
          <h4><strong>International Contact</strong></h4> 
          Phone: 0412 345 678 <br>
          email: 
          <a 
            class="email" 
            href = "mailto:office@email.com">offic@email.com</a> <br>
          Fax: 123-456-6789
        </div>
        <div class="block">
          <h4><strong>Sales Info Contact</strong></h4> 
          Phone: 0412 345 678 <br>
          email: 
          <a
            class="email"  
            href = "mailto:office@email.com">offic@email.com</a> <br>
          <br>
        </div>
      </div>
      <div class="child2">
        <div class="abs">
          <div class="center">
            <i class="fa fa-map-marker" /><strong>  SAFECo Location</strong><br><br>
            3/20 Prindiville Dr<br>
            Wangara WA 6065
            <AppSpacer offset="10px"/>
            <div class="button"><a 
              target="_blank" 
              rel="noreferrer"
              href = "https://www.google.com/maps/place/3%2F20+Prindiville+Dr,+Wangara+WA+6065/@-31.7916451,115.8155121,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32ad088e2061bf:0x5bcfc826984ed60e!8m2!3d-31.7916451!4d115.8177008">Get Directions</a></div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
// Essential Components
import AppSection from '@/components/Utilities/AppSection'
import AppScrollTo from '@/components/Utilities/AppScrollTo'
// Functionality Components
import AppFullWidthSection from '@/components/Utilities/AppFullWidthSection'
import ContactBanner from '@/components/Banners/ContactBanner'
import ContactRack from '@/components/Sections/Contact/ContactRack'
import AppSpacer from '@/components/Utilities/AppSpacer'
import ContactBlock from '@/components/Sections/Contact/ContactBlocks'
import SAFEBanner from '@/components/Sections/Contact/SAFEBanner'

export default {
    name: "ProductsSection",
    components: {
      // Essential Components
      AppSection,
      AppScrollTo,
      // Functionality Components
      AppFullWidthSection,
      ContactBanner,
      ContactRack,
      AppSpacer,
      ContactBlock,
      SAFEBanner
    }
}
</script>

<style scoped>

  .parent {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  .child1 {
    flex: 1 1 400px;
    background-color: #f1f1f1;
  border-top: solid 1px #efefef;
  border-bottom: solid 1px #efefef;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;

  justify-content: center;
  }

  .block {
    flex: 1 1 auto;
    padding: 15px;
    width: 230px;
    height: 150px;
}

  .child2 {
    flex: 1 1 400px;
    background-image: url("https://www.google.com/maps/vt/data=5gDPcsOjVZR4TSBDz6OG1scv1_t_FgQrouZDoyEDnlXFOY806Ksi0fcrIO5xOciAWxrWvNtlORz5BhR8Uk0idmFx-XwJxhf7le1OpF2_AX5crzARh4AwJUW0pCYNx5PJC44HoY7uq4U");
  /* Image is centered vertically and horizontally at all times */
  background-position: center center;
  
  /* Image doesn't repeat */
  background-repeat: no-repeat;
  background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
  }






 .container {
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.eqi-container {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
}

.text {
  margin-top: -5px;
}

.background {
  background-color: white;
}


/* On the flex container */
.flexcontainer {
   display: flex;
   align-items: center;
   justify-content: center;
   /* You can set flex-wrap and
      flex-direction individually */
   flex-direction: row;
   flex-wrap: wrap;
   /* Or do it all in one line
     with flex flow */
   flex-flow: row wrap;
   /* tweak where items line
      up on the row
      valid values are: flex-start,
      flex-end, space-between,
      space-around, stretch */
   align-content: flex-end;
}

.abs {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	background: white;
	height: 200px;
	width: 200px;
}

.center > div {
	color: white;
  padding-left: 10px;
  padding-right: 10px;
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

.fa {
  font-size: 25px;
}

.contactblock {
  flex: 1 1 auto;
}

.email{
  font-weight: normal;
  color: rgb(37, 37, 37);
}

a:hover p, a:hover {
  color: #6699cc;
}

</style>
