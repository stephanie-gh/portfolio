<template>
  <q-page>
    <div class="q-pa-md">
      <div class="q-gutter-md">
        <q-carousel v-model="slide" transition-prev="jump-right" transition-next="jump-left" swipeable infinite animated
          control-color="grey" prev-icon="arrow_left" next-icon="arrow_right" arrows>
          <q-carousel-slide name="sekolah-ananda" class="column no-wrap flex-center">
            <!-- Sekolah Ananda -->
            <q-card class="my-card">
              <q-card-section horizontal>
                <q-card-section>
                  <div name="sekolah-ananda" class="content">
                    <div class="content-title">Sekolah Ananda</div>
                    <div class="content-description">
                      Developing a website for administrators and teachers started to be easier for me. But, again I
                      faced<br />
                      new challenges in my front-end developer career as I have to developing mobile apps for both<br />
                      parent and Student in 1 app. First time building a .aab file format for iOS and figuring out the
                      <br />
                      javascript router and validation is a great experience for my future project. I did a little<br />
                      research about Selenium for automated testing and gain a basic knowledge of it.
                      <br /><br />

                      <div class="flex">
                        <div class="content-list">
                          <div class="content-list-title">What I did:</div>
                          <div class="content-list-item">Implemented Figma design to code</div>
                          <div class="content-list-item">Created functions</div>
                          <div class="content-list-item">Implemented APIs</div>
                          <div class="content-list-item">Testing & bug fixing</div>
                          <div class="content-list-item">Build app for development & production</div>
                        </div>

                        <div class="content-list">
                          <div class="content-list-title">Key features:</div>
                          <div class="content-list-item">View Student Grades</div>
                          <div class="content-list-item">Download Student Report Cards</div>
                          <div class="content-list-item">View Tuition Fee Bills</div>
                          <div class="content-list-item">Upload Tuition Fee Payment</div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="col-md-2" style="margin-right: 25px;">
                        <img src="~/assets/google-play-badge.png" alt="Google Play" class="download-google"
                          onclick="window.open('https://play.google.com/store/apps/details?id=com.sekolahananda.app')">
                      </div>
                      <div class="col-md-2">
                        <img src="~/assets/apple-store-badge.png" alt="Apple Store" class="download-apple"
                          onclick="window.open('https://apps.apple.com/id/app/sekolah-ananda-bagan-batu/id6444584583')">
                      </div>
                    </div>
                  </div>
                </q-card-section>

                <q-img class="my-card-img" src="~/assets/sekolah-ananda.png" />
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="dgm-wallet" class="column no-wrap flex-center">
            <!-- DGM Wallet -->
            <q-card class="my-card">
              <q-card-section horizontal>
                <q-card-section>
                  <div name="sekolah-ananda" class="content">
                    <div class="content-title">DGM Wallet</div>
                    <div class="content-description">
                      We all know how to use the e-wallet app (e.g. OVO, Gopay), right? But, have you ever
                      imagined<br />
                      how it works behind the beautiful UI? Yep, developing an e-wallet web app for the
                      administrators<br />
                      and users is a new experience for me. I learned about the flow of payment, how to use a device
                      camera<br />
                      to take a payment receipt
                      photo and how to
                      access the gallery, and implementing the digital e-wallet<br />
                      design is fun for me as well.
                      <br /><br />

                      <div class="flex">
                        <div class="content-list">
                          <div class="content-list-title">What I did:</div>
                          <div class="content-list-item">Design (admin only)</div>
                          <div class="content-list-item">Implemented Figma design to code</div>
                          <div class="content-list-item">Created functions & implemented APIs</div>
                          <div class="content-list-item">Implemented Payment Gateway & camera Access</div>
                          <div class="content-list-item">Testing & bug fixing</div>
                          <div class="content-list-item">Build app for development & production</div>
                        </div>

                        <div class="content-list">
                          <div class="content-list-title">Key features:</div>
                          <div class="content-list-item">Top Up Wallet with ATM Transfer & payment Gateway</div>
                          <div class="content-list-item">View Top Up History</div>
                          <div class="content-list-item">View Transaction History</div>
                          <div class="content-list-item">Upload Top Up Payment</div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      Comming soon on
                      <div class="col-md-2" style="margin-right: 25px;">
                        <img src="~/assets/google-play-badge.png" alt="Google Play" class="download-google">
                      </div>
                      <div class="col-md-2">
                        <img src="~/assets/apple-store-badge.png" alt="Apple Store" class="download-apple">
                      </div>
                    </div>
                  </div>
                </q-card-section>

                <q-img class="my-card-img" src="~/assets/dgm-wallet.png" />
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="daikin-contact-message" class="column no-wrap flex-center">
            <!-- Daikin Contact -->
            <q-card class="my-card">
              <q-card-section horizontal>
                <q-card-section>
                  <div name="daikin-contact" class="content">
                    <div class="content-title">Daikin Contact Message</div>
                    <div class="content-description">
                      A mini project to develop a contact message website for the administrators.
                      FYI, to make this kind of website only<br />
                      took approximately 2-3 hours. So, if you urgently need this kind of website feel free to hit me up!
                      xoxo.
                      <br /><br />

                      <div class="content-list">
                        <div class="content-list-title">What I did:</div>
                        <div class="content-list-item">Design & Implemented to code</div>
                        <div class="content-list-item">Created functions & Implemented APIs</div>
                        <div class="content-list-item">Testing & bug fixing</div>
                        <div class="content-list-item">Build app for development & production</div>
                      </div>

                      <div class="content-list">
                        <div class="content-list-title">Key features:</div>
                        <div class="content-list-item">Receiving message from users</div>
                        <div class="content-list-item">View message details</div>
                        <div class="content-list-item">Export to csv</div>
                      </div>
                    </div>
                  </div>
                </q-card-section>

                <q-img class="my-card-img-horizontal" src="~/assets/daikin.png" />
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="axl-parfume" class="column no-wrap flex-center">
            <!-- AXL Parfume -->
            <q-card class="my-card">
              <q-card-section horizontal>
                <q-card-section>
                  <div name="axl-parfume" class="content">
                    <div class="content-title">AXL Parfume</div>
                    <div class="content-description">
                      This is my very first project and I worked on this since my internship period. I build it with<br />
                      Quasar Framework for all super admin, administrators, and users. I learned so many things from
                      this<br />
                      project from building reusable functions and components, javascript functionality, to designing
                      responsive<br />
                      UI using scss. Due to some reason, I did a remake for the users website using NuxtJs and implement
                      new features<br />
                      such asSSR and SEO implementation. This is my most time-consuming project I've done & the
                      proudest<br />
                      achivement so far.
                      <br /><br />

                      <div class="content-list">
                        <div class="content-list-title">What I did:</div>
                        <div class="content-list-item">Implemented Figma design to code</div>
                        <div class="content-list-item">Created functions & implemented APIs</div>
                        <div class="content-list-item">Implemented Payment Gateway & affiliate system</div>
                        <div class="content-list-item">Implemented SSR for better SEO</div>
                        <div class="content-list-item">Testing & bug fixing</div>
                        <div class="content-list-item">Build app for development & production</div>
                      </div>

                      <div class="content-list">
                        <div class="content-list-title">Key features:</div>
                        <div class="content-list-item">View & checkout products</div>
                        <div class="content-list-item">View affiliate & withdraw commission</div>
                        <div class="content-list-item">View order histoy & deposit</div>
                        <div class="content-list-item">Upload order payment using bank transfer</div>
                        <div class="content-list-item">Pay with Payment Gateway</div>
                      </div>
                    </div>
                  </div>
                </q-card-section>

                <q-img class="my-card-img-horizontal" src="~/assets/axl-parfume.png" />
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide name="kio-property" class="column no-wrap flex-center">
            <!-- KIO Property -->
            <q-card class="my-card">
              <q-card-section horizontal>
                <q-card-section>
                  <div name="kio-property" class="content">
                    <div class="content-title">KIO Homes</div>
                    <div class="content-description">
                      Developed a responsive website for administrators and users using Quasar Framework,<br />
                      I faced challenging things, especially in implementing the design and flow to the code.<br />
                      Because it's a new design style for me at that moment so I have to do some research and<br />
                      try out about the design flow and transfer it into code.<br />
                      I successfully created the expected website from the client.
                      <br /><br />

                      <div class="flex">
                        <div class="content-list">
                          <div class="content-list-title">What I did:</div>
                          <div class="content-list-item">Implemented Figma design to code</div>
                          <div class="content-list-item">Created functions & implemented APIs</div>
                          <div class="content-list-item">Testing & bug fixing</div>
                          <div class="content-list-item">Build app for development & production</div>
                        </div>

                        <div class="content-list">
                          <div class="content-list-title">Key features:</div>
                          <div class="content-list-item">Submit application</div>
                          <div class="content-list-item">Submit prequestion</div>
                          <div class="content-list-item">View & submit documents</div>
                          <div class="content-list-item">View & calculate illustration</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>

                <q-img class="my-card-img-horizontal" src="~/assets/kio-property.png" />
              </q-card-section>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Global from 'src/methods/global'

const { ref } = Global()
const slide = ref('sekolah-ananda')
</script>

<style lang="scss" scoped>
.q-carousel {
  height: 80vh;
}

.my-card {
  width: 100%;
  max-height: 600px;
  max-width: fit-content;
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
    // transform: translateY(-5px);
    box-shadow: 0px 6px 6px 0px rgba(147, 145, 145, 0.4);
  }

  &-img {
    width: 35vh;
    margin: 15px;

    &-horizontal {
      width: 400px;
      height: 300px;
      margin: auto 15px;
    }
  }
}

.image {
  height: 640px;
}

.content {
  padding: 15px;
  color: black;

  &-title {
    font-family: 'Poppins Medium';
    font-size: 30px;
  }

  &-list {
    // display: flex;
    // gap: 8px;
    margin: 15px;

    &-title {
      font-weight: bold;
    }

    &-item {
      padding: 10px 0;
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
  }
}

.download-google {
  width: 160px;
  height: 65px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
}

.download-apple {
  width: 140px;
  height: 46px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
