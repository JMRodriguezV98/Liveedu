import React from 'react'
import ImagePresentation from '../components/ImagePresentation';
import { ButtonNext } from  '../styles/StylesGeneral';
import imagePrimera from '../img/Svg.png';
import imageSegunda from '../img/Svg2.png';
import imageTercera from '../img/Svg3.png';
import { PasoCorto, PasoLargo } from '../styles/StylesGeneral';

let contador = 0;

const FirstSection = () => {

  const [ presentacion, setPresentacion ] = React.useState( imagePrimera );
  const [ titulos, setTitulos ] = React.useState('Explore new courses');
  const [ message, setMessage] = React.useState( 'Study and watch all our new courses and there are many of them' );
  const [ sphereInfo, setSphereInfo ] = React.useState( PasoLargo );
  const [ circle, setCircle ] = React.useState( PasoCorto );
  const [ circleFinal, setCircleFinal ] = React.useState( PasoCorto );

  const handleClick = () => {
    switch ( contador ) {
      case 0:
        console.log(`Este es el primer caso ${contador}`);
        contador++;
        setPresentacion( imageSegunda );
        setTitulos( 'See your goals' );
        setMessage( 'Learn and learn new things every day and get rewards be on top' );
        setSphereInfo( PasoCorto );
        setCircle( PasoLargo );
      break;
    
      case 1:
        console.log(`Este es el segundo caso ${contador}`);
        contador++;
        setPresentacion( imageTercera );
        setTitulos( 'Move on to the next course' );
        setMessage( `Don't stop at one, start learning the next and make progress` );
        setSphereInfo( PasoCorto );
        setCircle( PasoCorto );
        setCircleFinal( PasoLargo );
      break;

      default:
        console.log(`Este es el caso que sobra ${contador}`);
        window.location.href = './Home';
      break;
    }
  }

  return (
    <div>
      <ImagePresentation srcImg={presentacion} title={titulos} message={message} forma={sphereInfo} forma2={circle} forma3={circleFinal}/>
      <ButtonNext onClick={handleClick}>Next</ButtonNext>
    </div>
  )
}

export default FirstSection;
