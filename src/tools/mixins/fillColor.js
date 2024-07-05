import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool.toolId = "fillColor";

tool.setFillColor = function(color) {
    this.fillColor = color;
}

export default tool;