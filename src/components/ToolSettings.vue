<template>   
    <div class="inline-flex space-x-2">
        <div v-if="activeTool?._toolMixins.includes('strokeColor')">
            <label for="new_stroke_color_input" class="block">Stroke Color:</label>
            <input type="color" v-model="newStrokeColor" class="w-8" title="Stroke Color" id="new_stroke_color_input">
        </div>

        <div v-if="activeTool?._toolMixins.includes('fillColor')">
            <label for="new_fill_color_input" class="block">Fill Color:</label>
            <input type="color" v-model="newFillColor" class="w-8" title="Fill Color" id="new_fill_color_input"/>
        </div>

        <div v-if="activeTool?._toolMixins.includes('strokeWidth')">
            <label for="new_stroke_width_input" class="block">Stroke Width</label>
            <input type="number" v-model="editorStore.paper.tool.strokeWidth" class="w-12 p-1" title="Stroke Width" min="0" id="new_stroke_width_input"/>
        </div>

        <div v-if="activeTool?._toolMixins.includes('strokeCap')">
            <label for="new_stroke_cap_input" class="block">Stroke Cap:</label>
            <select v-model="newStrokeCap" title="Stroke Cap" id="new_stroke_cap_input">
                <option value="square">Square</option>
                <option value="round">Round</option>
                <option value="butt">Butt</option>
            </select>
        </div>

        <div v-if="activeTool?._toolMixins.includes('strokeJoin')">
            <label for="new_stroke_join_input" class="block">Stroke Join:</label>
            <select v-model="newStrokeJoin" title="Stroke Join" id="new_stroke_join_input">
                <option value="round">Round</option>
                <option value="miter">Miter</option>
                <option value="bevel">Bevel</option>
            </select>
        </div>

        <div v-if="activeTool?._toolMixins.includes('dashArray')">
            <label class="block">Stroke Dash Array:</label>
            <div>
                <label for="new_stroke_dash_width_input">Dash Width:</label>
                <span class="ml-1 inline-grid place-items-center">
                    <input type="range" v-model="newDashArray[0]" min="0" max="40" title="Dash Width" id="new_stroke_dash_width_input"/>
                    <div>{{ newDashArray[0] }}</div>
                </span>
            </div>
            <div>
                <label for="new_stroke_gap_width_input">Gap Width:</label>
                <span class="ml-1 inline-grid place-items-center">
                    <input type="range" v-model="newDashArray[1]" min="0" max="40" title="Gap Width" id="new_stroke_gap_width_input"/>
                    <div>{{ newDashArray[1] }}</div>
                </span>
            </div>
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
const newStrokeJoin = ref(editorStore?.paper?.tool?.strokeJoin)
const newDashArray = ref(editorStore?.paper?.tool?.dashArray)


//switch the local tool
watch(() => editorStore?.paper?.tool, (newVal, oldVal) => {
    activeTool.value = newVal

    //reset the local tool properties
    newStrokeColor.value = "black"
    newFillColor.value = "transparent"
    newStrokeWidth.value = 1
    newStrokeCap.value = "round"
    newStrokeJoin.value = "miter"
    newDashArray.value = [0, 0]
})

//watchers for updated propert values
watch(() => newStrokeColor.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeColor', newVal)
})

watch(() => newFillColor.value, (newVal, oldVal) => {
    editorStore.setToolProperty('fillColor', newVal)
})

watch(() => newStrokeWidth.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeWidth', newVal)
})
watch(() => newStrokeCap.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeCap', newVal)
})
watch(() => newStrokeJoin.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeJoin', newVal)
})
watch(() => newDashArray.value, (newVal, oldVal) => {
    editorStore.setToolProperty('dashArray', [ ...newVal ])
}, { deep: true })

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  