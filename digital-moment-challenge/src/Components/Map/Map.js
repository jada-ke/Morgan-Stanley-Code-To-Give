import React, {Component} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import{Icon} from "leaflet";
import { styles} from "./styles.css";

export class Map extends Component {

    render (){
        return(
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                        crossorigin="" />
            </head>
            <MapContainer center={[45.4, -75.7]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[45.42, -75.69]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>  
        </>
        )
    }
}

export default Map