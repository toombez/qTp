import React from "react"
import { Box } from "ink"
import MainMenu from './components/MainMenu'
import { sizes, borders } from './constants'

const App: React.FC<{}> = () => {
    return (
        <Box
            minWidth={ sizes.minWidth }
            minHeight={ sizes.minHeight }
            borderStyle={ borders.game.style }
            borderColor={ borders.game.color }
        >
            <MainMenu />
        </Box>
    )
}

export default App
export { App }
