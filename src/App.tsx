import React from "react"
import { Box, Text } from "ink"
import MainMenu from './components/MainMenu'
import { sizes, borders } from './constants'
import { MemoryRouter, Route, Routes } from 'react-router'
import Settings from "./routes/Settings"
import LoadGame from "./routes/LoadGame"
import NewGame from "./routes/NewGame"

const App: React.FC<{}> = () => {
    return (
        <Box
            minWidth={ sizes.minWidth }
            minHeight={ sizes.minHeight }
            borderStyle={ borders.game.style }
            borderColor={ borders.game.color }
        >
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/new" element={<NewGame />} />
                    <Route path="/load" element={<LoadGame />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </MemoryRouter>
        </Box>
    )
}

export default App
export { App }
