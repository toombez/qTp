import AbstractComponent from "./AbstractComponent";
import { Point } from "./types";

export default class GroupComponent extends AbstractComponent {
    private components: Map<Point, AbstractComponent> = new Map<Point, AbstractComponent>();
    public addComponent(component: AbstractComponent, point: Point) {
        if (this === component) {
            throw new IncorrectComponentError('Cannot add self into child components');
        }
        this.components.set(point, component);
    }
}

class IncorrectComponentError extends Error {
    constructor(message?: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}