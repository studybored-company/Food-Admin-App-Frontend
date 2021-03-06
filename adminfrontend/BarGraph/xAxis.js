import React from 'react';
import { Surface, Group, Text} from '@react-native-community/art';

import { scaleBand } from 'd3-scale';
import moment from 'moment';




export default function xAxis({ width, height }) {
    let axisValues = this.generateValues();

    return (
        <Surface width={width} height={height}>
            <Group x={69}>
                {axisValues.days.map((item, index) => (
                    <Text
                        key={index}
                        fill="#696969"
                        x={this.getValuePosition(index, axisValues.days, width)}
                        y={0}
                        font="OpenSansSemiBold"
                        alignment='center'
                        opacity={index === 6 ? 1 : 0.6}
                    >
                        {item}
                    </Text>
                ))}

                {axisValues.nums.map((item, index) => (
                    <Text
                        key={index}
                        fill="#696969"
                        x={this.getValuePosition(index, axisValues.nums, width)}
                        y={15}
                        font="OpenSansSemiBold"
                        alignment='center'
                        opacity={index === 6 ? 1 : 0.6}
                    >
                        {item}
                    </Text>
                ))}
            </Group>
        </Surface>
    );
}

generateValues = () => {
    let days = [];
    let nums = [];
    Array(7).fill().forEach((i, index) => {
        days.push(moment().subtract(index, 'days').format('ddd'));
        // nums.push(moment().subtract(index, 'days').format('D'));
        nums.push(moment().subtract(index, 'days').format('MMM D'));
    });
    return { days: days.reverse(), nums: nums.reverse() }
}

getValuePosition = (index, values, width) => {
    let x = scaleBand().rangeRound([20, width - 75])
    x.domain(values.map(d => {
        return d;
    }));
    return x(values[index]);
}