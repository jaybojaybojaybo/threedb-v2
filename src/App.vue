<template>
  <div id="app">
    <a-scene>
      <a-assets>
        <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous">
        <img src="https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg" id="chrome" crossorigin="anonymous" />				
      </a-assets>

        <!-- Sky --> 
      <a-sky src="https://2.bp.blogspot.com/-5gzAAXID1Aw/USoxixR5-wI/AAAAAAAAGrU/bGkNVCZ9NVs/s1600/sky_photo6.jpg" rotation="0 -90 0">
        <a-animation attribute="rotation" dur="25000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
        <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
      </a-sky>
      <a-entity geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0" material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4;"></a-entity> 
      
      <!-- Light Sources --> 
      <a-entity light="color: #ffaaff; intensity: 1.5" position="5 5 5"></a-entity>
      <a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
      <a-entity light="color: white; type: ambient;"></a-entity>

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
      <a-image src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"
        position="5 4 -5"
        scale="2 2 2"
      ></a-image>

      <!-- Twitter Section -->
      <a-image src="https://png.icons8.com/metro/1600/twitter.png"
        position="0 4 -5"
        scale="2 2 2"
      ></a-image>

      <!-- Sample JSON -->
      <a-image src="https://cdatasoftware.gallerycdn.vsassets.io/extensions/cdatasoftware/jsonodbcdriver/2015/1482142883727/198127/1/logo-json.png"
        position="-5 4 -5"
        scale="2 2 2"
      ></a-image>

      <!-- 3D Vue Components --> 
      <TwitterAPI/>
      <GitHubAPI/>
      <SampleJSON/>
      <VoiceRecognition/>

      <!-- Camera + Cursor. -->
			<a-entity id="camera" position="0 1 10">
				<a-camera universal-controls="speed: 0.3">
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

export default {
  name: 'App',
  components: {
    TwitterAPI,
    GitHubAPI,
    SampleJSON,
    VoiceRecognition
  },
  data() {
    return {

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
