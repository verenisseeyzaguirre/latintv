import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setProducto } from '../actions';
import SelectSingleExample from '../componentes/SelectSingleExample';
import Input from '../Componentes/Input';
import TipoPublicidad from './TipoPublicidad';
import ContenedorFormulario from '../Componentes/ContenedorFormulario/ContenedorFormulario';
import { FlujoProceso } from '../componentes/FlujoProceso';
import { Boton } from '../componentes/Boton';
import BarraLateral from '../Componentes/BarraLateral/BarraLateral';

import '../assets/estilos/vistas/flujoFechaHora.scss';

const FlujoProducto = (props) => {
  const [datosFormulario, setDatosFormulario] = useState({
    marcaProducto: null,
    tipoDePublicidad: null,
    linkPublicidad: null,
    recargoEmpresa: null,
    costoPublicidad: null,
  });

  const handleChange = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
    console.log(datosFormulario);
  };

  const handleSelect = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      marcaProducto: e.value,
      recargoEmpresa: e.recargo,
    });
    console.log(e, 'holaaaaaaa');
  };

  const handleRadio = (e) => {
    setDatosFormulario({
      ...datosFormulario,
      tipoDePublicidad: e.target.value,
      costoPublicidad: e.target.dataset.costo,
    });
    console.log(datosFormulario);
  };

  const handleClick = () => {
    props.setProducto(datosFormulario);
  };

  return (
    <>
      <BarraLateral />
      <ContenedorFormulario>
        <FlujoProceso producto="check" />
        <div>
          <h3 className="marginTitulo">¡Empieza con la reserva!</h3>
          <p className="subtitulo2 marginText">Elige tu producto</p>
          <SelectSingleExample name="marcaProducto" onChange={handleSelect} />
          <p className="subtitulo2 marginText">Elige el tipo de publicidad</p>
          <TipoPublicidad onChange={handleRadio} />
          <p className="subtitulo2 marginText">
            Pega la url de tu spot publicitario.
          </p>
          <Input name="linkPublicidad" onChange={handleChange} />
        </div>
        <div className="contenedorBotones">
          <Boton namebutton="Atrás" estilo="back" link="/" />
          <Boton
            namebutton="Continuar"
            estilo="next"
            link="/reservaprograma"
            onClick={handleClick}
          />{' '}
        </div>
      </ContenedorFormulario>
    </>
  );
};

const mapDispatchToProps = {
  setProducto,
};

export default withRouter(connect(null, mapDispatchToProps)(FlujoProducto));
