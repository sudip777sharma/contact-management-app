import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    Tooltip,
    Legend,
    BarElement,
    ChartOptions,
    LogarithmicScale,
} from 'chart.js'
import cssColor from '../constants/cssColor';
import barData from '../constants/barData';
import Card from '../globalComponent/Card';
ChartJs.register(
    BarElement,
    LogarithmicScale,
    Tooltip,
    Legend,
);

const BarChart = () => {

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
    });

    const logarithmicData = Object.values(barData).map((value) => {
        return Math.log(value);
        // return (value);
    });
    const data = {
        labels: Object.keys(barData),
        datasets: [
            {
                label: 'data',
                data: logarithmicData,
                backgroundColor: cssColor,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        scales: {
            y: {
                type: 'linear',
                beginAtZero: true,
            },
        },
    };

    return (
        <Card children={
            <Bar
                style={{ height: '100vh', width: `${screenWidth > 425 ? '40vw' : '85vw'}`, border: '1px solid black', borderRadius: '10px' }}
                data={data}
                options={options}
            />
        }
            title={'World Data on covid-19'}
        />
    );
};

export default BarChart;
