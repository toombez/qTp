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

    public controls = new Map<string, ExecuteControl>();
    public addControl(sequince: string, execute: ExecuteControl): this {
        this.controls.set(sequince, execute);
        return this;
    }
}