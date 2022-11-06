import styled from "styled-components";
import {MapContainer, Marker, Popup} from 'react-leaflet';


const styles = {
    mapDiv: {
        width: "90%",
        height: "90%",
    }
}

export const ICMapContainer = styled(MapContainer)`
    z-index: 2;
`

export const ICMarker = styled(Marker)`

`

export const ICPopup = styled(Popup)`

`
