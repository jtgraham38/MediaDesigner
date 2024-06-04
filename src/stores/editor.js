import { defineStore } from 'pinia'
import { Point, Path } from 'paper'

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
            console.log("old aspect ratio", this.aspectRatio)
            this.aspectRatio = aspectRatio
            console.log("new aspect ratio", this.aspectRatio)
        },
        setCanvasSize(width, height) {
            this.paper.view.setViewSize(width, height)
        },
        //  \\  //  add paths  \\  //  \\
        addLine(args) {
            this.paper.Path.Line(args)
        },
    },
})