<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 grid place-items-center">
        <div class="
            p-4 
            max-w-7xl
            border-2 border-primary-400 rounded-lg 
            bg-highlight-600
            relative"
        >
            <button class="absolute top-0 right-0 p-2 text-xl hover:text-primary-400" @click="closeModal">&times;</button>
            <div class="p-2 mt-4">
                <slot></slot>
            </div>
        </div>
    </div>

    
    
</template>
  
<script setup>

//load props passed in to the component
const { show } = defineProps(
    {
        show: Boolean
    }
)

//define events to emit
const emit = defineEmits(['closeModal'])

//define the close function
const closeModal = () => {
    emit('closeModal')
}

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  