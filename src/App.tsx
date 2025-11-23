import academialogo from './assets/scacademylogo.png'
import eventlogo from './assets/sceventlogo.png'
import "./styles/App.css"

function App() {

  return (
    <div className="index">
      <div className='titleContainer'>
      <h1 className='titleType' >SoundCraft V2</h1>
      </div>
      <p className="frase">
      Donde otros escuchan ruido, nosotros enseñamos a crear experiencia.
      </p>
      <p className="phrase">
      ---Página en desarrollo---
      </p>
      <div className='containerindex'>
        <a href="#" target="_blank">
          <img src={eventlogo} className="logoSoundCraftEvent" alt="SC Event" />
        </a>
        <a href="#" target="_blank">
          <img src={academialogo} className="logoSoundCraftAcademy" alt="SC Academy" />
        </a>
      </div>
    </div>
  )
}

export default App
