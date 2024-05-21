<script setup>
import DrawingCanvas from './components/DrawingCanvas.vue'
import SideToolbar from './components/SideToolbar.vue'
import BottomToolbar from './components/BottomToolbar.vue'
</script>

<template>

<div>
  <div class="grid grid-cols-4 grid-rows-4">
    <SideToolbar class="row-span-3 col-span-1"/>
    <DrawingCanvas class="row-span-3 col-span-3"
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
      @frame="console.log('frame')"
      @resize="console.log('resize')"
      @scroll="console.log('scroll')"
    />
    <BottomToolbar class="row-span-1 col-span-4 bg-green-400"/>
  </div>
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
