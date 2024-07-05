import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool._toolMixinId = "strokeColor";

tool.setStrokeColor = function(color) {
    this.strokeColor = color;
}

export default tool;