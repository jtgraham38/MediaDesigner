import { Path } from 'paper';
import EditorTool from '../editorTool';
import useFillColor from '../mixins/fillColor';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';

//create the tool
const tool = new EditorTool("Oval", "oval");

//define the features the tool supports
tool.addMixin(useFillColor);
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth);

//define tool properties
var oval;
var start;
tool.minDistance = 1;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    start = event.point;
    oval = new Path.Oval(start, start);
}

tool.onMouseDrag = function(event) {
    //complete the rectangle when the mouse is released
    oval.remove();
    oval = new Path.Oval(start, event.point);
    oval.strokeColor = tool.strokeColor;
    oval.fillColor = tool.fillColor;
    oval.strokeWidth = tool.strokeWidth;
}

export default tool;