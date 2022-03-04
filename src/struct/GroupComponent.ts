import AbstractComponent from "./AbstractComponent";
import { Point } from "../common/types";
import { IncorrectComponentSizeError } from "../common/errors";

export default class GroupComponent extends AbstractComponent {
    private components: Map<Point, AbstractComponent> = new Map<Point, AbstractComponent>();
    public addComponent(component: AbstractComponent, point: Point) {
        if (this === component) {
            throw new IncorrectComponentSizeError('Cannot add self into child components');
        }
        this.components.set(point, component);
    }
}