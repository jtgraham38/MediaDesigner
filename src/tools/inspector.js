import { Path } from 'paper';
import EditorTool from './editorTool';
import paper from 'paper';

//create the tool
const tool = new EditorTool("Inspector", "inspector");

//define the features the tool supports


//define tool properties
var hitResult;
var selected;

tool.onMouseDown = function(event) {
    //deselect the currently selected item
    if(selected){
        selected.selected = false;
    }

    //select the item under the mouse
    hitResult = paper.project.hitTest(event.point);
    if (hitResult?.item){
        selected = hitResult.item;
        selected.selected = true;
    }

    console.log(selected);
}

tool.onMouseDrag = function(event) {
    //move the selected item
    if(selected){
        selected.position = selected.position.add(event.delta);
    }

}

tool.onMouseUp = function(event) {
    //deselect the currently selected item
    if(selected){
        selected.selected = false;
        selected = null;
    }
}

export default tool;