import './Home.css'
import Fontcard from '../../Components/FontCard_Small/fontcard_small'
import Overlay from '../../Components/Vertical Overlay/vertical_overlay'
function App() {
  return (
    <>
    <div>
    {/* <GoogleFontLoader fonts={[{ font: 'Roboto Condensed', weights: [300, 400, 700] }]} />
    <GoogleFontLoader fonts={[{ font: 'Mohave', weights: [400, 700] }]} /> */}
    </div>
    <Overlay/>
      <section className='hero-section'>
          <div className='hero-text'>TYPEFACE</div>
          <div className='hero-description'>Typeface Matters:Elevate Your Message.Define Your Brand.Capture Attention with Style.</div>
        <div className='hero-box'>
          <div className='hero-box-description'>A good typeface enhances readability, conveys emotion, and strengthens brand identity while the tone, capturing attention & improving overall design.</div>
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
