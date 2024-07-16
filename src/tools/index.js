import inspector from './inspector'
import pen from './draw/pen'
import line from './draw/line'
import brush from './draw/brush'
import rectangle from './shapes/rectangle'
import circle from './shapes/circle'
import oval from './shapes/oval'
import heading from './typography/heading'

//define tools for the drawing tabe
const drawTools = [
    inspector,
    pen,
    line,
    brush
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
    inspector,
    drawTools,
    shapeTools,
    typographyTools
}