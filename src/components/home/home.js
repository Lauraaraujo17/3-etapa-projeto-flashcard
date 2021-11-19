import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import Slider from '../slider/Slider'

const Home = () => (
  <Row>
    <Col>
      <Slider />
    </Col>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 style={{color: '#48005B'}}>Um pouquinho sobre mim :)</h5>
        <Card style={{
            color: '#F5F500',
            backgroundColor: '#fffffff',
            border: 'solid 3px', 
            borderRadius: '8px', 
          }}>
          <div>
            <p style={{color: '#48005B'}}><b>Resumo</b></p>
            <p style={{color: '#280043'}}>"Atualmente trabalho na empresa superbom, na área administrativa de compras, fazendo cotações de produtos, lançamento de notas e atendendo ligações."</p>
            <br/>
            <p style={{color: '#48005B'}}><b>Detalhes</b></p>
            <p style={{color: '#280043'}}>"Nas horas vagas sou maquiadora, porém ainda não estou atuando profissionalmente. Realizo alguns serviços em algumas pessoas que deixei disponível na guia Galeria, tenho um perfil no Instagram que posto dicas de maquiagem e futuramente quero iniciar um empreendimento no mundo das maquiagens que é minha maior paixão"</p>
          </div>
        </Card>
    </Col>
  </Row>
);

export default Home;
