import { Tool } from 'paper'

//a class extending paper's Tool class that contains helper attributes for the editor
export default class EditorTool extends Tool {
    constructor(name, icon) {
        super()
        this.name = name
        this.icon = icon
        this._toolMixins = []
    }

    //add a mixin to the tool (only used by mixins)
    addMixin(mixin) {
        this._toolMixins.push(mixin.toolId);
        Object.assign(this, mixin)
    }
}