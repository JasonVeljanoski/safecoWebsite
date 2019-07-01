<template>
  <div>
    <div class="media-strip">
      <div class="social">

        <ul>
          <li><b><span class="fa fa-phone" /></b><a><i>{{ telephone }}</i></a></li>
          <li><b><span class="fa fa-envelope" /></b><a :href="'mailto:' + email"><i>{{ email }}</i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SocialMedia",
    props: {
      telephone: {
        type: String,
        required: true     
      },
      email: {
        type: String,
        required: true     
      }
    }
}
</script>


<style scoped>

  .text {
    font-family: 'Nunito', 'SansSerif';
    font-size: 1.3em;
  }
  .media-strip {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(54, 54, 54);
  }

  /* Style all font awesome icons */
.fa {
  padding: 20px;
  font-size: 30px;
  width: 100%;
  text-align: center;
  text-decoration: none;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
}

/* Set a specific color for each brand */


/* Facebook */
.fa-facebook {
  color: white;
}

/* Twitter */
.fa-twitter {
  color: white;
}

.fa-phone {
  color: #7e7e7e;
  cursor: pointer;
  width: 100%;
}

.fa-envelope {
  color: #7e7e7e;
  cursor: pointer;
  width: 100%;
}




ul {
   display: flex;
   flex-direction: column;
   align-items: center;
}

li {
    overflow: hidden;
    list-style: none;
    white-space: nowrap;
    margin-right: 30px;
    display: inline-block;
}
    li a {
        opacity: 0;
        color: #666;
        max-width: 0;
        display: inline-block;
        text-decoration: none;
        transition: max-width 0.5s ease-out .05s, opacity 0.5s ease-out .05s, color;
    }
        li a:hover {
            color: #1171ba;
        }
        li a i {
            float:right;
            display: block;
            padding-right: 1em;
            font:1em/1 'rokkitt', sans-serif;
             color: #1171ba;
        }
    li b {
        color: #5E5E5E;
        line-height:1;
        font-size: 25px;
        display: inline-block;
        padding:.125em .375em;
    }
        li:hover a {
            opacity: 1;
            max-width: 150px;
            transition: max-width 0.5s ease-out .05s, opacity 0.5s ease-out .05s, color .2s;
        }
</style>

