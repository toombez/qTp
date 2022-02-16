import { Point } from './types';

export default abstract class AbstractComponent {
    constructor(private width: number = 1, 
                private height: number = 1) {}

    public get Height() {
        return this.height;
    }
    public set Height(value: number) {
        if (value <= 0) throw new RangeError('The value is less than or equal to 0');
        this.height = value;
    }
    public get Width() {
        return this.width;
    }
    public set Width(value: number) {
        if (value <= 0) throw new RangeError('The value is less than or equal to 0');
        this.width = value;
    }

    /** TODO (fix)
     *  Component now can overlap and override each other
     */
    public components = new Map<Point, AbstractComponent>();
    public addComponent(component: AbstractComponent, point: Point): this {
        const xComponentOverflow: boolean = point.x + component.Width > this.width;
        const yComponentOverflow: boolean = point.y + component.Height > this.height;

        if (xComponentOverflow || yComponentOverflow) 
        throw RangeError('Child component bigger than parent');

        this.components.set(point, component);
        return this;
    }
}