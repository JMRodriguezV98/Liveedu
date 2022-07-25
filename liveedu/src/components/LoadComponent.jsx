import React, { Component } from 'react';
import Logo from '../img/Logo.png';
import { DivLoadImage, LoadImage } from '../styles/StylesGeneral';
import { Link } from 'react-router-dom';

class LoadComponent extends Component {
  render() {
    return (
      <DivLoadImage>
        <Link to="/primero" style={_sizing.linkSizing}>
            <LoadImage src={Logo} alt="logo de aplicacion" />
        </Link>
      </DivLoadImage>
    )
  }
}

const _sizing = {
    linkSizing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default LoadComponent