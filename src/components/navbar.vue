<template>
  <v-app-bar height="100%" app color="#62D969">
    <div>
      <v-row class="text-center">
        <v-col cols="3" sm="4" class="pt-5">
          <v-col>
            <v-img
              v-on:click.stop="goHome"
              class="logo"
              src="@/assets/logo.png"
              height="70"
              contain
            ></v-img>
          </v-col>
        </v-col>
        <v-col cols="9" sm="8">
          <v-spacer class="py-8">
            <h1
              id="welcome"
              class="display-1 font-weight-light white--text"
              color="white"
            >
              Welcome To Quiz App
            </h1>
          </v-spacer>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "navBar",
  methods: {
    goHome() {
      window.location.href = "/"
    },
  },
};
</script>

<style></style>
