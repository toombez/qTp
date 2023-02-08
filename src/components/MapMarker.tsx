import { Box, BoxProps, Text, useFocus, useInput } from "ink"
import React, { useEffect, useState } from "react"
import theme from "../theme"
import HorizontalRule from "./HorizontalRule"

interface IMapMarkerInfoButtonProps {
    text: string
    boxProps?: BoxProps
    onPressed?: () => void
}

type MapMarkerInfoButtonPrefix = '>' | ' '
type MapMarkerInfoButtonSuffix = '<' | ' '

const MapMarkerInfoButton: React.FC<IMapMarkerInfoButtonProps> = ({
    text,
    boxProps,
    onPressed,
}) => {
    const [prefix, setPrefix] = useState<MapMarkerInfoButtonPrefix>(' ')
    const [suffix, setSuffix] = useState<MapMarkerInfoButtonSuffix>(' ')

    function buttonInterval() {
        const interval = setInterval(() => {
            setPrefix((v) => v === '>' ? ' ' : '>')
            setSuffix((v) => v === '<' ? ' ' : '<')
        }, 1000)

        return () => clearInterval(interval)
    }

    useInput((_, key) => {
        const isEnterPressed = key.return

        if (isEnterPressed && onPressed) {
            onPressed()
        }
    })

    useEffect(buttonInterval, [])

    return <Box
        { ...boxProps }
        justifyContent="center"
    >
        <Text>
            { prefix } { text } { suffix }
        </Text>
    </Box>
}

interface IMapMarkerInfoProps {
    name: string
    description: string
    onButtonPressed?: () => void
}

const MapMarkerInfo: React.FC<IMapMarkerInfoProps> = ({
    description,
    name,
    onButtonPressed,
}) => {
    const WIDTH = 30

    return <Box
        width={ WIDTH }
        marginLeft={ 2 }
        marginTop={ -2 }
        position="absolute"
        flexDirection='column'
        borderStyle="round"
    >
        <Text color={theme.colors.yellow}>
            *{ name }
        </Text>
        <HorizontalRule width={ WIDTH } />
        <Box paddingLeft={ 1 }>
            <Text>{ description }</Text>
        </Box>

        <MapMarkerInfoButton
            text="отправиться"
            onPressed={ onButtonPressed }
            boxProps={{ marginTop: 1 }}
        />
    </Box>
}

interface IMapMarkerProps extends Omit<IMapMarkerInfoProps, 'onButtonPressed'> {
    boxProps?: BoxProps
    onSelect?: () => void
}

const MapMarker: React.FC<IMapMarkerProps> = ({
    boxProps,
    onSelect,
    ...infoProps
}) => {
    const { isFocused } = useFocus()

    return <Box
        { ...boxProps }
    >
        <Text>{ isFocused ? 'x' : 'o' }</Text>
        { isFocused &&
            <Box>
                <Text> &#60;</Text>
                <MapMarkerInfo
                    onButtonPressed={onSelect}
                    { ...infoProps }
                />
            </Box>
        }
    </Box>
}

export default MapMarker
export { MapMarker }
