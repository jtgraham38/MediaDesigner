<template>
    <div>
        <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
</template>
  
<script setup>
import { ref, onMounted, defineEmits } from 'vue'
import paper from 'paper'

//references to ui elements
const canvas = ref(null)

//define events that can be emitted
const emit = defineEmits([
    'mouseDown',
    'mouseDrag', 
    'mouseUp', 
    'mouseMove', 
    'mouseLeave', 
    'mouseEnter', 
    'mouseWheel', 
    'keyDown', 
    'keyUp', 
    'keyPress', 
    'frame', 
    'resize', 
    'scroll'
])

//initialize paper.js
onMounted(() => {
    //init paper
    paper.setup(canvas.value)

    //emit event when mouse is pressed
    paper.view.onMouseDown = (event) => {
        emit('mouseDown', event)
    }

    //emit event when mouse is dragged
    paper.view.onMouseDrag = (event) => {
        emit('mouseDrag', event)
    }

    //emit event when mouse is released
    paper.view.onMouseUp = (event) => {
        emit('mouseUp', event)
    }

    //emit event when mouse is moved
    paper.view.onMouseMove = (event) => {
        emit('mouseMove', event)
    }
    
    //emit event when mouse leaves the canvas
    paper.view.onMouseLeave = (event) => {
        emit('mouseLeave', event)
    }

    //emit event when mouse enters the canvas
    paper.view.onMouseEnter = (event) => {
        emit('mouseEnter', event)
    }

    //emit event when mouse wheel is scrolled
    paper.view.onMouseWheel = (event) => {
        emit('mouseWheel', event)
    }

    //emit event when key is pressed
    paper.view.onKeyDown = (event) => {
        emit('keyDown', event)
    }

    //emit event when key is released
    paper.view.onKeyUp = (event) => {
        emit('keyUp', event)
    }

    //emit event when key is pressed
    paper.view.onKeyPress = (event) => {
        emit('keyPress', event)
    }

    //emit event when frame is rendered
    paper.view.onFrame = (event) => {
        emit('frame', event)
    }

    //emit event when canvas is resized
    paper.view.onResize = (event) => {
        emit('resize', event)
    }

    //emit event when canvas is scrolled
    paper.view.onScroll = (event) => {
        emit('scroll', event)
    }

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
  