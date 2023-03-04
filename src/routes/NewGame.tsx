import { Box, Text } from 'ink'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import TextInput from 'ink-text-input'

const PROFILE_LENGTH = 3

const NewGame: React.FC = () => {
    const navigate = useNavigate()
	const [saveProfileName, setSaveProfileName] = useState('');

    function onChangeHandle(value: string) {
        if (value.length > PROFILE_LENGTH) {
            return
        }

        setSaveProfileName(value)
    }

    async function onSubmitHandler() {
        navigate('/')
    }

    return <Box
        justifyContent='center'
        alignItems='center'
        width='100%'
    >
        <Box width={40} borderStyle='bold' padding={1}>
            <Text>Profile name: </Text>
            <TextInput
                value={saveProfileName}
                onChange={onChangeHandle}
                placeholder={`${PROFILE_LENGTH} symbols max`}
                showCursor={true}
                onSubmit={onSubmitHandler}
            />
        </Box>
    </Box>
}

export default NewGame
export { NewGame }
