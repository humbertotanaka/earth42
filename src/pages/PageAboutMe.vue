<template>
  <q-page>
    <nav class="content-summary full-width toolbar">
      <q-toolbar class="content q-mx-auto text-deep-purple q-py-xl q-col-gutter-x-md">
        <q-btn
          :label="Defs.MY_NAME"
          class="text-weight-bolder"
          flat
          to="/"
        />
        <q-space />
        <q-btn
          :label="$t('About me')"
          flat
          to="#me"
        />
        <q-btn
          :label="$t('Experience')"
          flat
          to="#experience"
        />
        <q-btn
          :label="$t('Contacts')"
          flat
          to="#contact"
        />
      </q-toolbar>
    </nav>
    <section class="content-summary">
      <div class="content q-mx-auto">
        <q-card
          class="summary bg-transparent items-center row"
          flat
        >
          <q-card-section
            class="row fit justify-evenly items-center q-py-xl"
            horizontal
          >
            <q-card-section class="row fit items-center">
              <q-card-section class="content-title text-h2 text-weight-bold">
                <p>{{ $t('Hey, I\'m {0}, a ', [ Defs.MY_NAME ]) }}<span>{{ $t(Defs.MY_ROLE) }}</span></p>
                <ComponentButton
                  :flat="false"
                  :href="`mailto:${Defs.MY_EMAIL}`"
                  :label="$t('Email me')"
                  color="deep-purple"
                  no-caps
                />
              </q-card-section>
              <q-card-section class="absolute-bottom q-mb-xl">
                <ComponentButtonIcon
                  color="deep-orange"
                  icon="fa-brands fa-html5"
                  label="HTML5"
                />
                <ComponentButtonIcon
                  color="blue"
                  label="CSS3"
                  icon="fa-brands fa-css3-alt"
                />
                <ComponentButtonIcon
                  color="teal"
                  icon="fa-brands fa-vuejs"
                  label="VueJS"
                />
                <ComponentButtonIcon
                  color="amber"
                  icon="fa-brands fa-node-js"
                  label="NodeJS"
                />
                <ComponentButtonIcon
                  color="deep-orange"
                  icon="fa-brands fa-git"
                  label="Git"
                />
                <ComponentButtonIcon
                  color="blue"
                  icon="fa-brands fa-docker"
                  label="Docker"
                />
                <ComponentButtonIcon
                  color="orange"
                  icon="fa-brands fa-aws"
                  label="AWS"
                />
              </q-card-section>
            </q-card-section>

            <q-card-section class="col-5 q-pa-xl">
              <q-img
                alt="Avatar"
                class="summary-image"
                fit="contain"
                src="@/assets/me.png"
              />
          </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </section>
    <section
      class="content font-nunito q-mx-auto q-mt-xl q-pt-xl"
      id="me"
    >
      <q-card
        class="bg-transparent q-pt-xl"
        flat
      >
        <q-card-section
          class="row q-pt-xl"
          horizontal
        >
          <q-card-section class="col-9">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('My Background') }}
            </q-card-section>
            <q-card-section class="content-text text-body1 text-weight-medium">
              {{ $t(Defs.MY_BACKGROUND) }}
            </q-card-section>
          </q-card-section>
          <q-card-section class="col-3">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('Location') }}
            </q-card-section>
            <q-card-section
              class="text-body1 text-weight-medium"
              horizontal
            >
              <q-icon
                name="fa-solid fa-location-dot"
                size="sm"
              />
              {{ $t(Defs.MY_LOCATION) }}
            </q-card-section>
          </q-card-section>
        </q-card-section>
      </q-card>
    </section>
    <section
      class="content font-nunito q-mx-auto q-mt-xl q-pt-xl"
      id="experience"
    >
      <q-card
        class="bg-transparent q-pt-xl"
        flat
      >
        <q-card-section
          class="row q-pt-xl"
          horizontal
        >
          <q-card-section class="col-3">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('Work Experience') }}
            </q-card-section>
          </q-card-section>
          <q-card-section>
            <q-timeline color="secondary">
              <q-timeline-entry
                :subtitle="`2019 - ${$t('current')}`"
                color="indigo"
                icon="fa-solid fa-ellipsis"
              >
                <template #title>
                  <h6 class="q-timeline__title">
                    <ComponentButtonImage
                      :href="Links.SUMUS"
                      :label="Defs.SUMUS"
                      class="bg-dark q-mr-md"
                      image="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png"
                      no-caps
                      size="lg"
                    />
                    {{ $t('Senior Full-Stack Dev') }}
                  </h6>
                </template>
                <div class="content-text">
                  {{ $t(Defs.MY_EXPERIENCE_1) }}
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                icon="fa-solid fa-check"
                subtitle="2017-2019"
              >
                <template #title>
                  <h6 class="q-timeline__title">
                    <ComponentButtonImage
                      :href="Links.SUMUS"
                      :label="Defs.SUMUS"
                      class="bg-dark q-mr-md"
                      image="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png"
                      no-caps
                      size="lg"
                    />
                    {{ $t('Full-Stack Dev') }}
                  </h6>
                </template>
                <div class="content-text">
                  {{ $t(Defs.MY_EXPERIENCE_2) }}
                </div>
              </q-timeline-entry>

              <q-timeline-entry
                icon="fa-solid fa-check"
                subtitle="2016-2017"
              >
                <template #title>
                  <h6 class="q-timeline__title">
                    <ComponentButtonImage
                      :href="Links.SUMUS"
                      :label="Defs.SUMUS"
                      class="bg-dark q-mr-md"
                      image="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png"
                      no-caps
                      size="lg"
                    />
                    {{ $t('Trainee') }}
                  </h6>
                </template>
              </q-timeline-entry>

              <q-timeline-entry
                icon="fa-solid fa-check"
                subtitle="2015"
              >
                <template #title>
                  <h6 class="q-timeline__title">
                    <ComponentButtonImage
                      :href="Links.SUMUS"
                      :label="Defs.SUMUS"
                      class="bg-dark q-mr-md"
                      image="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png"
                      no-caps
                      size="lg"
                    />
                    {{ $t('Internship') }}
                  </h6>
                </template>
              </q-timeline-entry>
            </q-timeline>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card
        class="bg-transparent"
        flat
      >
        <q-card-section
          class="row"
          horizontal
        >
          <q-card-section class="col-3">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('Education') }}
            </q-card-section>
          </q-card-section>
          <q-card-section>
            <q-timeline color="secondary">
              <q-timeline-entry
                icon="fa-solid fa-graduation-cap"
                subtitle="2011 - 2015"
              >
                <template #title>
                  <h6 class="q-timeline__title">
                    <ComponentButton
                      :href="Links.MAUA"
                      :label="Defs.MAUA"
                      no-caps
                      size="lg"
                    />
                  </h6>
                </template>
                <div>
                  {{ $t('Bachelor\'s degree, Control and Automation Engineering') }}
                </div>
              </q-timeline-entry>
            </q-timeline>
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card
        class="bg-transparent"
        flat
      >
        <q-card-section
          class="row"
          horizontal
        >
          <q-card-section class="col-9">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('Language & Tools') }}
            </q-card-section>
            <q-card-section>
              <ComponentChip label="HTML5 / CSS3 / SCSS" />
              <ComponentChip label="JavaScript / ES6" />
              <ComponentChip label="VueJS / Quasar" />
              <ComponentChip label="NodeJS / ExpressJS" />
              <ComponentChip label="Git / AWS CodeCommit" />
              <ComponentChip label="Docker / AWS ECR / AWS ECS" />
              <ComponentChip label="Webpack / Vite" />
              <ComponentChip label="NPM / Yarn / PNPM" />
              <ComponentChip label="Agile / Jira" />
              <ComponentChip label="AWS S3" />
              <ComponentChip label="AWS CloudWatch / AWS Eventbridge" />
              <ComponentChip label="AWS SAM / AWS Cloudformation / AWS Lambda / AWS Batch / AWS SFN / AWS API Gateway" />
              <ComponentChip label="AWS RDS / AWS DynamoDB / AWS ElastiCache / PostgreSQL / SQL Server / AWS DMS" />
              <ComponentChip label="AWS SQS" />
              <ComponentChip label="OAuth / JWT" />
              <ComponentChip label="AWS SSM / AWS Secrets Manager" />
            </q-card-section>
          </q-card-section>
          <q-card-section class="col-3">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('Key Strengths') }}
            </q-card-section>
            <q-card-section>
              <ComponentChip label="Communication" />
              <ComponentChip label="Critical Thinking" />
              <ComponentChip label="Organization" />
              <ComponentChip label="Adaptability" />
              <ComponentChip label="Problem Solving" />
              <ComponentChip label="Teamwork" />
              <ComponentChip label="Focus" />
              <ComponentChip label="Self-taught" />
            </q-card-section>
          </q-card-section>
        </q-card-section>
      </q-card>
    </section>
    <section class="content-footer bg-deep-purple-6">
      <div
        class="content font-nunito q-mx-auto q-mt-xl"
        id="contact"
      >
        <q-card
          class="bg-transparent q-pb-xl"
          flat
        >
          <q-card-section
            class="row"
            horizontal
          >
            <q-card-section class="col-6">
              <q-card-section class="text-h5 text-white text-weight-bold">{{ Defs.FULLNAME }}</q-card-section>
            </q-card-section>
            <q-card-section class="column col-3 items-center">
              <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
                ― {{ $t('Socials') }}
              </q-card-section>
              <div>
                <TheButtonGithub
                  color="white"
                />
                <TheButtonLinkedIn
                  color="white"
                />
              </div>
            </q-card-section>
            <q-card-section class="column col-3 items-center">
              <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
                ― {{ $t('Contacts') }}
              </q-card-section>
              <div>
                <ComponentButtonIcon
                  :href="`mailto:${Defs.MY_EMAIL}`"
                  color="white"
                  icon="fa-regular fa-envelope"
                  label="Email"
                />
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

