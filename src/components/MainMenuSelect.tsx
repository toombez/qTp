import { Text, useApp } from 'ink'
import SelectInput, { IndicatorProps, ItemProps } from 'ink-select-input'
import React from 'react'

import { colors } from '../theme'
import { useNavigate } from 'react-router'
import { Item } from 'ink-select-input/build/SelectInput'

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
    const navigate = useNavigate()
    const app = useApp()

    const onSelect = (item: Item<string>) => {
        if (item.value === 'exit') {
            app.exit()
        }

        navigate(item.value)
    }
    
    return <SelectInput
        items={[
            { label: 'Новая игра', value: '/new' },
            { label: 'Загрузить игру', value: '/load' },
            { label: 'Настройки', value: '/settings' },
            { label: 'Выйти', value: 'exit' },
        ]}
        indicatorComponent={ Indicator }
        itemComponent={ Item }
        initialIndex={ 0 }
        isFocused={ true }
        onSelect={onSelect}
    />
}

export default MainMenuSelect
export { MainMenuSelect }
