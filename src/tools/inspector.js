import { Path } from 'paper';
import EditorTool from './editorTool';
import paper from 'paper';

//create the tool
const tool = new EditorTool("Inspector", "inspector");

//define the features the tool supports


//define tool properties
var hitResult;
var selected_path;
var selected_segment;

tool.onMouseDown = function(event) {

    //find the object that should be selected
    tool.select_canvas_entity(event.point);

    //if an item is selected, make it's properties editable
    hitResult = paper.project.hitTest(event.point);
    if(selected_path){
        console.log("hitResult.type: " + hitResult.type);
        if (hitResult.type == 'segment'){
            console.log("segment");
            this.set_selected_segment(hitResult.segment);
        }
        else if (hitResult.type == 'stroke'){
            console.log("stroke");
        }
        else if (hitResult.type == 'fill'){
            console.log("fill");
        }
    }
}

tool.onMouseDrag = function(event) {
    //if an segment is selected, move it
    if(selected_segment){
        selected_segment.point = selected_segment.point.add(event.delta);
    }
    //if an path is selected, move it
    else if(selected_path){
        selected_path.position = selected_path.position.add(event.delta);
    }

}

tool.onMouseUp = function(event) {
    //deselect the segment
    if(selected_segment){
        this.set_selected_segment(null);
    }
}

tool.select_canvas_entity = function(point){
    hitResult = paper.project.hitTest(point);

    //check if a new item was selected
    if (hitResult?.item === selected_path){
        this.set_selected_path(null);
    }

    //select the new item
    if (hitResult?.item){
        this.set_selected_path(hitResult.item);
    }
    //deselect the old item, if nothing was clicked
    else{
        this.set_selected_path(null);
    }
}

tool.set_selected_path = function(path){
    //deselect old item
    if (selected_path) selected_path.selected = false;

    //select new item
    selected_path = path;
    if (selected_path) selected_path.selected = true;
}

tool.set_selected_segment = function(segment){
    //select new segment
    selected_segment = segment;

    console.log("selected_segment: " + selected_segment);
}


export default tool;