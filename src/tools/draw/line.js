import { Path } from 'paper';
import EditorTool from '../editorTool';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';
import useStrokeCap from '../mixins/strokeCap';

//create the tool
const tool = new EditorTool("Line", "line");

//define the features the tool supports
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth)
tool.addMixin(useStrokeCap)

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
}

tool.onMouseDrag = function(event) {
    //add a point to the path every time the mouse is dragged
    if (line.segments.length > 1) line.removeSegment(line.segments.length - 1);
    line.add(event.point);
}

export default tool;