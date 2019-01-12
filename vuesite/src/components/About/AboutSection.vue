<template>
    <div id="about">
        <section>
            <h2>About</h2>
            <div class="innerDiv">
                <p>
                    Hello!
                    My name is Felix Morau and I'm a second year Information Architecture student at Malmö University.
                    <br>
                    I built this website to function as a showcase of my projects, both school projects and individual projects can be found by clicking the Projects tab.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  /*background: #009FFF;
        background: -webkit-linear-gradient(to bottom, #ec2F4B, #009FFF);
        background: linear-gradient(to right, #ec2F4B, #009FFF);*/
        width: 100%;
  -webkit-clip-path: polygon(100% 25%, 0 0, 0 75%, 100% 100%);
  clip-path: polygon(100% 25%, 0 0, 0 75%, 100% 100%);
  background-image: url("https://images.alphacoders.com/964/thumb-1920-964422.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
div {
    background: #009FFF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #ec2F4B, #009FFF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #ec2F4B, #009FFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
p {
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
    font-size: 30px;
  color: white;
  text-align: center;
}
.innerDiv {
    background: -webkit-linear-gradient(to bottom, rgba(0,0,0, 1), rgba(0,0,0, 0.6));  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, rgba(0,0,0, 1), rgba(0,0,0, 0.6)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
-webkit-clip-path: polygon(100% 0, 0 25%, 0 100%, 100% 75%);
clip-path: polygon(100% 0, 0 25%, 0 100%, 100% 75%);
min-height: 200px;
height: 600px;
width: 100%;
padding-top: 150px;

}
h2 {
    margin: 0;
}

</style>
