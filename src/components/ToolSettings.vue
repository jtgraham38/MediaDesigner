<template>   
    <div class="inline-flex space-x-2">
        <div v-if="activeTool?._toolMixins.includes('strokeColor')">
            <input type="color" v-model="newStrokeColor" class="w-8">
            Stroke color <span>{{ newStrokeColor }}</span>
        </div>

        <div v-if="activeTool?._toolMixins.includes('fillColor')">
            <input type="color" v-model="newFillColor" class="w-8"/>
            Fill color <span>{{ newFillColor }}</span>
        </div>

        <div v-if="activeTool?._toolMixins.includes('strokeWidth')">
            <input type="number" v-model="editorStore.paper.tool.strokeWidth" min="1" class="w-12 p-1"/>
            Stroke width <span>{{ editorStore.paper.tool.strokeWidth }}</span>
        </div>

        <div v-if="activeTool?._toolMixins.includes('strokeCap')">
            <select v-model="newStrokeCap">
                <option value="square">Square</option>
                <option value="round">Round</option>
                <option value="butt">Butt</option>
            </select>

            <div>{{ editorStore?.paper?.tool?.strokeCap }}</div>
        </div>

    </div>
</template>
  
<script setup>
import { useEditorStore } from '../stores/editor'
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue'

//get the store
const editorStore = useEditorStore()

//get the active tool from the store
const activeTool = ref(null)

const newStrokeColor = ref(editorStore?.paper?.tool?.strokeColor)
const newFillColor = ref(editorStore?.paper?.tool?.fillColor)
const newStrokeWidth = ref(editorStore?.paper?.tool?.strokeWidth)
const newStrokeCap = ref(editorStore?.paper?.tool?.strokeCap)


//switch the local tool
watch(() => editorStore?.paper?.tool, (newVal, oldVal) => {
    activeTool.value = newVal

    //reset the local tool properties
    newStrokeColor.value = "black"
    newFillColor.value = "transparent"
    newStrokeWidth.value = 1
    newStrokeCap.value = "round"
})

//watchers for updated propert values
watch(() => newStrokeColor.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeColor', newStrokeColor.value)
})

watch(() => newFillColor.value, (newVal, oldVal) => {
    editorStore.setToolProperty('fillColor', newFillColor.value)
})

watch(() => newStrokeWidth.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeWidth', newStrokeWidth.value)
})
watch(() => newStrokeCap.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeCap', newStrokeCap.value)
})

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  