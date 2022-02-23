import ControlComponent from "./ControlComponent";

export default class ScreenComponent extends ControlComponent {
    public canvas = Array.from(Array(24), row => Array(120).fill(' '))
    constructor() {
        /**
         * default terminal resolution for game
         * TODO (not necessary)
         * add custom resolutions or resolution break point
         * e.g 80x20, 80x30, 120x30 etc
         */
        super(120, 24);
    }

    public render(): void {
        console.clear();
        for (const screenRow of this.canvas) {
            console.log(screenRow.join(''));
        }
    }
}