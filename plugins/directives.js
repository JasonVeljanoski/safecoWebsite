/**
 *   click-outside is used for modal like components where you want to manipulate data 
 *   (e.g. active = !active) when NOT clicking on a particular div
 *   Specifically, something will happen (e.g. drop modal) when clicking anywhere else besides this div
 * 
 * 
 *   I DIDNT USE THIS DIRECTIVE AND AM NOT SURE IF IT WORKS COMPLETELY
 *   here is the source:
 *   https://stackoverflow.com/questions/36170425/detect-click-outside-element
 *
 * */

import Vue from 'vue';

Vue.directive('Clickout', {
    bind () {
        this.event = event => this.vm.$emit(this.expression, event)
        this.el.addEventListener('click', this.stopProp)
        document.body.addEventListener('click', this.event)
    },   
    unbind() {
      this.el.removeEventListener('click', this.stopProp)
      document.body.removeEventListener('click', this.event)
    },
  
    stopProp(event) { event.stopPropagation() }
  })
