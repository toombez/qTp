/**
 * Pool for data
 */
export default class Pool<T> {
    /**
     * Pool size
     */
    public get size() {
        return this.items.length
    }

    /**
     * Is empty pool
     */
    public get isEmpty() {
        return this.items.length === 0
    }

    /**
     * Last pool item
     */
    public get last() {
        return this.items[this.items.length - 1]
    }

    /**
     * First pool item
     */
    public get first() {
        return this.items[0]
    }

    constructor(
        private items: T[]
    ) {}

    /**
     * Add item to pool
     * @param items item to add to pool
     */
    public add(...items: T[]) {
        this.items.push(...items)
    }

    /**
     * Delete item from pool
     * @param targetItem item to delete
     */
    public delete(targetItem: T) {
        this.items = this.items.filter(item => item !== targetItem)
    }

    /**
     * Clear pool
     */
    public clear() {
        this.items = []
    }

    /**
     * Shuffle pool
     */
    public shuffle() {
        this.items = this.items.sort(this.shuffleSort)
    }

    /**
     * Pick one item from pool
     * @returns random item from pool
     */
    public pick() {
        const index = this.getRandomIndex()
        return this.items[index]
    }

    /**
     * Callback for shuffle sorting function
     * @returns random number between `-0.5` and `0.5`
     */
    private shuffleSort() {
        return Math.random() - 0.5
    }

    /**
     * Get random item index
     * @returns random items index
     */
    private getRandomIndex() {
        return Math.floor(Math.random() * this.items.length)
    }
}
