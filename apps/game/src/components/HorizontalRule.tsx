import { Box, Text } from "ink"
import React from "react"

interface IHorizontalRuleProps {
    width: number
    isInsideBorderedBox?: boolean
    symbol?: string
}

const HorizontalRule: React.FC<IHorizontalRuleProps> = ({
    width,
    symbol = '-',
    isInsideBorderedBox = false,
}) => {
    const _width = isInsideBorderedBox ? width : width - 2
    const _text = new Array(_width).fill(symbol).join('')

    return <Box>
        <Text>{_text}</Text>
    </Box>
}

export default HorizontalRule
export { HorizontalRule }
