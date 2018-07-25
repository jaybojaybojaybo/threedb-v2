<template>
  <div id="app">
    <a-scene>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
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
