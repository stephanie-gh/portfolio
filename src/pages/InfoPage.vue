<template>
  <q-page>
    <div class="flex justify-center" style="height: 85vh; overflow-y: auto;">
      <div class="q-pa-md flex justify-center row items-center q-gutter-md">
        <q-card class="my-card">
          <q-card-section class="image">
            <q-img class="rounded-borders" src="~/assets/LinkedIn_Profile.png" />
          </q-card-section>

          <q-card-section class="q-pt-md q-gutter-sm col">
            <div class="text-h6 q-mt-sm q-mb-xs text-black">About Me</div>
            <q-separator color="grey" />
            <div class="text-caption text-justify text-black">
              As a front-end developer with 2 years of experience, I have
              demonstrated a strong passion for crafting captivating user
              interfaces and seamless user experiences. I have successfully
              translated design concepts into responsive, interactive websites and
              applications using HTML, CSS, and JavaScript.<br /><br />
              I am adept at collaborating with cross-functional teams, ensuring efficient project
              delivery, and achieving client expectations. With paying attention to
              detail and commitment to delivering clean and efficient code, I strive
              to create user-friendly digital experiences through my skills of
              designing website and application.
            </div>
          </q-card-section>
        </q-card>

        <q-card class="my-card">
          <q-card-section class="q-pt-md q-gutter-sm col">
            <div class="text-h6 q-mt-sm q-mb-xs text-black">Education</div>
            <q-separator color="grey" />
            <div class="row no-wrap items-center">
              <div class="text-black">Bachelor of Informatics</div>
              <span class="text-caption text-grey q-ml-sm">GPA 3.64</span>
            </div>
            <div class="text-caption text-black">Univesitas Multimedia Nusantara (2018 - 2022)</div>
          </q-card-section>

          <q-card-section class="q-pt-md q-gutter-sm col">
            <div class="text-h6 q-mt-sm q-mb-xs text-black">Get to know me more</div>
            <q-separator color="grey" />
            <div class="row no-wrap q-gutter-md items-center q-pa-md text-black">
              <div class="cursor-pointer" @click="openLinkedIn()">
                LinkedIn
                <q-icon name="open_in_new" />
              </div>
              <div class="cursor-pointer" @click="openWhatsapp()">
                WhatsApp
                <q-icon name="open_in_new" />
              </div>
            </div>
          </q-card-section></q-card>

      </div>
    </div>
  </q-page>
</template>

<script setup>
// import Global from 'src/methods/global'

// const { ref } = Global()
// const lorem = ref('sekolah-ananda')

function openLinkedIn () {
  window.open('https://linkedin.com/in/stephanie-b439a6204')
}
function openWhatsapp () {
  window.open('https://wa.me/+6289698590220')
}
</script>

<style lang="scss" scoped>
.image {
  display: flex;
  margin: auto;
  width: 300px;
}

.my-card {
  width: 100%;
  max-width: 500px;
  overflow-y: auto;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 3px 3px 0px rgba(147, 145, 145, 0.4);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 6px 0px rgba(147, 145, 145, 0.4);
  }
}

.item {
  padding: 5px 0;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;

  &:hover {
    font-weight: bold;
  }

  &::before {
    content: "•";
    margin: 0 10px;
  }
}
</style>
