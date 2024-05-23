<template>
<div @click="handleClick" class="p-6 text-xl hover:bg-highlight-900 text-primary-300 hover:text-primary-400 flex space-x-2 border-b-2 border-primary-400 hover:border-primary-500">
    <slot></slot>
</div>
</template>
    
<script setup>
import { defineProps, defineEmits } from 'vue';

//define props
const props = defineProps({
    tabId: {
        type: String,
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