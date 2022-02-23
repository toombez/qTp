import stripAnsi from "strip-ansi";
import AbstractComponent from "./AbstractComponent";

export default class TextComponent extends AbstractComponent {
    constructor(private text: string = '') {
        super(text.length, 1);
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
    public get Text() {
        return this.text;
    }
    public set Text(value: string) {
        this.text = value;
        this.Width = this.Width;
    }
}