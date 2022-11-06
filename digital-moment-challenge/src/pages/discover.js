import React, { useRef, useState, useEffect} from 'react';

import Map from '../Components/Map/Map';




var server = 'http://localhost:5001'

const Discover = () => {


    const [items, setItems] = useState([]);
    
    
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
            
            <Map markers={items}/>
            
        </>
    );
};

export default Discover;