import { Path } from 'paper';
import EditorTool from '../editorTool';
import useFillColor from '../mixins/fillColor';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';


//create the tool
const tool = new EditorTool("Circle", "circle");

//define the features the tool supports
tool.addMixin(useFillColor);
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth);

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
    circle.strokeColor = this.strokeColor;
    circle.fillColor = this.fillColor;
    circle.strokeWidth = this.strokeWidth;
}


export default tool;