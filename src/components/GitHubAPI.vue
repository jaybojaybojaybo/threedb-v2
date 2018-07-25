<template>
    <a-entity id="datas" layout="type: box; columns: 3; margin: -2; plane: xz" position="2 2 0">
            <a-box  v-for="gitHubAccount in gitHubAccounts"
                    :key="gitHubAccount.id"
                    material="color: #000000"
                    onclick="location.href='Datas/Details/@item.Id'"
                    width="1.5"
                    event-set__enter="_event: mouseenter; color: #551a8b; metalness: 0.5"
                    event-set__leave="_event: mouseleave; color: #000000">
                <a-text value="box" position="-.35 0 .5"></a-text>
                <a-entity light="color: purple; intensity: 1.5" position="1 1 -2"></a-entity>
                <a-entity light="color: purple; intensity: 1.5" position="-1 1 -2"></a-entity>
            </a-box>
    </a-entity>
</template>

<script>
// import 'aframe'

export default {
  name: "GitHubAPI",
  data() {
    return {
        gitHubAccounts: [
            {
                "id": "1",
                "name": "susan"
            },
            {
                "id": "2",
                "name": "mccormick"
            }
        ]
    };
  },
  methods: {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
