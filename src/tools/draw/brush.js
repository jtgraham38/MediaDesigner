import { Path } from 'paper';
import EditorTool from '../editorTool';
import useFillColor from '../mixins/fillColor';

//create the tool
const tool = new EditorTool("Brush", "brush");

//define the features the tool supports
tool.addMixin(useFillColor);

//define tool properties
var path;
tool.minDistance = 10;
tool.maxDistance = 45;

tool.onMouseDown = function(event) {
	path = new Path();
	path.fillColor = tool.fillColor;
    path.strokeColor = tool.fillColor;

	path.add(event.point);
}

tool.onMouseDrag = function(event) {
	var step = event.delta.divide(2);
	step.angle += 90;
	
	var top = event.middlePoint.add(step);
	var bottom = event.middlePoint.subtract(step);
	
	path.add(top);
	path.insert(0, bottom);
	path.smooth();
}

tool.onMouseUp = function(event) {
	path.add(event.point);
	path.closed = true;
	path.smooth();
}

export default tool;