<template>
<div class="outerDiv">
        <h2>Contact</h2>
        <section>
            <div class="innerDiv">
              <p>
                I'm always looking for work, projects, internships and jobs. Whether you want a small website for your band or a large webapplication for your company, I'm up for the task!
                You can contact me through the links below!
              </p>
              <a class="contact"></a>
                <ul class="contactList" v-for="(contact, index) in contacts" :key=index>
                        <a class="contactLink" v-bind:href="contact.link">
                            <p><i class="contactIcon" :class="contact.fa"></i></p>
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
    return {};
  },
  methods: {},
  props: ["contacts"]
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
  background: #fdc01a;
  background: -webkit-linear-gradient(to bottom, #fdc01a, #ED5181);
  background: linear-gradient(to bottom, #fdc01a, #ED5181);
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
  padding-top: 50px;
  padding-bottom: 150px;
  height: auto;
  width: 100%;
}
h2 {
  margin: 0;
  font-size: 7vw;
}

.contactIcon {
  color: #fdc01a;
  transition: 1s;
  font-size: 7vw;
}

.contactLink:visited,
.contactLink {
  color: #fdc01a;
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
}
p {
  font-size: 30px;
  color: #fdc01a;
  text-align: center;
  width: 50%;
  margin: 0 auto;
}

@media only screen and (max-width: 1000px) {
  ul {
    display: block;
    padding: 0;
  }
  .contactIcon {
      font-size: 15vw;
  }
  p {
    width: 100%;
  }
}
</style>
