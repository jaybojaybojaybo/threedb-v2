<template>
    <a-entity position="0 1 5">
        <a-box class="clickable" 
            v-on:click="recognize" 
            material="color: red;">
            <a-text 
                value="Voice Rec" 
                position="-.5 0 .5" 
                color="white">
            </a-text>
        </a-box>
    </a-entity>
</template>


<script type = "text/javascript" >
import GitHubAPI from './GitHubAPI'

export default {
  name: "VoiceRecognition",
  created: function() {
    console.log("created");
  },
  mounted: function() {
    console.log("Voice Recognition mounted");
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

      p.textContent = transcript;
      if (e.results[0].isFinal) {
        // p = document.createElement("p");
        // words.appendChild(p);
        console.log("final: " + e.results)
      }

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
        //   let g = new GitHub();
          this.getGits().then(response => {
            console.log(response.items);
            this.gitHubAccounts = response.items;
          });
        }
      }

      console.log(transcript);
    });
  },
  data() {
    return {
      gitHubAccounts: [],
      twitterAccounts: [],  
    };
  },
  inject: ['getGits'],
  methods: {
    recognize() {
      console.log(this.recognition);
      this.recognition.addEventListener("end", this.recognition.start);
      this.recognition.start();
    },
    async getGits() {
    //   let g = new GitHub();
        console.log("getGits was triggered in Voice")
      this.getGits().then(response => {
        console.log(response.items);
        this.gitHubAccounts = response.items;
      });
    },
    async getTwitters() {
      this.$socket.emit('hello_twitter', this.message)
    }
  }
};
</script>