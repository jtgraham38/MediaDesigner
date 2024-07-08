import ToolMixin from './baseToolMixin'

const tool = new ToolMixin();

tool._toolMixinId = "strokeJoin";

tool.setStrokeJoinnction = function(join) {
    this.strokeJoin = join;
}

export default tool;