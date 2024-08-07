import { Path } from 'paper';
import EditorTool from '../editorTool';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';
import useStrokeCap from '../mixins/strokeCap';
import useDashArray from '../mixins/dashArray';

//create the tool
const tool = new EditorTool("Pen", "pen");

//define the features the tool supports
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth)
tool.addMixin(useStrokeCap)
tool.addMixin(useDashArray)

//define tool properties
var path;
tool.minDistance = 5;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    path = new Path();
    path.add(event.point);
    path.strokeColor = tool.strokeColor;
    path.strokeWidth = tool.strokeWidth;
    path.strokeCap = tool.strokeCap;
    path.dashArray = tool.dashArray;
}

tool.onMouseDrag = function(event) {
    //add a point to the path every time the mouse is dragged
    path.add(event.point);
}

tool.onMouseUp = function(event) {
    //complete the path when the mouse is released
    path.simplify();
    path.smooth();
}

export default tool;