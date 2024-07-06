import { PointText } from 'paper';
import EditorTool from '../editorTool';
import useStrokeColor from '../mixins/strokeColor';
import useStrokeWidth from '../mixins/strokeWidth';
import useFillColor from '../mixins/fillColor';


//create the tool
const tool = new EditorTool("Heading", "heading");


/*
var text = new PointText({
	justification: 'right',
	fontSize: 12,
	content: window.FileReader
		? 'drag & drop an image from your desktop to rasterize it'
		: 'to drag & drop images, please use Webkit, Firefox, Chrome or IE 10'
});
*/
//define the features the tool supports
tool.addMixin(useStrokeColor);
tool.addMixin(useStrokeWidth)
tool.addMixin(useFillColor)

//define tool properties
var text;
tool.minDistance = 10;

tool.onMouseDown = function(event) {
    //create a new path every time the mouse is clicked
    text = new PointText({
        point: event.point,
        content: 'Hello Gracie!',
        fillColor: tool.fillColor,
        strokeColor: tool.strokeColor,
        strokeWidth: tool.strokeWidth,
        fontSize: 25
    });
}

export default tool;