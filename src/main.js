// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'aframe';
import 'aframe-layout-component';
import 'aframe-event-set-component';
import 'aframe-gif-shader';
import 'aframe-draw-component';
import 'aframe-textwrap-component';
import 'aframe-gamepad-controls';

export const voiceBus = new Vue();
export const promptBus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
