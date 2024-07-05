<template>   
    <div class="inline-flex space-x-2">
        <div v-if="activeTool?._toolMixins.includes('strokeColor')">
            <input type="color"/>
            Stroke color
        </div>

        <div v-if="activeTool?._toolMixins.includes('fillColor')">
            <input type="color"/>
            Fill color
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

watch(() => editorStore?.paper?.tool, (newVal, oldVal) => {
    activeTool.value = newVal
    console.log("ACTIVE TOOL CHANGED", activeTool.value)
})

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  