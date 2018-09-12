<template>
    <a-entity id="gitHub" layout="type: box; columns: 3; marginRow: -5; marginColumn: -2; plane: xz" position="9 1 -5">
        <a-box  v-for="gitHubAccount in gitHubAccounts"
                :key="gitHubAccount.id"
                material="color: #333333"
                metalness=".5"
                class="clickable"
                width="1.5"
                event-set__enter="_event: mouseenter; color: #551a8b"
                event-set__leave="_event: mouseleave; color: #333333">
            <a-text v-bind:value="gitHubAccount.login" 
                position="-.6 0 .5"               
                width="1"
                wrap-count="10"></a-text>
            <a-image v-bind:src="gitHubAccount.avatar_url" position="0 1.25 0"></a-image>
        </a-box>
    </a-entity>
</template>

<script>
import GitHub from "../services/github-api.service"
import { voiceBus } from '.././main'

export default {
  name: "GitHubAPI",
  created() {
      let vm = this;
      voiceBus.$on('gitVoice', function(){
        //   console.log('this is githubapi logging voice received')
        //   console.log(vm)
          vm.getGits();
      })
  },
  mounted() {
      console.log("github api mounted")
  },
  data() {
    return {
        gitHubAccounts: []
    };
  },
  methods: {
    alert() {
        console.log("hello");
    },
    getGits() {
        // console.log('getGits was triggered in GitHub')
        let g = new GitHub();
        g.getGits().then(response => {
            console.log(response.items);
            this.gitHubAccounts = response.items;
        });
        voiceBus.$emit('githubOpen', 'GitHub Open');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
