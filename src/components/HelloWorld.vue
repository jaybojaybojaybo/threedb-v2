<template>
  <a-entity>
    <a-box position="0 1 -5" rotation="0 0 0" color="#000">
      <a-text value="HELLO" position="-.35 0 .5"></a-text>
    </a-box>
  </a-entity>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {

    };
  },
  methods: {
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
