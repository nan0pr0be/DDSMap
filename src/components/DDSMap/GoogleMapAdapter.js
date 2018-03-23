import React, { Component } from "react";
import { View, Dimensions, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import MapView from 'react-native-maps'

const device = Dimensions.get('window');



const propTypes = {
};

const defaultProps = {
}


export default class GoogleMapAdapter extends Component {
    constructor(props) {
        super(props);
    }


    render = () => {
        const {initRegion} = this.props;
        return(
            <View>
                <Text> This is a google test view</Text>

                <MapView
                    style={styles.map}
                    initialRegion = {initRegion}
                >
                </MapView> 

          
            </View>
        );
    };

    
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
        width: device.width,
        height: device.height - 100,

        //...StyleSheet.absoluteFillObject,
    },
  });

GoogleMapAdapter.propTypes = propTypes;
GoogleMapAdapter.defaultProps = defaultProps;