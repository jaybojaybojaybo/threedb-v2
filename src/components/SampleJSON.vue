<template>
    <a-entity id="sampleJSON" layout="type: box; columns: 3; marginRow: -5; marginColumn: -2; plane: xz" position="-5 1 -5">
        <a-box  v-for="sampleAccount in sampleAccounts"
                :key="sampleAccount.id"
                material="color: #000000"
                class="clickable"
                v-on:click="getSamples"
                width="1.5"
                event-set__enter="_event: mouseenter; color: #551a8b; metalness: 0.5"
                event-set__leave="_event: mouseleave; color: #000000">
            <a-text v-bind:value="sampleAccount.name" 
                position="-.6 0 .5"
                width="1"
                wrap-count="10">
            </a-text>
            <a-entity geometry="primitive:box;" 
                material="shader:gif;src:url(https://media.giphy.com/media/8smCT3vezUH9S/giphy.gif);opacity:1.0"
                position="0 1.25 0">
            </a-entity>
            <a-entity light="color: purple; intensity: 1.5" position="1 1 -2"></a-entity>
            <a-entity light="color: purple; intensity: 1.5" position="-1 1 -2"></a-entity>
        </a-box>
    </a-entity>
</template>

<script>
import Example from '../services/exampleAPI.service'
import { voiceBus } from '.././main'

export default {
  name: "SampleJSON",
  created() {
      let vm = this;
      voiceBus.$on('sampleVoice', function(){
          console.log('this is sampleJSON logging voice received')
          console.log(vm)
          vm.getSamples();
      })
  },
  mounted() {
      console.log("sampleJSON api mounted")
  },
  data() {
    return {
        sampleAccounts: [
            {
                "id": "1",
                "name": "marge"
            }
        ]
    };
  },
  methods: {
    alert() {
        console.log("sample");
    },
    getSamples() {
        console.log('getSamples was triggered in SampleJSON')
        let s = new Example();
        s.getExamples().then(response => {
            console.log(response);
            this.sampleAccounts = response
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
