import React from 'react';
import { DivLoadImagePage, PasoCorto } from '../styles/StylesGeneral';

const ImagePresentation = (props) => {
  return (
    <div>
      <DivLoadImagePage>
        <img src={props.srcImg} alt="imagen" />
        <div style={_styleP.ajusteEspaciado}>
          <h2 style={_styleP.ajusteStyle}>
            {props.title}
          </h2>
          <p style={_styleP.ajusteStyle}>
            {props.message}
          </p>
        </div>
        <div style={_styleP.ajustePasos}>
          <props.forma></props.forma>
          <props.forma2></props.forma2>
          <props.forma3></props.forma3>
        </div>
      </DivLoadImagePage>
    </div>
  )
}

const _styleP = {
  ajusteStyle: {
    width: '300px',
    marginLeft: '-60px'
  },
  ajustePasos: {
    display: 'flex',
    width: '60px',
    justifyContent: 'space-evenly',
    marginLeft: '-300px'
  },
  ajusteEspaciado: {
    marginTop: '150px',
  },
}

export default ImagePresentation;
