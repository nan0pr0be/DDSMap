import GoogleMapAdapter from './GoogleMapAdapter';
import MapboxAdapter from './MapboxAdapter';

export default class MapFactory {
    generateMap = (mapType) => {
        if (!mapType) {
            return null;
        }
        switch (mapType) {
            case 'google':
                return GoogleMapAdapter;
            case 'mapbox':
                return MapboxAdapter;
            default: return new GoogleMapAdapter();
        }
    }
}