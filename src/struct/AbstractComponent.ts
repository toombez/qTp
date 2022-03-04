import { IncorrectComponentSizeError } from "../common/errors";

export default abstract class AbstractComponent {
    constructor(
        private width: number = 1,         
        private height: number = 1
    ) {}

    public get Height() {
        return this.height;
    }
    public set Height(value: number) {
        if (value <= 0) {
            throw new IncorrectComponentSizeError('Height must be more than 0');
        }
        this.height = value;
    }
    public get Width() {
        return this.width;
    }
    public set Width(value: number) {
        if (value <= 0) {
            throw new IncorrectComponentSizeError('Width must be more than 0');
        }
        this.width = value;
    }
}