<template>
  <a-entity position="0 1 -5">
    <a-box  v-for="twitterAccount in twitterAccounts"
            :key="twitterAccount.id"
            material="color: #000000"
            class="clickable"
            v-on:click="getTwits"
            width="1.5"
            event-set__enter="_event: mouseenter; color: #551a8b; metalness: 0.5"
            event-set__leave="_event: mouseleave; color: #000000">
        <a-text v-bind:value="twitterAccount.name" position="-.35 0 .5"></a-text>
        <a-entity geometry="primitive:box;" 
            material="shader:gif;src:url(http://78.media.tumblr.com/tumblr_mcn0heb5bA1qdlh1io1_400.gif);opacity:1.0"
            position="0 1.25 0"
        >
        </a-entity>
        <a-entity light="color: purple; intensity: 1.5" position="1 1 -2"></a-entity>
        <a-entity light="color: purple; intensity: 1.5" position="-1 1 -2"></a-entity>
    </a-box>
  </a-entity>
</template>

<script>
export default {
  name: "TwitterAPI",
  data() {
    return {
      twitterAccounts: [
            {
                "id": "1",
                "name": "twitter",
                "img_url": ''
            }
        ]
    };
  },
  methods: {
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
