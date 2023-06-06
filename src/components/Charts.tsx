import React from 'react';
import { getGraphData } from '../utils/api';
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    TimeScale, // x
    LinearScale, // y 
    PointElement,
    Tooltip,
    Legend
} from 'chart.js'
import Card from '../globalComponent/Card';
ChartJs.register(
    LineElement,
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const Charts = () => {
    const { data: graphData, isLoading } = useQuery('graphData', getGraphData);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const casesChartData = {
        labels: Object.keys(graphData.cases),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(graphData.cases),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        }
    }

    const deathChartData = {
        labels: Object.keys(graphData.deaths),
        datasets: [
            {
                label: 'Deaths',
                data: Object.values(graphData.deaths),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
            },
        ],
    };

    const recoveredChartData = {
        labels: Object.keys(graphData.recovered),
        datasets: [
            {
                label: 'Recovered',
                data: Object.values(graphData.recovered),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
            },
        ],
    };

    // className='flex flex-row items-center justify-center gap-5'
    return (
        <>
            <Card children={
                <Line
                    style={{ height: '70vh', width: `${screenWidth > 425 ? '40vw' : '85vw'}`, border: '1px solid black', borderRadius: '10px', }}
                    data={casesChartData}
                    options={options} />
            }
                title={'Cases'}
            />
            <Card children={
                <Line
                    style={{ height: '70vh', width: `${screenWidth > 425 ? '40vw' : '85vw'}`, border: '1px solid black', borderRadius: '10px' }}
                    data={deathChartData}
                    options={options} />
            }
                title={'Deaths'}
            />
            <Card children={
                <Line
                    style={{ height: '70vh', width: `${screenWidth > 425 ? '40vw' : '85vw'}`, border: '1px solid black', borderRadius: '10px' }}
                    data={recoveredChartData}
                    options={options} />
            }
                title={'Recovered'}
            />
        </>
    );
};

export default Charts;
