type LocationType = 'fight'

interface LocationRaw {
    name: string
    type: LocationType
    description: string
}

export abstract class Location {
    constructor(
        public readonly name: string,
        public readonly type: LocationType,
        public readonly description: string,
    ) {}
}
