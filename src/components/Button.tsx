import React, { useEffect } from "react"
import { Box, BoxProps, useFocus, useInput } from "ink"

interface IButtonProps extends BoxProps {
    children: React.ReactNode
    disabled?: boolean
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
}

const Button: React.FC<IButtonProps> = ({
    children,
    disabled = false,
    onClick,
    onFocus,
    onBlur,
    ...boxProps
}) => {
    const { isFocused } = useFocus()

    useEffect(() => {
        if (isFocused && onFocus) {
            onFocus()
        }
        if (!isFocused && onBlur) {
            onBlur()
        }
    }, [isFocused])
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
