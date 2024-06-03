import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
    state: () => {
            return { count: 0 }
      },
    actions: {
        increment() {
            this.count++
        },
    },
})