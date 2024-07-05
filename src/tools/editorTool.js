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
        this._toolMixins.push(mixin._toolMixinId);
        Object.assign(this, mixin)
    }

    //check if the tool supports a mixin
    supportsMixin(desired) {
        //they are all string keys
        this._toolMixins.forEach((found) => {
            if (desired == found){
                console.log("found")
                return true
            }
        })
        console.log("not found")
        return false
    }
}