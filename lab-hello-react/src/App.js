import './App.css';
import CardInfo from './components/CardInfo';
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
      titulo: 'Declarative',
      paragrafo: 'xxx xgjl fsaj fsaoj  gg pojgoa go ',
    },
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png',
      alt: 'img2',
      titulo: 'Components',
      paragrafo: ' gfasf skapf kspaokfg paokgpoa apf kspaokfg  apf kspaokfg ',
    },
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png',
      alt: 'img3',
      titulo: 'Single-way',
      paragrafo:
        'fops fpak pgfoaks gfpakpgfo p fpak pgfoaks gfpfpak pgfoaks gfp fpak pgfoaks gfp',
    },
    {
      end: 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png',
      alt: 'img4',
      titulo: 'JSX',
      paragrafo:
        'pofpokojgf p  pso kpaofpa pa pk poetp powpoje oijefoi wjaojawoiefj oawjfoiajwojaw fpak pgfoaks gfp',
    },
  ];
  //----------------------------------------
  return (
    <div className="App">
      <img src={imagens1[0].end} alt={imagens1[1].alt} className="back" />
      <img src={imagens1[1].end} alt={imagens1[1].alt} className="back" />
      <SayHello />
      {imagens2.map((cartao) => (
        <CardInfo
          end={cartao.end}
          alt={cartao.alt}
          titulo={cartao.titulo}
          paragrafo={cartao.paragrafo}
        />
      ))}
      <CardInfo end={imagens2[0].end} alt={imagens2[0].alt} />
    </div>
  );
}

export default App;
