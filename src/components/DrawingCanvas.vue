<template>
    <div>
        <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import paper from 'paper'

//references to ui elements
const canvas = ref(null)

//initialize paper.js
onMounted(() => {
    //init paper
    paper.setup(canvas.value)

    //draw a circle
    //eslint-disable-next-line
    var path = new paper.Path({
        segments: [[30, 150], [30, 100], [80, 100], [80, 150]],
        strokeColor: 'black',
        closed: true
    });

})
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  