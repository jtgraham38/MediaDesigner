import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool._toolMixinId = "fillColor";

tool.setFillColor = function(color) {
    this.fillColor = color;
}

export default tool;