import ComponentButton from '@/components/base/ComponentButton.vue'
import ComponentButtonIcon from '@/components/base/ComponentButtonIcon.vue'
import ComponentButtonImage from '@/components/base/ComponentButtonImage.vue'
import ComponentChip from '@/components/base/ComponentChip.vue'
import TheButtonGithub from '@/components/base/TheButtonGithub.vue'
import TheButtonLinkedIn from '@/components/base/TheButtonLinkedIn.vue'

import { Defs, Links } from '@/util/definitions'

export default defineComponent({
  name: 'PageAboutMe',
  components: {
    ComponentButton,
    ComponentButtonIcon,
    ComponentButtonImage,
    ComponentChip,
    TheButtonGithub,
    TheButtonLinkedIn
  },
  setup () {
    return {
      Defs,
      Links
    }
  }
})
</script>

<style scoped>
.content {
  width: 60%;
}

.content-text {
  line-height: 2em;
  white-space: pre-wrap;
}

.content-title {
  line-height: 1.5em;
}

.content-summary {
  background-color: #f2f5f7cc;
}
.body--dark .content-summary {
  background-color: #1d1f20cc;
}

.summary {
  height: 60vh;
}

.summary-image {
  border-radius: 12% !important;
}

.toolbar {
  position: sticky;
  top: 3em;
  z-index: 1;
}
</style>
