import { Path } from 'paper';
import EditorTool from '../editorTool';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';
import useStrokeCap from '../mixins/strokeCap';
import useDashArray from '../mixins/dashArray';

//create the tool
const tool = new EditorTool("Line", "line");

//define the features the tool supports
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth)
tool.addMixin(useStrokeCap)
tool.addMixin(useDashArray)

//define tool properties
var line;
var endpoint;
tool.minDistance = 1;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    line = new Path();
    line.add(event.point);
    line.strokeColor = tool.strokeColor;
    line.strokeWidth = tool.strokeWidth;
    line.strokeCap = tool.strokeCap;
    line.dashArray = tool.dashArray;
    console.log("dash array", tool.dashArray)
}

tool.onMouseDrag = function(event) {
    //add a point to the path every time the mouse is dragged
    if (line.segments.length > 1) line.removeSegment(line.segments.length - 1);
    line.add(event.point);
}

tool.onMouseUp = function(event) {
    //add the endpoint to the path when the mouse is released
    if (line.segments.length > 1) line.removeSegment(line.segments.length - 1);
    line.add(event.point);

    //null out line so a new one is created on the next mouse down
    line = null;
}

export default tool;