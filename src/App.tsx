import GoogleFontLoader from 'react-google-font-loader';

import './App.css'
import Fontcard from './Components/fontcard'
function App() {
  return (
    <>
    <div>
    <GoogleFontLoader fonts={[{ font: 'Roboto Condensed', weights: [300, 400, 700] }]} />
    <GoogleFontLoader fonts={[{ font: 'Mohave', weights: [400, 700] }]} />
    </div>
      <section className='hero-section'>
          <div className='hero-text'>TYPEFACE</div>
        <div>
          <div className='hero-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat cursus dolor, at conguevelit mattis a.
          </div>
        </div>
        <div className='hero-box'>
          <div className='hero-box-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat cursus dolor, at conguevelit mattis a.</div>
        </div>
      </section>
      <div className='divider'></div>

      <section className='card-section'>
          <div className='card-holder'>
            
            <Fontcard name ="Roboto"/>
            <Fontcard name ="Inter"/>
            <Fontcard name ="Montserrat"/>
            <Fontcard name ="Leauge Gothic"/>
            <Fontcard name ="Comic Sans"/>
            <Fontcard name ="Space Mono"/>
            <Fontcard name ="Space Grotesk"/>
            <Fontcard name ="Syne"/>
            <Fontcard name ="Libre Franklin"/>
            <Fontcard name ="Eczar"/>
            <Fontcard name ="Alegreya Sans"/>
            <Fontcard name ="BioRhyme"/>
            <Fontcard name ="Spectral"/>
            <Fontcard name ="Spectral"/>
            <Fontcard name ="Spectral"/>
            
          </div>
      </section>

    </>
  )
}

export default App
