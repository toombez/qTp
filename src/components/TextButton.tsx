import { Text, TextProps } from "ink"
import React, { createRef, useState } from "react"
import Button, { IButtonProps } from "./Button"

interface ITextButtonProps extends IButtonProps {
    text: string
    textProps?: TextProps
    focusedTextProps?: TextProps
}

const TextButton: React.FC<ITextButtonProps> = ({
    text,
    textProps,
    focusedTextProps,
    onBlur: onButtonBlur,
    onFocus: onButtonFocus,
    ...buttonProps
}) => {
    const [_textProps, _setTextProps] = useState(textProps)

    function _onFocus() {
        _setTextProps({ ...textProps, ...focusedTextProps})

        if (!onButtonFocus) {
            return
        }

        onButtonFocus()
    }

    function _onBlur() {
        _setTextProps(textProps)

        if (!onButtonBlur) {
            return
        }

        onButtonBlur()
    }

    return <Button
        { ...buttonProps }
        onFocus={ _onFocus }
        onBlur={ _onBlur }
    >
        <Text { ..._textProps }>
            { text }
        </Text>
    </Button>
}

export default TextButton
export { TextButton }
