<template>
  <a-entity layout="type: box; columns: 3; marginRow: -5; marginColumn: -2; plane: xz" position="2.25 1 -5">
    <a-box  v-for="twitterAccount in twitterAccounts"
            :key="twitterAccount.id"
            material="color: #0084FF"
            metalness=".5"
            class="clickable"
            v-on:click="getTwits"
            width="1.5"
            event-set__enter="_event: mouseenter; color: #551a8b; metalness: 0.5"
            event-set__leave="_event: mouseleave; color: #0084FF">
        <a-text v-bind:value="twitterAccount.name" 
            color="#333333"
            position="-.6 0 .5" 
            width="1"
            wrap-count="10"></a-text>
        <a-image v-bind:src="twitterAccount.profile_image_url" position="0 1.25 0"></a-image>
    </a-box>
  </a-entity>
</template>

<script>
// This Twitter API uses the Twitter API Service to get tweets from a server and bring it into the Vue app.

import { voiceBus } from ".././main";
import TwitterAPI from "../services/node-twitter-api.service";
const openSocket = require("socket.io-client");
const twitSocket = openSocket("http://localhost:3000");

export default {
  name: "TwitterAPI",
  created() {
    let vm = this;
    voiceBus.$on("twitterVoice", function() {
      console.log("this is twitterapi logging voice received");
      // console.log(vm)
      twitSocket.emit("getTwits", () => {
        console.log("getTwits message emitted to server");
      });
      vm.getTwits();
    });
    twitSocket.on("twitterResult", response => {
      console.log(response[0]);
      this.twitterAccounts = response[0];
      voiceBus.$emit('twitterOpen', 'Twitter opened');
    });
  },
  mounted() {
    console.log('twitter api mounted');
  },
  data() {
    return {
      twitterAccounts: []
    };
  },
  methods: {
    getTwits() {
      console.log("getTwits was triggered in Twitter API");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
