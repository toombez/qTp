import { useFocus } from "ink"

type useFocusProps = Parameters<typeof useFocus>[0]

type UseFocusStyles<T> = {
    defaultStyles?: T
    focusedStyles?: T
} & useFocusProps

const useStyledFocus = <T>({
    defaultStyles: defaultStylesProp,
    focusedStyles: focusedStylesProp,
    ...useFocusProps
}: UseFocusStyles<T> = {}) => {
    const { focus, isFocused } = useFocus(useFocusProps)

    const styles = focusedStylesProp
        ? (isFocused
            ? { ...defaultStylesProp, ...focusedStylesProp }
            : defaultStylesProp)
        : defaultStylesProp

    return {
        styles,
        isFocused,
        focus,
    }
}

export default useStyledFocus
export { useStyledFocus }
