<template>
  <div class="mx-16 my-16">
    <nav-bar></nav-bar>
    <loader v-if="loading" />
    <v-main v-else>
      <v-row>
        <v-text-field
          label="Url or Title"
          hide-details="auto"
          v-model="input"
        ></v-text-field>
        <v-col>
          <v-btn
            class="dark--text v-size--large d-block mx-auto"
            @click="generateQuiz"
            light
          >
            Generate Quiz
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="dark--text v-size--large d-block mx-auto"
            @click="scrape"
            light
          >
            Scrape Article
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="dark--text v-size--large d-block mx-auto"
            @click="exportCSV"
            light
          >
            Export CSV
          </v-btn>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import navBar from "@/components/admin/navBar.vue";
import loader from "@/components/loader.vue";
import Axios from "axios";
const PY_API_URL = "http://127.0.0.1:8000";

export default {
  components: {
    navBar,
    loader,
  },
  data() {
    return {
      loading: false,
      input: "",
    };
  },
  methods: {
    generateQuiz() {
      Axios.post(PY_API_URL + "/api/generate-mcqs/from-title", {
        title: this.input,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    scrape() {
      Axios.post(PY_API_URL + "/api/scrape/article", {
        url: this.input,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    exportCSV() {
      Axios.post(PY_API_URL + "/api/export-quiz/csv", {
        title: this.input,
      })
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
