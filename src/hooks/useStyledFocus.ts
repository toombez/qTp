import { TextProps, useFocus } from "ink"

type useFocusArguments = Parameters<typeof useFocus>[0]

type UseFocusStyles<T> = {
    defaultStyles?: T
    focusedStyles?: T
} & useFocusArguments

const useStyledFocus = <T>({
    defaultStyles: defaultStylesArg,
    focusedStyles: focusedStylesArg,
    ...useFocusArgs
}: UseFocusStyles<T>) => {
    const { focus, isFocused } = useFocus(useFocusArgs)

    const styles = focusedStylesArg
        ? (isFocused
            ? { ...defaultStylesArg, ...focusedStylesArg }
            : defaultStylesArg)
        : defaultStylesArg

    return {
        styles,
        isFocused,
        focus,
    }
}

export default useStyledFocus
export { useStyledFocus }
