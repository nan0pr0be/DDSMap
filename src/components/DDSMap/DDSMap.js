import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import MapFactory from './MapFactory';
const device = Dimensions.get('window');

const DEFAULT_LAT = 49.28026247935471;
const DEFAULT_LNG = -123.12400393188001;
const DEFAULT_LAT_DELTA = 0.025;
const DEFAULT_LNG_DELTA = 0.015;

const propTypes = {
    markers: PropTypes.array,
    fitToMarkers: PropTypes.array,
    fitToReadion: PropTypes.object,
    mapViewState: PropTypes.string,   // '3D', '2D'
    routes: PropTypes.array,
    scrollEnabled: PropTypes.bool,
    showsUserLocation: PropTypes.bool,
    zoomEnabled: PropTypes.bool,
    initialRegion: PropTypes.object,
    mapHeight: PropTypes.number,
    mapWidth: PropTypes.number,
    mapSource: PropTypes.string,    // 'google', 'mapbox'

};

const defaultProps = {
    mapHeight: device.height,
    mapWidth: device.width,
    initialRegion: {
        latitude: DEFAULT_LAT,
        longitude: DEFAULT_LNG,
        latitudeDelta: DEFAULT_LAT_DELTA,
        longitudeDelta: DEFAULT_LNG_DELTA,
    },
    mapSource: 'google',
}


export default class DDSMap extends Component {
    constructor(props) {
        super(props);
    }


    render = () => {
        const {mapSource} = this.props;

        const factory = new MapFactory();
        const Map = factory.generateMap(mapSource);
        return <Map/>;
    }

    
}
DDSMap.propTypes = propTypes;
DDSMap.defaultProps = defaultProps;
