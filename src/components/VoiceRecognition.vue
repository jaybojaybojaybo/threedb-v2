<template>
    <a-entity position="0 1 5">
        <a-box class="clickable" 
            width="3"
            v-on:click="recognize" 
            metalness=".5"
            event-set__enter="_event: mouseenter; color: #ff0000;"
            event-set__leave="_event: mouseleave; color: #ffeead;">
            <a-text 
              width="2.75"
              wrap-count="30"
              v-bind:value="transcript"
              position="-1.35 0.15 .5" 
              color="#000000">
            </a-text>
        </a-box>
    </a-entity>
</template>


<script type = "text/javascript" >
import { voiceBus } from '.././main'
import { promptBus } from '.././main'

export default {
  name: "VoiceRecognition",
  created: function() {

  },
  mounted: function() {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;
    let p = document.createElement("p");

    this.recognition.addEventListener("result", e => {
       const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");
       if(e.results[0].isFinal){
           this.transcript = transcript
       }

      if (transcript.includes("search")) {
        if (e.results[0].isFinal) {
          console.log("SEARCH SEARCH SEARCH");
        }
      }

      if (transcript.includes("Twitter")) {
        if (e.results[0].isFinal) {
          // console.log("twitter recognized")
            let vm = this;
            // console.log(vm)
            vm.getTwits();
        }
      }

      if (transcript.includes("GitHub")) {
        if (e.results[0].isFinal) {
            // console.log("github recognized")
            let vm = this;
            // console.log(vm)
            vm.getGits();
        }
      }

      if (transcript.includes("Json")) {
        if (e.results[0].isFinal) {
            // console.log("json recognized")
            let vm = this;
            // console.log(vm)
            vm.getSamples();
        }
      }

      console.log(transcript);

    });
  },
  data() {
    return {
      transcript: 'Start Voice Recognition (note: Twitter is broken)' 
    };
  },
  methods: {
    recognize() {
      if(promptBus.firstVoice === false) {
        this.transcript = "Voice recognition has started! (Try saying the letters between the brackets over there to your left.)";
        console.log(this.recognition);
        this.recognition.addEventListener("end", this.recognition.start);
        this.recognition.start();
      } else {
        this.firstVoice();
      }
    },
    firstVoice() {
      promptBus.$emit('firstVoicePrompt', 'first voice prompt emitted');
      promptBus.firstVoice = false;
      this.recognize();
    },
    getGits() {
        voiceBus.$emit('gitVoice', this.transcript);
    },
    getTwits() {
        voiceBus.$emit('twitterVoice', this.transcript);
    },
    getSamples() {
        voiceBus.$emit('sampleVoice', this.transcript);
    }
  }
}
</script>
