<script setup>
import DrawingCanvas from './components/DrawingCanvas.vue'
import SideToolbar from './components/SideToolbar.vue'
import BottomToolbar from './components/BottomToolbar.vue'
import TopBar from './components/TopBar.vue'

import { useEditorStore } from './stores/editor'

const editorStore = useEditorStore()


</script>

<template>
  <div class="grid grid-cols-12 grid-rows-12 w-full h-full">

    <TopBar class="row-span-1 col-span-12"></TopBar>

    <SideToolbar class="row-span-11 col-span-4"/>
    <DrawingCanvas class="row-span-7 col-span-8"
      @mouseDown="console.log('mouse down')"
      @mouseDrag="console.log('mouse drag')"
      @mouseUp="console.log('mouse up')"
      @mouseMove="console.log('mouse move')"
      @mouseLeave="console.log('mouse leave')"
      @mouseEnter="console.log('mouse enter')"
      @mouseWheel="console.log('mouse wheel')"
      @keyDown="console.log('key down')"
      @keyUp="console.log('key up')"
      @keyPress="console.log('key press')"
      @frame=""
      @resize="console.log('resize')"
      @scroll="console.log('scroll')"
    />
    <BottomToolbar class="row-span-4 col-span-8"/>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
