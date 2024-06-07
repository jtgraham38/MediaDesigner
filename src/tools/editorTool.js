import { Tool } from 'paper'

//a class extending paper's Tool class that contains helper attributes for the editor
export default class EditorTool extends Tool {
    constructor(name, icon) {
        super()
        this.name = name
        this.icon = icon
    }
}