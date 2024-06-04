<script setup>
import DrawingCanvas from './components/DrawingCanvas.vue'
import SideToolbar from './components/SideToolbar.vue'
import BottomToolbar from './components/BottomToolbar.vue'
import TopBar from './components/TopBar.vue'

import { useEditorStore } from './stores/editor'

const editorStore = useEditorStore()


</script>

<template>
  <div class="mb-2 border p-2">
    {{ editorStore.count }}
    <button class="btn btn-primary ml-2">add</button>
  </div>


  <div class="grid grid-cols-12 grid-rows-12 w-[96rem] h-[64rem]">

    <TopBar class="row-span-1 col-span-12">
      <div class="flex justify-between w-full">
      
        <div class="flex space-x-2">
          <button class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
          </button>
          <button class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>  
        </div>

        <div class="flex space-x-2">
          <button class="btn btn-primary" @click="editorStore.setAspectRatio(1)"> 1:1 </button>
          <button class="btn btn-primary" @click="editorStore.setAspectRatio(4/3)"> 4:3 </button>
          <button class="btn btn-primary" @click="editorStore.setAspectRatio(16/9)"> 16:9 </button>
          <button class="btn btn-primary" @click="editorStore.setAspectRatio(16/10)"> 16:10 </button>  
        </div>

      </div>
    </TopBar>

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
