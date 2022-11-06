import React, {Component} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { ICMarker,ICPopup,ICMapContainer } from "./MapElements.js";
import { styles} from "./MapElements.js";
import '../../App.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export class Map extends Component {

    render (){
        var items = this.props.markers
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
            <ICMapContainer center={[51.507351,-0.127758]} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {items.map(item =>
                    <ICMarker position={[item.lat, item.long]}>
                        <ICPopup>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {item.userid.charAt(0)}
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="Title"
                                subheader={item.dateposted.split("T")[0]}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {item.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                
                                <ExpandMoreIcon />
                                
                            </CardActions>
                            
                            </Card>
                        </ICPopup>
                    </ICMarker>
                )}
                
            </ICMapContainer>  
        </>
        )
    }
}

export default Map


