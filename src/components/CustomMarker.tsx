import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import { renderToString } from 'react-dom/server';
// import { MdLocationOn } from 'react-icons/md';
// import { MdCoronavirus } from 'react-icons/md';
import { MdOutlineCoronavirus } from 'react-icons/md';

interface CustomMarkerProps {
    position: [number, number];
    country: any;
}

const customMarkerIcon = new Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(
        renderToString(<MdOutlineCoronavirus color="red" size={30} />)
    )}`,
    iconSize: [15, 15],
    iconAnchor: [5, 30],
});

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, country }) => {

    // const [darkMode, setDarkMode] = React.useState(true);

    return (
        <Marker
            position={position}
            icon={customMarkerIcon}
        >
            <Tooltip>
                <h3>{country.country}</h3>
                <p>Active Cases: {country.active}</p>
                <p>Recovered Cases: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
            </Tooltip>
        </Marker>
    );
};

export default CustomMarker;
