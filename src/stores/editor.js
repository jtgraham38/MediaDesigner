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
            //TODO: copy settings from previous tool to new tool
            this.paper.tool = tool
        },
        setToolProperty(property, value){
            this.paper.tool[property] = value
        }
    },
})