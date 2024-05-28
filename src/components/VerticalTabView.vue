<template>   
    <div class="w-full">
        <div class="flex h-full w-full">
            <div class="flex flex-col h-full">
                <slot name="tabs">
                    
                </slot>

                <div class="
                    h-full
                    bg-highlight-800
                    rounded-tl-xl
                    border-2 border-primary-400
                ">
                    <slot name="funcs"

                    </slot>
                </div>
            </div>
            <div class="
                p-2 h-full w-full overflow-y-auto text-primary-200 bg-highlight-600
                border-b-2 border-t-2 border-r-2 border-primary-400 hover:border-primary-500
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
  