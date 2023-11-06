import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import akira from "../imagenes/akira.png";
import { Modal, Button } from 'react-bootstrap';

function CuerpoPagina() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-0 bg-primary rounded">
      <div className="row">
        <h3 className="text-center bg-secondary rounded-top">AKIRA</h3>
        <div className="col-md-3">
          <img src={akira} alt="Akira" style={{ cursor: 'pointer' }} onClick={openModal} />
        </div>
        <div className="col-md-9">
          <p>Año 2019. Neo-Tokyo es una ciudad construida sobre las ruinas de la antigua capital japonesa destruida tras la Tercera Guerra Mundial. Japón es un país al borde del colapso que sufre continuas crisis políticas. En secreto, un equipo de científicos ha reanudado por orden del ejército un experimento para encontrar a individuos que puedan controlar el arma definitiva: una fuerza denominada "la energía absoluta". Pero los habitantes de Neo-Tokyo tienen otras cosas de las que preocuparse. Uno de ellos es Kaneda, un joven pandillero líder de una banda de motoristas. Durante una pelea, su mejor amigo, Tetsuo, sufre un extraño accidente y termina ingresado en unas instalaciones militares. Allí los científicos descubrirán que es el poseedor de la energía absoluta. Pero Tetsuo, que no se resigna a convertirse en un conejillo de indias, muy pronto se convertirá en la amenaza más grande que el mundo ha conocido.</p>
          <div className="row">
            <div className="col-md-6">
              <h6>Titulo original: </h6>
              <p>AKIRA [1988]</p>
            </div>
            <div className="col-md-6">
              <h6>Director: </h6>
              <p>Katsuhiro Otomo</p>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Y2Ptue29P_o"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CuerpoPagina;