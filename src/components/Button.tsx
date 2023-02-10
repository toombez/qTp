import React, { useEffect } from "react"
import { Box, BoxProps, useFocus, useInput } from "ink"
import useStyledFocus from "../hooks/useStyledFocus"

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
    const { isFocused, styles: _boxProps } = useStyledFocus({
        defaultStyles: boxProps,
        focusedStyles: focusedBoxProps
    })

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

    return <Box { ..._boxProps }>
        { children }
    </Box>
}

export default Button
export { Button, IButtonProps }
