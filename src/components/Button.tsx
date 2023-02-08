import React, { useEffect } from "react"
import { Box, BoxProps, useFocus, useInput } from "ink"

interface IButtonProps extends BoxProps {
    children: React.ReactNode
    disabled?: boolean
    focusedBox?: BoxProps
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
}

const Button: React.FC<IButtonProps> = ({
    children,
    disabled = false,
    focusedBox,
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

    const _boxProps = focusedBox
        ? (isFocused ? { ...boxProps, ...focusedBox } : boxProps)
        : boxProps

    useInput((_, key) => {
        const enterPressed = key.return
        const onClickDefined = onClick !== undefined

        if (enterPressed && onClickDefined) {
            onClick()
        }
    }, { isActive: canBeClicked })

    return <Box { ..._boxProps }>
        { children }
    </Box>
}

export default Button
export { Button }
