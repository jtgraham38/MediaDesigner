<template>
    <div class="bg-highlight-900 flex flex-col">
        
        <div class="
            w-full p-2 
            bg-highlight-600
            border-2 border-primary-400
            text-primary-400
            "
        >
            <ToolSettings></ToolSettings>
        </div>
        <div ref="container" class="w-full h-full">
            <canvas ref="canvas" class="bg-white"></canvas>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, defineEmits, watch } from 'vue'
import paper from 'paper'
import { useEditorStore } from '../stores/editor';
import { storeToRefs } from 'pinia';
import ToolSettings from './ToolSettings.vue'

//create store
const editorStore = useEditorStore()

//references to ui elements
const canvas = ref(null)
const container = ref(null)

//local refs from store
const { aspectRatio } = storeToRefs(editorStore)

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
    editorStore.setPaper(paper.setup(canvas.value))
    canvas.value.style.width = null     //delete the overriding width style attribute
    canvas.value.style.height = null    //delete the overriding height style attribute

    //set the canvas size to fit inside the container at the new aspect ratio
    resizeCanvas()

    //emit event when mouse is pressed
    /*
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
    */
})

//resize the canvas when the aspect ratio changes
watch(aspectRatio, () => {
    resizeCanvas()
})

//resize the canvas
function resizeCanvas() {
    //set the canvas size to fit inside the container at the new aspect ratio
    const maxHeight = container.value.clientHeight
    const maxWidth = container.value.clientWidth
    
    const height = Math.floor(Math.min(maxWidth / aspectRatio.value, maxHeight))
    const width = Math.floor(height * aspectRatio.value)
    console.log(height, width, width/height)
    editorStore.setCanvasSize(width, height)
}
    

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  