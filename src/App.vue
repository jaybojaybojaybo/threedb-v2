<template>
  <div id="app">
    <a-scene>
      <a-assets>
        <img src="./assets/grid.png" id="grid" crossorigin="anonymous">
        <img src="./assets/sky.jpg" id="sky" crossorigin="anonymous"/>
        <img src="./assets/github.png" id="github" crossorigin="anonymous"/>			
        <img src="./assets/json.png" id="json" crossorigin="anonymous"/>	
        <img src="./assets/twitter.png" id="twitter" crossorigin="anonymous"/>					
      </a-assets>

        <!-- Sky --> 
      <a-sky 
        src="#sky"
        radius="50" 
        rotation="0 -90 0"
        animation="property: rotation; dur: 25000; from: 0 0 0; to: 0 359.99 0; loop: true; easing: linear; dir: normal;">
        <!-- <a-animation attribute="rotation" dur="25000" to="0 360 0" repeat="indefinite" easing="linear">
          
        </a-animation> -->
      </a-sky>

      <!-- Floor -->
      <a-entity 
        geometry="primitive: plane; width: 10000; height: 10000;" 
        rotation="-90 0 0" 
        material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4;">
      </a-entity> 
      
      <!-- Light Sources --> 
      <!-- <a-entity light="color: #ffaaff; intensity: 1.5" position="5 5 5"></a-entity> -->
      <a-entity light="color: #fafad2; intensity: 2" position="0 5 -5"></a-entity>
      <a-entity light="color: #ffffff; type: ambient; intensity: 1.5" position="0 10 0"></a-entity>

      <!-- Title --> 
      <a-entity position="0 10 -20">
        <a-text 
          value="THREE DB" 
          position="-10 0 0"
          scale="20 20 20"
          rotation="0 0 0"
          color="black">
        </a-text>  
      </a-entity>

      <!-- GitHub Section -->
      <a-image src="#github"
        position="5 4 -5"
        scale="2 2 2"
        class="clickable"
        v-on:click="getGits">
      </a-image>

      <!-- Twitter Section -->
      <a-image src="#twitter"
        position="0 4 -5"
        scale="2 2 2"
        class="clickable"
        v-on:click="getTwits">
      </a-image>

      <!-- Sample JSON -->
      <a-image src="#json"
        position="-5 4 -5"
        scale="2 2 2"
        class="clickable"
        v-on:click="getSamples">
      </a-image>

      <!-- 3D Vue Components --> 
      <TwitterAPI/>
      <GitHubAPI/>
      <SampleJSON/>
      <VoiceRecognition/>

      <!-- Camera + Cursor + Console -->
			<a-entity id="camera" position="0 1 10">
				<a-camera universal-controls="speed: 0.3">
          <!-- This is the cursor -->
					<a-entity 
              cursor="rayOrigin: cursor" 
              raycaster="objects: .clickable" 
              color="#E6E6FA" 
              position="0 0 -1"
              geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
              >
						<a-animation begin="click" easing="ease-in" attribute="scale"
									 fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
						<a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
									 from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
					</a-entity>
          <!-- This is the console -->
          <a-entity position="0 -1 -1.5">
            <a-text
              align="center"
              height=".5"
              width="2.15"
              wrap-count="42"
              opacity=".75"
              v-bind:value="prompt"
              position="0 0 .01"
              color="#ffffff">
            </a-text>
            <a-box 
              height=".25"
              width="2"
              depth=".01"
              material="
                side: double; 
                color: #000000; 
                transparent: true; 
                opacity: 0.65">
            </a-box>
          </a-entity>
				</a-camera>
			</a-entity>
    </a-scene>
  </div>
</template>

<script>
import TwitterAPI from './components/TwitterAPI'
import GitHubAPI from './components/GitHubAPI'
import SampleJSON from './components/SampleJSON'
import VoiceRecognition from './components/VoiceRecognition'

import 'aframe-gamepad-controls';
import 'aframe-animation-component';
import { voiceBus } from './main';

export default {
  name: 'App',
  created() {
    
  },
  components: {
    TwitterAPI,
    GitHubAPI,
    SampleJSON,
    VoiceRecognition
  },
  data() {
    return {
      prompt: 'Welcome to ThreeDB! Please click on Voice Recognition to Start this experiment' 
    }
  },
  methods: {
    getGits() {
      // console.log("getGits triggered from click in main Vue");
      voiceBus.$emit('gitVoice', "clicked");
    },
    getTwits() {
      voiceBus.$emit('twitterVoice', "clicked");
    },
    getSamples() {
      voiceBus.$emit('sampleVoice', "clicked");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
