import { Tool, Path } from 'paper';

//create the tool
const tool = new Tool();

//define tool properties
var rectangle;
var start;
tool.minDistance = 10;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    start = event.point;
}

tool.onMouseUp = function(event) {
    //complete the rectangle when the mouse is released
    rectangle = new Path.Rectangle(start, event.point);
    rectangle.strokeColor = 'black';
    console.log(rectangle, "rectangle");
}

export default tool;