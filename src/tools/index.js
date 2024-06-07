import pen from './draw/pen'
import rectangle from './shapes/rectangle'
import circle from './shapes/circle'

//define tools for the drawing tabe
const drawTools = [
    pen
]

//define tools for the editing tab
const shapeTools = [
    rectangle,
    circle
]

//todo: add more tools

//export collections of tools
export {
    drawTools,
    shapeTools
}