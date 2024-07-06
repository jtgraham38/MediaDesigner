import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool._toolMixinId = "strokeCap";

tool.setStrokeCap = function(cap) {
    this.strokeCap = cap;
}

export default tool;