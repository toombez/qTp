import React from 'react'
import BigText from 'ink-big-text'
import Gradient from 'ink-gradient'
import colors from '../theme/colors'

const Logo: React.FC = () => {
    return <Gradient
        colors={[colors.cyan, colors.yellow, colors.red]}
    >
        <BigText text='qTp' font='3d' />
    </Gradient>
}

export default Logo
export { Logo }
