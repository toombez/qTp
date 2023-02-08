import { Box } from 'ink'
import React from 'react'
import { useNavigate } from 'react-router'
import Map from '../components/Map'
import MapMarker from '../components/MapMarker'

const NewGame: React.FC = () => {
    const navigate = useNavigate()

    return <Box>
        <Map>
            <MapMarker
                name='first'
                description='Lorem ipsum dolor sit amet consectetur.'
                boxProps={{
                    position: 'absolute',
                    marginLeft: 30,
                    marginTop: 2,
                }}
            />
            <MapMarker
                name='second'
                description='Lorem ipsum dolor sit amet consectetur.'
                boxProps={{
                    position: 'absolute',
                    marginLeft: 50,
                    marginTop: 5,
                }}
                onSelect={() => {
                    navigate('/')
                }}
            />
        </Map>
    </Box>
}

export default NewGame
export { NewGame }
