import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Columns from './Columns';
import XAxis from './xAxis';
import YAxis from './yAxis';

export default function Graph( ) {

    const color = '#FDC913';

    const data = [
      {"duration": 4, column: 0},
      {"duration": 7, column: 1},
      {"duration": 6, column: 2},
      {"duration": 7, column: 3},
      {"duration": 8, column: 4},
      {"duration": 5, column: 5},
      {"duration": 10, column: 6},
    ];
    let width = Dimensions.get('screen').width;
    // let yAxisHeight = 325;
    let xAxisHeight = 30;
    let barsHeight = 315;

    return (
        <View style={styles.main}>
            {/* <YAxis
                height={yAxisHeight}
                width={width} /> */}

            <Columns
                data={data}
                width={width - 10}
                height={barsHeight}
                color={color} />

            <XAxis
                width={width - 10}
                height={xAxisHeight} />
        </View>
    );
}


const styles = StyleSheet.create({
    main: {
        marginVertical: 25,
        marginHorizontal: 0,
    }
});