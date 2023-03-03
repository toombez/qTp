type LocationType = 'fight'

interface LocationRaw {
    name: string
    type: LocationType
    description: string
}

export abstract class Location {
    public readonly name: string
    public readonly type: LocationType
    public readonly description: string

    constructor({
        name,
        type,
        description,
    }: LocationRaw) {
        this.name = name
        this.type = type
        this.description = description
    }
}
