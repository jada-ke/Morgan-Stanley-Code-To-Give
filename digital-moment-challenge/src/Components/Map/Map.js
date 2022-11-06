import React, {Component} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { ICMarker,ICPopup,ICMapContainer } from "./MapElements.js";
import { styles} from "./MapElements.js";
import '../../App.css';

export class Map extends Component {

    render (){
        return(
        <>
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                    crossorigin="" 
                />
            </head>
            <ICMapContainer center={[0,0]} zoom={2} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <ICMarker position={[45.42, -75.69]}>
                <ICPopup>
                `<div>
                    Title
                 </div>
                 <div>
                  Text  
                 </div>HeyTest popup
                </ICPopup>
                </ICMarker>
            </ICMapContainer>  
        </>
        )
    }
}

export default Map