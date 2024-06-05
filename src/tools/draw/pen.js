import { Tool, Path } from 'paper';

//create the tool
const tool = new Tool();

//define tool properties
var path;
tool.minDistance = 10;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    path = new Path();
    path.add(event.point);
    path.strokeColor = 'black';
}

tool.onMouseDrag = function(event) {
    //add a point to the path every time the mouse is dragged
    path.add(event.point);
}

export default tool;