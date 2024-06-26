import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', {
    state: () => {
        return { 
            paper: null,
            aspectRatio: 1
        }
    },
    actions: {
        //  \\  //  setters for settings    \\  //  \\
        setPaper(paper) {
            this.paper = paper
        },
        setAspectRatio(aspectRatio) {
            this.aspectRatio = aspectRatio
        },
        setCanvasSize(width, height) {
            this.paper.view.setViewSize(width, height)
        },
        //  \\  //  add paths  \\  //  \\
        addLine(args) {
            this.paper.Path.Line(args)
        },

        //  \\  //  manage tools  \\  //  \\
        addTool(tool){
            this.paper.tools.push(tool)
        },
        setActiveTool(tool){
            this.paper.tool = tool
        }
    },
})