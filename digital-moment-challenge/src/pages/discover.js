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
            <h1>Discover page in construction</h1>
            <Map markers={items}/>
            <ICTable ic={items}/>
        </>
    );
};

export default Discover;