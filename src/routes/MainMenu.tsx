import React from 'react'
import { Box, Text } from 'ink'
import Logo from '../components/Logo'
import SelectInput from 'ink-select-input'
import MainMenuSelect from '../components/MainMenuSelect'

const MainMenu: React.FC = () => {
    return <Box
        width="100%"
        height="100%"
        flexDirection='column'
        >
        <Box
            justifyContent='center'
            marginBottom={2}
        >
            <Logo></Logo>
        </Box>
        <Box
            paddingLeft={10}
        >
            <MainMenuSelect />
        </Box>
    </Box>
}

export default MainMenu
export { MainMenu }
