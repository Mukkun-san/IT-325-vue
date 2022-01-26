<template>
  <div class="mx-16 my-16">
    <nav-bar></nav-bar>
    <loader v-if="loading" />
    <v-main v-else>
      <v-row>
        <v-col>
          <a
            :href="activeSheetUrl"
            target="_blank"
            style="color: white; text-decoration: none"
          >
            <v-alert dense type="info">
              Open Currently Active Speadsheet.
            </v-alert>
          </a>
        </v-col>
      </v-row>

      <br />
      <v-row justify="space-around">
        <v-card class="mx-auto" max-width="300" outlined elevation="5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4 text-center">
                <h2>
                  Pending <br />
                  Requests
                </h2>
              </div>
              <v-list-item-title class="headline mb-1">
                <h1 class="text-center green--text">{{ requests }}</h1>
              </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="300" outlined elevation="5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4 text-center">
                <h2>
                  Total <br />
                  Students
                </h2>
              </div>
              <v-list-item-title class="headline mb-1">
                <h1 class="text-center green--text">{{ students }}</h1>
              </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="300" outlined elevation="5">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4 text-center">
                <h2>
                  Total <br />
                  Quizzes
                </h2>
              </div>
              <v-list-item-title class="headline mb-1">
                <h1 class="text-center green--text">{{ quizzes }}</h1>
              </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import navBar from "@/components/admin/navBar.vue";
import loader from "@/components/loader.vue";
import Axios from "axios";
import { API_URL } from "@/store/consts";

export default {
  components: {
    navBar,
    loader,
  },
  data() {
    return {
      loading: true,
      requests: 0,
      students: 0,
      quizzes: 0,
      activeSheetUrl: "https://docs.google.com/spreadsheets/d/",
    };
  },
  mounted() {
    this.$nextTick(async function () {
      let res = await Axios.get(API_URL + "/admin/dashboard/stats", {
        headers: { authorization: window.localStorage.getItem("adminToken") },
      });
      this.requests = res.data.requests;
      this.students = res.data.students;
      this.quizzes = res.data.grades;

      console.log(res);

      res = await Axios.get(API_URL + "/sheet/currently-active", {
        headers: { authorization: window.localStorage.getItem("adminToken") },
      });
      this.activeSheetUrl += res.data.id;
      this.loading = false;
    });
  },
};
</script>

<style></style>
