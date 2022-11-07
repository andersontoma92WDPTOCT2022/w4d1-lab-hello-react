import './App.css';
import SayHello from './components/SayHello';
//import CardInfo from './components/CardInfo';
//import Ironlogo from '../src/images/ironhack-logo-xs.png';

//
function App() {
  let imagens1 = [
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png',
      alt: 'logo1',
    },
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs.png',
      alt: 'logo2',
    },
  ];
  let imagens2 = [
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png',
      alt: 'img1',
    },
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png',
      alt: 'img2',
    },
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png',
      alt: 'img3',
    },
  ];
  //----------------------------------------
  return (
    <div className="App">
      <img src={imagens1[0].end} alt="imagem educação" className="back" />
      <img src={imagens1[1].end} alt="imagem educação" className="back" />
      <SayHello />
      {imagens2}.
    </div>
  );
}

export default App;
