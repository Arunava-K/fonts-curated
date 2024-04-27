import './Home.css'
import Fontcard from '../../Components/FontCard_Small/fontcard_small'
import Overlay from '../../Components/Vertical Overlay/vertical_overlay'
import Footer from '../../Components/Footer_Section/footer'
import Hero from '../../Components/Hero_Section/hero'


function App() {
  return (
    <>
    <div>
    {/* <GoogleFontLoader fonts={[{ font: 'Roboto Condensed', weights: [300, 400, 700] }]} />
    <GoogleFontLoader fonts={[{ font: 'Mohave', weights: [400, 700] }]} /> */}
    </div>
    <Overlay/>
      {/* <section className='hero-section'>
          <div className='hero-text'>TYPEFACE</div>
          <div className='hero-description'>Typeface Matters:Elevate Your Message.Define Your Brand.Capture Attention with Style.</div>
        <div className='hero-box'>
          <div className='hero-box-description'>A good typeface enhances readability, conveys emotion, and strengthens brand identity while the tone, capturing attention & improving overall design.</div>
        </div>
      </section> */}

      <Hero/>

      <div className='divider'></div>

      <section className='card-section'>
          <div className='card-holder'>
          {/* <Link to={`/fonts/Roboto`}>
            <Fontcard name="Roboto" />
          </Link>
          <Link to={`/fonts/Inter`}>
            <Fontcard name="Inter" />
          </Link>
          <Link to={`/fonts/Montserrat`}>
            <Fontcard name="Montserrat" />
          </Link> */}
            <Fontcard name ="Montserrat"/>
            <Fontcard name ="Inter"/>
            <Fontcard name ="Roboto"/>
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

      <Footer></Footer>
    </>
  )
}

export default App
