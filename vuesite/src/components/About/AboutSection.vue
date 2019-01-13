<template>
    <div>
        <h2> ABOUT </h2>
        <section>
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
.skillBar {
  background-color: rgba(0, 0, 0, 0.4);
  height: 10px;
  max-width: 50%;
  margin: 0 auto;
  border-radius: 35px;
  transition: 1s;
}
.skillBar > .skill {
  z-index: 1000;
  background-color: white;
  height: 10px;
  border-radius: 35px;
  -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.5);
transition: 1s;
}
section {
  -webkit-clip-path: polygon(100% 10%, 0 0, 0 90%, 100% 100%);
  clip-path: polygon(0 10%, 100% 0%, 100% 75%, 0 100%);
  background-image: url("https://images.alphacoders.com/964/thumb-1920-964422.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #009fff;
  background: -webkit-linear-gradient(to bottom, #009fff, #6dff77);
  background: linear-gradient(to bottom, #009fff, #6dff77);
}
.innerDiv {
  background: -webkit-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-clip-path: polygon(100% 0, 0 8%, 0 100%, 100% 75%);
  clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 85%);
  min-height: 200px;
  padding-top: 200px;
  padding-bottom: 50px;
  height: 600px;
  width: 100%;
}
h2 {
    margin: 0;
}

</style>
