<template>   
    <div class="bg-highlight-600 ">
        <div class="flex space-x-2 h-full">
            <div class="flex-noneflex flex-col h-full bg-highlight-800">
                <slot name="tabs">
                    
                </slot>
            </div>
            <div class="p-2 h-full w-full overflow-y-auto text-primary-200">
                <slot name="content">
                    
                </slot>
            </div>
        </div>
    </div>
    
</template>
  
<script setup>


</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  