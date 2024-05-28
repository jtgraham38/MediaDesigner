<template>   
    <div class="h-full">
        <div class="flex flex-col h-full w-full">
            <div class="flex w-full bg-highlight-900">
                <slot name="tabs">
                    
                </slot>

                <div class="
                    w-full
                    bg-highlight-800
                    rounded-tl-xl
                    border-2 border-primary-400
                    flex justify-start align-items-center space-x-2 pt-2 pb-3 px-2
                ">
                    <slot name="funcs">
            
                    </slot>
                </div>
            </div>
            <div class="
                p-2 h-full w-full overflow-x-auto text-primary-200 bg-highlight-600
                border-b-2 border-l-2 border-r-2 border-primary-400 hover:border-primary-500
            ">
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
  