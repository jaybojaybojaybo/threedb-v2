<template>
    <a-entity position="0 1 5">
        <a-box class="clickable" 
            width="3"
            v-on:click="recognize" 
            event-set__enter="_event: mouseenter; color: #ff0000; metalness: 0.5"
            event-set__leave="_event: mouseleave; color: #ffeead;">
            <a-text 
              width="2.75"
              wrap-count="30"
              v-bind:value="transcript"
              position="-1.35 0.15 .5" 
              color="#88d8b0">
            </a-text>
        </a-box>
    </a-entity>
</template>


<script type = "text/javascript" >
import { voiceBus } from '.././main'

export default {
  name: "VoiceRecognition",
  props: [
    'gitVoice',
    'sampleVoice'
  ],
  created: function() {

  },
  mounted: function() {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    let p = document.createElement("p");
    // const words = document.querySelector(".words");
    // words.appendChild(p);

    this.recognition.addEventListener("result", e => {
       const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
       if(e.results[0].isFinal){
           this.transcript = transcript
       }
    //   p.textContent = transcript;
    //   if (e.results[0].isFinal) {
    //     // p = document.createElement("p");
    //     // words.appendChild(p);
    //     // console.log("final: " + e.results)
    //   }

      if (transcript.includes("search")) {
        if (e.results[0].isFinal) {
          console.log("SEARCH SEARCH SEARCH");
        }
      }

      if (transcript.includes("Twitter")) {
        if (e.results[0].isFinal) {
          console.log("TWEEEEEEEEEEEEEEET");
        }
      }

      if (transcript.includes("GitHub")) {
        if (e.results[0].isFinal) {
            console.log("github recognized")
            var vm = this;
            // console.log(vm)
            vm.getGits();
        }
      }

      if (transcript.includes("sample")) {
        if (e.results[0].isFinal) {
            console.log("json recognized")
            var vm = this;
            // console.log(vm)
            vm.getSamples();
        }
      }

      console.log(transcript);
    });
  },
  data() {
    return {
      gitHubAccounts: [],
      twitterAccounts: [],
      transcript: 'Start Voice Recognition'  
    };
  },
  methods: {
    recognize() {
      console.log(this.recognition);
      this.recognition.addEventListener("end", this.recognition.start);
      this.recognition.start();
    },
    getGits() {
        voiceBus.$emit('gitVoice', this.transcript);
    },
    async getTwitters() {
    //   this.$socket.emit('hello_twitter', this.message)
    },
    getSamples() {
        voiceBus.$emit('sampleVoice', this.transcript);
    }
  }
}
</script>