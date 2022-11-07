import React, { useRef, useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Map from '../Components/Map/Map';
import ICTable from '../Components/ICTable/ICTable';
var server = 'http://localhost:5001'

const Discover = () => {


    const [items, setItems] = useState([]);
    const [challenges, setChallenges] = useState([]);
    var state;
    
  function handleCallback(childData) {
    // 👇️ take parameter passed from Child component
    var city;
    var country;
    if(childData["city"]==""){
       city="empty";
    }
    else{city=childData["city"]}
    if(childData["country"]==""){
      var country="empty";
    }
    else{country=childData["country"]}
    
    if(childData["type"]=="idea"){
      fetch(server+`/search/ideas/${city}/${country}`, { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            
            setItems(result);
            setChallenges([])
          }
        )
    }
    else{
      fetch(server+`/search/challenges/${city}/${country}`, { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setItems([])
            setChallenges(result);
          }
        )
    }
    
      
    
  };
   
    
    useEffect(() => {
      fetch(server+"/IdeasTrending", { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        ).then(
          fetch(server+`/ChallengesTrending`, { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setChallenges(result);
          }
        )
        )

    }, [])
    for (var i in challenges) {
      
      challenges[i]["type"]="challenge";
   }
    for (var i in items) {
      items[i]["type"]="idea";
  }

    return (
        <>
              <CssBaseline />
            <div className="row h-100">
            <div className="col-md-3 p-0 bg-light"><ICTable parentCallback = {handleCallback} ic={items} challenges={challenges}/> </div>
            <div className="col-md-9 p-0">
              <Map markers={items} challenges={challenges}/>
            </div>
          </div>
            
            
        </>
    );
};

export default Discover;