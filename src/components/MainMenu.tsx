import React from 'react'
import { Box } from 'ink'
import Logo from './Logo'

const MainMenu: React.FC = () => {
    return <Box
        width="100%"
        height="100%"
        justifyContent='center'
    >
        <Logo></Logo>
    </Box>
}

export default MainMenu
export { MainMenu }
