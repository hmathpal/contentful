import React, { useRef, useEffect, useState } from 'react';
import { Alert, Container, Row, Col, Card, CardTitle, CardHeader, CardBody, CardImg , Button, Modal, ModalBody, ModalHeader} from "shards-react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "shards-react";

import mapboxgl from 'mapbox-gl';

 

mapboxgl.accessToken = 'pk.eyJ1IjoiaGl0ZXNoZGV2IiwiYSI6ImNrNmgwdHB4bTI0aHYzbnBzNGIwdG43eTMifQ.A-CLxYkVMOqQA4YE-J0Q1w';


const Map = () => 
{
  const mapContainer = useRef();
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(2);
   
  useEffect(() => {
  const map = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/hiteshdev/ckarasopf0xrq1imtoe8dtxz1',
  center: [lng, lat],
  zoom: zoom
  });
   
  map.on('move', () => {
  setLng(map.getCenter().lng.toFixed(4));
  setLat(map.getCenter().lat.toFixed(4));
  setZoom(map.getZoom().toFixed(2));
  });

  map.on('load', function () 
  {
    map.addSource('maine', {
    'type': 'geojson',
    'data': {
    'type': 'Feature',
    'geometry': {
    'type': 'Polygon',
    'coordinates': [
    [
    [-67.13734351262877, 45.137451890638886],
    [-66.96466, 44.8097],
    [-68.03252, 44.3252],
    [-69.06, 43.98],
    [-70.11617, 43.68405],
    [-70.64573401557249, 43.090083319667144],
    [-70.75102474636725, 43.08003225358635],
    [-70.79761105007827, 43.21973948828747],
    [-70.98176001655037, 43.36789581966826],
    [-70.94416541205806, 43.46633942318431],
    [-71.08482, 45.3052400000002],
    [-70.6600225491012, 45.46022288673396],
    [-70.30495378282376, 45.914794623389355],
    [-70.00014034695016, 46.69317088478567],
    [-69.23708614772835, 47.44777598732787],
    [-68.90478084987546, 47.184794623394396],
    [-68.23430497910454, 47.35462921812177],
    [-67.79035274928509, 47.066248887716995],
    [-67.79141211614706, 45.702585354182816],
    [-67.13734351262877, 45.137451890638886],
    ]
    


    ]
    }
    }
    });
    map.addLayer({
    'id': 'maine',
    'type': 'fill',
    'source': 'maine',
    'layout': {},
    'paint': {
    'fill-color': '#0343FB',
    'fill-opacity': 0.7
    }
    });
    });
   

    map.on('load', function () 
    {
      map.addSource('West Virginia', {
      'type': 'geojson',
      'data': {
      'type': 'Feature',
      'geometry': {
      'type': 'Polygon',
      'coordinates': [
        [
          [
            7.8662109375,
            55.1286490684888
          ],
          [
            5.8447265625,
            53.87844040332883
          ],
          [
            5.2294921875,
            50.958426723359935
          ],
          [
            6.15234375,
            48.63290858589535
          ],
          [
            7.6025390625,
            48.60385760823255
          ],
          [
            7.0751953125,
            47.368594345213374
          ],
          [
            10.107421874999998,
            46.800059446787316
          ],
          [
            14.1943359375,
            48.019324184801185
          ],
          [
            14.326171874999998,
            49.1242192485914
          ],
          [
            13.0078125,
            50.20503326494332
          ],
          [
            15.5126953125,
            50.90303283111257
          ],
          [
            15.1171875,
            52.96187505907603
          ],
          [
            14.589843749999998,
            54.521081495443596
          ],
          [
            13.53515625,
            55.05320258537112
          ],
          [
            7.8662109375,
            55.1286490684888
          ]
        ]
      ]
      }
      }
      });
      map.addLayer({
      'id': 'West Virginia',
      'type': 'fill',
      'source': 'West Virginia',
      'layout': {},
      'paint': {
      'fill-color': '#0343FB',
      'fill-opacity': 0.3
      }
      });
      });


  return () => map.remove();
  }, []);
   
  return (
  <div className="embed-responsive embed-responsive-16by9">
  <div className="sidebar">
  Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
  </div>
  <div className="map-container " ref={mapContainer} />
  </div>
  );
  };



class Mapbox extends React.Component
{
 
  
  constructor(props) {
    super(props);
   
   
  }
 
  


  render() 
  {
   
    
    return (
      <Container>
      <Row style={{ paddingTop: "30px" }}>
<Col>

<h5>Mapbox | Ancestry Map Example</h5>
<hr className="hr-2"></hr>

</Col>

 </Row>

 <Row style={{ paddingTop: "30px" }}>
 <Col sm="12" lg="10">

<Map></Map>

</Col>
<Col sm="12" lg="2">
<ul className="list-group">
<li className="list-group-item list-group-item-action active"><small>Ancestry</small></li>

  <li className="list-group-item d-flex justify-content-between align-items-center">
    <small>American</small>
    <span class="badge badge-primary badge-pill">70%</span>
  </li>
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <small>German</small>
    <span class="badge badge-primary badge-pill">20%</span>
  </li>
  
  <li className="list-group-item d-flex justify-content-between align-items-center">
    <small>Others</small>
    <span class="badge badge-primary badge-pill">10%</span>
  </li>
  </ul>

</Col>

 </Row>
         
  
       </Container>
    )       
    
    
    
    
    
  
    
    
    
    
    
  }
}

export default Mapbox;