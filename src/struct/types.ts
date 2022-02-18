import ControlComponent from "./ControlComponent";

export type Point = {x: number, y: number};

export type ExecuteControl = () => ControlComponent;

export class IncorrectComponentSizeError extends RangeError {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}