<script setup>
import DrawingCanvas from './components/DrawingCanvas.vue'
import SideToolbar from './components/SideToolbar.vue'
import BottomToolbar from './components/BottomToolbar.vue'
</script>

<template>

<div>
  <div class="grid grid-cols-4 grid-rows-4">
    <SideToolbar class="row-span-3 col-span-1"/>
    <DrawingCanvas class="row-span-3 col-span-3"/>
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
