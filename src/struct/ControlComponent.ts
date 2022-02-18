import AbstractComponent from "./AbstractComponent";
import { ExecuteControl } from './types';

export default class ControlComponent extends AbstractComponent {
    private static activeComponent: ControlComponent;
    public static get ActiveComponent () {
        return this.activeComponent;
    }
    public static set ActiveComponent (component) {
        this.activeComponent = component;
    }

    public static globalControls = new Map<string, ExecuteControl>();
    public static isGlobal(control: string): boolean {
        return this.globalControls.has(control);
    }

    public controls = new Map<string, ExecuteControl>();
    public addControl(
        sequence: string, 
        execute: ExecuteControl, 
        isGlobal: boolean = false
    ): this {
        if (ControlComponent.globalControls.get(sequence))
        throw new ReferenceError('This sequience already is global control');

        if (isGlobal) 
        ControlComponent.globalControls.set(sequence, execute)
        else 
        this.controls.set(sequence, execute);

        return this;
    }
}