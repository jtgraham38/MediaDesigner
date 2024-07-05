import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool.toolId = "strokeColor";

tool.setStrokeColor = function(color) {
    this.strokeColor = color;
}

export default tool;