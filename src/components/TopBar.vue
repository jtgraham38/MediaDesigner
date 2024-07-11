<template>
    <div class="
        flex items-center
        space-x-2 h-full w-full px-3 py-1
        bg-highlight-800
        text-primary-300
        border-2 border-primary-400 rounded-t-xl
    ">
        <div class="w-full h-full flex items-center">
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

                <slot></slot>

                <div class="flex space-x-2">
                    <button class="btn btn-primary" @click="editorStore.setAspectRatio(1)"> 1:1 </button>
                    <button class="btn btn-primary" @click="editorStore.setAspectRatio(4/3)"> 4:3 </button>
                    <button class="btn btn-primary" @click="editorStore.setAspectRatio(16/9)"> 16:9 </button>
                    <button class="btn btn-primary" @click="editorStore.setAspectRatio(16/10)"> 16:10 </button>  

                    <button class="btn btn-secondary" @click="show_project_settings = !show_project_settings"> Settings </button>
                    <Modal 
                        :show="show_project_settings"
                        @close-modal="show_project_settings = false;"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ut veritatis fuga adipisci aliquam nulla iste, veniam quibusdam sint voluptas fugit qui, facilis ipsum laudantium temporibus pariatur sit autem minima aspernatur corrupti numquam cupiditate. Magnam, nulla. Optio iusto vel ea nam doloremque id cumque ullam, necessitatibus libero debitis, impedit natus!
                    </Modal>

                </div>

            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import { useEditorStore } from '../stores/editor';
import Modal from './Modal.vue'

//get editor store
const editorStore = useEditorStore()

//state variables
const show_project_settings = ref(false)

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>