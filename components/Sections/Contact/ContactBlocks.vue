<template>
  <div class="contact-block flexcontainer">
    <div class="block">
      <h4><strong>Company Location</strong></h4> 
      SAFECo Location <br>
      3/20 Prindiville Dr<br>
      Wangara WA 6065
    </div>
    <div class="block">
      <h4><strong>General Contact</strong></h4> 
      Phone: 0412 345 678 <br>
      email: offic@email.com <br>
      Fax: 123-456-6789
    </div>
    <div class="block">
      <h4><strong>International Contact</strong></h4> 
      Phone: 0412 345 678 <br>
      email: offic@email.com <br>
      Fax: 123-456-6789
    </div>
    <div class="block">
      <h4><strong>Sales Info Contact</strong></h4> 
      Phone: 0412 345 678 <br>
      email: offic@email.com <br>
      <br>
    </div>
  </div>
</template>

<script>

export default {
    name: "ContactBlock"
}
</script>



<style scoped>
  /* contact section */
.contact-block {
  background-color: #f1f1f1;
  border-top: solid 1px #e9e9e9;
  border-bottom: solid 1px #e9e9e9;
  padding-bottom: 20px;
  padding-left: 50px;
  padding-right: 50px;
  width: 0.5vw;
}

/* On the flex container */
.flexcontainer {
   display: flex;
   align-items: center;
   justify-content: center;
   /* You can set flex-wrap and
      flex-direction individually */
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

.block {
  max-width: 250px;
  width: 100%;
}
</style>

