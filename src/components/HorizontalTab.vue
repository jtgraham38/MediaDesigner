<template>
<div @click="handleClick" class="
    p-6 flex space-x-2
    text-xl hover:text-primary-400 
    hover:bg-highlight-600 
    rounded-t-xl
    border-t-2 border-r-2 border-l-2 hover:border-primary-500"
    :class="props.tabId === props.activeTab ? 'text-primary-400 bg-highlight-600 border-primary-500' : 'text-primary-300 bg-highlight-800 border-primary-400 border-b-2 hover:border-b-0'"
    >
    <slot></slot>
</div>
</template>
    
<script setup>
import { reactive } from 'vue';

//define props
const props = defineProps({
    tabId: {
        type: String,
        required: true,
    },
    activeTab: {
        type: reactive,
        required: true,
    }
})

//define emits
const emit = defineEmits(['tabChanged']);

//handle click event
const handleClick = () => {
    emit('tabChanged', props.tabId);
}

</script>
    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>