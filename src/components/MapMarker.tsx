import { Box, BoxProps, Text, useFocus } from "ink"
import React, { useEffect, useState } from "react"
import theme from "../theme"
import TextButton from "./TextButton"

interface IMapMarkerInfoProps {
    name: string
    description: string
}

interface IMapMarkerProps extends IMapMarkerInfoProps {
    boxProps?: BoxProps,
}

type MapMarkerInfoSuffix = '<' | ' '
type MapMarkerInfoPrefix = '>' | ' '

const MapMarkerInfo: React.FC<IMapMarkerInfoProps> = ({
    description,
    name,
}) => {
    const WIDTH = 30

    const [suffix, setSuffix] = useState<MapMarkerInfoSuffix>(' ')
    const [prefix, setPrefix] = useState<MapMarkerInfoPrefix>(' ')
    const [isUnderlined, setIsUnderlined] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setSuffix((v) => v === '<' ? ' ' : '<')
            setPrefix((v) => v === '>' ? ' ' : '>')
            setIsUnderlined(v => !v)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return <Box
        width={WIDTH}
        flexDirection='column'
        borderStyle="round"
        position="absolute"
        marginLeft={1}
    >
        <Box
        >
            <Text color={theme.colors.yellow}>
                *{ name }
            </Text>
        </Box>
        <Box>
            <Text>{new Array(WIDTH - 2).fill('-').join('')}</Text>
        </Box>
        <Box
            paddingLeft={1}
        >
            <Text>
                { description }
            </Text>
        </Box>
        <Box
            borderStyle="double"
            justifyContent="center"
            marginTop={1}
            marginLeft={1}
            marginRight={1}
        >
            <Text underline={isUnderlined}>
                {' '}{prefix} посетить { suffix }{' '}
            </Text>
        </Box>
    </Box>
}


const MapMarker: React.FC<IMapMarkerProps> = ({
    boxProps,
    ...infoProps
}) => {
    const { isFocused } = useFocus()

    return <Box
        { ...boxProps }
    >
        <Text>x</Text>
        { isFocused &&
            <Box>
                <Text>-</Text>
                <MapMarkerInfo {
                    ...infoProps
                } />
            </Box>
        }
    </Box>
}

export default MapMarker
export { MapMarker }
