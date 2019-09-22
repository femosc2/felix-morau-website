<template>
    <div>
        <section id="imgSection">
            <img src="./femocutout.png" class="profilePicture" alt=""> 
        </section>
    </div>
    
</template>

<script>
export default {
    data: function() {
        return {

        }
    },

};
</script>

<style>
.profilePicture {
  position: absolute;
  /* transform: translate(-170%, 2.5%); */
  left: -15%;
  height: 70%;
  overflow: hidden;
  background-image: url("https://i.imgur.com/ZlJAr2k.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  transition: 1s;
}

@media only screen and (max-width: 1000px) {
    .profilePicture {
        width: 150px;
        height: 150px;
        transform: translate(0%, 0%);
        left: 50%;
        margin-left: -75px;
        margin-top: 1%;
    }
}

@media only screen and (min-width: 1200px) {
    .profilePicture {
        height: 50%;
        left: -10%;
        margin-top: 1%;
    }
}
</style>
