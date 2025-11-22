import sclogo from './assets/sclogo.png'
import "./styles/App.css"

function App() {

  return (
    <div className="index">

      <h1>SoundCraft V2</h1>
      
      <p className="frase">
      Donde otros escuchan ruido, nosotros enseñamos a crear experiencia.
      </p>
      <p className="frase">
      ---Página en desarrollo---
      </p>
      <div>
        <a href="https://www.instagram.com/soundcraft_py/" target="_blank">
          <img src={sclogo} className="logo Sound Craft" alt="SC logo" />
        </a>
      </div>
    </div>
  )
}

export default App
