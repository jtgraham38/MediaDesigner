import { Path } from 'paper';
import EditorTool from '../editorTool';


//create the tool
const tool = new EditorTool("Circle", "circle");

//define tool properties
var circle;
var midpoint;
tool.minDistance = 10;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    midpoint = event.point;
}

tool.onMouseUp = function(event) {
    //complete the rectangle when the mouse is released
    const radius = Math.sqrt(Math.pow(event.point.x - midpoint.x, 2) + Math.pow(event.point.y - midpoint.y, 2));

    circle = new Path.Circle(midpoint, radius);
    circle.strokeColor = 'black';
    console.log(circle, "circle");
}

export default tool;