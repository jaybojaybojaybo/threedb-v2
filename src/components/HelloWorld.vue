<template>
  <div v-html="aframeHTML"></div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      aframeHTML: `
        <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
      `
    };
  },
  methods: {
    // createScene() {
    //   let aframeScene = this.fragmentFromString(`
    //     <a-scene>
    //   <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
    //   <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
    //   <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
    //   <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    //   <a-sky color="#ECECEC"></a-sky>
    // </a-scene>
    //   `);
    //   this.aframe = aframeScene
    //   console.log(this.aframe)
    // },
    // fragmentFromString(strHTML) {
    //   return document.createRange().createContextualFragment(strHTML);
    // }
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
