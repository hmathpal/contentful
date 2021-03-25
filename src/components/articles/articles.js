import React from "react";
import { Alert, Container, Row, Col, Button} from "shards-react";
import { appConfig } from "../config"
import { truncateString } from "../util"
import axios from 'axios';

import ReactTimeAgo from 'react-time-ago'

class Articles extends React.Component
{
  

  state = {
    articles: []
  }
 
  // Authenticate the request
 
  componentDidMount() 
  {
    const API = appConfig.graphQLHost+"/"+appConfig.space_id+"/"
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+appConfig.access_token
    }
    axios.post(API, 
      {
        query : `{
          articleCollection(limit: 10) {
            items
            {
              title
              body
              image {fileName url}
              sys {id publishedAt}
        
                
            }
          }
        }`

    }
    , {  headers : headers  })
      .then(res => {
        
        this.setState({ articles: res.data.data.articleCollection.items })
        console.log("RES --> ",res.data.data.articleCollection.items )
       
      }).catch((error) => {
        console.error(error)
      })
  }

 

  render() 
  {
   

    
    let columns=[];
    this.state.articles.forEach((item,idx) => {

      
        
        columns.push(
         
         <section>
          <Row  style={{ paddingTop: "20px" }}>
             
          <Col sm="12" lg="2">
           <img src={item.image.url} className="img-thumbnail img-fluid"></img>
          </Col>
          <Col sm="12" lg="10">
           <h5>{item.title}</h5>
           <p><small>Published  <ReactTimeAgo date={item.sys.publishedAt} locale="en-US"  /> </small></p>
           <p>{truncateString(item.body,250)}</p>
           <p className="text-right"> <Button className="btn btn-outline-primary btn-sm">Read more &rarr;</Button></p>
           
          </Col>
        
        </Row>
         <Row>
         <Col><hr></hr></Col>
       </Row>
       </section>
        )
       
        // force wrap to next row every 4 columns
       
    })


    return (
        <Container style={{ paddingTop: "10px" }}>
        {columns}
         
        </Container>
        
    )       
    
    
    
    
    
  }
}

export default Articles;