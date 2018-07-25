<template>
  <div id="app">
    <a-scene>
      <a-assets>
        <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous">
      </a-assets>
      <a-sky src="https://2.bp.blogspot.com/-5gzAAXID1Aw/USoxixR5-wI/AAAAAAAAGrU/bGkNVCZ9NVs/s1600/sky_photo6.jpg" rotation="0 -90 0">
        <a-animation attribute="rotation" dur="25000" to="0 360 0" repeat="indefinite" easing="linear"></a-animation>
      </a-sky>
      <a-entity light="color: #ccccff; intensity: 1; type: ambient;" visible=""></a-entity>
      <a-entity geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0" material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4;"></a-entity> 
      <a-entity light="color: #ffaaff; intensity: 1.5" position="5 5 5"></a-entity>
      <a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
      <a-entity light="color: white; type: ambient;"></a-entity>
      <HelloWorld/>
      <GitHubAPI/>
      <SampleJSON/>
    </a-scene>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GitHubAPI from './components/GitHubAPI'
import SampleJSON from './components/SampleJSON'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GitHubAPI,
    SampleJSON
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
