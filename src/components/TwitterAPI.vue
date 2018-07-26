<template>
  <a-entity position="0 1 -5">
    <a-box  v-for="twitterAccount in twitterAccounts"
            :key="twitterAccount.id"
            material="color: #FF2F9A"
            class="clickable"
            v-on:click="getTwits"
            width="1.5"
            event-set__enter="_event: mouseenter; color: #551a8b; metalness: 0.5"
            event-set__leave="_event: mouseleave; color: #FF2F9A">
        <a-text v-bind:value="twitterAccount.name" 
            position="-.6 0 .5" 
            width="1"
            wrap-count="10"></a-text>
        <a-entity geometry="primitive:box;" 
            material="shader:gif;src:url(https://i.gifer.com/3eRt.gif);opacity:1.0"
            position="0 1.25 0"
        >
        </a-entity>
        <a-entity light="color: purple; intensity: 1.5" position="1 1 -2"></a-entity>
        <a-entity light="color: purple; intensity: 1.5" position="-1 1 -2"></a-entity>
    </a-box>
  </a-entity>
</template>

<script>
import { voiceBus } from '.././main'

export default {
  name: "TwitterAPI",
  created() {
    let vm = this;
      voiceBus.$on('twitterVoice', function(){
          console.log('this is twitterapi logging voice received')
          // console.log(vm)
          vm.getTwits();
      })
  },
  data() {
    return {
      twitterAccounts: []
    };
  },
  methods: {
    getTwits() {
      this.twitterAccounts = [
        {
          "id": "1",
          "name": "under construction"
        }
      ]
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
