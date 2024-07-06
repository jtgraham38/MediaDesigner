import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool._toolMixinId = "strokeWidth";

tool.setStrokeWidth = function(width) {
    this.strokeWidth = width;
}

export default tool;