import { Box } from "ink"
import React, { useState } from "react"
import { useNavigate } from "react-router"
import TextButton, { ITextButtonProps } from "./TextButton"

interface IMapButtonProps {
    text: ITextButtonProps['text']
    onClick?: ITextButtonProps['onClick']
}

const MapButton: React.FC<IMapButtonProps> = ({
    text,
    onClick,
}) => {
    return <TextButton
        text={ text }
        onClick={ onClick }
        focusedTextProps={{
            underline: true,
        }}
        boxProps={{
            borderStyle: 'bold',
            justifyContent: 'center'
        }}
    />
}

interface IMapProps {
    children?: React.ReactNode
}

const Map: React.FC<IMapProps> = ({
    children,
}) => {
    const navigate = useNavigate()

    return <Box flexDirection="row">
        <Box width='70%'>
            { children }
        </Box>
        <Box
            width='30%'
            borderStyle="round"
            flexDirection="column"
            paddingLeft={2}
            paddingRight={2}
            paddingTop={1}
            paddingBottom={1}
            justifyContent={'space-between'}
        >
            <Box flexDirection="column">
                <MapButton
                    text="Инвентарь"
                    onClick={() => {
                        navigate('/inventory')
                    }}
                />
                <MapButton
                    text="Колода"
                    onClick={() => {
                        navigate('/deck')
                    }}
                />
            </Box>
            <MapButton
                text="Меню"
                onClick={() => {
                    navigate('/')
                }}
            />
        </Box>
    </Box>
}

export default Map
export { Map }
