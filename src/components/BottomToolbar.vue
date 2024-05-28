<template>
    <div class="">
        <div class="flex flex-col space-y-2 h-full">
            <HorizontalTabView>
                <template #tabs>
                    <HorizontalTab :tabId="1" @tabChanged="activeTab = $event" :activeTab="activeTab">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                        </svg>

                        <span class="cursor-default">Layers</span>
                    </HorizontalTab>
                    <HorizontalTab :tabId="2" @tabChanged="activeTab = $event" :activeTab="activeTab">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path d="M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z" />
                            <path d="M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z" />
                        </svg>

                        <span class="cursor-default">Animation</span>
                    </HorizontalTab>
                </template>

                <template #content>
                    activeTab: {{ activeTab }}
                </template>
            </HorizontalTabView>
        </div>
    </div>
    
</template>
  
<script setup>
import { ref } from 'vue';
import HorizontalTabView from './HorizontalTabView.vue';
import HorizontalTab from './HorizontalTab.vue';

//track the active tab
const activeTab = ref(1)

</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  