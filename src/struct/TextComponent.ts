import stripAnsi from "strip-ansi";
import AbstractComponent from "./AbstractComponent";

export default class TextComponent extends AbstractComponent {
    constructor(private text: string = '', width?: number) {
        super();
        this.Width = width? width: this.text.length;
        super.Height = width? Math.ceil(this.text.length / width): 1;
    }

    public get Width() {
        return super.Width;
    }
    public set Width(value: number) {
        super.Width = value;
        super.Height = Math.ceil(this.text.length / value);
    }
    public get Height() {
        return super.Height;
    }
    public set Height(value: number) {
        super.Height = value;
        super.Width = Math.ceil(this.text.length / value)        
    }
}