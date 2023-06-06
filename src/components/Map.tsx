import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { getCountriesData } from '../utils/api';
import { type LatLngExpression } from 'leaflet';

import CustomMarker from './CustomMarker';
import Card from '../globalComponent/Card';
import { darkMap, lightMap } from '../constants/mapUrl';
import { useSelector } from 'react-redux';
import { appState } from '../types/type';


const centerOfMyloc: LatLngExpression = [0, 0];


const Map = () => {
    const { data: countriesData, isLoading } = useQuery('countriesData', getCountriesData);
    const { darkMode } = useSelector((state: appState) => state);
    const [mapUrl, setMapUrl] = useState('');

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
    });

    useEffect(() => {
        setMapUrl(darkMode ? darkMap : lightMap)
    }, [darkMode]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Card children={
            <MapContainer
                style={{ height: '70vh', width: `${screenWidth > 425 ? '40vw' : '85vw'}`, border: '0px solid black', borderRadius: '10px', zIndex: '1' }}
                center={centerOfMyloc}
                zoom={1}
                bounds={[[90, -180], [-90, 180]]}
            >
                <TileLayer
                    url={mapUrl}
                    noWrap={true}
                />
                {countriesData.map((country: any) => (
                    <CustomMarker
                        key={country.country}
                        position={[country.countryInfo.lat, country.countryInfo.long]}
                        country={country}
                    />
                ))}
            </MapContainer>
        }
            title={'World Map on covid-19'}
        />
    );
};

export default Map;