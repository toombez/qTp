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
     * @returns deleted item
     */
    public delete(targetItem: T) {
        this.items = this.items.filter(item => item !== targetItem)

        return targetItem
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
     * Pick items from pool and deletes it from pool
     * @param count count to pick
     * @returns random item in array from pool
     */
    public pick(count: number = 1) {
        const picked = []

        for (let i = 0; i < count; i++) {
            const index = this.getRandomIndex()
            const item = this.items[index]

            picked.push(item)
            this.delete(item)
        }

        return picked
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
