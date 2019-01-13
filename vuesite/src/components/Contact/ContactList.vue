<template>
<div class="outerDiv">
        <h2>Contact</h2>
        <section>
            <div class="innerDiv">
              <a class="contact"></a>
                <ul class="contactList" v-for="(contact, index) in contacts" :key=index>
                        <a class="contactLink" v-bind:href="contact.link">
                            <p><i class="contactIcon" :class="contact.fa" style="font-size: 100px;"></i></p>
                            <p class="contactText">{{ contact.name }}</p>
                        </a>
                    </ul>
        </div>
        </section>
    </div>
</template>

<script>

export default {
  data: function() {
    return {
    };
  },
  methods: {},
  props: ["contacts"],
};
</script>

<style scoped>
section {
  /* -webkit-clip-path: polygon(100% 5%, 0 0, 0 95%, 100% 100%);
  clip-path: polygon(0 10%, 100% 0%, 100% 90%, 0 100%); */
  background-image: url("https://i.imgur.com/EsHtZdh.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.outerDiv {
  background: #FDC01A;
  background: -webkit-linear-gradient(to bottom, #FDC01A, #0A949F);
  background: linear-gradient(to bottom, #FDC01A, #0A949F);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.innerDiv {
  background: -webkit-linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.6)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* -webkit-clip-path: polygon(100% 0, 0 8%, 0 100%, 100% 85%);
  clip-path: polygon(100% 0, 0 10%, 0 100%, 100% 90%); */
  min-height: 300px;
  padding-top: 150px;
  padding-bottom: 150px;
  height: auto;
  width: 100%;
}
h2 {
  margin: 0;
  font-size: 100px;
}

.contactIcon {
    color: #FDC01A;
    transition: 1s;
}

.contactLink:visited, .contactLink {
    color: #FDC01A;
    width: 20%;
    transition: 1s;
    filter: hue-rotate(180deg);
}

.contactIcon:hover {
    transform: rotate(360deg);
    filter: hue-rotate(180deg);
    transition: 1s;
}

.contactLink:hover {
    filter: hue-rotate(180deg);
    transition: 1s;
}
ul {
    padding: 15px;
    display: inline-block;
}
p {
    font-size: 30px;
}

@media only screen and (max-width: 1000px) {
    ul {
        display: block;
        padding: 0;
    }
}
</style>
