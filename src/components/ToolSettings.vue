<template>   
    <div class="inline-flex space-x-2">
        <div v-if="activeTool?._toolMixins.includes('strokeColor')">
            <input type="color" v-model="newStrokeColor">
            Stroke color <span>{{ newStrokeColor }}</span>
        </div>

        <div v-if="activeTool?._toolMixins.includes('fillColor')">
            <input type="color" v-model="newFillColor"/>
            Fill color <span>{{ newFillColor }}</span>
        </div>

    </div>
</template>
  
<script setup>
import { useEditorStore } from '../stores/editor'
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
import { watch } from 'vue'

//get the store
const editorStore = useEditorStore()

//get the active tool from the store
const activeTool = ref(null)

const newStrokeColor = ref(editorStore?.paper?.tool?.strokeColor)
const newFillColor = ref(editorStore?.paper?.tool?.fillColor)


//switch the local tool
watch(() => editorStore?.paper?.tool, (newVal, oldVal) => {
    activeTool.value = newVal
})

//watchers for updated propert values
watch(() => newStrokeColor.value, (newVal, oldVal) => {
    editorStore.setToolProperty('strokeColor', newStrokeColor.value)
})

watch(() => newFillColor.value, (newVal, oldVal) => {
    editorStore.setToolProperty('fillColor', newFillColor.value)
})

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  