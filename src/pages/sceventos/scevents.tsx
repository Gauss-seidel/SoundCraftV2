import '../../styles/colors.css'
import '../../styles/App.css'
import '../../styles/EventStyles/scevents.css'
import BackgroundEvents from '../../components/EventComponents/BackGroundEvents';

export default function ScEvents() {
  return (
    <>
    <BackgroundEvents />
    <div className='sceventbody'>
      <h1>Página de ScEvent</h1>
      <p>Contenido exclusivo de ScEvent.</p>
    </div>
    </>
  );
}
