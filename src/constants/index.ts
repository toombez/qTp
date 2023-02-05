import { IBorderStyle } from "../types"
import { colors } from '../theme'

const sizes = {
    minWidth: 80,
    minHeight: 25,
} as const

const borders = {
    game: {
        style: 'double',
        color: colors.darkCyan,
    } as IBorderStyle
} as const

const constants = {
    sizes,
    borders,
} as const

export default constants
export {
    sizes,
    borders,
}
