import pen from './draw/pen'
import rectangle from './shapes/rectangle'

//define tools for the drawing tabe
const drawTools = [
    pen,
    rectangle
]

//define tools for the editing tab
const editTools = [
    pen,
    rectangle
]

//todo: add more tools

//export collections of tools
export {
    drawTools,
    editTools
}