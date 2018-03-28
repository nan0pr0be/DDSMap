import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import PropTypes from "prop-types";


const device = Dimensions.get('window');



const propTypes = {
};

const defaultProps = {
}

export default class MapboxAdapter extends Component {
    constructor(props) {
        super(props);
    }

    

    render = () => {
        return(
            <View>
                <Text> This is a mapbox test view</Text>
            </View>
        );
    };

    
}
MapboxAdapter.propTypes = propTypes;
MapboxAdapter.defaultProps = defaultProps;