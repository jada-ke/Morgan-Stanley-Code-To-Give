import React, {Component} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import Leaflet from 'leaflet'
import { ICMarker,ICPopup,ICMapContainer } from "./MapElements.js";
import { styles} from "./MapElements.js";
import '../../App.css';
import Demo from "./demo"

export const leafIcon = new Leaflet.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
export class Map extends Component {
    
    render (){
        
          
        var items = this.props.markers
        var challenges = this.props.challenges
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
            <ICMapContainer center={[0,0]} zoom={2} scrollWheelZoom={true} style={{width: '100%', Height : '100%'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {items.map(item =>
                    <ICMarker position={[item.lat, item.long]} >
                        <ICPopup>
                            <Demo item={item}/>
                        </ICPopup>
                    </ICMarker>
                )}
                {challenges.map(challenge =>
                    <ICMarker position={[challenge.lat, challenge.long]} icon={leafIcon}>
                        <ICPopup>
                            <Demo item={challenge}/>
                        </ICPopup>
                    </ICMarker>
                )}
                
            </ICMapContainer>  
        </>
        )
    }
}

export default Map

