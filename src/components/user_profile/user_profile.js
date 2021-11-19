import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
  <Card style={{
    borderRadius: '10px',
    backgroundColor: '#48005B'}}
    >
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 style={{color: '#F5F500'}}>Laura Araújo</h5>
        <p 
            style={{
              backgroundColor: '#faf1fc',
              border: 'solid 3px', 
              borderRadius: '8px', 
              margin: '0px, 12px, 0px, 7px',
              padding: '10px',
              color: '#48005B',
              fontSize: '1rem'
              }}>Maquiadora</p>
      </Row>
  </Card>
);

export default UserProfile;