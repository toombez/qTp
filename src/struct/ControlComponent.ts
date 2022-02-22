import GroupComponent from "./GroupComponent";
import { ExecuteControl } from "./types";

export default class ControlComponent extends GroupComponent {
    static activeComponent: ControlComponent;
    static setActive(component: ControlComponent) {
        this.activeComponent = component;
    }

    constructor(width?: number, height?: number) {
        super(width, height);
    }

    public controls: Map<string, Function> = new Map<string, Function>();
    public addControl(controlSequence: string, execute: Function): this {
        this.controls.set(controlSequence, execute);
        return this
    }
}