<template>
  <div class="container">
    <div class="parent">
      <div class="child1 parent">
        <div class="block">
          <br><h5><strong>Navigation</strong></h5> <br>
          <nuxt-link to="/">SAFE Systems Website</nuxt-link> <br>
          <nuxt-link to="/SAFECo">SAFECo Website</nuxt-link><br>
        </div>
        <div class="block">
          <br><h5><strong>Contact</strong></h5> <br>
          <a 
            target="_blank" 
            rel="noreferrer"
            href = "https://www.google.com/maps/place/3%2F20+Prindiville+Dr,+Wangara+WA+6065/@-31.7916451,115.8155121,17z/data=!3m1!4b1!4m5!3m4!1s0x2a32ad088e2061bf:0x5bcfc826984ed60e!8m2!3d-31.7916451!4d115.8177008"><i class="fa fa-map-marker" /> 3/20 Prindiville Dr<br>
            Wangara WA 6065 <br><br></a>
          phone: 0412 345 678 <br>
          email: <a href = "mailto:office@email.com">offic@email.com</a><br>
          fax: 123-456-6789
        </div>
        <div class="block" />
        <div class="block" />
      </div>
    </div>


    <div class="banner"> 
      <div class="spacer" />
      <div class="copywrite"><span class="large">&#169;2019 - ELV and Electronics Specialists</span><span class="small">&#169;2019 - ELV</span></div>
      <div class="spacer" />
      <div 
        v-scroll-to="'#header'" 
        class="scroll"
      >Back to top &#8679;</div>
    </div>
  </div>
</template>

<style scoped>

.small {
  display: none;
}

@media only screen and (max-width: 350px) {
  .small {
    display: block;
  }
  .large {
    display: none;
  }
}

  .container {
      width: 100%;
      max-width: 100vw;
  }

  .copywrite {
    margin-left: 100px;
  }

  .scroll {
    padding-right: 20px;
  }

  .scroll:hover {
    color: #6699cc;
    cursor: pointer;
  }

  .banner {
      height: 50px;
      background-color: rgb(37, 37, 37);
      color: #B0B0B0;

      display: flex;
      align-items: center;
      justify-content: center;
  }

  .spacer {
    flex: 1;
  }



    .parent {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
  }

  .child1 {
    flex: 1 1 400px;
    background-color: rgb(37, 37, 37);
  color: #B0B0B0;
  border-bottom: solid 1px #393939;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;

  justify-content: center;
  color: #B0B0B0;
  }

  .block {
    flex: 1 1 auto;
    padding: 15px;
    width: 230px;
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


  a:link {
  text-decoration: none;
}

a {
  color: #B0B0B0;
}

a:hover {
  color: #6699cc;
}
</style>

