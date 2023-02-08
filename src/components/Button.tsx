import React, { useEffect } from "react"
import { Box, BoxProps, useFocus, useInput } from "ink"

interface IButtonProps {
    children?: React.ReactNode
    disabled?: boolean
    boxProps?: BoxProps
    focusedBoxProps?: BoxProps
    onClick?: () => void
    onFocus?: () => void
    onBlur?: () => void
}

const Button: React.FC<IButtonProps> = ({
    children,
    disabled = false,
    boxProps,
    focusedBoxProps,
    onClick,
    onFocus,
    onBlur,
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

    const _boxProps = focusedBoxProps
        ? (isFocused
            ? { ...boxProps, ...focusedBoxProps }
            : boxProps)
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
export { Button, IButtonProps }
