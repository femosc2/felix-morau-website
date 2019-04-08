<template>
    <div>
        <section id="imgSection">
            <img src="./femocutout.png" @click="togglePicture" class="profilePicture" alt=""> 
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
  transform: translate(-170%, 2.5%);
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
</style>
