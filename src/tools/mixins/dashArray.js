import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool._toolMixinId = "dashArray";

tool.setDashArray = function(dashArray) {
    this.dashArray = dashArray;
}

export default tool;