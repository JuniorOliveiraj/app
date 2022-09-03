import videoBg from './assets/ElementsBackground.mp4'
import './App.css';
import './css/styleMenu.css'
import Tubar from './menu-home/Tubar';
import ListItensMenu from './menu-home/ListItensMenu';
import { ContainerHomeCenter } from './containr/container1'
import { containerMeiodoCenter } from './containr/container1'



function App() {




  return (
    <div id="pp" className="App">
      <Tubar />
      <ListItensMenu />
      <ContainerHomeCenter>
        <video className='videoBg' src={videoBg} autoPlay loop muted />
        <div className='containerText-videobg'> <h1>teste</h1></div>
      </ContainerHomeCenter>

    </div>
  );
}

export default App;