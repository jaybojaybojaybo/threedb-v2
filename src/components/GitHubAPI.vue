<template>
    <a-entity id="datas" layout="type: box; columns: 3; margin: -2; plane: xz" position="10 1 -5">
            <a-box  v-for="gitHubAccount in gitHubAccounts"
                    :key="gitHubAccount.id"
                    material="color: #000000"
                    class="clickable"
                    v-on:click="getGits"
                    width="1.5"
                    event-set__enter="_event: mouseenter; color: #551a8b; metalness: 0.5"
                    event-set__leave="_event: mouseleave; color: #000000">
                <a-text v-bind:value="gitHubAccount.login" position="-.35 0 .5"></a-text>
                <a-entity light="color: purple; intensity: 1.5" position="1 1 -2"></a-entity>
                <a-entity light="color: purple; intensity: 1.5" position="-1 1 -2"></a-entity>
            </a-box>
    </a-entity>
</template>

<script>
import GitHub from "../services/github-api.service"

export default {
  name: "GitHubAPI",
  data() {
    return {
        gitHubAccounts: [
            {
                "id": "1",
                "login": "susan"
            },
            {
                "id": "2",
                "login": "mccormick"
            }
        ]
    };
  },
  methods: {
    alert() {
        console.log("hello");
    },
    async getGits() {
        console.log('getGits was triggered in GitHub')
      let g = new GitHub();
      g.getGits().then(response => {
        console.log(response.items);
        this.gitHubAccounts = response.items;
      });
    }
  },
  mounted() {
      console.log("github api mounted")
  },
  provide: function() {
      return {
          getGits: this.getGits
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
