import React from "react"
import { Box, BoxProps, useFocus, useInput } from "ink"

interface IButtonProps extends BoxProps {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
}

const Button: React.FC<IButtonProps> = ({
    children,
    disabled = false,
    onClick,
    ...boxProps
}) => {
    const { isFocused } = useFocus()

    const canBeClicked = !disabled && isFocused

    useInput((_, key) => {
        const enterPressed = key.return
        const onClickDefined = onClick !== undefined

        if (enterPressed && onClickDefined) {
            onClick()
        }
    }, { isActive: canBeClicked })

    return <Box { ...boxProps } >
        { children }
    </Box>
}

export default Button
export { Button }
