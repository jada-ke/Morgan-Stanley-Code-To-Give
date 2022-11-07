import React, { useRef, useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Map from '../Components/Map/Map';
import ICTable from '../Components/ICTable/ICTable';
var server = 'http://localhost:5001'

const Discover = () => {


    const [items, setItems] = useState([]);
    var state;
    
  function handleCallback(childData) {
    // 👇️ take parameter passed from Child component
    
    if(childData["city"]==""){
      childData["city"]="empty"
    }
    if(childData["country"]==""){
      childData["country"]="empty"
    }
    if(childData["postal_code"]==""){
      childData["postal_code"]="empty"
    }

    
      fetch(server+`/search/ideas/${childData["city"]}/${childData["country"]}/${childData["postal_code"]}`, { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            setItems(result);
          }
        )
    
  };
   
    
    useEffect(() => {
      fetch(server+"/IdeasTrending", { method: "GET" })
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
    }, [])

    return (
        <>
              <CssBaseline />
            <div className="row h-100">
            <div className="col-md-3 p-0 bg-light"><ICTable parentCallback = {handleCallback} ic={items}/> </div>
            <div className="col-md-9 p-0">
              <Map markers={items}/>
            </div>
          </div>
            
            
        </>
    );
};

export default Discover;