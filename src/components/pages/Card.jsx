import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';

import Card from 'react-bootstrap/Card';
import logo from '../../img/pao-de-queijo.jpg'
import foto from '../../img/logo.jpg'

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function ImgOverlayExample() {
  const [open, setOpen] = useState(false)
  return (
    <>

      <Card className=" text-warning d-flex">
        <h3 className="home" id="home">Pão de queijo Carioca</h3>
        <Card.Img src={logo} id="logo" height="720" alt="logo image" roundedCircle />
        <h3 className="about" id="about">Sobre nós</h3>
        <Col xs={6} md={4} className='second' >
          <Image src={foto} roundedCircle />
        </Col>

        <div id="aboutme">
          <main className='aboutme'>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-fade-text"
              aria-expanded={open}
            >
              Clique para saber mais
            </Button>
            <Fade in={open}>
              <div className="example-fade-text">
                <p>A <strong>PÃO DE QUEIJO CARIOCA</strong> é uma empresa familiar, com capital 100% brasileiro e genuinamente carioca. Seu start inicial foi em 2019, na baixada fluminense. Seu produto mais vendido é o balde de 4kg, mas seus congelados não deixam a desejar, tendo uma boa saída também.</p>
                <p>Nosso grande diferencial é produzirmos um pão de queijo delicioso, sem glúten e nem lactose, sem açúcar, gordura trans, gordura saturada, estabilizantes, corantes ou conservantes. Um produto natural, adequado à grande maioria das dietas restritivas, cuja produção é supervisionada pelo nosso Gerente, mineiro e grande conhecedor do processo tradicional de fabricação deste tipo de produto.</p>
                <p><strong>Atendemos a todo estado do Rio de Janeiro.</strong></p>
              </div>
            </Fade>
            </main>
        </div>


      </Card >
    </>
  );
}

export default ImgOverlayExample;