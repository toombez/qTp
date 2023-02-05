import { Text } from 'ink'
import SelectInput, { IndicatorProps, ItemProps } from 'ink-select-input'
import React from 'react'

import { colors } from '../theme'

// type indicatorColors = typeof colors.white | typeof colors.green

const Indicator: React.FC<IndicatorProps> = ({ isSelected }) => {
    return <Text color={isSelected ? colors.red : colors.white }>
        { isSelected ? '● ' : '◯ ' }
    </Text>
}

const Item: React.FC<ItemProps> = ({ isSelected, label }) => {
    return <Text
        underline={ isSelected }
        color={ isSelected ? colors.yellow : colors.white }
    >
        { label }
    </Text>
}

const MainMenuSelect: React.FC = () => {
    return <SelectInput
        items={[
            { label: 'Новая игра', value: 0 },
            { label: 'Загрузить игру', value: 1 },
            { label: 'Настройки', value: 2 },
            { label: 'Выйти', value: 3 },
        ]}
        indicatorComponent={ Indicator }
        itemComponent={ Item }
        initialIndex={ 0 }
        isFocused={ true }
    />
}

export default MainMenuSelect
export { MainMenuSelect }
