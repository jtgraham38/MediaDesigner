import pen from './draw/pen'
import line from './draw/line'
import rectangle from './shapes/rectangle'
import circle from './shapes/circle'
import oval from './shapes/oval'
import heading from './typography/heading'

//define tools for the drawing tabe
const drawTools = [
    pen,
    line
]

//define tools for the editing tab
const shapeTools = [
    rectangle,
    circle,
    oval
]

//define tools for the typography tab
const typographyTools = [
    heading
]

//todo: add more tools

//export collections of tools
export {
    drawTools,
    shapeTools,
    typographyTools
}