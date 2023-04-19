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
                <p>{{ $t('Hey, I\'m {0}, a full-stack dev', [ Defs.MY_NAME ]) }}</p>
                <q-btn
                  :aria-label="$t('Email me')"
                  :label="$t('Email me')"
                  :href="`mailto:${Defs.MY_EMAIL}`"
                  color="deep-purple"
                  no-caps
                />
              </q-card-section>
              <q-card-section class="absolute-bottom q-mb-xl">
                <q-btn
                  aria-label="HTML5"
                  color="deep-orange"
                  flat
                  icon="fa-brands fa-html5"
                  round
                >
                  <q-tooltip>{{ $t('HTML5') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="CSS3"
                  color="blue"
                  flat
                  icon="fa-brands fa-css3-alt"
                  round
                >
                  <q-tooltip>{{ $t('CSS3') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="VueJS"
                  color="teal"
                  flat
                  icon="fa-brands fa-vuejs"
                  round
                >
                  <q-tooltip>{{ $t('VueJS') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="NodeJS"
                  color="amber"
                  flat
                  icon="fa-brands fa-node-js"
                  round
                >
                  <q-tooltip>{{ $t('NodeJS') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="Git"
                  color="deep-orange"
                  flat
                  icon="fa-brands fa-git"
                  round
                >
                  <q-tooltip>{{ $t('Git') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="Docker"
                  color="blue"
                  flat
                  icon="fa-brands fa-docker"
                  round
                >
                  <q-tooltip>{{ $t('Docker') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="AWS"
                  color="orange"
                  flat
                  icon="fa-brands fa-aws"
                  round
                >
                  <q-tooltip>{{ $t('AWS') }}</q-tooltip>
                </q-btn>
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
                    <q-btn
                      :aria-label="Defs.SUMUS"
                      :href="Links.SUMUS"
                      class="bg-dark q-mr-md"
                      flat
                      target="_blank"
                    >
                      <q-avatar size="lg">
                        <q-tooltip>{{ Defs.SUMUS }}</q-tooltip>
                        <img src="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png">
                      </q-avatar>
                    </q-btn>
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
                    <q-btn
                      :aria-label="Defs.SUMUS"
                      :href="Links.SUMUS"
                      class="bg-dark q-mr-md"
                      flat
                      target="_blank"
                    >
                      <q-avatar size="lg">
                        <q-tooltip>{{ Defs.SUMUS }}</q-tooltip>
                        <img src="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png">
                      </q-avatar>
                    </q-btn>
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
                    <q-btn
                      :aria-label="Defs.SUMUS"
                      :href="Links.SUMUS"
                      class="bg-dark q-mr-md"
                      flat
                      target="_blank"
                    >
                      <q-avatar size="lg">
                        <q-tooltip>{{ Defs.SUMUS }}</q-tooltip>
                        <img src="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png">
                      </q-avatar>
                    </q-btn>
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
                    <q-btn
                      :aria-label="Defs.SUMUS"
                      :href="Links.SUMUS"
                      class="bg-dark q-mr-md"
                      flat
                      target="_blank"
                    >
                      <q-avatar size="lg">
                        <q-tooltip>{{ Defs.SUMUS }}</q-tooltip>
                        <img src="https://sumus.com.br/wp-content/uploads/2020/05/logo-sumus-150px-2.png">
                      </q-avatar>
                    </q-btn>
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
                    <q-btn
                      :aria-label="Defs.MAUA"
                      :href="Links.MAUA"
                      flat
                      no-caps
                      size="lg"
                      target="_blank"
                    >
                      {{ Defs.MAUA }}
                    </q-btn>
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
              <q-chip outline color="deep-purple">{{ $t('HTML5 / CSS3 / SCSS') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('JavaScript / ES6') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('VueJS / Quasar') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('NodeJS / ExpressJS') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Git / AWS CodeCommit') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Docker / AWS ECR / AWS ECS') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Webpack / Vite') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('NPM / Yarn / PNPM') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Agile / Jira') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('AWS S3') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('AWS CloudWatch') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('AWS SAM / AWS Lambda / AWS Batch') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('AWS RDS / AWS DynamoDB / AWS ElastiCache / PostgreSQL / SQL Server') }}</q-chip>
            </q-card-section>
          </q-card-section>
          <q-card-section class="col-3">
            <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
              ― {{ $t('Key Strengths') }}
            </q-card-section>
            <q-card-section>
              <q-chip outline color="deep-purple">{{ $t('Communication') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Critical Thinking') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Organization') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Adaptability') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Problem Solving') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Teamwork') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Focus') }}</q-chip>
              <q-chip outline color="deep-purple">{{ $t('Self-taught') }}</q-chip>
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
                <q-btn
                  :href="Links.GITHUB"
                  aria-label="Github"
                  color="white"
                  flat
                  icon="fa-brands fa-github"
                  round
                  size="md"
                  target="_blank"
                >
                  <q-tooltip>{{ $t('Github') }}</q-tooltip>
                </q-btn>
                <q-btn
                  aria-label="LinkedIn"
                  color="white"
                  flat
                  icon="fa-brands fa-linkedin"
                  round
                  size="md"
                  target="_blank"
                >
                  <q-tooltip>{{ $t('LinkedIn') }}</q-tooltip>
                </q-btn>
              </div>
            </q-card-section>
            <q-card-section class="column col-3 items-center">
              <q-card-section class="text-subtitle1 text-weight-bold text-deep-purple-4 text-uppercase">
                ― {{ $t('Contacts') }}
              </q-card-section>
              <div>
                <q-btn
                  :href="`mailto:${Defs.MY_EMAIL}`"
                  aria-label="Email"
                  color="white"
                  flat
                  icon="fa-regular fa-envelope"
                  round
                  size="md"
                >
                  <q-tooltip>{{ $t('Email') }}</q-tooltip>
                </q-btn>
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

import { Defs, Links } from '@/util/definitions'

export default defineComponent({
  name: 'PageAboutMe',
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
  background-color: #f2f5f768;
}
.body--dark .content-summary {
  background-color: #1d1f2068;
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
