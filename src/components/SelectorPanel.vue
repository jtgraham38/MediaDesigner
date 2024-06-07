<template>
    <div class="pb-3">
        <div
            @click="editorStore.setActiveTool(props.tool)" 
            class="
            btn btn-primary
        ">
        <div class="
            h-0
            "
            style="padding-bottom: 100%;"
        >
            <div class="
                absolute top-0 left-0
                w-full h-full
                p-2
                bg-highlight-700
                text-primary-400
                border border-primary-400 rounded-xl
                grid place-items-center
            ">
                <slot></slot>
            </div>
        </div>
    </div>
    </div>
    
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useEditorStore } from '../stores/editor';
import { defineProps } from 'vue';

//define the tool prop
const props = defineProps(['tool'])

//get editor store
const editorStore = useEditorStore()
</script>

<style scoped>
/* Your component styles here */
.selector-panel::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 0.5rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    background-color: blueviolet;
}

.selector-panel::before:hover{
    background: red;
}
</style>