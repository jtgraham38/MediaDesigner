import { Path } from 'paper';
import EditorTool from '../editorTool';
import useFillColor from '../mixins/fillColor';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';
import useStrokeJoin from '../mixins/strokeJoin';


//create the tool
const tool = new EditorTool("Rectangle", "rectangle");

//define the features the tool supports
tool.addMixin(useFillColor);
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth);
tool.addMixin(useStrokeJoin);


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
    rectangle.strokeColor = tool.strokeColor;
    rectangle.fillColor = tool.fillColor;
    rectangle.strokeWidth = tool.strokeWidth;
    rectangle.strokeJoin = tool.strokeJoin;
}

export default tool;