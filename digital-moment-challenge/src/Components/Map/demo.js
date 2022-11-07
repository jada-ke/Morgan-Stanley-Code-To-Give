import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate}  from 'react-router-dom';




export default function RecipeReviewCard({item}) {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  let dropzoneStyle = {
    backgroundColor: `#FFFFFF`,
  };
  if(item.type=="challenge"){
    dropzoneStyle = {
      backgroundColor: `#d4d4d4`,
    };
  }

  return (
    <Card sx={{ maxWidth: 560}} style={dropzoneStyle}>
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
        <IconButton aria-label="thumbup">
          
          <ThumbUpIcon />
        </IconButton>
        <IconButton aria-label="thumbdown">
          
          <ThumbDownIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton 
        onClick={() => { console.log("ouf"); navigate(`/icdetails/${item.id}/idea`)}}
        aria-label="next">
          <ArrowCircleRightIcon />
        </IconButton>
        
      </CardActions>

    </Card>
  );
}
