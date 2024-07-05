import { Path } from 'paper';
import EditorTool from '../editorTool';
import useStrokeColor from '../mixins/strokeColor';

//create the tool
const tool = new EditorTool("Pen", "pen");

//define the features the tool supports
tool.addMixin(useStrokeColor);

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