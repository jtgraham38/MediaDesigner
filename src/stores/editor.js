import { defineStore } from 'pinia'
import { inspector } from '../tools'

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
            //temporarily set settings of paper
            paper.settings.hitTolerance = 3
            paper.settings.handleSize = 8
            paper.settings.applyMatrix = true
            paper.settings.insertItems = true

            this.paper = paper
            this.setActiveTool(inspector)
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

            //reset all tool properties to defaults
            this.paper.tool.reset()
        },
        setToolProperty(property, value){
            this.paper.tool[property] = value
        }

    },
})