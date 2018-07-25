<template>
  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
</template>

<script>
import 'aframe'

export default {
  name: "GitHubAPI",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      aframeHTML: `
        <a-scene>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            <a-sky color="#ECECEC"></a-sky>
        </a-scene>
      `
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
