import styled from "styled-components";
import {MapContainer, Marker, Popup} from 'react-leaflet';


const styles = {
    mapDiv: {
        width: "90%",
        height: "90%",
    }
}

export const ICMapContainer = styled(MapContainer)`
    zIndex:1;
`

export const ICMarker = styled(Marker)`

`

export const ICPopup = styled(Popup)`

`
