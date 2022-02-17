import AbstractComponent from "./AbstractComponent";
import { ExecuteControl } from './types';

export default class ControlComponent extends AbstractComponent {
    public controls = new Map<string, ExecuteControl>();
    public addControl(sequince: string, execute: ExecuteControl): this {
        this.controls.set(sequince, execute);
        return this;
    }
}