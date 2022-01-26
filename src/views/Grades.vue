<template>
  <div class="home">
    <nav-bar />
    <v-main>
      <loader v-if="loading" />
      <div v-else>
        <br /><br />
        <div class="mx-16 my-16">
          <v-data-table
            :headers="tHeaders"
            :items="grades"
            :items-per-page="5"
            class="elevation-2"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>
                  {{ item.nbQs }}
                </td>
                <td>{{ item.score }}%</td>
                <td>{{ item.time }}</td>
                <td>{{ item.date | formatDate }}</td>
              </tr>
            </template>
          </v-data-table>
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "@/components/navbar.vue";
import loader from "@/components/loader.vue";

import Axios from "axios";
import { API_URL } from "@/store/consts";

export default {
  name: "StudentGrades",
  data() {
    return {
      loading: true,
      loggedin: false,
      student: JSON.parse(window.localStorage.getItem("student")),
      tHeaders: [
        {
          text: "N° of Questions",
          align: "start",
          value: "nbQs",
        },
        { text: "Score", value: "score" },
        { text: "Finished in", value: "time" },
        { text: "Date", value: "date" },
      ],
      grades: [],
    };
  },
  components: {
    navBar,
    loader,
  },
  methods: {},
  mounted() {
    this.$nextTick(function () {
      Axios.get(API_URL + "/grades/byStudent/" + this.student._id, {
        headers: { authorization: window.localStorage.getItem("studentToken") },
      })
        .then((res) => {
          console.log(res.data);
          this.loading = false;
          this.grades = res.data.grades;
          console.log(gradess);
        })
        .catch(() => {
          this.loading = false;
        });
    });
  },
  filters: {
    formatDate(d) {
      if (!d) return "";
      d = new Date(d);
      console.log(d);
      return (
        d.toLocaleDateString() +
        " - " +
        d.toLocaleTimeString().substr(0, 4) +
        d.toLocaleTimeString().substr(7)
      );
    },
  },
};
</script>
